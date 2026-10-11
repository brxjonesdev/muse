import { itunes } from "@/shared/api/itunes";
import { createClient } from "@/shared/api/supabase/server";
import { mapITunesTrack } from "./mappers";
import { db } from "@/shared/api/db";
import { Database } from "@/shared/api/supabase/database.types";

type TrackRow = Database["public"]["Tables"]["tracks"]['Insert']
export const tracks = {
  search: async (q: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("tracks")
      .select("*")
      .ilike("title", `%${q}%`);

    if (error) {
      throw error;
    }

    return data;
  },
  ensure: async (trackId: number) => {
    const supabase = await createClient();

    const { data: existingTrack, error: lookupError } = await supabase
      .from("tracks")
      .select("*")
      .eq("itunes_id", trackId)
      .maybeSingle();

    if (lookupError) {
      console.log(lookupError)
      throw lookupError;
    }

    if (existingTrack) {
      console.log("cached track")
      return existingTrack;
    }

    const trackResponse = await itunes.track.getByID(trackId);
    const itunesTrack = trackResponse.results[0];

    if (!itunesTrack) {
      throw new Error(`Track not found: ${trackId}`);
    }

    const track = mapITunesTrack(itunesTrack);
    const trackToInsert: TrackRow = {
      album_id: track.albumID,
      artist_id: track.artistID,
      album_name: track.albumName,
      artist_name: track.artistName,
      album_type: "album",
      title: track.title,
      slug: track.slug,
      itunes_id: track.iTunesID ?? null,
      itunes_url: track.iTunesUrl as string,
      artwork_url: track.artworkUrl ?? null,
      country: track.country ?? null,
      duration_ms: track.durationMs ?? null,
      explicit: track.explicit,
      genre: track.genre ?? null,
      isrc: track.isrc ?? null,
      mbid:  null,
      preview_url: track.previewUrl ?? null,
      release_date: track.releaseDate ?? null,
      track_number: track.trackNumber ?? null,
    };
    await db.albums.ensure(track.albumID, track.artistID);
    const { data: insertedTrack, error: insertError } = await supabase
      .from("tracks")
      .insert(trackToInsert)
      .select("*")
      .maybeSingle();


    if (insertError) {
      console.log(insertError, "insert prob")
      throw insertError;
    }
  
    return insertedTrack;
  }
};

