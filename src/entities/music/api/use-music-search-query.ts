import { keepPreviousData, useQuery } from "@tanstack/react-query";

import searchMusic  from "./search";
import { musicQueries } from "./query-keys";

export function useMusicSearchQuery(query: string) {
  return useQuery({
    queryKey: musicQueries.search(query),
    queryFn: () => searchMusic(query),
    enabled: query.length >= 2,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    placeholderData: keepPreviousData
    
  });
}
