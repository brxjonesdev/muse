export interface MusicBrainzSearchParams {
  query: string;
  limit?: number;
  offset?: number;
}

// Shared fields
export interface MusicBrainzSearchResult {
  id: string;
  score: number;
}

// Artist

export interface MBArtistSearchResult extends MusicBrainzSearchResult {
  name: string;
  "sort-name": string;
  disambiguation?: string;
  country?: string;
  type?: string;
  gender?: string;
  area?: {
    id: string;
    name: string;
    "sort-name": string;
  };
}

// Recording

export interface MBRecordingSearchResult extends MusicBrainzSearchResult {
  title: string;
  disambiguation?: string;
  length?: number;
  video?: boolean;
  "artist-credit"?: ArtistCredit[];
}

// Release Group

export interface MBReleaseGroupSearchResult
  extends MusicBrainzSearchResult {
  title: string;
  disambiguation?: string;
  "primary-type"?: string;
  "secondary-types"?: string[];
  "first-release-date"?: string;
  "artist-credit"?: ArtistCredit[];
}

// Shared nested types

export interface ArtistCredit {
  name: string;
  artist: {
    id: string;
    name: string;
    "sort-name": string;
  };
  joinphrase?: string;
}

// Responses

export interface ArtistSearchResponse {
  created: string;
  count: number;
  offset: number;
  artists: MBArtistSearchResult[];
}

export interface RecordingSearchResponse {
  created: string;
  count: number;
  offset: number;
  recordings: MBRecordingSearchResult[];
}

export interface ReleaseGroupSearchResponse {
  created: string;
  count: number;
  offset: number;
  "release-groups": MBReleaseGroupSearchResult[];
}