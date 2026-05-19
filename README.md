# NovaForge Studio Agency Site

Premium static React website for a modern digital agency. The site is designed for startup founders and business clients who need immediate trust signals, clear service positioning, polished visuals, and fast deployment.

## Overview

NovaForge Studio helps businesses with:

- Web Development
- SaaS Development
- UI/UX Design
- Automation
- Branding
- SEO & Digital Growth

The site is frontend-only and fully static. It is optimized for Vercel deployment and does not include backend functionality.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Static Vercel deployment

## Pages and Sections

The site is implemented as a single static React app with smooth in-page navigation:

- Home
- Services
- Projects / Case Studies
- About
- Contact

Home includes:

- Animated hero section
- Startup-style stats
- Services overview
- Featured fictional projects
- Process timeline
- Testimonials
- CTA banner
- Footer

The site also includes a professional partner section:

> Technical Development Partner: ByteRings

## Folder Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components
    │   ├── HeroVisual.jsx
    │   ├── Navbar.jsx
    │   ├── Section.jsx
    │   ├── Sections.jsx
    │   └── motionVariants.js
    └── data
        └── site.js
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The project is ready for Vercel:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` is included with static rewrite support.

## Design Direction

The UI uses:

- Dark premium aesthetic
- Subtle glassmorphism
- Soft glowing gradients
- Framer Motion reveal animations
- Sticky blurred navbar
- Responsive modern card layouts
- Clean typography and large spacing
- Static contact form UI

## Notes

- No backend functionality is included.
- The contact form is visual-only and can later be connected to a form provider, CRM, or serverless endpoint.
- Project content and fictional case studies live in `src/data/site.js`.
