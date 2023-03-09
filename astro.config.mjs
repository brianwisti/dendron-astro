import { defineConfig } from "astro/config";
import wikiLinkPlugin from "remark-wiki-link";
import { getNoteHref } from "./src/lib/DendronCache";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, { hrefTemplate: (permalink) => getNoteHref(permalink) }],
    ],
  },
});
