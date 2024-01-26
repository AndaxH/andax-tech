const TEA_OPTIONS = [
  {
    name: 'Melbourne Breakfast',
    description: 'Black tea w/ vanilla',
    teabag: true,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'New York Breakfast',
    description: 'Black tea w/ cinnamon',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Canberra Breakfast',
    description:
      'Black tea w/ cinnamon & coconut (tastes like an anzac biscuit)',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Peppermint',
    teabag: true,
    loose: false,
    black: false,
    herbal: true
  },
  {
    name: 'Chai',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'New York Breakfast (fancy)',
    description: 'Black tea w/ vanilla & chocolate (malty sweetness)',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Tea Tonic Assorted Tin',
    description: 'It might be blue 😱',
    teabag: true,
    loose: false,
    black: true,
    herbal: true
  },
  {
    name: 'Black Tea Bag (Generic)',
    description: 'something breakfast (purchased on sale, probably)',
    teabag: true,
    loose: false,
    black: true,
    herbal: false
  },
  {
    name: 'Green Tea Bag (Generic)',
    teabag: true,
    loose: false,
    black: false,
    herbal: true
  },
  {
    name: 'Potency',
    description: 'Japanese white tea',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'Lemongrass Berry',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'Chocolate Coconut Chai',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
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
