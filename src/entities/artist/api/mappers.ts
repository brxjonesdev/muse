import { ITunesArtist } from "@/shared/api/itunes/types";
import { Database } from "@/shared/api/supabase/database.types";
import { slugify } from "@/shared/lib/utils";
import { Artist } from "@/entities/artist";
type DBArtist = Database["public"]["Tables"]["artists"]["Row"];

export const mapDBArtist = (db: DBArtist): Artist => ({
  id: db.id,
  name: db.name,
  slug: db.slug,
  iTunesID: db.itunes_id,
  genre: db.genre ?? undefined,
  imageURL: db.image_url ?? undefined,
});

export const mapITunesArtist = (itApi: ITunesArtist): Artist => ({
  id: "",
  name: itApi.artistName,
  slug: slugify(itApi.artistName, itApi.artistId),
  iTunesID: itApi.artistId,
  genre: itApi.primaryGenreName,
});