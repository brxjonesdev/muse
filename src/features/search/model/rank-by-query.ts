import { SearchResult } from "./types";
import scoreMatch from "./score-match";

export default function rankByQuery<T>(
  results: T[],
  query: string,
  getSearchableText: (result: T) => string,
): SearchResult<T>[] {
  const rankedResults: SearchResult<T>[] = [];
  results.forEach((result) => {
    const score = scoreMatch({
      query: query,
      candidate: getSearchableText(result),
    });
    rankedResults.push({ score, result });
  });
  return rankedResults.sort((a, b) => b.score - a.score);
}

