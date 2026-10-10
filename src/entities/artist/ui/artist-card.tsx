"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/shadcn/avatar";
import { Artist } from "../../music/ui/types";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/shadcn/button";

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push(`artist/${artist.slug}`)
      }}>
      {/*<Avatar>
        <AvatarImage
          src={artist.imageURL}
        />
        <AvatarFallback>
          
        </AvatarFallback>
      </Avatar>*/}
    <div>
      <h3>{artist.name}</h3>
      <p>{artist.genre}</p>
    </div>
    </Button>
  );
}