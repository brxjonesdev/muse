import { MusicSearchResponse } from "./model/types";
export type MockMusicDataOptions = {
  artists?: number;
  albums?: number;
  tracks?: number;
};

export function generateMockMusicData(
  options: MockMusicDataOptions = {},
): MusicSearchResponse {
  const {
    artists = 10,
    albums = 10,
    tracks = 10,
  } = options;

  return {
    artists: Array.from({ length: artists }, (_, i) => ({
      type: "artist",
      id: `artist-${i + 1}`,
      name: `Artist ${i + 1}`,
      image: {
        url: `https://picsum.photos/seed/artist-${i + 1}/300/300`,
        width: 300,
        height: 300,
      },
    })),

    albums: Array.from({ length: albums }, (_, i) => ({
      type: "album",
      id: `album-${i + 1}`,
      title: `Album ${i + 1}`,
      artist: `Artist ${(i % Math.max(artists, 1)) + 1}`,
      artistId: `artist-${(i % Math.max(artists, 1)) + 1}`,
      image: {
        url: `https://picsum.photos/seed/album-${i + 1}/300/300`,
        width: 300,
        height: 300,
      },
      releaseDate: `202${i % 6}-0${(i % 9) + 1}-15`,
    })),

    tracks: Array.from({ length: tracks }, (_, i) => ({
      type: "track",
      id: `track-${i + 1}`,
      title: `Track ${i + 1}`,
      artist: `Artist ${(i % Math.max(artists, 1)) + 1}`,
      artistId: `artist-${(i % Math.max(artists, 1)) + 1}`,
      album: `Album ${(i % Math.max(albums, 1)) + 1}`,
      albumId: `album-${(i % Math.max(albums, 1)) + 1}`,
      image: {
        url: `https://picsum.photos/seed/track-${i + 1}/300/300`,
        width: 300,
        height: 300,
      },
    })),
  };
}