import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const IN_PATH = join(__dirname, 'collection.csv')
const OUT_PATH = join(__dirname, '..', 'public', 'games', 'games.json')
const FETCH_DELAY_MS = 250

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const parseCsvLine = (line) => {
  const fields = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQuotes) {
      if (c === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        cur += c
      }
    } else {
      if (c === '"') {
        inQuotes = true
      } else if (c === ',') {
        fields.push(cur)
        cur = ''
      } else {
        cur += c
      }
    }
  }
  fields.push(cur)
  return fields
}

const parseCsv = (text) => {
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const idx = (name) => headers.indexOf(name)

  const iName = idx('objectname')
  const iId = idx('objectid')
  const iMin = idx('minplayers')
  const iMax = idx('maxplayers')
  const iTime = idx('playingtime')
  const iYear = idx('yearpublished')
  const iOwn = idx('own')

  const required = {
    objectname: iName,
    objectid: iId,
    minplayers: iMin,
    maxplayers: iMax,
    playingtime: iTime
  }
  for (const [k, v] of Object.entries(required)) {
    if (v === -1) throw new Error(`CSV missing required column: ${k}`)
  }

  const games = []
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i])
    if (iOwn !== -1 && fields[iOwn] !== '1') continue

    const intOr = (val, fallback = 0) => {
      const n = parseInt(val, 10)
      return Number.isFinite(n) ? n : fallback
    }

    games.push({
      id: fields[iId],
      name: fields[iName],
      thumbnail: null,
      minPlayers: intOr(fields[iMin]),
      maxPlayers: intOr(fields[iMax]),
      playingTime: intOr(fields[iTime]),
      year: iYear !== -1 ? intOr(fields[iYear], null) : null
    })
  }
  return games
}

const fetchThumbnail = async (id) => {
  const url = `https://api.geekdo.com/api/geekitems?objectid=${id}&objecttype=thing&pageid=1&showcount=1`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  const images = data?.item?.images
  if (!images) return null
  return images.square200 || images.thumb || images.previewthumb || null
}

const loadExistingThumbnails = () => {
  if (!existsSync(OUT_PATH)) return new Map()
  try {
    const existing = JSON.parse(readFileSync(OUT_PATH, 'utf8'))
    const map = new Map()
    for (const g of existing) {
      if (g.thumbnail) map.set(g.id, g.thumbnail)
    }
    return map
  } catch {
    return new Map()
  }
}

const main = async () => {
  if (!existsSync(IN_PATH)) {
    console.error(
      `Missing ${IN_PATH}.\n\n` +
        `To refresh games, export your BGG collection as CSV:\n` +
        `  1. Visit https://boardgamegeek.com/collection/user/Andax\n` +
        `  2. Click "Download Collection" (logged in)\n` +
        `  3. Save the CSV to scripts/collection.csv\n` +
        `  4. Re-run pnpm gen-games`
    )
    process.exit(1)
  }

  const csv = readFileSync(IN_PATH, 'utf8')
  const games = parseCsv(csv)
  if (games.length === 0) {
    throw new Error('No games parsed from CSV file')
  }

  const cache = loadExistingThumbnails()
  let cached = 0
  let fetched = 0
  let failed = 0

  for (const game of games) {
    if (cache.has(game.id)) {
      game.thumbnail = cache.get(game.id)
      cached++
      continue
    }
    try {
      const thumb = await fetchThumbnail(game.id)
      game.thumbnail = thumb
      fetched++
      console.warn(`  [${fetched + cached}/${games.length}] ${game.name}`)
      await sleep(FETCH_DELAY_MS)
    } catch (err) {
      failed++
      console.warn(`  Failed thumbnail for ${game.name} (${game.id}): ${err.message}`)
    }
  }

  games.sort((a, b) => a.name.localeCompare(b.name))
  mkdirSync(dirname(OUT_PATH), { recursive: true })
  writeFileSync(OUT_PATH, JSON.stringify(games, null, 2))
  console.warn(
    `Wrote ${games.length} games (${cached} cached, ${fetched} fetched, ${failed} failed) to ${OUT_PATH}`
  )
}

main().catch((err) => {
  console.error('Failed to generate games.json:', err.message)
  process.exit(1)
})
