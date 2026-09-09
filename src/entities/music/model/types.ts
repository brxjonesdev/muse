export type MusicEntityType = "artist" | "album" | "track";

export type Artwork = {
  url: string;
  width?: number;
  height?: number;
};

export type ArtistSearchResult = {
  type: "artist";
  id: string;
  name: string;
  image?: Artwork;
};

export type AlbumSearchResult = {
  type: "album";
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  image?: Artwork;
  releaseDate?: string;
};

export type TrackSearchResult = {
  type: "track";
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  album?: string;
  albumId?: string;
  image?: Artwork;
};

export type CrateSearchResult = {
  type: "crate"
  id: string;
  title: string;
  ownerId: string;
  ownerUsername: string;
  ownerAvatarURL?: string;
  desc: string;  
}

export type MusicSearchResult =
  | ArtistSearchResult
  | AlbumSearchResult
  | TrackSearchResult;

export type MusicSearchResponse = {
  artists: ArtistSearchResult[]
  albums: AlbumSearchResult[];
  tracks: TrackSearchResult[];
};

