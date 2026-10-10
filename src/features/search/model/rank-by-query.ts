import { SearchResult } from "./types";
import scoreMatch from "./score-match";

export default function rankByQuery<T>(
  results: T[],
  query: string,
  matchers: {
    name: (result: T) => string;
    artist?: (result: T) => string;
    album?: (result: T) => string;
  },
): SearchResult<T>[] {
  const rankedResults: SearchResult<T>[] = [];
  results.forEach((result) => {
    const score = scoreMatch({
      query: query,
      candidate: matchers.name(result),
    });
    rankedResults.push({ score, result });
  });
  return rankedResults.sort((a, b) => b.score - a.score);
}

