import { musicBrainzFetch } from "./client";
import { ReleaseGroupSearchResponse} from "./types";

export function searchMusicBrainzReleaseGroups(
  query: string,
): Promise<ReleaseGroupSearchResponse> {
  return musicBrainzFetch<ReleaseGroupSearchResponse>("release-group", {
    query,
    limit: '10'
  });
  
}