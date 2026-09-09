import { ArtistSearchResult } from "../../../entities/music/model/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";

interface ArtistResultCardProps {
  data: ArtistSearchResult
}

export default function ArtistResultCard({ data }: ArtistResultCardProps) {
  return (
    <Card size="sm" className="shadow-none">
      <CardHeader>
        <CardTitle>
          {data.name}
        </CardTitle>
        <CardDescription>
          {data.type}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}