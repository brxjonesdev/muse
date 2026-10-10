"use cache";

import { MusicBrainzSearch } from "./client";

export default async function findMusicBrainzRecording(
  artistName: string,
  albumName: string,
  trackName: string,
) {
  const result = await MusicBrainzSearch("recording", {
    query: `recording:"${trackName}" AND artist:"${artistName}"`,
  });

  // solve the mutiple versions problem
  // some recordings are on mutiple albums (singles are relasesed on albums duh)

  return result;
}
