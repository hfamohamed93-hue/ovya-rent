# CLAUDE.md

Ce fichier fournit le contexte du projet à Claude Code lors du développement du site **OVYA Rent**.

## Présentation du projet

OVYA Rent est une agence de location de voitures basée au Maroc. Ce dépôt contient le site web vitrine et transactionnel de l'agence, permettant aux visiteurs de découvrir la flotte, consulter les tarifs, et effectuer une demande de réservation.

- **Nom du projet** : OVYA Rent
- **Secteur** : Location de voitures au Maroc
- **Framework** : [Astro](https://astro.build)
- **Logo & charte graphique** : fournis par le client, à intégrer dans `src/assets/` (ne pas générer de logo ou de palette de couleurs sans validation)

## Stack technique

- **Astro** (dernière version stable) — génération de site statique / hybride
- **Styling** : à définir avec l'utilisateur (Tailwind CSS recommandé pour Astro, sauf préférence contraire)
- **Déploiement cible** : à préciser (Vercel, Netlify, ou hébergement classique)
- **Gestion des formulaires de réservation** : à définir (service tiers type Formspree/Resend, ou backend léger)
- **i18n** : site probablement multilingue (français en priorité, éventuellement arabe et anglais) — à confirmer avant d'implémenter le routing i18n d'Astro

## Commandes utiles

```bash
npm install          # installer les dépendances
npm run dev           # lancer le serveur de développement
npm run build          # build de production
npm run preview        # prévisualiser le build
```

*(à adapter si un gestionnaire de paquets différent est utilisé, ex. pnpm/yarn)*

## Structure du projet

```
/
├── public/               # assets statiques (favicon, logo si fourni tel quel, robots.txt, sitemap)
├── src/
│   ├── assets/           # logo, images de la flotte, charte graphique
│   ├── components/       # composants réutilisables (Header, Footer, CarCard, BookingForm, etc.)
│   ├── layouts/          # layouts de page (Layout.astro, PageLayout.astro)
│   ├── pages/            # routes du site (voir "Pages du site" ci-dessous)
│   ├── content/           # collections de contenu (véhicules, agences/villes, avis clients)
│   └── styles/            # styles globaux, variables de charte graphique
├── astro.config.mjs
└── package.json
```

## Pages du site (proposition à valider avec le client)

- `/` — Accueil (accroche, mise en avant de la flotte, réservation rapide, points forts de l'agence)
- `/flotte` — Catalogue des véhicules avec filtres (catégorie, boîte, carburant, prix)
- `/vehicule/[slug]` — Fiche détaillée d'un véhicule
- `/tarifs` — Grille tarifaire
- `/reservation` — Formulaire de réservation
- `/villes/[ville]` — Pages locales si l'agence dessert plusieurs villes (Casablanca, Marrakech, Agadir, Rabat, etc.) — utile pour le SEO local
- `/a-propos` — Présentation de l'agence
- `/contact` — Coordonnées, WhatsApp, formulaire de contact
- `/faq` — Questions fréquentes (âge minimum, caution, documents requis, etc.)
- `/mentions-legales`, `/cgv` — pages légales

## Contenu & fonctionnalités métier spécifiques à la location de voitures

- Chaque véhicule doit inclure : marque/modèle, catégorie (économique, citadine, SUV, luxe...), transmission, carburant, nombre de places, prix/jour, photos, kilométrage illimité ou non, franchise/caution.
- Prévoir un système de disponibilité ou a minima un formulaire de demande avec dates de début/fin et lieu de prise en charge/restitution.
- Le contact WhatsApp est très utilisé au Maroc pour ce type d'agence — prévoir un bouton flottant ou un lien direct `wa.me`.
- Devise : MAD (dirham marocain). Vérifier si des tarifs en EUR doivent aussi être affichés pour les touristes.
- Documents requis habituellement mentionnés : permis de conduire (validité minimale), passeport/CIN, âge minimum (souvent 21-23 ans).
- Prévoir un balisage SEO local (Google Business, schema.org `LocalBusiness`/`CarRental`) pour le référencement dans les villes desservies.

## Charte graphique & assets

- Le logo et la charte graphique (couleurs, typographies) seront fournis par l'utilisateur.
- **Ne pas inventer de palette de couleurs ou de typographie** tant que ces éléments n'ont pas été transmis — utiliser des valeurs neutres/placeholder en attendant, clairement identifiées comme temporaires.
- Une fois les assets fournis, les centraliser dans `src/styles/tokens.css` (ou équivalent Tailwind `tailwind.config`) pour une réutilisation cohérente.

## Conventions de code

- Composants Astro en `PascalCase.astro`
- Privilégier les composants statiques Astro ; n'utiliser des frameworks UI (React/Vue/Svelte via `@astrojs/*`) que si une interactivité complexe le justifie (ex. formulaire de réservation dynamique)
- Images optimisées via `astro:assets` (`<Image />`)
- Textes du site en français par défaut ; structurer le contenu pour faciliter une future traduction (éviter le texte codé en dur dans les composants si l'i18n est confirmée)

## Points à clarifier avec le client avant/pendant le développement

- Langues du site (FR seul, ou FR/AR/EN)
- Solution technique pour le traitement des réservations (email, CRM, backend)
- Villes/agences desservies
- Moyens de paiement en ligne (acompte à la réservation ?) ou paiement sur place uniquement
- Hébergement et nom de domaine prévus
