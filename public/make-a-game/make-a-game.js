const GENRE_OPTIONS = [
  {
    name: 'Arcade'
  },
  {
    name: 'Action'
    subGenres: []
  },
  {
    name: 'Adventure'
  },
  {
    name: 'Racing'
  },
  {
    name: 'Role-Playing Game (RPG)'
  },
  {
    name: 'Simulation'
  },
  {
    name: 'Sports'
  },
  {
    name: 'Strategy'
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
    name: 'Chocolate Coconut Chai'
  }
]

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
