const logos = import.meta.glob<string>("/src/assets/marques/*.svg", {
  eager: true,
  query: "?raw",
  import: "default",
});

const slugParMarque: Record<string, string> = {
  Audi: "audi",
  BMW: "bmw",
  Dacia: "dacia",
  Fiat: "fiat",
  Hyundai: "hyundai",
  "Range Rover": "land-rover",
  Maserati: "maserati",
  "Mercedes-Benz": "mercedes",
  Porsche: "porsche",
  Renault: "renault",
  Volkswagen: "volkswagen",
};

export function getMarqueLogo(marque: string): string | undefined {
  const slug = slugParMarque[marque];
  if (!slug) return undefined;
  const entry = Object.entries(logos).find(([path]) => path.endsWith(`/${slug}.svg`));
  return entry?.[1];
}
