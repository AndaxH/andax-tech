const TEA_OPTIONS = [
  {
    name: 'Melbourne Breakfast',
    teabag: true,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'New York Breakfast',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Canberra Breakfast',
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
    black: true,
    herbal: false
  },
  {
    name: 'New York Breakfast (fancy)',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Tea Tonic Assorted Tin',
    teabag: true,
    loose: false,
    black: true,
    herbal: true
  },
  {
    name: 'Black Tea Bag (Generic)',
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
    black: true,
    herbal: false
  }
]

const main = () => {
  const randomizeButton = document.getElementById('randomize')
  const yeahNahButton = document.getElementById('yeah-nah')
  const optionsList = document.getElementById('tea-list')
  const resultText = document.getElementById('result-text')
  const blackTeaCheckbox = document.getElementById('black-tea')
  const herbalTeaCheckbox = document.getElementById('herbal-tea')
  const teabagCheckbox = document.getElementById('teabag')
  const looseCheckbox = document.getElementById('loose-leaf')

  let lastTeaResult

  TEA_OPTIONS.forEach((tea) => {
    const teaOption = document.createElement('li')
    teaOption.innerText = tea.name
    optionsList.appendChild(teaOption)
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
