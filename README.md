# Under the Purple Light

A goddess-archetype oracle deck for **[Purple Light Lounge](https://www.skool.com/purple-light-lounge-6229/about)**. Pull a card, browse the full 27-goddess deck, add your own goddesses to it, and keep a private reflection journal — all in a single static site with no backend.

## Features

- **Draw a card** — tap the deck for a random goddess with a message and an invitation (a small suggested action).
- **Filter by element** — Fire, Water, Earth, Air, Aether.
- **Browse the full deck** — grid view of all 27 (plus any you've added).
- **Add your own goddess** — visitors can extend the deck with their own archetypes; additions are saved in the browser (`localStorage`) and stick around on return visits.
- **Reflection journal** — write with any card and save your reflections privately in the browser; download the whole journal as a `.txt` file at any time.

All data lives in the visitor's own browser via `localStorage` — nothing is sent to a server, and there is no backend to run.

## Running locally

No build step. Either:

- Open `index.html` directly in a browser, or
- Serve the folder so relative paths and fonts behave the same as production:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set the source to the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Editing the deck

The deck lives in [`script.js`](script.js) as the `CARDS` array near the top of the file. Each card:

```js
{
  name: "Hekate",
  title: "Keeper of the Keys",
  pantheon: "Greek",
  element: "Fire" | "Water" | "Earth" | "Air" | "Aether",
  message: "her short oracle message",
  invitation: "one small action for today"
}
```

Add, remove, or rewrite freely — no other code needs to change.

## Files

```
index.html   Markup
style.css    All styling (single dark/violet theme, no light mode)
script.js    Deck data + app logic
```

## Credit

Made for [Purple Light Lounge](https://www.skool.com/purple-light-lounge-6229/about).
