import { MBReleaseGroupSearchResult } from "../api/musicbrainz/types";
import { AlbumSearchResult } from "../model/types";

export function normalizeAlbum(musicBrainzResult: MBReleaseGroupSearchResult): AlbumSearchResult {
  return {
    type: "album",
    id: musicBrainzResult.id,
    title: musicBrainzResult.title,
    artist: musicBrainzResult["artist-credit"]?.[0]?.name ?? "",
  }
  
}