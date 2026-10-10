import { iTunesSearch, iTunesLookup } from "./client";
import { ITunesAlbum, ITunesSearchResponse } from "./types";
export const album = {
  search: async (query:string): Promise<ITunesSearchResponse<ITunesAlbum>> => {
    if (!query.trim()) {
      return Promise.resolve({
        resultCount: 0,
        results: [],
      });
    }
    return iTunesSearch<ITunesAlbum>(
      query,
      {
        media: "music",
        entity: "album",
        limit: 100,
      }
    )
  },
  getById: async (artistId: number): Promise<ITunesSearchResponse<ITunesAlbum>> => {
    "use cache";
    return iTunesLookup<ITunesAlbum>(artistId, {
      media: "music",
      entity: "album",
      attribute: "artistTerm",
      limit: 200,
    });
  },
  getArtistAlbums: async (artistId: number): Promise<ITunesSearchResponse<ITunesAlbum>> => {
    "use cache";
  return iTunesLookup<ITunesAlbum>(artistId, {
    entity: "album",
    limit: 200,
  });
  },
  getAlbumTracks: async (albumId:number): Promise<ITunesSearchResponse<ITunesAlbum>> => {
    "use cache";
    return iTunesLookup<ITunesAlbum>(albumId, {
      entity: "song",
      limit: 200,
    });
  },
}