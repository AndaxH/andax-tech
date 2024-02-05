const GENRE_OPTIONS = [
  {
    name: 'Arcade'
  },
  {
    name: 'Action',
    subGenres: [
      {
        name: "Beat 'em up",
        link: 'https://en.wikipedia.org/wiki/Beat_%27em_up'
      },
      { name: 'Fighting', link: 'https://en.wikipedia.org/wiki/Fighting_game' },
      {
        name: 'Maze',
        link: 'https://en.wikipedia.org/wiki/List_of_maze_video_games'
      },
      { name: 'Stealth' },
      { name: 'Hack & Slash' }
    ]
  },
  {
    name: 'Adventure',
    subGenres: [
      {
        name: 'Interactive Fiction',
        link: 'https://en.wikipedia.org/wiki/Interactive_fiction'
      },
      {
        name: 'Point & Click',
        link: 'https://en.wikipedia.org/wiki/Point-and-click_adventure_game'
      },
      {
        name: 'Visual Novel',
        link: 'https://en.wikipedia.org/wiki/Visual_novel'
      },
      {
        name: 'Walking Simulator',
        link: 'https://en.wikipedia.org/wiki/Walking_simulator'
      },
      { name: 'Escape Room' }
    ]
  },
  {
    name: 'Roguelike Deckbuilder'
  },
  {
    name: 'Roguelike'
  },
  {
    name: 'Roguelite'
  },
  {
    name: 'Horror'
  },
  {
    name: 'Racing'
  },
  {
    name: 'Role-Playing Game (RPG)',
    subGenres: [
      { name: 'Dungeon Crawl' },
      { name: 'Monster-taming' },
      { name: 'Tactical' }
    ]
  },
  {
    name: 'Simulation',
    subGenres: [
      { name: 'Fishing' },
      { name: 'Hunting' },
      { name: 'Racing' },
      { name: 'Flight' },
      { name: 'Space' },
      { name: 'Underwater' },
      { name: 'Train' },
      { name: 'Vehicular Combat' },
      { name: 'City Builder' },
      { name: 'Life' }
    ]
  },
  {
    name: 'Sports'
  },
  {
    name: 'Strategy',
    subGenres: [
      { name: '4X', link: 'https://en.wikipedia.org/wiki/4X' },
      {
        name: 'Auto battler',
        link: 'https://en.wikipedia.org/wiki/Auto_battler'
      },
      {
        name: 'Real-time',
        link: 'https://en.wikipedia.org/wiki/Real-time_strategy'
      },
      {
        name: 'Tower Defense',
        link: 'https://en.wikipedia.org/wiki/Tower_defense'
      },
      {
        name: 'Turn-based',
        link: 'https://en.wikipedia.org/wiki/Turn-based_strategy'
      },
      { name: 'Grand', link: 'https://en.wikipedia.org/wiki/Wargame' }
    ]
  },
  {
    name: 'Shooter',
    subGenres: [
      { name: 'Arena', link: 'https://en.wikipedia.org/wiki/Arena_shooter' },
      'First-person',
      'Hero',
      "Shoot 'em up (Bullet hell)",
      'Tactical',
      'Third-person'
    ]
  },
  {
    name: 'Platformer',
    link: 'https://en.wikipedia.org/wiki/Platformer'
  },
  {
    name: 'Action Role-Playing Game',
    subGenres: [
      {
        name: 'Diablo-like',
        link: 'https://en.wikipedia.org/wiki/Diablo_clone'
      },
      { name: 'Soulslike' },
      { name: 'Looter shooter ' }
    ]
  },
  { name: 'Rhythm' },
  { name: 'Puzzle' },
  { name: 'Runner' },
  { name: 'Dating' },
  { name: 'Farming' },
  { name: 'Sandbox' }
]

const THEME_OPTIONS = [
  { name: 'Fantasy' },
  { name: 'Sci-fi' },
  { name: 'Comedy' },
  { name: 'Romance' },
  { name: 'Historical' },
  { name: 'Western' },
  { name: 'Cyberpunk' },
  { name: 'Steampunk' },
  { name: 'Post-apocalyptic' },
  { name: 'Survival' },
  { name: 'Superhero' },
  { name: 'Martial arts' },
  { name: 'Military' },
  { name: 'Spiritual' },
  { name: 'Prehistoric' },
  { name: 'Mafia' },
  { name: 'Anime' },
  { name: 'Primordial' },
  { name: 'Medieval' },
  { name: 'Corporate dystopia' }
]

const CHARACTER_OPTIONS = [
  { name: 'Humans' },
  { name: 'Elves' },
  { name: 'Dwarves' },
  { name: 'Orcs' },
  { name: 'Goblins' },
  { name: 'Trolls' },
  { name: 'Giants' },
  { name: 'Dragons' },
  { name: 'Fairies' },
  { name: 'Mermaids' },
  { name: 'Vampires' },
  { name: 'Werewolves' },
  { name: 'Zombies' },
  { name: 'Robots' },
  { name: 'Aliens' },
  { name: 'Mutants' },
  { name: 'Monsters' },
  { name: 'Animals' },
  { name: 'Plants' },
  { name: 'Inanimate objects' },
  { name: 'Mythical creatures' },
  { name: 'Gods' },
  { name: 'Demons' },
  { name: 'Angels' },
  { name: 'Spirits' },
  { name: 'Ghosts' },
  { name: 'Psychics' },
  { name: 'Time travelers' },
  { name: 'Clones' },
  { name: 'Androids' },
  { name: 'Cyborgs' },
  { name: 'Artificial intelligence' },
  { name: 'Pandas' },
  { name: 'Koalas' },
  { name: 'Kangaroos' },
  { name: 'Turtles' },
  { name: 'Monkeys' }
]

const GAME_MECHANIC_OPTIONS = []

const main = () => {
  console.log('main')
  const randomizeButton = document.getElementById('randomize')
  const resultText = document.getElementById('result-text')

  const generateResultText = () => {
    console.log('hello')
    let genreOption
    let genreOptionName
    let themeOption
    let characterOption

    genreOption =
      GENRE_OPTIONS[Math.floor(Math.random() * GENRE_OPTIONS.length)]
    genreOptionName = genreOption.name

    if (genreOption.subGenres && Math.random() > 0.5) {
      genreOptionName = `${
        genreOption.subGenres[
          Math.floor(Math.random() * genreOption.subGenres.length)
        ].name
      } ${genreOption.name}`
    }

    themeOption =
      THEME_OPTIONS[Math.floor(Math.random() * THEME_OPTIONS.length)]
    characterOption =
      CHARACTER_OPTIONS[Math.floor(Math.random() * CHARACTER_OPTIONS.length)]

    resultText.innerText = `🎮 ${genreOptionName} game with ${themeOption.name.toLowerCase()} ${characterOption.name.toLowerCase()}!`
  }

  randomizeButton.addEventListener('click', () => {
    generateResultText()
  })
}

main()
