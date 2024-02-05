const GENRE_OPTIONS = [
  {
    name: 'Arcade'
  },
  {
    name: 'Action'
    subGenres: [{ name: "Beat 'em up", link: "https://en.wikipedia.org/wiki/Beat_%27em_up" },
    { name: "Fighting", link: "https://en.wikipedia.org/wiki/Fighting_game" },
    { name: "Maze", link: "https://en.wikipedia.org/wiki/List_of_maze_video_games" },
    { name: "Stealth" }, 
    { name: "Hack and slash" },
  ]
  },
  {
    name: 'Adventure',
    subGenres: [
      { name: "Interactive fiction", link: "https://en.wikipedia.org/wiki/Interactive_fiction" },
      { name: "Point and click", link: "https://en.wikipedia.org/wiki/Point-and-click_adventure_game" },
      { name: "Visual novel", link: "https://en.wikipedia.org/wiki/Visual_novel" },
      { name: "Walking simulator", link: "https://en.wikipedia.org/wiki/Walking_simulator" },
      { name: "Escape room" }
    ]
  },
  {
    name: 'Roguelike Deckbuilder',
  },
  {
    name: 'Roguelike',
  },
  {
    name: 'Roguelite',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Racing'
  },
  {
    name: 'Role-Playing Game (RPG)',
    subGenres: [{ name: "Dungeon crawl" }, { name: "Monster-taming"}, { name: "Tactical"}]
  },
  {
    name: 'Simulation'
    subGenres: [{ name: "Fishing " }, { name: "Racing" }, { name: "Flight" }, { name: "Space" }, { name: "Underwater" }, { name: "Train" }, { name: "Vehicular Combat" }, { name: "City builder" }, { name: "Life" }]
  },
  {
    name: 'Sports'
  },
  {
    name: 'Strategy'
    subGenres: [{ name: "4X", link: "https://en.wikipedia.org/wiki/4X" }, { name: "Auto battler", link: "https://en.wikipedia.org/wiki/Auto_battler" }, { name: "Real-time", link: "https://en.wikipedia.org/wiki/Real-time_strategy" }, { name: "Tower defense", link: "https://en.wikipedia.org/wiki/Tower_defense" }, { name: "Turn-based", link: "https://en.wikipedia.org/wiki/Turn-based_strategy" }, { name: "Grand", link: "https://en.wikipedia.org/wiki/Wargame" }]
  },
  {
    name: 'Shooter'
    subGenres: [{ name: "Arena", link: "https://en.wikipedia.org/wiki/Arena_shooter" }, "First-person", "Hero", "Shoot 'em up (Bullet hell)", "Tactical", "Third-person"]
  },
  {
    name: 'Platformer',
    link: 'https://en.wikipedia.org/wiki/Platformer'
  },
  {
    name: 'Actions Role-Playing Game (ARPG)'
    subGenres: [{ name: "Diablo-like", link: "https://en.wikipedia.org/wiki/Diablo_clone" }, { name: "Soulslike" }, { name: "Looter shooter " }]
  },
  { name: "Rhythm" },
  { name: "Puzzle" }
]

const THEME_OPTIONS = [
  { name: "Fantasy" },
  { name: "Sci-fi" },
  { name: "Comedy" },
  { name: "Romance" },
  { name: "Historical" },
  { name: "Western" },
  { name: "Cyberpunk" },
  { name: "Steampunk" },
  { name: "Post-apocalyptic" },
  { name: "Survival" },
  { name: "Superhero" },
  { name: "Martial arts" },
  { name: "Military" },
  { name: "Spiritual" }
]

