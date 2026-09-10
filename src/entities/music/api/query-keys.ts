export const musicQueries = {
  all: ["music"] as const,

  search: (query: string) => [...musicQueries.all, "search", query] as const,
};
