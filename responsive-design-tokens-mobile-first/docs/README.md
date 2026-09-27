# Responsive Design Tokens & Mobile-First CSS Architecture

## Requirements covered

- CSS custom properties in `:root`
- Primary brand palette and semantic colors
- Typography and spacing scales
- Border-radius tokens
- CSS Grid and Flexbox
- Mobile-first base layout
- 320px, 768px, 1024px and 1440px breakpoint strategy
- Light/dark theme variables
- Glassmorphism via `backdrop-filter`
- Soft shadows and hover transitions
- Reduced-motion support
- Mobile horizontal-overflow protection

## Responsive verification

Test at these viewport widths:

| Viewport | Expected layout |
|---|---|
| 320px | Single-column mobile |
| 768px | Sidebar + two-column metrics |
| 1024px | Sidebar + four-column metrics |
| 1440px | Large desktop with constrained content |

Use browser DevTools responsive mode and verify that the document itself has no horizontal scrollbar.

## Screenshot evidence

Capture screenshots at:
- 320 × appropriate height
- 768 × appropriate height
- 1024 × appropriate height
- 1440 × appropriate height

Recommended names:
- `screenshots/mobile-320.png`
- `screenshots/tablet-768.png`
- `screenshots/desktop-1024.png`
- `screenshots/desktop-1440.png`
