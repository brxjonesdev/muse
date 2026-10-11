export interface Track {
  id: string;
  title: string;
  slug: string;
  albumID: number;
  albumName: string;
  artistID: number;
  artistName: string;
  trackNumber?: number;
  durationMs?: number;
  explicit: boolean;
  isrc?: string;
  country?: string;
  iTunesID: number | null;
  previewUrl?: string;
  artworkUrl?: string;
  releaseDate?: string;
  genre?: string;
  iTunesUrl?: string;
}