import Path from "@mojojs/path";
import type { NotesCache } from "@dendronhq/common-all";
import YAML from "yaml";

const defaultCachePath = new Path(
  "C:/Users/brian/moa-dendron/notes/.dendron.cache.json"
);

export async function loadDendronCache(
  path: Path = defaultCachePath
): Promise<NotesCache> {
  return YAML.parse((await path.readFile("utf-8")).toString()) as NotesCache;
}
