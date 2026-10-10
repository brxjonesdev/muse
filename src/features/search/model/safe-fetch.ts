export async function safeFetch<T>(
  fetcher: () => Promise<{ results: T[] }>,
): Promise<T[]> {
  try {
    const response = await fetcher();
    return response.results;
  } catch (error) {
    console.error("Failed to fetch iTunes results:", error);
    return [];
  }
}