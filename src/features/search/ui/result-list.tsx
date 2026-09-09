import { AlbumSearchResult, ArtistSearchResult, TrackSearchResult } from "@/entities/music/model/types";
import AlbumResultCard from "./album-result";
import TrackResultCard from "./track-result";
import ArtistResultCard from "./artist-result";
import { CardContent } from "@/shared/ui/shadcn/card";
import { ScrollArea } from "@/shared/ui/shadcn/scroll-area";
import { Label } from "@/shared/ui/shadcn/label";
import { Separator } from "@/shared/ui/shadcn/separator";

interface ResultListProps {
  albums: AlbumSearchResult[];
  tracks: TrackSearchResult[];
  artists: ArtistSearchResult[]
}

export default function ResultList({ albums, artists, tracks}: ResultListProps) {
  return (
    <CardContent>
      <ScrollArea className="h-72">
        <section title="albums" className="flex flex-col gap-4">
          <Label>Albums</Label>
          {albums.map((album) => <AlbumResultCard key={album.id} data={album}/>)}
        </section>
        <Separator className={"my-4"}/>
        <section title="tracks" className="flex flex-col gap-4">
          <Label>
            Tracks
          </Label>
          {tracks.map((track) => <TrackResultCard key={track.id} data={track}/>)}
        </section>
        <Separator className={"my-4"}/>
        <section title="artists" className="flex flex-col gap-4">
          <Label>
            Artists
          </Label>
          {artists.map((artist) => <ArtistResultCard key={artist.id} data={artist}/>)}
        </section>
      </ScrollArea>
    </CardContent>
  );
}