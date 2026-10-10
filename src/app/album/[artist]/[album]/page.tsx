import { parseSlugId } from "@/shared/lib/utils";
import { db } from "@/shared/api/db";

interface AlbumPageProps {
  params: Promise<{
    artist: string,
    album: string
  }>
}
export const instant = false
export default async function AlbumPage({ params }: AlbumPageProps) {
  const { artist: artistSlug, album: albumSlug } = await params;
  const { id: artistId } = parseSlugId(artistSlug);
  const { id: albumId } = parseSlugId(albumSlug);
  await db.albums.ensure(albumId, artistId);

  return (
    <div>
      
    </div>
  );
}