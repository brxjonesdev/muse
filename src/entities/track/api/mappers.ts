import { ITunesTrack } from "@/shared/api/itunes/types";
import { Database } from "@/shared/api/supabase/database.types";
import { Track } from "../types";
import { slugify } from "@/shared/lib/utils";
import { it } from "node:test";

type DBTrack = Database["public"]["Tables"]["tracks"]["Row"];

export const mapDBTrack = (db: DBTrack): Track => ({
  id: db.id,
  title: db.title,
  slug: db.slug,
  albumID: db.album_id,
  albumName: db.album_name,
  artistName: db.artist_name,
  artistID: db.artist_id,
  trackNumber: db.track_number ?? undefined,
  durationMs: db.duration_ms ?? undefined,
  explicit: db.explicit ?? false,
  isrc: db.isrc ?? undefined,
  country: db.country ?? undefined,
  iTunesID: db.itunes_id,
  previewUrl: db.preview_url ?? undefined,
  artworkUrl: db.artwork_url ?? undefined,
  releaseDate: db.release_date ?? undefined,
  genre: db.genre ?? undefined,
  iTunesUrl: db.itunes_url ?? undefined,
});

export const mapITunesTrack = (itApi: ITunesTrack): Track => ({
  id: "",
  title: itApi.trackName,
  slug: slugify(itApi.trackName, itApi.trackId),
  albumID: itApi.collectionId,
  albumName: itApi.collectionName,
  artistID: itApi.artistId,
  artistName: itApi.artistName,
  trackNumber: itApi.trackNumber,
  durationMs: itApi.trackTimeMillis,
  explicit: itApi.trackExplicitness === "explicit",
  isrc: undefined,
  country: itApi.country,
  iTunesID: itApi.trackId,
  previewUrl: itApi.previewUrl,
  artworkUrl: itApi.artworkUrl100,
  releaseDate: itApi.releaseDate,
  genre: itApi.primaryGenreName,
  iTunesUrl: itApi.trackViewUrl,
});