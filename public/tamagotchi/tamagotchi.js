// Define your pet's initial attributes
let petName = 'Your Pet'
let happiness = 100
let hunger = 0
let cleanliness = 100

function statUpdater(newAmount) {
  if (newAmount >= 0 && newAmount <= 100) {
    return newAmount
  } else if (newAmount < 0) {
    return 0
  } else if (newAmount > 100) {
    return 100
  }
}

// Function to update the status display
function updateStatusDisplay() {
  document.getElementById('pet-name').textContent = petName
  document.getElementById('happiness').textContent = statUpdater(happiness)
  document.getElementById('hunger').textContent = statUpdater(hunger)
  document.getElementById('cleanliness').textContent = statUpdater(cleanliness)
}

function happinessController() {
  if (happiness > 0) {
    let modifier = -5

    if (hunger > 50) {
      modifier -= 5
    }

    if (cleanliness < 50) {
      modifier -= 5
    }

    happiness += modifier
    updateStatusDisplay()
  }
}

function hungerController() {
  if (hunger < 100) {
    hunger += 5 // Adjust the rate of increase as needed
    updateStatusDisplay()
  }
}

function cleanlinessController() {
  if (cleanliness > 0) {
    cleanliness -= 5
    updateStatusDisplay()
  }
}

// Set up intervals for controllers
setInterval(happinessController, 1000)
setInterval(hungerController, 1000)
setInterval(cleanlinessController, 1000)

// Event listeners for interaction buttons
document.getElementById('feed-button').addEventListener('click', function () {
  if (hunger > 0) {
    hunger -= 10 // Adjust as needed
    happiness += 5 // Adjust as needed
    updateStatusDisplay()
  }
})

document.getElementById('clean-button').addEventListener('click', function () {
  if (cleanliness < 100) {
    cleanliness += 10 // Adjust as needed
    happiness += 5 // Adjust as needed
    updateStatusDisplay()
  }
})

document.getElementById('play-button').addEventListener('click', function () {
  happiness += 10 // Adjust as needed
  updateStatusDisplay()
})

// Initial status display update
updateStatusDisplay()
