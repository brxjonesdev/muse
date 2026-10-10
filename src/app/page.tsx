import findMusicBrainzArtist from "@/shared/api/musicbrainz/find-artist";
import findMusicBrainzRecording from "@/shared/api/musicbrainz/find-recording";
import findMusicBrainzRelease from "@/shared/api/musicbrainz/find-release";
import GlobalAppHeader from "@/widgets/global-header/ui/global-header";
import Image from "next/image";

export default async function Home() {
  // const rec = await findMusicBrainzRecording(
  //   "Red Velvet",
  //   "Perfect Velvet",
  //   "Bad Boy",
  // );
  
  // const rel = await findMusicBrainzRelease(
  //   "Red Velvet",
  //   "Perfect Velvet",
  // );
  
  return (
    <section className="flex-1 bg-blue-400">
    </section>
  );
}
