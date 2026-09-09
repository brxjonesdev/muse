import searchMusic from "@/entities/music/api/search";
import MusicSearchbar from "@/features/search";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black p-4">
      <MusicSearchbar/>
    </div>
  );
}
