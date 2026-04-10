# Other Milk

Marketing site for Other Milk — a locally sourced, small-batch pecan milk brand based in Chattanooga, TN.

## Stack

- **Framework:** Astro 6 with React integration (React used only for AgentationToolbar)
- **Styling:** Scoped `<style>` blocks in each `.astro` component + design tokens in `src/styles/global.css`
- **Fonts:** Krana Fat (display), GT Walsheim (body) — licensed, served from `public/fonts/`
- **Node:** >=22.12.0

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (output in `dist/`)
- `npm run preview` — Preview production build locally

## Project Structure

```
src/
  pages/
    index.astro              — Landing page, composes all sections
    products/[slug].astro    — Dynamic product page template
  data/products.ts           — Product catalog (details, nutrition, recipes, reviews)
  layouts/Base.astro         — HTML shell, meta tags, structured data, @font-face
  components/
    Nav.astro                — Header with logo + cart link + subscribe button
    Hero.astro               — Decorative X strings + hero image
    Headline.astro           — Title + body text + CTA
    ProductSection.astro     — Two-column overlapping card grid
    ProductCard.astro        — Individual product card (image, price badge, details)
    ProductHero.astro        — Product page hero (image + details + CTA)
    NutritionTable.astro     — Nutrition facts table card
    RecipesSection.astro     — Recipe cards grid
    SocialProof.astro        — Customer review cards grid
    LifestyleBanner.astro    — Full-width lifestyle photo with text overlay
    Footer.astro             — Mega wordmark + footer nav links
    SubscribeBtn.astro       — Reusable subscribe button
    AgentationToolbar.tsx    — Dev-only annotation toolbar (React)
  styles/global.css          — Design tokens, reset, utilities
public/
  images/                    — Static images (hero, products, lifestyle, logos)
  fonts/                     — Licensed font files (.woff2)
```

## Styling Conventions

- **No Tailwind.** All styles are scoped inside each component's `<style>` block.
- **Design tokens** live in `src/styles/global.css` as CSS custom properties (e.g. `--color-pop`, `--radius-card`, `--shadow-postcard`).
- **Fluid sizing** via `clamp()` throughout — avoid fixed breakpoint jumps where possible.
- **Breakpoints:** 768px (tablet), 480px (mobile), 380px (small mobile). No CSS framework — just `@media` queries.
- **Color palette:** `--color-pop` (#fe2357), `--color-oat` (#fff9f1), `--color-white`, `--color-dark` (#212121).
- **BEM-ish naming:** `.component__element--modifier` pattern (e.g. `.products__card--left`).

## Key Design Details

- Product cards overlap by 35px in the center (negative margins on desktop, reset on mobile).
- Card hover: increased shadow + price badge fills pink with white text (no rotation/scale).
- Hero and lifestyle banner use `mask-image` for iOS-level corner smoothing.
- Footer wordmark intentionally bleeds off both viewport edges at all sizes.
- Scroll-reveal animations on products, banner, and footer wordmark via IntersectionObserver in `index.astro`.

## Deployment

- **Hosting:** Netlify, connected to GitHub repo `dakotadahl/OtherMilk`
- Pushes to `main` trigger automatic production deploys.
