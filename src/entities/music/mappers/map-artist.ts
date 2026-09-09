import { MBArtistSearchResult } from "../api/musicbrainz/types";
import { ArtistSearchResult } from "../model/types";

export function normalizeArtist(
  musicBrainzResult: MBArtistSearchResult,
): ArtistSearchResult {
  return {
    type: "artist",
    id: musicBrainzResult.id,
    name: musicBrainzResult.name,
  };
}