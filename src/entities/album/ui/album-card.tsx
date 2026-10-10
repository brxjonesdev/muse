"use client"
import Image from "next/image";
import { Album } from "../../music/ui/types";
import { useRouter } from 'next/navigation'


interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const cover = album.LCover ?? album.SCover;
  const router = useRouter();
  

  return (
    <article
      onClick={() => {
        router.push(`album/${album.slug}`)
        
      }}
      className="group flex flex-col cursor-pointer gap-4 rounded-xl border bg-card p-3 transition-colors hover:bg-accent/50 sm:block sm:p-0"
    >
      {/* Cover */}
      <div className="relative aspect-square  shrink-0 overflow-hidden rounded-lg sm:w-full sm:rounded-t-xl sm:rounded-b-none">
        {cover ? (
          <Image
            src={cover}
            alt={`${album.name} by ${album.artist}`}
            fill
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 25vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">
            No cover
          </div>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1 sm:p-4">
        <h3 className="truncate font-semibold leading-tight">
          {album.name}
        </h3>

        <p className="mt-1 truncate text-sm text-muted-foreground">
          {album.artist}
        </p>

        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground">
          {album.releaseDate && (
            <span>{new Date(album.releaseDate).getFullYear()}</span>
          )}

          {album.genre && (
            <>
              <span>•</span>
              <span className="truncate">{album.genre}</span>
            </>
          )}

          {album.trackCount && (
            <>
              <span>•</span>
              <span>{album.trackCount} tracks</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
