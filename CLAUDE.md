# Legal Firm - Project Guide

## Build & Development Commands
- `npm run dev`: Start local development server
- `npm run build`: Build production application (Next.js 16/Turbopack)
- `npm run start`: Start production server
- `npm run lint`: Run ESLint for code quality checks

## Code Style & Conventions
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (Theme-first, using `src/app/globals.css`)
- **Animation**: Framer Motion for premium cinematic interactions
- **Icons**: Lucide React (SVG-only, no emojis)
- **Typography**: 
  - Serif: `var(--font-playfair)` (Playfair Display) for headings
  - Sans: `var(--font-inter)` (Inter) for body and technical text
- **Colors**: Obsidian background (`#0A0A0A`), Gold accents (`#C5A059`), Off-white text (`#F5F5F5`)
- **File Structure**:
  - `src/components/`: Reusable UI components
  - `src/app/`: App router pages and layouts

## Design Mandate
- Follow the **Cinematic Editorial** aesthetic defined in `GEMINI.md`.
- Prioritize high-contrast typography, generous negative space, and authoritative motion.
- Maintain WCAG 2.2 AA accessibility standards (min 4.5:1 contrast).
