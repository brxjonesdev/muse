import { musicBrainzRateLimit } from "./lib/rate-limiter";

const MUSICBRAINZ_URL = "https://musicbrainz.org/ws/2";
const USER_AGENT = "Muse/0.1 (braxtonjonesttsl@gmail.com)";

const inFlight = new Map<string, Promise<unknown>>();

export class MusicBrainzError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "MusicBrainzError";
  }
}

export async function MusicBrainzSearch<T>(
  path: string,
  params: Record<string, string>,
): Promise<T> {
  const searchParams = new URLSearchParams({
    ...params,
    fmt: "json",
  });

  const url = `${MUSICBRAINZ_URL}/${path}?${searchParams}`;

  const existing = inFlight.get(url);

  if (existing) {
    return existing as Promise<T>;
  }

  const request = async (): Promise<T> => {
    await musicBrainzRateLimit();

    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new MusicBrainzError(
        response.status,
        `MusicBrainz request failed: ${response.status}`,
      );
    }

    return response.json() as Promise<T>;
  };

  const promise = request();

  inFlight.set(url, promise);

  try {
    return await promise;
  } finally {
    inFlight.delete(url);
  }
}