import { defineConfig } from "astro/config";
import wikiLinkPlugin from "remark-wiki-link";
import { getNoteFnames, getNoteHref } from "./src/lib/DendronCache";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          permalinks: getNoteFnames(),
          hrefTemplate: (permalink) => getNoteHref(permalink),
        },
      ],
    ],
  },
});
