import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://ericminassian.com",
  integrations: [tailwind(), prefetch(), sitemap(), partytown()]
});