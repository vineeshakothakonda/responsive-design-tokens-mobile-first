# Responsive Design Tokens & Mobile-First CSS Architecture

This is a standalone responsive dashboard demo built around CSS custom properties, CSS Grid, Flexbox, responsive breakpoints, theme variables and modern visual styling.

## Run

The project is static. Open `index.html` in a browser, or serve the directory with any local static server.

Example:

```bash
npx serve .
```

## Main file

`css/style.css`

## Breakpoints

- 320px — mobile baseline
- 768px — tablet
- 1024px — desktop
- 1440px — large desktop

## Proof

Add viewport screenshots to `screenshots/` using the names documented there.

## Mobile overflow strategy

- `box-sizing: border-box`
- `min-width: 0` on grid children
- `overflow-x: hidden` on the document
- tables are contained in `.table-wrap`
- media are constrained to `max-width: 100%`
- responsive grids use `minmax(0, 1fr)`
