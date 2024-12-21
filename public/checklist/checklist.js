const main = () => {
  const resetButton = document.getElementById('reset')

  const resetCheckboxes = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  resetButton.addEventListener('click', () => {
    resetCheckboxes()
  })
}

main()
