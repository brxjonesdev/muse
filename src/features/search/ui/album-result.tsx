import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { AlbumSearchResult } from "../../../entities/music/model/types";

interface AlbumResultCardProps {
  data: AlbumSearchResult
}

export default function AlbumResultCard({ data }: AlbumResultCardProps) {
  return (
    <Card size="sm" className="shadow-none">
      <CardHeader>
        <CardTitle>
          {data.title}
        </CardTitle>
        <CardDescription>
          {data.artist}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}