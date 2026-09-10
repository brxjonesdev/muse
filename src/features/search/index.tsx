"use client"
import SearchInput from "./ui/search-input"
import { useState } from "react";
import SearchResults from "./ui/search-results";
import { useDebounce } from "@/shared/lib/use-debounce";

export default function MusicSearchbar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce(searchQuery, 300)
  const handleQueryUpdate = (query: string) => {
    setSearchQuery(query);
  }
  return (
    <section title="Music Seachbar" className="flex flex-col gap-2 w-full">
      <SearchInput
        query={searchQuery}
        onQueryUpdate={handleQueryUpdate}
      />
      <SearchResults
        query={debouncedQuery}
        isVisible={debouncedQuery.length >= 2}
      />
    </section>
  )
}