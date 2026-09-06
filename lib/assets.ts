/**
 * Server-only helpers. Kept out of lib/site.ts because that module is imported
 * by client components, and `fs` can't go into the client bundle.
 */
import { existsSync } from "fs";
import path from "path";

/** Build-time check for optional assets (demo video, founder photo). */
export function hasPublicFile(relativePath: string): boolean {
  return existsSync(path.join(process.cwd(), "public", relativePath));
}
