# OVYA Rent

Site vitrine et transactionnel de l'agence de location de voitures OVYA Rent (Maroc), construit avec [Astro](https://astro.build) et Tailwind CSS.

## Prérequis

- [Node.js](https://nodejs.org/) 18.20.8+ ou 20.3.0+ (LTS recommandé)

## Commandes

```bash
npm install          # installer les dépendances
npm run dev           # lancer le serveur de développement (http://localhost:4321)
npm run build          # build de production dans dist/
npm run preview        # prévisualiser le build de production
```

## Structure

- `src/pages/` — routes du site
- `src/content/vehicules/` — fiches véhicules (contenu éditable en Markdown)
- `src/content/villes/` — pages locales par ville desservie
- `src/components/` — composants réutilisables (Header, Footer, CarCard, WhatsAppButton)
- `src/layouts/Layout.astro` — layout principal (SEO, schema.org, structure de page)
- `src/styles/tokens.css` — couleurs et typographies de la charte graphique OVYA Rent
- `src/lib/whatsapp.ts` — génération des liens WhatsApp pré-remplis

## Déploiement (Hostinger)

Le site est un site statique Astro (`output: "static"`, aucun adaptateur serveur) : Hostinger peut builder directement depuis ce dépôt Git.

- Commande d'installation : `npm install`
- Commande de build : `npm run build`
- Dossier de sortie à publier : `dist`
- Version de Node requise : voir le champ `engines` de `package.json` (18.20.8+)

## À compléter avant mise en ligne

- Photos réelles des véhicules (actuellement en placeholder dans `src/content/vehicules/`)
- Informations légales dans `/mentions-legales` et `/cgv` (RC, ICE, hébergeur — marquées `[À compléter]`)
- Domaine et hébergement définitifs (mettre à jour `site` dans `astro.config.mjs`)
