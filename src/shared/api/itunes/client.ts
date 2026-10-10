import {
  ItunesSearchParams,
  ITunesSearchResponse,
} from "./types";

const ITUNES_BASE_URL = "https://itunes.apple.com";

type ITunesEndpoint = "search" | "lookup";

export async function iTunesRequest<T>(
  endpoint: ITunesEndpoint,
  params: Record<string, string | number> = {},
): Promise<ITunesSearchResponse<T>> {
  const searchParams = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        String(value),
      ]),
    ),
  );

  const response = await fetch(
    `${ITUNES_BASE_URL}/${endpoint}?${searchParams}`,
  );

  if (!response.ok) {
    throw new Error(`iTunes API error: ${response.status}`);
  }

  return response.json();
}

export function iTunesSearch<T>(
  term: string,
  params: ItunesSearchParams = {},
) {
  return iTunesRequest<T>("search", {
    term,
    ...params,
  });
}

export function iTunesLookup<T>(
  id: number,
  params: ItunesSearchParams = {},
) {
  return iTunesRequest<T>("lookup", {
    id,
    ...params,
  });
}