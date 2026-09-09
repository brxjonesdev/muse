import { TrackSearchResult } from "../../../entities/music/model/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";

interface TrackResultCardProps {
  data: TrackSearchResult;
}

export default function TrackResultCard({ data }: TrackResultCardProps) {
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