import { itunes } from "@/shared/api/itunes";
import { createClient } from "@/shared/api/supabase/server";
import { mapITunesAlbum } from "./mappers";
import { db } from "@/shared/api/db";
import { Database } from "@/shared/api/supabase/database.types";

type AlbumRow = Database["public"]["Tables"]["albums"]['Insert']

export const albums = {
  search: async (q: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("albums")
      .select("*")
      .ilike("title", `%${q}%`);

    if (error) throw error;

    return data;
  },

  ensure: async (albumID: number, artistID: number) => {
    const supabase = await createClient();
    
    const { data: existingAlbum, error: lookupError } = await supabase
      .from("albums")
      .select("*")
      .eq("itunes_id", albumID)
      .maybeSingle();

    if (lookupError) {
      console.log(lookupError)
    };

    if (existingAlbum) {
      console.log("cached album")
      return existingAlbum;
    }

    const albumResponse = await itunes.album.getById(albumID);
    const itunesAlbum = albumResponse.results[0];

    if (!itunesAlbum) {
      throw new Error(`Album ${albumID} was not found on iTunes.`);
    }
    const album = mapITunesAlbum(itunesAlbum);
    const albumToInsert: AlbumRow = {
      title: album.title,
      artist_name: album.artistName,
      slug: album.slug,
      artist_id: artistID,
      itunes_id: album.iTunesID,
      type: album.type ?? null,
      cover_l: album.largeCover ?? null,
      cover_m: album.smallCover ?? null,
      genre: album.genre ?? null,
      release_date:
        album.releaseDate instanceof Date
          ? album.releaseDate.toISOString()
          : album.releaseDate ?? null,
      track_count: album.trackCount ?? null,
      copyright: album.copyright ?? null,
      country: album.country ?? null,
      label: album.label ?? null,
    };

    await db.artists.ensure(artistID);
    const { data: newAlbum, error: insertError } = await supabase
      .from("albums")
      .insert(albumToInsert)
      .select()
      .single();

    if (insertError) {
      console.log(insertError);
    }
    
    return newAlbum;
  },
};