# Lunacal — Widgets

A small Next.js demo containing two visually-styled widgets: an "About" card with tabbed content and a gallery widget. Built as a compact UI assignment showcasing component layout, accessible tabs, and custom scrollbar styling.

## Brief description

This repository contains a minimal Next.js app (app-router) that renders two widgets side-by-side: an About widget (tabbed content) and a Gallery widget (horizontal image scroller). The project focuses on layout, accessible tab semantics, and bespoke CSS for a neumorphic/dark theme.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Plain CSS (global stylesheet at `app/globals.css`) with some Tailwind import available
- lucide-react for simple SVG icon components

## Folder structure

```
app/
	globals.css        # Global styles and theme tokens
	layout.tsx         # Root layout (fonts, metadata)
	page.tsx           # Entry page that composes the widgets
	components/
		AboutWidget.tsx  # About widget with accessible tabs
		GalleryWidget.tsx# Horizontal gallery widget
		Tab.tsx          # Small helper Tab component (Buit for testing purpose only)
package.json         # Scripts & dependencies (dev / build / start)
README.md            
```

## Code architecture and key ideas

- app/layout.tsx
	- Loads the global stylesheet and preconnects to Google Fonts. Exposes metadata for the app.

- app/page.tsx
	- The page composes the left/right layout used for the demo. The right column renders `AboutWidget` and `GalleryWidget` and provides small visual dividers.

- app/components/AboutWidget.tsx
	- A self-contained widget that:
		- Renders two icon buttons in the sidebar (Help & Grid).
		- Contains a tab header (semantic roles: `tablist`, `tab`, `aria-selected`) and a content area keyed by the active tab.
		- Uses the `.content-text-direct` class for scrollable content with a custom scrollbar.

- app/components/GalleryWidget.tsx
	- A horizontally scrollable gallery with hover effects for images and navigation controls.

- app/globals.css
	- Centralized theme tokens (CSS variables) and widget styles. Contains the custom scrollbar rules (gradient thumb for WebKit browsers and a Firefox fallback).

Design choices
- Accessibility: tabs use ARIA roles and `aria-selected` so assistive tech can navigate them.
- Styling: one global stylesheet is used to keep the widget visuals consistent. The project includes a gradient scrollbar for webkit browsers and feature-detected fallbacks for Firefox.

## How to run (Windows / PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm run dev
```

3. Open the app in your browser

http://localhost:3000

Notes
- This is a Next.js app — building for production uses `npm run build` followed by `npm start` (or the deployment platform flow).

## Development notes / tips

- The UI uses a single global CSS file at `app/globals.css`. If you prefer scoped styles, convert the widget styles into CSS modules or Tailwind utility classes.
- The `AboutWidget` sets `role="tablist"` and `role="tab"` on the tab container and buttons. When editing, preserve these attributes to keep keyboard and screen-reader accessibility.
- Scrollbar styling is platform-dependent: WebKit/Blink browsers show the gradient thumb; Firefox uses a solid color fallback.

## Small checklist before shipping

- [ ] Verify images for the gallery are present or replaced with your own assets.
- [ ] Run `npm run lint` and address any reported issues if you want stricter checks.

## Notes from the dev

Thanks for checking out this mini widget demo. The goal here was to present compact, polished widget UIs with careful attention to spacing, accessible tabs, and subtle visual depth. If you want the widgets split into a reusable component library, or to switch to CSS modules / Tailwind-only, I can help convert them.

## Credits

Author: Aviral Yadav

---

If you'd like I can also:
- Add a short deploy guide (Vercel) and a tiny visual screenshot in the README.
- Extract the widgets into a small component library with tests.

Tell me which you'd like next.

