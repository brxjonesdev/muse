import { AlbumSearchResult, ArtistSearchResult, TrackSearchResult } from "@/entities/music/model/types";
import AlbumResultCard from "./album-result";
import TrackResultCard from "./track-result";
import ArtistResultCard from "./artist-result";
import { CardContent } from "@/shared/ui/shadcn/card";
import { ScrollArea } from "@/shared/ui/shadcn/scroll-area";
import { Label } from "@/shared/ui/shadcn/label";
import { Separator } from "@/shared/ui/shadcn/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "@/shared/ui/shadcn/tabs";

interface ResultsTabsProps {
  albums: AlbumSearchResult[];
  tracks: TrackSearchResult[];
  artists: ArtistSearchResult[]
}

export default function ResultsTabs({ albums,artists,tracks }: ResultsTabsProps) {
  return (
    <CardContent>
      <ScrollArea className="h-72">
        <Tabs defaultValue="albums" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="albums">Albums</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="tracks">Tracks</TabsTrigger>
          </TabsList>
          <TabsContent value="albums" className={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
            {albums.map((album) => <AlbumResultCard key={album.id} data={album}/>)}
          </TabsContent>
          <TabsContent value="artists" className={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
            {artists.map((artist) => <ArtistResultCard key={artist.id} data={artist}/>)}
          </TabsContent>
          <TabsContent value="tracks" className={"grid grid-cols-2 lg:grid-cols-4 gap-4"}>
            {tracks.map((track) => <TrackResultCard key={track.id} data={track}/>)}
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </CardContent>
  );
}