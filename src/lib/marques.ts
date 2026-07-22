import { getCollection } from "astro:content";

export async function getMarquesDisponibles(): Promise<string[]> {
  const vehicules = await getCollection("vehicules", (v) => v.data.disponible);
  return [...new Set(vehicules.map((v) => v.data.marque))].sort((a, b) => a.localeCompare(b));
}
