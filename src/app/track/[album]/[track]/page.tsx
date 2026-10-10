import { parseSlugId } from "@/shared/lib/utils";
import { db } from "@/shared/api/db";

interface TrackPageProps {
  params: Promise<{
    album: string,
    track: string
  }>
}
export const instant = false
export default async function TrackPage({ params }: TrackPageProps) {
  const { album: albumSlug, track: trackSlug } = await params;
  const { id: albumId } = parseSlugId(albumSlug);
  const { id: trackId } = parseSlugId(trackSlug);
  await db.tracks.ensure(trackId);

  
  return (
    <div>
      
    </div>
  );
}