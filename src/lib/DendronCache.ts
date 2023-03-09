import Path from "@mojojs/path";
import type { NotesCache } from "@dendronhq/common-all";
import YAML from "yaml";

const defaultCachePath = new Path("../notes/.dendron.cache.json");

export async function loadDendronCache(
  path: Path = defaultCachePath
): Promise<NotesCache> {
  return YAML.parse((await path.readFile("utf-8")).toString()) as NotesCache;
}

export const DENDRON_CACHE = await loadDendronCache();

export function getNoteHref(
  fname: string,
  dendronCache: NotesCache = DENDRON_CACHE
) {
  if (!Object.hasOwn(dendronCache.notes, fname)) {
    return "#";
  }

  const noteId = dendronCache.notes[fname].data.id;
  return `/notes/${noteId}`;
}
