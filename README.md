# Eso Rouen - Site Web Ésotérique

Site web moderne pour praticienne ésotérique à Rouen, construit avec Next.js 16 et Tailwind CSS v4.

## 🌟 Fonctionnalités

- ✨ 4 pages principales : Accueil, À Propos, Services, Boutique
- 🎨 Design mystique avec palette terracotta/or/crème
- 🎭 Animations premium avec ScrollReveal
- 🌊 Smooth scrolling (Lenis)
- 📱 Design responsive
- ⚡ Optimisé pour les performances

## 🚀 Déploiement sur Vercel

### Option 1 : Déploiement via Interface Web (Recommandé)

1. **Connectez-vous à Vercel** : [vercel.com](https://vercel.com)
2. **Importez le projet** : Cliquez sur "New Project"
3. **Sélectionnez le repository** : `adjassoho/eso_rouen`
4. **Configurez le projet** :
   - Framework Preset: **Next.js** (détecté automatiquement)
   - Root Directory: `./` (racine du projet)
   - Build Command: `npm run build` (par défaut)
   - Output Directory: `.next` (par défaut)
5. **Déployez** : Cliquez sur "Deploy"

### Option 2 : Déploiement via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

## 🛠️ Développement Local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer le serveur de production localement
npm start
```

## 📁 Structure du Projet

```
web/
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   │   ├── page.tsx      # Page d'accueil
│   │   ├── about/        # Page À Propos
│   │   ├── services/     # Page Services
│   │   └── shop/         # Page Boutique
│   └── components/       # Composants réutilisables
├── public/               # Assets statiques (images)
└── package.json
```

## 🎨 Technologies

- **Framework**: Next.js 16.1.1
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display (serif) + Lato (sans-serif)
- **Icons**: Lucide React
- **Animations**: Custom ScrollReveal + Lenis
- **Deployment**: Vercel

## 📝 Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

## 🔧 Configuration Vercel

Le projet est configuré pour fonctionner automatiquement sur Vercel :
- Détection automatique de Next.js
- Configuration optimale par défaut
- Déploiement automatique à chaque push sur `main`

## 📞 Contact

Pour toute question concernant le projet, contactez l'équipe de développement.

---

**Fait avec ❤️ pour Eso Rouen**
