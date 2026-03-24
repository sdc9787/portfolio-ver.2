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
  const base = import.meta.env.BASE_URL || "/";
  
  // If base is just "/", we don't need to do anything special for absolute paths
  if (base === "/") return path;

  // For other base paths, ensure we don't have double slashes
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${normalizedBase}${normalizedPath}`;
}
