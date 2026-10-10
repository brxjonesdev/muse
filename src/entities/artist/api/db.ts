import { itunes } from "@/shared/api/itunes";
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
      throw error;
    }

    return data;
  },
  ensure: async (itunesID: number) => {
    const supabase = await createClient();
    console.log(itunesID);

    const { data: existingArtist, error: lookupError } = await supabase
      .from("artists")
      .select("*")
      .eq("itunes_id", itunesID)
      .maybeSingle();

    if (lookupError) {
      throw lookupError;
    }

    if (existingArtist) {
      console.log("cached artist");
      return existingArtist;
    }

    const artistResponse = await itunes.artist.getById(itunesID);

    console.log(artistResponse);
    const itunesArtist = artistResponse.results[0];

    if (!itunesArtist) {
      throw new Error("Artist not found");
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

    if (insertError) throw insertError;

    return newArtist;
  },
};
