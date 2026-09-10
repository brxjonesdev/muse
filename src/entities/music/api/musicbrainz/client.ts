import { musicBrainzRateLimit } from "./rate-limiter";

const MUSICBRAINZ_URL = "https://musicbrainz.org/ws/2";

export async function musicBrainzFetch<T>(
  path: string,
  params: Record<string, string>,
): Promise<T> {
  await musicBrainzRateLimit();
  const searchParams = new URLSearchParams({
    ...params,
    fmt: "json",
  });

  const response = await fetch(
    `${MUSICBRAINZ_URL}/${path}?${searchParams}`,
    {
      headers: {
        "User-Agent": "Muse/0.1 (braxtonjonesttsl@gmail.com)",
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `MusicBrainz request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}