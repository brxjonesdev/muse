import { Artist } from "@/entities/artist"
import { Album } from "@/entities/album"
import { Track } from "@/entities/track"
import { SearchIntent, SearchResult } from "./types"

export const determineSearchIntent = ({
  artists,
  albums,
  tracks,
}: {
  artists: SearchResult<Artist>[];
  albums: SearchResult<Album>[];
  tracks: SearchResult<Track>[];
}): SearchIntent => {
  const artistScore = artists[0]?.score ?? 0;
  const albumScore = albums[0]?.score ?? 0;
  const trackScore = tracks[0]?.score ?? 0;

  const maxScore = Math.max(
    artistScore,
    albumScore,
    trackScore
  );

  if (maxScore === 0) {
    return "none";
  }

  if (artistScore === maxScore) {
    console.log(artists[0].result.slug)
    return "artist";
  }

  if (albumScore === maxScore) {
    return "album";
  }

  return "track";
};