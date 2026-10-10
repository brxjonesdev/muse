import { parseSlugId } from "@/shared/lib/utils";
import { db } from "@/shared/api/db";
export const instant = false

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const { artist: artistSlug } = await params;
  console.log(artistSlug, "slug")
  const { id: artistId } = parseSlugId(artistSlug);
  console.log(artistId, "pahe")
  await db.artists.ensure(artistId)
  // const {artist, albums} = await getArtistData(artistId);

  return (
    <main>
      
    </main>
  );
}