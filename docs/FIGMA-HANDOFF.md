# Octo — Figma Handoff Guide

## Recommended file structure

1. **00 Cover & Brand**
2. **01 Foundations**
3. **02 Components**
4. **03 Desktop Screens**
5. **04 Tablet Screens**
6. **05 Mobile Screens**
7. **06 Prototype Flows**

## Frames

- Desktop: 1440 × 1024
- Tablet: 834 × 1194
- Mobile: 390 × 844
- 12-column desktop grid, 24 px gutters, 64 px margins
- 4-column mobile grid, 16 px margins

## Core screens

- For You / consumer intelligence feed
- Explore / universal search results
- Deals / verified price-drop intelligence
- Services / local provider discovery
- Saved / persistent shortlist
- Product / cross-source offer comparison
- Command palette
- Mobile navigation drawer
- Compare dock

## Foundations

### Brand colors

- Octo Coral: `#F24F5D`
- Coral Highlight: `#FF6A76`
- Deep Coral: `#C93443`
- Ink: `#141416`
- Secondary Ink: `#222226`
- Paper: `#FCFBFA`
- Soft Surface: `#F5F3F1`
- Border: `#E7E5E3`
- Positive: `#15805E`

### Typography

Use Inter or a comparable neo-grotesk variable font.

- Display: 78/74, -4.6 tracking, 800–850 weight
- Page title: 48/50, -2.4 tracking, 800 weight
- Section title: 34/36, -1.25 tracking, 800 weight
- Card title: 13/18, 700 weight
- UI label: 10/14, 700–850 weight

### Radius

- Small controls: 8–11 px
- Cards: 14–18 px
- Editorial panels: 20–24 px
- Hero stage: 36 px

## Component variants

Build variants for:

- Product card: default / hover / saved / compared / sponsored
- Service card: default / assured / unavailable
- Search: idle / focus / gathering / populated
- Pixel Octo: idle / gathering / happy / error
- Navigation: default / hover / selected
- Compare dock: 1 / 2 / 3 products
- Offer row: default / best overall / unavailable

## Motion

- Use 200–350 ms for interface transitions.
- Use the custom easing `cubic-bezier(.2,.8,.2,1)`.
- Octo tentacles should move asymmetrically and subtly.
- Gathering mode uses stepped scan lines, a light vertical float and orbiting signal cards.
- Respect reduced-motion preferences.

## Prototype flows

1. Search from hero → gathering animation → results.
2. Save product → toast → Saved screen.
3. Add two products → compare dock → product comparison.
4. Open command palette with `Cmd/Ctrl + K`.
5. Open local services → select provider → booking CTA.
