"use client"
import SearchInput from "./ui/search-input"
import { useState } from "react";
import SearchResults from "./ui/search-results";
export default function MusicSearchbar() {
  const [searchQuery, setSearchQuery] = useState<string>("Red Velvet");
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
        query={searchQuery}
        isVisible={searchQuery.length > 0}
      />
    </section>
  )
}