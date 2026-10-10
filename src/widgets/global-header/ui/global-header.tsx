import SearchInput from "@/features/search/ui/search-input";
import HeaderMenuBar from "./menubar";

export default function GlobalAppHeader() {
  return (
    <header className="lg:container mx-auto flex flex-wrap items-center gap-2 px-4 py-2 md:gap-4">
      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <h1 className="shrink-0">Muse</h1>
        <HeaderMenuBar />
      </div>

      <div className="basis-full sm:basis-auto">
        <SearchInput />
      </div>
    </header>
  );
}