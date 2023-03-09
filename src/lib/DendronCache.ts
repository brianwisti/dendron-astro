import Path from "@mojojs/path";
import type { NotesCacheEntry } from "@dendronhq/common-all";
import * as DENDRON_CACHE from "../notes/.dendron.cache.json";

export function getLinksToNote(fname: string): Array<NotesCacheEntry> {
  const notes = Object.values(DENDRON_CACHE.notes) as Array<NotesCacheEntry>;
  return notes.filter((note) =>
    note.data.links.some((link) => link.to?.fname == fname)
  );
}

export function getNoteCache(fname: string): NotesCacheEntry {
  const noteName = new Path(fname).toObject().name;
  if (!Object.hasOwn(DENDRON_CACHE.notes, noteName)) {
    throw `${noteName} not in cache`;
  }

  return DENDRON_CACHE.notes[noteName];
}

export function getNoteFnames(): Array<string> {
  return Object.keys(DENDRON_CACHE.notes);
}

export function getNoteHref(fname: string) {
  if (fname == "root") {
    return "/";
  }

  if (!Object.hasOwn(DENDRON_CACHE.notes, fname)) {
    return "/missing";
  }

  const noteId = DENDRON_CACHE.notes[fname].data.id;
  return `/notes/${noteId}`;
}

export function getNoteTitle(fname: string) {
  const note = getNoteCache(fname);
  return note.data.title;
}

export function getRecentUpdates() {
  const notes = Object.values(DENDRON_CACHE.notes) as Array<NotesCacheEntry>;
  return notes.sort((a, b) => {
    return b.data.updated - a.data.updated;
  });
}
