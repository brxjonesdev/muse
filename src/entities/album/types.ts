export interface Album {
  title: string;
  slug: string;
  artistID: number;
  type?: "album" | "single" | "ep";
  largeCover?: string;
  smallCover?: string;
  genre?: string;
  releaseDate?: Date;
  trackCount?: number;
  country?: string;
  copyright?: string;
  label?: string;
  explicit?: boolean;
  iTunesID: number;
  upc?: string;
}