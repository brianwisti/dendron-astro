import Path from "@mojojs/path";
import type { NotesCache } from "@dendronhq/common-all";
import * as DENDRON_CACHE from "../notes/.dendron.cache.json";

export function getNoteHref(fname: string) {
  if (!Object.hasOwn(DENDRON_CACHE.notes, fname)) {
    return "#";
  }

  const noteId = DENDRON_CACHE.notes[fname].data.id;
  return `/notes/${noteId}`;
}
