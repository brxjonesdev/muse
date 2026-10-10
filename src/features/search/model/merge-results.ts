import { Album } from "@/entities/album";
import { Artist } from "@/entities/artist";
import { Track } from "@/entities/track";



export default function mergeResults({
  existingResults,
  incomingResults,
}: {
  existingResults: (Album | Artist | Track)[];
  incomingResults: (Album | Artist | Track)[];
}) {
  const results = [...existingResults];

  incomingResults.forEach((result) => {
    const match = results.find(
      (item) => item.iTunesID === result.iTunesID
    );

    if (match) {
      Object.assign(match, result);
    } else {
      results.push(result);
    }
  });

  return results;
}