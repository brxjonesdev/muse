import { musicBrainzFetch } from "./client";
import { RecordingSearchResponse } from "./types";

export function searchMusicBrainzRecordings(
  query: string,
): Promise<RecordingSearchResponse> {
  return musicBrainzFetch<RecordingSearchResponse>("recording", {
    query,
    limit: '1'
  });
}