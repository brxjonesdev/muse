"use cache"

import { MusicBrainzSearch } from "./client"

export default async function findMusicBrainzArtist(artistName: string) {
  const artistResult = await MusicBrainzSearch("artist", {
    query: `artist:"${artistName}"`,
    limit: "10",
  })

  // What do you want this function to return?
}