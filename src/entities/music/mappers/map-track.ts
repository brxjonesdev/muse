import { MBRecordingSearchResult } from "../api/musicbrainz/types";
import { TrackSearchResult } from "../model/types";

export function normalizeTrack(musicBrainzResult: MBRecordingSearchResult): TrackSearchResult{
  return {
    type: "track",
    id: musicBrainzResult.id,
    title: musicBrainzResult.title,
    artist: musicBrainzResult["artist-credit"]?.[0].name ?? "",
  }
}