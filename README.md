# Product Explorer
Webomindapps Assignment-1 for the interview

A responsive product browsing web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, powered by the FakeStore public API.

🔗 **Live Demo:** [https://madankk-webomindapps.vercel.app/](https://madankk-webomindapps.vercel.app/)

---

## 🛠️ Quick Start

Requirements: **Node 18.17+**

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` — Start the local development server
- `npm run build` — Build production bundle
- `npm run typecheck` — Run TypeScript type checking (`tsc --noEmit`)
- `npm run lint` — Run Next.js ESLint checks

---

## Bug Fixes Completed

1. **Resolved Infinite Fetch Loop (`src/hooks/useProducts.ts`)**
   - Changed the `useEffect` dependency array from `[products]` to `[]` so the catalogue is fetched only once on initial mount.

2. **Fixed Strict TypeScript Types (`src/hooks/useProducts.ts`)**
   - Removed all `any` types and strictly typed state and parsed API responses using `Product[]`.

3. **Composite & Case-Insensitive Search (`src/app/page.tsx`)**
   - Fixed filtering logic so category selection and search query work together simultaneously.
   - Added `.toLowerCase().trim()` to ensure case-insensitive search matching.

4. **Framer Motion Key Warning & Animation Glitch (`src/components/ProductGrid.tsx`)**
   - Replaced array `key={index}` with unique `key={product.id}` to enable stable `<AnimatePresence layout>` item tracking and eliminate React console warnings.

5. **Resolved SSR Hydration Timestamp Mismatch (`src/app/page.tsx`)**
   - Added `suppressHydrationWarning` on the rendered time paragraph to resolve client/server locale formatting differences (12h vs 24h).

---

## Features Implemented

1. **Error State Handling (`src/app/page.tsx`)**
   - Added a clear, user-friendly error UI banner when product data fetching fails, and gracefully hides the grid during loading and error states.

2. **Animated Product Detail Modal (`src/components/ProductModal.tsx`)**
   - Integrated Framer Motion's `<AnimatePresence>` for smooth entry and exit transitions.
   - Added a soft background blur/opacity fade and a scaled slide-in transition for the modal dialogue card.

---

## 📝 Documentation

Full explanations of every bug, technical decisions, and future roadmap items are documented in [`NOTES.md`](./NOTES.md).
