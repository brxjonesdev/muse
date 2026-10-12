import { ITunesAlbum } from "@/shared/api/itunes/types";
import { Database } from "@/shared/api/supabase/database.types";
import { Album } from "../types";
type DBAlbum = Database["public"]["Tables"]["albums"]["Row"];
import { slugify } from "@/shared/lib/utils";

export const mapDBAlbum = (db: DBAlbum): Album => ({
  title: db.title,
  slug: db.slug,
  artistID: db.artist_id,
  artistName: db.artist_name,
  type: db.type as Album["type"],
  largeCover: db.cover_l ?? undefined,
  smallCover: db.cover_m ?? undefined,
  genre: db.genre ?? undefined,
  releaseDate: db.release_date
    ? new Date(db.release_date)
    : undefined,
  trackCount: db.track_count ?? undefined,
  country: db.country ?? undefined,
  copyright: db.copyright ?? undefined,
  label: db.label ?? undefined,
  explicit: db.explicit ?? undefined,
  iTunesID: db.itunes_id,
  upc: db.upc ?? undefined,
});

export const mapITunesAlbum = (itApi: ITunesAlbum): Album => ({
  title: itApi.collectionName,
  slug: slugify(itApi.collectionName, itApi.collectionId),
  artistID: itApi.artistId,
  artistName: itApi.artistName,
  type: itApi.collectionType.toLowerCase() as Album["type"],
  largeCover: itApi.artworkUrl100,
  smallCover: itApi.artworkUrl60,
  genre: itApi.primaryGenreName,
  releaseDate: itApi.releaseDate,
  trackCount: itApi.trackCount,
  country: itApi.country,
  copyright: itApi.copyright,
  iTunesID: itApi.collectionId,
});

