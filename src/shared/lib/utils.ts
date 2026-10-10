export { cn } from "cn"

export const log = (label: string, ...args: unknown[]) => {
  console.log(
    `[${new Date().toISOString()}] ${label}`,
    ...args,
  );
};

export function parseSlugId(value: string) {
  const separator = value.lastIndexOf("-");

  return {
    slug: value.slice(0, separator),
    id: Number(value.slice(separator + 1)),
  };
}

export function slugify(value: string, id: number): string {
  return `${value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-${id}`;
}

export function normalizeText(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}