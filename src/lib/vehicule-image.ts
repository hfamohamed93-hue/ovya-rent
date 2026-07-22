import type { ImageMetadata } from "astro";

const photoModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/vehicules/photos/*",
  { eager: true },
);

export function getVehiculePhoto(filename?: string) {
  if (!filename) return undefined;
  const entry = Object.entries(photoModules).find(([path]) => path.endsWith(`/${filename}`));
  return entry?.[1].default;
}
