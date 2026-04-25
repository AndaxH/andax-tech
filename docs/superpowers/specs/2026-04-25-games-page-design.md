# Games Page Design

Date: 2026-04-25

## Goal

Add a `/games` route that displays Andax's BoardGameGeek collection as a browsable grid plus a randomizer that suggests a game based on player count and max play time. Mirror the existing `/tea` pattern — static HTML/CSS/JS in `public/`, redirect in `next.config.js`.

## Architecture

Static page served from `public/games/`. Build-time data fetch from BoardGameGeek XML API. JSON committed to repo so dev works offline.

### Components

1. **`scripts/gen-games.js`** — Node script run manually or as part of build.
   - Fetches `https://boardgamegeek.com/xmlapi2/collection?username=Andax&own=1&stats=1`.
   - Handles BGG's HTTP 202 "queued" response: retry up to 5 times with 5s backoff.
   - Parses XML response. Writes `public/games/games.json`.
   - On failure: log clear error, exit non-zero, leave existing JSON intact.

2. **`public/games/games.json`** — committed to repo.
   - Refreshed via `pnpm gen-games`.
   - Per-game shape:

     ```json
     {
       "id": "12345",
       "name": "Wingspan",
       "thumbnail": "https://...",
       "minPlayers": 1,
       "maxPlayers": 5,
       "playingTime": 70,
       "year": 2019
     }
     ```

3. **`public/games/index.html`** — two-panel layout.
   - Left panel: grid of game cards (thumbnail + name + player/time meta). Each card links to `https://boardgamegeek.com/boardgame/{id}`.
   - Right panel: result area + Randomize button + filters.

4. **`public/games/games.css`** — styling consistent with `/tea` aesthetic (theme-color `#faf8f5`, similar typography).

5. **`public/games/games.js`** — fetches `games.json`, renders grid, wires up filters and randomizer.

6. **`next.config.js`** — add redirect `/games` → `/games/index.html` (matches existing pattern for `/tea`, `/verses`, etc.).

7. **`package.json`** — add `"gen-games": "node scripts/gen-games.js"` script.

## Filter UI

- **Players:** number input picker, 1–8+. Game matches if `minPlayers ≤ N ≤ maxPlayers`.
- **Max time:** slider. Off = no limit. Otherwise game matches if `playingTime ≤ maxTime`. Suggested stops: 30, 60, 90, 120 min.

## Randomizer Logic

```
filtered = games.filter(g =>
  g.minPlayers <= playerCount &&
  g.maxPlayers >= playerCount &&
  (maxTime === null || g.playingTime <= maxTime)
)
pick = filtered[Math.floor(Math.random() * filtered.length)]
```

Display: thumbnail, name, player range, play time, link to BGG page.

## Error & Edge Cases

- **BGG API 202 (queued):** script retries 5x with 5s backoff before failing.
- **BGG API down at build:** script exits non-zero. Existing committed `games.json` keeps page working.
- **Empty filter result:** show "No games match. Loosen filters."
- **Missing thumbnail in BGG data:** fallback placeholder image (or omit image, show name-only card).
- **Missing playingTime:** treat as 0 (always passes max-time filter).

## Build Integration

- `pnpm gen-games` — manual refresh.
- Do NOT chain into `pnpm build` automatically; keeps build offline-safe and avoids BGG flakiness breaking deploys. User runs `gen-games` when collection changes, commits updated JSON.

## File Tree

```
public/games/
  index.html
  games.css
  games.js
  games.json
scripts/
  gen-games.js
```

## Out of Scope

- Live BGG sync at runtime.
- Wishlist / non-owned games.
- Complexity / rating filters (can add later).
- Search / sort UI on grid.
