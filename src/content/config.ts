import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const vehicules = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/vehicules" }),
  schema: z.object({
    marque: z.string(),
    modele: z.string(),
    categorie: z.enum([
      "Citadine & Compacte",
      "Berline",
      "SUV",
      "Sport & Cabriolet",
      "Van",
    ]),
    transmission: z.enum(["Manuelle", "Automatique"]),
    carburant: z.enum(["Essence", "Diesel", "Hybride", "Électrique"]),
    places: z.number(),
    prixParJourMAD: z.number(),
    prixParJourEUR: z.number().optional(),
    kmIllimite: z.boolean().default(true),
    franchiseMAD: z.number(),
    photo: z.string().optional(),
    villesDisponibles: z.array(z.string()),
    disponible: z.boolean().default(true),
  }),
});

const villes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/villes" }),
  schema: z.object({
    nom: z.string(),
    region: z.string(),
    aeroport: z.string().optional(),
    accroche: z.string(),
  }),
});

export const collections = { vehicules, villes };
