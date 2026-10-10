"use cache";

import { MusicBrainzSearch } from "./client";

export default async function findMusicBrainzRelease(
  artistName: string,
  albumName: string,
) {
  const result = await MusicBrainzSearch("release", {
    query: `artist:"${artistName}" AND release:"${albumName}"`,
  });

  console.log(result, "release");

// resolve the "versions" issue

  return result;
}