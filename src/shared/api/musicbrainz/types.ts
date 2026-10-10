export interface MBSearchResponse {
  created: string;
  count: number;
  offset: number;
  "release-groups": MBReleaseGroup[];
}

export interface MBReleaseGroup {
  id: string;
  title: string;
  "primary-type"?: string;
  "secondary-types"?: string[];
  "first-release-date"?: string;
  "artist-credit"?: MBArtistCredit[];
}

export interface MBArtistCredit {
  name: string;
  artist: MBArtist;
}

export interface MBArtist {
  id: string;
  name: string;
  "sort-name"?: string;
  disambiguation?: string;
}

export interface MBRecording {
  id: string;
  title: string;
  length?: number;
  relations?: MBRelation[];
}

export interface MBRelation {
  type: string;
  "target-type"?: string;
  artist?: MBArtist;
  attributes?: string[];
}