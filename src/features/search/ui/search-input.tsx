"use client"
import { Input } from "@/shared/ui/shadcn/input";
import { redirect } from "next/navigation";

export default function SearchInput() {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get("query")?.toString().trim();

    if (!query) return;

    redirect(`/search?q=${query}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="Search"
        className="w-full md:w-100"
      />
    </form>
  );
}