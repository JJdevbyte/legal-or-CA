
# Project: Legal Firm - Cinematic Editorial

## Design Mandate
This project adheres to a **Cinematic Editorial** aesthetic: deep obsidian backgrounds, high-contrast serif typography, and premium interactive motions.

### Core Principles
- **Aesthetic Direction:** Luxury Minimal / Cinematic Legal.
- **Color Palette:**
  - Background: Deep Obsidian (`#0A0A0A`)
  - Text Primary: Off-white (`#F5F5F5`)
  - Accent: Muted Gold / Bronze (`#C5A059`) for high-intent elements.
- **Typography:**
  - Headings: Playfair Display (Serif) - Authoritative and timeless.
  - Body: Inter (Sans-serif) - Precise and readable.
- **Motion Philosophy:**
  - Dynamic & Engaging: Use mouse-tracking parallax and staggered text reveals.
  - Duration: 150-300ms for micro-interactions; 800ms+ for entrance sequences.
  - Respect `prefers-reduced-motion`.

### UI/UX Standards (UI/UX Pro Max)
- **Icons:** Use Lucide React (SVG). NEVER use emojis.
- **Interactions:** Stable hover states (color/opacity), `cursor-pointer` on all clickable elements.
- **Accessibility:** Minimum 4.5:1 contrast ratio. Visible focus rings.
- **Layout:** Consistent max-width (`max-w-7xl`). Precise spacing rhythm.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 (CSS-first configuration)
- **Animation:** Framer Motion
- **Icons:** Lucide React
