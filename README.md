# Cabinet Dentaire Dr Benabid — Site web officiel

Site vitrine moderne et responsive pour le **Cabinet Dentaire Dr Benabid Wahiba**, chirurgien-dentiste à Alger Centre (79 Rue Didouche Mourad).

Construit avec **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** et **Framer Motion**. 100 % statique, rapide, optimisé SEO, prêt pour la production.

---

## ✨ Fonctionnalités

- **Identité de marque** rouge/corail dérivée du logo (dent + étincelle + anneau orbital).
- **Pages** : Accueil, À propos, Services, Galerie, Contact.
- **Prise de rendez-vous instantanée** : le formulaire de contact génère un message **WhatsApp** pré-rempli (aucun backend requis), plus appel direct et e-mail.
- **Carte Google Maps** intégrée pointant sur le cabinet.
- **SEO complet** : métadonnées, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, données structurées **Schema.org `Dentist`** (référencement local Google).
- **PWA-ready** : `manifest.webmanifest`, icône SVG, thème de couleur.
- Animations fluides, design responsive (mobile → desktop), bouton WhatsApp flottant.

---

## 🚀 Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # développement → http://localhost:3000
npm run build    # build de production
npm run start    # servir le build de production
```

---

## 🛠️ Personnalisation (toutes les infos en un seul endroit)

Toutes les informations du cabinet (nom, adresse, téléphone, WhatsApp, horaires,
réseaux sociaux, services, témoignages, FAQ) sont centralisées dans :

```
lib/site.ts
```

Modifiez ce fichier pour mettre à jour automatiquement **tout le site**.

### Points à mettre à jour avant la mise en ligne

| Élément | Où | Remarque |
|--------|-----|----------|
| Domaine final | `lib/site.ts` → `site.url` | ex. `https://www.benabid-dental.dz` (impacte SEO, sitemap, OG) |
| E-mail | `lib/site.ts` → `site.email` | adresse de contact réelle |
| Réseaux sociaux | `lib/site.ts` → `site.social` | liens Facebook / Instagram réels (TikTok déjà renseigné) |
| Horaires | `lib/site.ts` → `site.hours` | ajuster si besoin |
| Photo de la dentiste | `public/images/` | remplacer par une vraie photo (voir ci-dessous) |
| Vraies photos du cabinet / avant-après | `public/images/` | remplacer les visuels de démonstration |

---

## 🖼️ Images

Les visuels actuels (`hero-clinic.png`, `treatment-room.png`, `smile.png`, `og.png`)
sont des images de présentation générées, déjà aux couleurs de la marque.
Pour la version finale, remplacez-les par de vraies photos du cabinet et des
réalisations (mêmes noms de fichiers = aucun code à modifier), ou ajoutez les
vôtres et mettez à jour les chemins dans les composants `components/sections/`.

Le logo se trouve dans `public/images/logo.png`. Une version vectorielle (SVG) de
la marque est aussi disponible dans `components/Logo.tsx` et `app/icon.svg`.

---

## ☁️ Déploiement (recommandé : Vercel)

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), « New Project » → importer le dépôt.
3. Vercel détecte Next.js automatiquement → **Deploy**.
4. (Optionnel) Brancher le domaine personnalisé et le renseigner dans `site.url`.

Le site fonctionne aussi sur Netlify ou tout hébergeur supportant Node 18+.

---

## 📁 Structure

```
app/                 Pages (App Router) + SEO (sitemap, robots, icon)
components/          Logo, NavBar, Footer, actions flottantes
components/sections/ Sections réutilisables (Hero, Services, Contact, …)
lib/site.ts          ⭐ Données du cabinet (source unique de vérité)
public/images/       Logo + visuels
```

---

© Cabinet Dentaire Dr Benabid Wahiba — Alger, Algérie.
