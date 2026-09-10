"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card";
import { Skeleton } from "@/shared/ui/shadcn/skeleton";

import ResultViewToggle from "./result-view-toggle";
import ResultList from "./result-list";
import ResultsTabs from "./results-tabs";
import { useMusicSearchQuery } from "@/entities/music/api/use-music-search-query";

interface SearchResultProps {
  query: string;
  isVisible: boolean;
}

export default function SearchResults({
  query,
  isVisible,
}: SearchResultProps) {
  const [selectedView, setSelectedView] = useState<"list" | "tabs">("list");

  const {
    data,
    isError,
    isFetching,
    isPending,
  } = useMusicSearchQuery(query);

  if (!isVisible || !query) {
    return null;
  }

  if (isPending && !data) {
    return <SearchSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-md border border-destructive/50 p-4 text-sm text-destructive">
        Something went wrong while searching.
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Card className="rounded-md shadow-none">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{`Results for "${query}"`}</CardTitle>

        <ResultViewToggle
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </CardHeader>

      {isFetching && <SearchUpdatingIndicator />}

      {selectedView === "list" ? (
        <ResultList
          albums={data.albums}
          artists={data.artists}
          tracks={data.tracks}
        />
      ) : (
        <ResultsTabs
          albums={data.albums}
          artists={data.artists}
          tracks={data.tracks}
        />
      )}
    </Card>
  );
}

function SearchSkeleton() {
  return (
    <Card className="border-border/70 shadow-none">
      <CardHeader className="flex-row items-center justify-between gap-4">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-8 w-28" />
      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, groupIndex) => (
          <div
            className="flex flex-col gap-3"
            key={groupIndex}
          >
            <Skeleton className="h-4 w-20" />

            {Array.from({ length: 3 }).map((_, itemIndex) => (
              <div
                className="flex items-center gap-3"
                key={itemIndex}
              >
                <Skeleton className="size-10 rounded-md" />

                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-3 w-3/5" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SearchUpdatingIndicator() {
  return (
    <div
      className="flex items-center gap-2 border-b border-border/70 px-1 py-3 text-sm text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <LoaderCircle
        className="size-4 animate-spin text-primary"
        aria-hidden="true"
      />

      <span>Updating results…</span>
    </div>
  );
}