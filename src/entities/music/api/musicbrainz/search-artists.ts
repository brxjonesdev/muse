import { musicBrainzFetch } from "./client";
import { ArtistSearchResponse } from "./types";

export function searchMusicBrainzArtists(query: string): Promise<ArtistSearchResponse> {
  return musicBrainzFetch("artist", {
    query,
    limit: "10",
  })
}