import { iTunesSearch, iTunesLookup } from "./client";
import { ITunesTrack, ITunesSearchResponse } from "./types";
export const track = {
  search: async (query: string): Promise<ITunesSearchResponse<ITunesTrack>> => {
    "use cache";
    if (!query.trim()) {
      return Promise.resolve({
        resultCount: 0,
        results: [],
      });
    }
    return iTunesSearch<ITunesTrack>(
      query,
      {
        media: "music",
        entity: "song",
        attribute: "songTerm",
        limit: 100,
      }
    )
  },
  getByID: async (trackID: number): Promise<ITunesSearchResponse<ITunesTrack>> => {
    "use cache";
    return iTunesLookup<ITunesTrack>(trackID, {
      entity: "musicTrack"
    })
  },
  getArtistTracks: async (artistId: number): Promise<ITunesSearchResponse<ITunesTrack>> => {
    "use cache";
    return iTunesLookup<ITunesTrack>(artistId, {
      entity: "song",
      limit: 10,
    });
  }
}

