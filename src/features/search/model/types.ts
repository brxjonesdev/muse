export type SearchResult<T> = {
  score: number;
  result: T;
};

export type SearchIntent = "artist" | "album" | "track" | "none";