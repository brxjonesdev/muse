import { Input } from "@/shared/ui/shadcn/input";

interface SearchInputProps {
  onQueryUpdate: (query: string) => void;
  query: string
} 
export default function SearchInput({query, onQueryUpdate}: SearchInputProps) {
  return (
    <Input
      placeholder="Search"
      value={query}
      onChange={(e) => onQueryUpdate(e.target.value)}
    />
  );
}