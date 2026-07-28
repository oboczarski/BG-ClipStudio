# CSS Surface Foundry

CSS Surface Foundry is a React and vanilla-CSS field manual for advanced
surfaces. It combines a large recipe library with focused workbenches for
editing real gradient stops, understanding background geometry, building text
treatments, and tuning liquid-glass materials.

The original single-file prototype has been replaced. `index.html` is the
canonical Vite entry, and `BG-ClipStudio_v1.html` is retained as a development
entry alias so the original route also opens the React application.

## Run the application

```bash
npm install
npm run dev
```

Use the complete quality gate before sharing changes:

```bash
npm test
```

`npm test` runs ESLint and a production Vite build.

## Source map

- `src/App.jsx` owns the application shell, hero, and accessible tab system.
- `src/components/` contains reusable controls, headings, tabs, and copyable
  code panels.
- `src/data/referenceCards.js` contains the editable, stop-level reference-card
  definitions and their serializer.
- `src/data/gradientRecipes.js` contains the repaired 07B recipes and the
  eight-card 07C atelier collection.
- `src/data/glassRecipes.js` contains the liquid-glass material models, live
  style generation, copied HTML/CSS, and non-blur fallbacks.
- `src/features/` keeps each major tab or card system isolated.
- `src/styles/base.css` owns the app shell and shared primitives.
- `src/styles/cards.css` owns card galleries and card workbenches.
- `src/styles/labs.css` owns Layer Anatomy, Origin, Text, and Liquid Glass.
- `src/styles/responsive.css` owns tablet and mobile layout changes.
- `src/utils/css.js` contains color, gradient, declaration, HTML-escaping, and
  clipboard utilities.

## Exact-output contract

Interactive examples do not maintain a separate hand-written preview recipe
and code recipe. The same structured data or style object is used for both:

1. A control changes recipe state.
2. The recipe function creates the preview style.
3. The serializer converts that same style into the displayed CSS.
4. The copy button writes the displayed result to the clipboard.

This contract is especially important in:

- Reference Card Studio, where each editor row maps to a real gradient stop.
- Origin Lab, where each background image has a corresponding origin, clip,
  repeat, position, and size list value.
- Text Lab, where the visible two-span structure is also the copied markup.
- Liquid Glass, where the surface, lens, glint, and content styles are generated
  from the same live settings.

## Add a layered-gradient card

Add one object to either `repeatedGradientRecipes` or
`atelierGradientRecipes` in `src/data/gradientRecipes.js`.

Each object needs:

- a unique `id`, title, summary, and description;
- default border, padding, and radius values;
- a complete `background` layer list;
- a complete `boxShadow` list;
- optional tags and `backgroundRepeat`.

Put every paint layer in the `background` string with its intended
`content-box`, `padding-box`, or `border-box` suffix. `GradientGallery` will use
that same string for the live card and the copyable CSS.

## Add a reference card

Add a structured card to `src/data/referenceCards.js`. A gradient layer declares
its gradient kind, geometry, paint box, stop unit, and ordered stops. Every stop
contains a hex color, alpha value, and position. The workbench will create the
correct editor automatically.

## Add a text treatment

Add a preset to `textPresets` in `src/features/text/TextLab.jsx`. Supply
defaults plus `background` and `shadow` functions. Use background images and
explicit background longhands; avoid mixing the `background` shorthand with
`background-clip: text` during live React updates.

## Add a liquid-glass material

Add a recipe to `glassRecipes` in `src/data/glassRecipes.js`. Each recipe owns:

- live defaults;
- `surface(settings)`;
- `lens(settings)`;
- `glint(settings)`;
- a dense, readable `fallback` background.

Keep foreground opacity independent. Transparency belongs in background colors,
not on the entire card.

## Project constraints

- All authored visual styling is vanilla CSS.
- There is no Tailwind dependency.
- There are no animations, keyframes, or transitions.
- Designs do not depend on `::before` or `::after`.
- Generated snippets escape editable HTML text.
- Copyable CSS includes only the declarations required by its example.
- Responsive layouts are explicitly tested at desktop, tablet, and mobile
  widths.
