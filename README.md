# OVYA Rent

Site vitrine et transactionnel de l'agence de location de voitures OVYA Rent (Maroc), construit avec [Astro](https://astro.build) et Tailwind CSS.

## Prérequis

- [Node.js](https://nodejs.org/) 20.3.0+ (22.x recommandé — évite les soucis ESM observés avec certaines versions 18.x sur Hostinger)

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

## Déploiement (Hostinger — hébergement Node.js)

Le site tourne en mode serveur Astro (`output: "server"`, adaptateur `@astrojs/node` en mode `standalone`) : toutes les pages restent pré-générées (`export const prerender = true` sur chaque route) pour rester rapides, mais le build produit un vrai process Node que Hostinger peut démarrer et garder actif.

- Commande d'installation : `npm install`
- Commande de build : `npm run build`
- Commande de démarrage : `npm start` (exécute `node ./dist/server/entry.mjs`)
- Le serveur écoute sur `process.env.PORT` (et `process.env.HOST`) fournis par Hostinger
- Version de Node à sélectionner sur Hostinger : **20.x ou 22.x** (pas 18.x — a provoqué une erreur de build ESM lors du premier essai)

## À compléter avant mise en ligne

- Photos réelles des véhicules (actuellement en placeholder dans `src/content/vehicules/`)
- Informations légales dans `/mentions-legales` et `/cgv` (RC, ICE, hébergeur — marquées `[À compléter]`)
- Domaine et hébergement définitifs (mettre à jour `site` dans `astro.config.mjs`)
