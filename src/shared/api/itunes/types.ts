export interface ItunesSearchParams {
  country?: string;
  media?: string;
  entity?: string;
  attribute?: string;
  callback?: string;
  limit?: number;
  lang?: string;
  version?: number;
  explicit?: "Yes" | "No";
}

export interface ITunesSearchResponse<T> {
  resultCount: number;
  results: T[];
}

export interface ITunesArtist {
  artistId: number;
  artistName: string;
  artistLinkUrl?: string;
  primaryGenreName?: string;
}



export interface ITunesAlbum {
  collectionId: number;
  collectionName: string;
  collectionType: "Album" | "EP" | "Single";
  wrapperType?: "artist" | "collection"
  artistId: number;
  artistName: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  trackCount?: number;
  releaseDate: Date;
  primaryGenreName?: string;
  copyright?: string;
  country?: string;
}

export type ITunesTrack = {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  artworkUrl30: string;
  artworkUrl60: string;
  collectionCensoredName: string;
  collectionExplicitness: "notExplicit" | "explicit";
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: "song";
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: "notExplicit" | "explicit";
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: "track";
};