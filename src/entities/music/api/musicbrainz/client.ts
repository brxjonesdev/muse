const MUSICBRAINZ_URL = "https://musicbrainz.org/ws/2";

export async function musicBrainzFetch<T>(
  path: string,
  params: Record<string, string>,
): Promise<T> {
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
    console.error(response);
    throw new Error("MusicBrainz request failed");
  }

  return response.json();
}