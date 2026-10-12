
import { itunes } from "@/shared/api/itunes";
import { createAdminClient } from "@/shared/api/supabase/admin";
import { createClient } from "@/shared/api/supabase/server";
import { mapITunesArtist } from "./mappers";
import { normalizeText } from "@/shared/lib/utils";

export const artists = {
  search: async (q: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("artists")
      .select("*")
      .ilike("normalized_name", `%${q}%`);

    if (error) {
      console.error("[artists.search] Supabase error:", error);
      throw error;
    }

    return data;
  },

  ensure: async (itunesID: number) => {
    const supabase = createAdminClient();

    const { data: existingArtist, error: lookupError } = await supabase
      .from("artists")
      .select("*")
      .eq("itunes_id", itunesID)
      .maybeSingle();

    if (lookupError) {
      console.error("[artists.ensure] Initial lookup error:", lookupError);
      throw lookupError;
    }

    if (existingArtist) {
      console.log("[artists.ensure] Cached artist:", itunesID);
      return existingArtist;
    }

    const artistResponse = await itunes.artist.getById(itunesID);
    const itunesArtist = artistResponse.results[0];

    if (!itunesArtist) {
      throw new Error(`Artist ${itunesID} not found on iTunes.`);
    }

    const artist = mapITunesArtist(itunesArtist);

    const artistToInsert = {
      name: artist.name,
      slug: artist.slug,
      itunes_id: artist.iTunesID,
      image_url: artist.imageURL,
      genre: artist.genre,
      normalized_name: normalizeText(artist.name),
    };

    const { data: newArtist, error: insertError } = await supabase
      .from("artists")
      .insert(artistToInsert)
      .select("*")
      .single();

    if (insertError) {
      console.error("[artists.ensure] Insert error:", insertError);

      // A concurrent request may have inserted this artist first.
      if (insertError.code === "23505") {
        const {
          data: existingArtist,
          error: recoveryLookupError,
        } = await supabase
          .from("artists")
          .select("*")
          .eq("itunes_id", itunesID)
          .maybeSingle();

        if (recoveryLookupError) {
          console.error(
            "[artists.ensure] Duplicate-conflict recovery lookup error:",
            recoveryLookupError,
          );
          throw recoveryLookupError;
        }

        if (existingArtist) {
          console.log(
            "[artists.ensure] Recovered concurrently inserted artist:",
            itunesID,
          );
          return existingArtist;
        }
      }

      throw insertError;
    }

    return newArtist;
  },
};
