import type { ImageMetadata } from "astro"

export const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/media/*.{jpeg,jpg,png,gif}",
)
