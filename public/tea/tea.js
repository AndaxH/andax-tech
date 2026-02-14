const TEA_OPTIONS = [
  {
    name: 'Melbourne Breakfast (T2)',
    description: 'Black tea w/ vanilla',
    teabag: true,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'New York Breakfast (T2)',
    description: 'Black tea w/ cinnamon',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Canberra Breakfast (T2)',
    description:
      'Black tea w/ cinnamon & coconut (tastes like an anzac biscuit)',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Christmas Tea',
    teabag: false,
    loose: true,
    black: true,
    herbal: false
  },
  {
    name: 'Peppermint (T2)',
    teabag: true,
    loose: false,
    black: false,
    herbal: true
  },
  {
    name: 'Black Tea (Generic Tea Bag)',
    description: 'something breakfast (purchased on sale, probably)',
    teabag: true,
    loose: false,
    black: true,
    herbal: false
  },
  {
    name: 'Gorgeous Geisha (T2)',
    description:
      'A show-stopping smooth green tea with strawberries and lush hints of cream.',
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
    name: '(Lemongrass) Bamboo Berry',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'Earl Grey',
    teabag: true,
    loose: false,
    black: true,
    herbal: false
  },
  {
    name: 'Orange & Cinnamon',
    teabag: true,
    loose: false,
    black: false,
    herbal: true
  },
  {
    name: 'Lemongrass & Ginger',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'Sleep Well',
    description: 'Chamomile, Orange Blossom & Honey',
    teabag: false,
    loose: true,
    black: false,
    herbal: true
  },
  {
    name: 'Chai',
    description: 'Spiced black tea',
    teabag: true,
    loose: false,
    black: true,
    herbal: false
  }
]

const main = () => {
  const randomizeButton = document.getElementById('randomize')
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

  const renderTeaItem = (tea, list) => {
    const li = document.createElement('li')
    li.classList.add('tea-item')

    const name = document.createElement('div')
    name.classList.add('tea-name')
    name.textContent = tea.name
    li.appendChild(name)

    if (tea.description) {
      const desc = document.createElement('div')
      desc.classList.add('tea-description')
      desc.textContent = tea.description
      li.appendChild(desc)
    }

    list.appendChild(li)
  }

  blackTeaOptions.forEach((tea) => renderTeaItem(tea, blackTeaList))
  herbalTeaOptions.forEach((tea) => renderTeaItem(tea, herbalTeaList))

  const generateResultText = () => {
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
      const matchesType = (blackTea && tea.black) || (herbalTea && tea.herbal)
      const matchesFormat = (teabag && tea.teabag) || (loose && tea.loose)
      return matchesType && matchesFormat
    })

    if (filteredTeaOptions.length === 0) {
      resultText.innerText = 'No teas match your filters'
      return
    }

    const candidates =
      lastTeaResult && filteredTeaOptions.length > 1
        ? filteredTeaOptions.filter((tea) => tea.name !== lastTeaResult.name)
        : filteredTeaOptions

    const randomIndex = Math.floor(Math.random() * candidates.length)
    lastTeaResult = candidates[randomIndex]

    resultText.innerText = lastTeaResult.name
  }

  randomizeButton.addEventListener('click', () => {
    generateResultText()
  })
}

main()
