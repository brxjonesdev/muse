import SearchInput from "@/features/search/ui/search-input";
import HeaderMenuBar from "./menubar";

export default function GlobalAppHeader() {
  return (
    <header className="container mx-auto flex flex-wrap items-center gap-2 md:gap-4 px-4 py-2">
      <div className="flex min-w-0 flex-1 items-center gap-4 justify-between">
        <h1 className="shrink-0">Muse</h1>
        <HeaderMenuBar />
      </div>
      <SearchInput/>
    </header>
  );
}