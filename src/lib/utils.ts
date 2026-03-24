import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves a public asset path by prefixing it with the base URL.
 * This ensures that absolute paths like "/skill/HTML.svg" work correctly
 * even when the app is deployed to a subpath (e.g., GitHub Pages).
 */
export function resolvePath(path: string) {
  if (!path) return "";
  if (path.startsWith("/")) {
    // import.meta.env.BASE_URL is "/" by default, but can be set in vite.config.ts
    const base = import.meta.env.BASE_URL;
    // Ensure base ends with / and path doesn't start with / for joining
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return `${normalizedBase}${path.slice(1)}`;
  }
  return path;
}
