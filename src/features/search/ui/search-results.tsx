import { generateMockMusicData } from "@/entities/music/mockdata";
import { Card, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import ResultViewToggle from "./result-view-toggle";
import { useState } from "react";
import ResultList from "./result-list";
import ResultsTabs from "./results-tabs";
interface SearchResultProps {
  query: string;
  isVisible: boolean
}
export default function SearchResults({ query, isVisible }: SearchResultProps) {
  
  const [selectedView, setSelectedView] = useState<"list" | "tabs">("list");
  const sampleData = generateMockMusicData();
  // const { } = useMusicSearchQuery();
  if (!isVisible || !query) return null;
  return (
    <Card className="shadow-none rounded-md">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>
         {`Results for "${query}"`}
        </CardTitle>
        <ResultViewToggle
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </CardHeader>
      {selectedView === "list" ?
        <ResultList
        albums={sampleData.albums}
        artists={sampleData.artists}
        tracks={sampleData.tracks} /> :
        <ResultsTabs
        albums={sampleData.albums}
        artists={sampleData.artists}
        tracks={sampleData.tracks}/>}
    </Card>
  );
}