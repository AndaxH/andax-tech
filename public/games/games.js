const main = async () => {
  const gamesList = document.getElementById('games-list')
  const playerCountInput = document.getElementById('player-count')
  const maxTimeInput = document.getElementById('max-time')
  const maxTimeDisplay = document.getElementById('max-time-display')
  const randomizeButton = document.getElementById('randomize')
  const resultLink = document.getElementById('result-link')
  const resultThumb = document.getElementById('result-thumb')
  const resultText = document.getElementById('result-text')
  const resultMeta = document.getElementById('result-meta')

  let games = []
  let lastResultId = null

  try {
    const res = await fetch('games.json')
    games = await res.json()
  } catch (err) {
    resultText.innerText = 'Failed to load games.'
    return
  }

  if (games.length === 0) {
    const li = document.createElement('li')
    li.className = 'empty-state'
    li.innerText =
      'No games loaded. Run pnpm gen-games to populate from BGG export.'
    gamesList.appendChild(li)
    resultText.innerText = 'No games yet.'
    randomizeButton.disabled = true
    return
  }

  const renderGameCard = (game) => {
    const li = document.createElement('li')
    li.classList.add('game-card')

    const a = document.createElement('a')
    a.href = `https://boardgamegeek.com/boardgame/${game.id}`
    a.target = '_blank'
    a.rel = 'noopener'

    if (game.thumbnail) {
      const img = document.createElement('img')
      img.classList.add('game-thumb')
      img.src = game.thumbnail
      img.alt = ''
      img.loading = 'lazy'
      a.appendChild(img)
    } else {
      const ph = document.createElement('div')
      ph.classList.add('game-thumb-placeholder')
      ph.innerText = game.name
      a.appendChild(ph)
    }

    const name = document.createElement('div')
    name.classList.add('game-name')
    name.innerText = game.name
    a.appendChild(name)

    li.appendChild(a)
    gamesList.appendChild(li)
  }

  games.forEach(renderGameCard)

  const formatTime = (mins) => (mins === 0 ? 'no limit' : `≤ ${mins} min`)

  const updateMaxTimeDisplay = () => {
    maxTimeDisplay.innerText = formatTime(parseInt(maxTimeInput.value, 10))
  }
  maxTimeInput.addEventListener('input', updateMaxTimeDisplay)
  updateMaxTimeDisplay()

  const pickRandom = () => {
    const playerCount = parseInt(playerCountInput.value, 10)
    const maxTime = parseInt(maxTimeInput.value, 10)

    const filtered = games.filter((g) => {
      const playersOk =
        g.minPlayers <= playerCount && g.maxPlayers >= playerCount
      const timeOk = maxTime === 0 || g.playingTime === 0 || g.playingTime <= maxTime
      return playersOk && timeOk
    })

    if (filtered.length === 0) {
      resultText.innerText = 'No games match. Loosen filters.'
      resultMeta.innerText = ''
      resultThumb.classList.remove('visible')
      resultLink.href = '#'
      return
    }

    const candidates =
      lastResultId && filtered.length > 1
        ? filtered.filter((g) => g.id !== lastResultId)
        : filtered

    const pick = candidates[Math.floor(Math.random() * candidates.length)]
    lastResultId = pick.id

    resultText.innerText = pick.name
    const playerStr =
      pick.minPlayers === pick.maxPlayers
        ? `${pick.minPlayers} players`
        : `${pick.minPlayers}–${pick.maxPlayers} players`
    const timeStr = pick.playingTime > 0 ? ` · ${pick.playingTime} min` : ''
    resultMeta.innerText = playerStr + timeStr

    resultLink.href = `https://boardgamegeek.com/boardgame/${pick.id}`
    if (pick.thumbnail) {
      resultThumb.src = pick.thumbnail
      resultThumb.classList.add('visible')
    } else {
      resultThumb.classList.remove('visible')
    }
  }

  randomizeButton.addEventListener('click', pickRandom)
}

main()
