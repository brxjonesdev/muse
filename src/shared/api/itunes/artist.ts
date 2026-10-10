import { iTunesSearch, iTunesLookup} from "./client";
import { ITunesArtist, ITunesSearchResponse } from "./types";
export const artist = {
  search: async (query: string): Promise<ITunesSearchResponse<ITunesArtist>> => {
    if (!query.trim()) {
      return Promise.resolve({
        resultCount: 0,
        results: [],
      });
    }
  
    return iTunesSearch<ITunesArtist>(query, {
      media: "music",
      entity: "musicArtist",
      attribute: "artistTerm",
      limit: 5,
    });
  },
  getById: async (artistID: number): Promise<ITunesSearchResponse<ITunesArtist>> => {
    "use cache";
    return iTunesLookup<ITunesArtist>(artistID, {
      entity: "musicArtist"
    })
  },
} 