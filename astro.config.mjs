import { loadEnv } from "vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import sitemap from "@astrojs/sitemap"

import partytown from "@astrojs/partytown"

const { URL } = loadEnv(import.meta.env.MODE, process.cwd(), "")

// https://astro.build/config
export default defineConfig({
  site: URL,
  vite: {
    root: process.cwd(),
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      provider: fontProviders.google(),
    },
    {
      name: "Geist",
      cssVariable: "--font-geist",
      provider: fontProviders.google(),
    },
  ],
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
})

