import Path from "@mojojs/path";
import type { NotesCacheEntry } from "@dendronhq/common-all";
import * as DENDRON_CACHE from "../notes/.dendron.cache.json";

export function getNoteCache(fname: string): NotesCacheEntry {
  const noteName = new Path(fname).toObject().name;
  if (!Object.hasOwn(DENDRON_CACHE.notes, noteName)) {
    throw `${noteName} not in cache`;
  }

  return DENDRON_CACHE.notes[noteName];
}

export function getNoteHref(fname: string) {
  if (fname == "root") {
    return "/";
  }

  if (!Object.hasOwn(DENDRON_CACHE.notes, fname)) {
    return "#";
  }

  const noteId = DENDRON_CACHE.notes[fname].data.id;
  return `/notes/${noteId}`;
}

export function getRecentUpdates(limit: number = 5) {
  const notes = Object.values(DENDRON_CACHE.notes) as Array<NotesCacheEntry>;
  return notes.sort((a, b) => {
    return b.data.updated - a.data.updated;
  });
}
