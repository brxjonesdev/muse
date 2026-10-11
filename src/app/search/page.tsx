import { Suspense } from "react";
import Link from "next/link";
import search from "@/features/search/api/search";
import EmptyQuery from "./components/empty-query";
export const instant = false
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  if (!q) {
    return <div>Search for something</div>;
  }

  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchResults query={q} />
    </Suspense>
  );
}


async function SearchResults({ query }: { query: string }) {
  const { albums, tracks, artists, lead } = await search(query);
  console.log("albums", albums);
  console.log("tracks", tracks);
  console.log("artists", artists);

  if (
    lead === "none" &&
    artists.length === 0 &&
    albums.length === 0 &&
    tracks.length === 0
  ) {
    return <EmptyQuery />;
  }

  return (
    <main className="container mx-auto flex flex-1 flex-col gap-6 p-4 pt-2">
      {artists.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Artists</h2>
          <div className="flex flex-col gap-2">
            {artists.map((artist) => (
              <Link
                key={artist.iTunesID}
                href={`/artist/${artist.slug}`}
                className="block rounded-lg border p-3 transition-colors hover:bg-accent"
              >
                <div>{artist.name}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {albums.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Albums</h2>
          <div className="flex flex-col gap-2">
            {albums.map((album) => (
              <Link
                key={album.iTunesID}
                href={`/album/${album.artistID}/${album.slug}`}
                className="block rounded-lg border p-3 transition-colors hover:bg-accent"
              >
                <div>{album.title}</div>
                <div>{album.artistID}</div>
                <div>{album.artistName}</div>
                
              </Link>
            ))}
          </div>
        </section>
      )}

      {tracks.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Tracks</h2>
          <div className="flex flex-col gap-2">
            {tracks.map((track) => (
              <Link
                key={track.iTunesID}
                href={`/track/${track.albumID}/${track.slug}`}
                className="block rounded-lg border p-3 transition-colors hover:bg-accent"
              >
                <div>{track.title}</div>
                <div>{track.artistID}</div>
                <div>{track.artistName}</div>
                <div>{track.albumName}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
function SearchLoading() {
  return (
    <main className="container mx-auto flex flex-1 p-4 pt-2">
      <p>Searching...</p>
    </main>
  );
}