# resend-by-Manfred

Reproduction locale fonctionnelle de [resend.com](https://resend.com) avec une architecture modulaire, des données mockées et des animations au scroll.

## Stack technique

- **Vite 5** + **React 18** + **React Router 6**
- **TypeScript** (strict)
- **Tailwind CSS** + **Radix UI** (via shadcn-ui)
- **TanStack React Query** (data fetching)
- **Lucide React** (icones)

## Démarrage rapide

```sh
# Installer les dépendances
npm install

# Lancer le serveur de développement (port 8080)
npm run dev

# Build de production
npm run build

# Lancer les tests unitaires
npm run test

# Tests E2E — navigateur par défaut (Chrome système)
npm run test:e2e

# Choisir le navigateur
npm run test:e2e:chrome
npm run test:e2e:firefox
npm run test:e2e:edge
npm run test:e2e:mobile   # Chrome mobile (Pixel 5)

# Ou via variable d'environnement
BROWSER=firefox npm run test:e2e

# Voir le rapport HTML
npm run test:e2e:report
```

## Structure du projet

```
src/
├── types/            # Interfaces TypeScript partagées
├── lib/
│   ├── data/
│   │   ├── content.ts      # Données statiques typées (10 SDKs, 11 logos, webhooks…)
│   │   └── mock-api.ts     # API async simulée (100–400ms)
│   └── utils.ts            # Fonction cn()
├── hooks/
│   ├── use-scroll-animation.ts  # Intersection Observer + useStaggerAnimation
│   ├── use-mobile.tsx           # Breakpoint mobile
│   └── use-toast.ts
├── components/
│   ├── ui/               # 57 primitives shadcn/Radix
│   ├── shared/
│   │   └── VideoBackground.tsx  # Vidéo lazy-loadée + fallback
│   └── sections/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── ClientLogos.tsx           # 11 logos (Warner Bros, Max, Raycast…)
│       ├── SdkSection.tsx            # Démo SDKs (10 langages)
│       ├── DevExperienceSection.tsx  # Logs API temps réel
│       ├── TestModeSection.tsx       # Simulation événements email
│       ├── WebhooksSection.tsx       # Payloads webhook interactifs
│       ├── EditorSection.tsx         # Prévisualisation éditeur
│       ├── AudienceSection.tsx       # Segmentation audience
│       ├── ReactEmailSection.tsx     # Présentation React Email
│       ├── DeliverabilitySection.tsx # Métriques délivrabilité
│       ├── HighlightTestimonialSection.tsx
│       ├── ControlPanelSection.tsx   # Analytics dashboard
│       ├── FeaturesShowcaseSection.tsx
│       ├── FinalCtaSection.tsx       # CTA final
│       ├── AnalyticsPreview.tsx      # Métriques live (mock API)
│       ├── FeaturesGrid.tsx
│       ├── Testimonials.tsx
│       ├── PricingCTA.tsx
│       └── Footer.tsx                # 6 colonnes
└── pages/
    ├── Index.tsx                     # 17 sections
    ├── Blog.tsx                      # Animations staggered
    ├── Changelog.tsx                 # Timeline redesign
    ├── Docs.tsx                      # 10 SDKs + webhooks
    └── NotFound.tsx

public/
└── images/               # 11 logos clients
    ├── warner-bros.png
    ├── max.png
    ├── raycast.png
    ├── mistral-ai.png
    ├── replit.png
    ├── anghami.png
    ├── gumroai.png
    ├── decathlon.png
    ├── supabase.png
    ├── leap.png
    └── payload.png
```

## Fonctionnalités implémentées

- Hero avec animations d'entrée staggerées et structure vidéo lazy-loadée
- Grille de logos clients (11 marques : Warner Bros, Max, Raycast, Mistral AI…)
- SDKs interactifs (10 langages : Node, Python, Ruby, Go, PHP, Java, Rust, Elixir, .NET, REST)
- Logs API en temps réel avec génération automatique
- Test mode avec simulation d'événements (delivered, clicked, opened, bounced, complained)
- Webhooks explorer avec payloads JSON interactifs
- Éditeur visuel d'emails avec prévisualisation
- Segmentation d'audience
- React Email integration
- Métriques de délivrabilité
- Analytics dashboard
- Témoignages et features grid
- Navigation fixe avec menu hamburger mobile accessible
- Smooth scroll sur les ancres internes
- Police Inter + JetBrains Mono
- Architecture `types/` centralisée
- Hooks personnalisés (`useScrollAnimation`, `useStaggerAnimation`)

## Architecture & Flux de données

### Couches applicatives

```
┌─────────────────────────────────────────────────────┐
│                     Pages                           │
│          Index.tsx  ·  NotFound.tsx                 │
│         (composition des sections)                  │
└────────────────────────┬────────────────────────────┘
                         │ importe
┌────────────────────────▼────────────────────────────┐
│                    Sections                         │
│  Header · Hero · ClientLogos · AnalyticsPreview     │
│  FeaturesGrid · Testimonials · PricingCTA · Footer  │
│  (mise en page sémantique, reçoivent des props)     │
└──────────┬──────────────────────────┬───────────────┘
           │ importe                  │ utilise
┌──────────▼──────────┐  ┌───────────▼───────────────┐
│   Primitives UI     │  │       Custom Hooks         │
│  components/ui/     │  │  use-scroll-animation      │
│  (57 composants     │  │  use-mobile · use-toast    │
│   Radix + shadcn)   │  └───────────┬───────────────┘
└─────────────────────┘              │ utilise
                         ┌───────────▼───────────────┐
                         │       Couche Données       │
                         │  lib/data/content.ts       │
                         │  lib/data/mock-api.ts      │
                         │  types/index.ts            │
                         └───────────────────────────┘
```

### Flux de données

```
types/index.ts          Définit les interfaces (NavItem, Feature,
      │                 Testimonial, ClientLogo, AnalyticsMetric…)
      │
      ▼
lib/data/content.ts     Données statiques typées (navigation,
      │                 features, testimonials, clientLogos…)
      │
      ├──────────────── Importé directement par les sections
      │                 qui affichent du contenu statique
      │                 (FeaturesGrid, Testimonials, Footer…)
      │
      ▼
lib/data/mock-api.ts    Fonctions async avec délais simulés
      │                 100–400ms + taux d'erreur 2%
      │                 fetchAnalyticsMetrics()
      │                 fetchFeatures()
      │                 fetchTestimonials()
      │
      ▼
Section (ex: AnalyticsPreview)
      │
      ├── useEffect → fetchAnalyticsMetrics()
      │       │
      │       ├── loading  → <SkeletonRow /> (squelettes animés)
      │       ├── error    → <p role="alert"> message d'erreur
      │       └── data     → affichage + intervals live updates
      │
      └── useScrollAnimation() → IntersectionObserver
              │
              └── isVisible → classes CSS fade-in-up appliquées
```

### Flux de rendu (page d'accueil)

```
App.tsx  (QueryClientProvider + Router)
  └── Index.tsx (17 sections)
        ├── <Header />                    ← fixe, z-50, hamburger mobile
        └── <main>
              ├── <HeroSection />         ← Hero avec gradient + code + CTA
              ├── <ClientLogos />         ← 11 logos (Warner Bros, Max…)
              ├── <SdkSection />          ← Démo SDKs (10 langages)
              ├── <DevExperienceSection />← Logs API temps réel
              ├── <TestModeSection />     ← Simulation événements
              ├── <WebhooksSection />     ← Payloads webhook
              ├── <EditorSection />       ← Éditeur visuel
              ├── <AudienceSection />     ← Segmentation
              ├── <ReactEmailSection />   ← React Email
              ├── <DeliverabilitySection />← Délivrabilité
              ├── <HighlightTestimonialSection />
              ├── <ControlPanelSection /> ← Analytics
              ├── <FeaturesShowcaseSection />
              ├── <Testimonials />        ← 4 témoignages
              └── <FinalCtaSection />     ← CTA final
        └── <Footer />                    ← 6 colonnes
```

### Cycle de vie d'un composant animé

```
Montage du composant
      │
      ▼
useScrollAnimation()
  └── IntersectionObserver attaché à la ref
            │
            │  (utilisateur scroll jusqu'à l'élément)
            ▼
      isIntersecting = true
            │
            ▼
      setIsVisible(true)
      observer.disconnect()       ← animation déclenchée une seule fois
            │
            ▼
      Classe CSS appliquée :
      opacity-0 translate-y-6  →  opacity-100 translate-y-0
      (transition 700ms ease)
```