const CHARACTER_OPTIONS = [
  { name: "Humans" },
  { name: "Elves" },
  { name: "Dwarves" },
  { name: "Orcs" },
  { name: "Goblins" },
  { name: "Trolls" },
  { name: "Giants" },
  { name: "Dragons" },
  { name: "Fairies" },
  { name: "Mermaids" },
  { name: "Vampires" },
  { name: "Werewolves" },
  { name: "Zombies" },
  { name: "Robots" },
  { name: "Aliens" },
  { name: "Mutants" },
  { name: "Monsters" },
  { name: "Animals" },
  { name: "Plants" },
  { name: "Inanimate objects" },
  { name: "Mythical creatures" },
  { name: "Gods" },
  { name: "Demons" },
  { name: "Angels" },
  { name: "Spirits" },
  { name: "Ghosts" },
  { name: "Psychics" },
  { name: "Time travelers" },
  { name: "Clones" },
  { name: "Androids" },
  { name: "Cyborgs" },
  { name: "Artificial intelligence" },
  { name: "Aliens" }
]

const GAME_MECHANIC_OPTIONS = [];

const main = () => {
  const randomizeButton = document.getElementById('randomize')
  const yeahNahButton = document.getElementById('yeah-nah')
  const blackTeaList = document.getElementById('black-tea-list')
  const herbalTeaList = document.getElementById('herbal-tea-list')
  const resultText = document.getElementById('result-text')
  const blackTeaCheckbox = document.getElementById('black-tea')
  const herbalTeaCheckbox = document.getElementById('herbal-tea')
  const teabagCheckbox = document.getElementById('teabag')
  const looseCheckbox = document.getElementById('loose-leaf')

  let lastTeaResult

  const blackTeaOptions = TEA_OPTIONS.filter((tea) => tea.black).sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  const herbalTeaOptions = TEA_OPTIONS.filter((tea) => tea.herbal).sort(
    (a, b) => a.name.localeCompare(b.name)
  )

  blackTeaOptions.forEach((tea) => {
    const teaOption = document.createElement('li')
    let teaOptionDescription
    teaOption.innerText = tea.name
    if (tea.description) {
      teaOptionDescription = document.createElement('li')
      teaOptionDescription.classList.add('tea-description')
      teaOptionDescription.innerText = tea.description
    }
    blackTeaList.appendChild(teaOption)
    if (teaOptionDescription) {
      blackTeaList.appendChild(teaOptionDescription)
    }
  })

  herbalTeaOptions.forEach((tea) => {
    const teaOption = document.createElement('li')
    let teaOptionDescription
    teaOption.innerText = tea.name
    if (tea.description) {
      teaOptionDescription = document.createElement('li')
      teaOptionDescription.classList.add('tea-description')
      teaOptionDescription.innerText = tea.description
    }
    herbalTeaList.appendChild(teaOption)
    if (teaOptionDescription) {
      herbalTeaList.appendChild(teaOptionDescription)
    }
  })

  const generateResultText = (differentTea) => {
    const blackTea = blackTeaCheckbox.checked
    const herbalTea = herbalTeaCheckbox.checked
    const teabag = teabagCheckbox.checked
    const loose = looseCheckbox.checked

    if ((!blackTea && !herbalTea) || (!teabag && !loose)) {
      resultText.innerText =
        'Please select at least one option from each category'
      return
    }

    const filteredTeaOptions = TEA_OPTIONS.filter((tea) => {
      if (blackTea && !tea.black) {
        return false
      }
      if (herbalTea && !tea.herbal) {
        return false
      }
      if ((teabag && tea.teabag) || (loose && tea.loose)) {
        return true
      }
    })

    const randomIndex = Math.floor(Math.random() * filteredTeaOptions.length)
    const randomTea = filteredTeaOptions[randomIndex]

    if (differentTea && lastTeaResult) {
      if (randomTea.name === lastTeaResult.name) {
        generateResultText(true)
        return
      }
    }

    lastTeaResult = randomTea

    resultText.innerText = randomTea.name
    yeahNahButton.disabled = false
  }

  randomizeButton.addEventListener('click', () => {
    generateResultText()
  })

  yeahNahButton.addEventListener('click', () => {
    generateResultText(true)
  })
}

main()
