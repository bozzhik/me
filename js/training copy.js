const h1 = document.querySelector('h1')
const h3 = document.querySelector('h3')
const shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S']
const shortcutsUse = ['найти', 'выделить', 'скопировать', 'вставить', 'сохранить']

let keyCombination = shortcuts[0]

h1.innerHTML = `${keyCombination}`

document.addEventListener('keydown', function (event) {
   event.preventDefault()

   if (event.ctrlKey && event.keyCode == 70) {
      h1.style.color = '#cbfb45'
      h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[0]}`

      setTimeout(() => {
         keyCombination = shortcuts[1]
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 2000)
   } else if (event.ctrlKey && event.keyCode == 65) {
      h1.style.color = '#cbfb45'
      h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[1]}`

      setTimeout(() => {
         keyCombination = shortcuts[2]
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 2000)
   } else if (event.ctrlKey && event.keyCode == 67) {
      h1.style.color = '#cbfb45'
      h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[2]}`

      setTimeout(() => {
         keyCombination = shortcuts[3]
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 2000)
   } else if (event.ctrlKey && event.keyCode == 86) {
      h1.style.color = '#cbfb45'
      h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[3]}`

      setTimeout(() => {
         keyCombination = shortcuts[4]
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 2000)
   } else if (event.ctrlKey && event.keyCode == 83) {
      h1.style.color = '#cbfb45'
      h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[4]}`

      setTimeout(() => {
         keyCombination = 'Пройдено!'
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = '#cbfb45'
      }, 2000)
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the key combination to listen for
const keyCombination = 'Ctrl+Shift+H'

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Check if the key combination is pressed
   if (event.ctrlKey && event.shiftKey && event.key === 'H') {
      // If the key combination is pressed, highlight the h1 element in green
      h1.style.backgroundColor = 'green'
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the array of key combinations to listen for
const keyCombinations = ['Ctrl+Shift+H', 'Ctrl+Shift+J', 'Ctrl+Shift+K']

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Loop through the key combinations array
   for (let i = 0; i < keyCombinations.length; i++) {
      // Split the key combination string into its component keys
      const keys = keyCombinations[i].split('+')

      // Check if the key combination is pressed
      if (keys.includes('Ctrl') && event.ctrlKey && keys.includes('Shift') && event.shiftKey && keys.includes(event.key)) {
         // If the key combination is pressed, highlight the h1 element in green
         h1.style.color = 'green'
      }
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the initial level and array of key combinations
let level = 1
const keyCombinations = [['Ctrl+Shift+H'], ['Ctrl+Shift+J'], ['Ctrl+Shift+K']]

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Get the current level's key combinations
   const currentKeys = keyCombinations[level - 1]

   // Loop through the current level's key combinations
   for (let i = 0; i < currentKeys.length; i++) {
      // Split the key combination string into its component keys
      const keys = currentKeys[i].split('+')

      // Check if the key combination is pressed
      if (keys.includes('Ctrl') && event.ctrlKey && keys.includes('Shift') && event.shiftKey && keys.includes(event.key)) {
         // If the key combination is pressed, advance to the next level
         level++
         // Update the h1 element's text to show the new level
         h1.innerHTML = `Level ${level}`
         // Highlight the h1 element in green
         h1.style.color = 'green'
      } else {
         // If the key combination is not pressed, keep the h1 element red
         h1.style.color = 'red'
      }
   }
})

// Select the h1 element and input field
const h1 = document.querySelector('h1')
const input = document.querySelector('input')

// Set the initial level and array of key combinations
let level = 1
const keyCombinations = [['Ctrl+Shift+H'], ['Ctrl+Shift+J'], ['Ctrl+Shift+K']]

// Add an event listener to the input field to listen for change events
input.addEventListener('change', function () {
   // Get the current level's key combinations
   const currentKeys = keyCombinations[level - 1]

   // Loop through the current level's key combinations
   for (let i = 0; i < currentKeys.length; i++) {
      // Check if the entered value matches the current key combination
      if (input.value === currentKeys[i]) {
         // If the value matches, advance to the next level
         level++
         // Update the h1 element's text to show the new level
         h1.innerHTML = `Level ${level}`
         // Highlight the h1 element in green
         h1.style.color = 'green'
         // Clear the input field
         input.value = ''
      } else {
         // If the value does not match, keep the h1 element red
         h1.style.color = 'red'
      }
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the array of values to use
const values = ['Value 1', 'Value 2', 'Value 3']

// Set the initial index to 0
let index = 0

// Set the interval to change the h1 element's value every 5 seconds
setInterval(function () {
   // Update the h1 element's content with the current value in the array
   h1.innerHTML = values[index]
   // Increment the index and reset it to 0 if it goes out of bounds
   index = (index + 1) % values.length
}, 5000)

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Check if the key combination is pressed
   if (event.ctrlKey && event.key === 'C') {
      // If the key combination is pressed, write a message to the console
      console.log('BANG')
   }
})

// Select the input field
const input = document.querySelector('input')

// Set the initial level
let level = 1

// Add an event listener to the input field to listen for change events
input.addEventListener('change', function () {
   // Get the entered value
   const value = input.value

   // Check the value against the required level
   if (level === 1 && value === '5') {
      // If the value is correct, advance to the next level
      level++
      console.log('Correct! Moving to level 2.')
   } else if (level === 2 && value === '10') {
      // If the value is correct, advance to the next level
      level++
      console.log('Correct! Moving to level 3.')
   } else {
      // If the value is incorrect, display an error message
      console.log('Incorrect! Try again.')
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the key combination to display in the h1 element
const keyCombination = 'Ctrl+C'

// Set the initial color of the h1 element
h1.style.color = 'red'

// Update the h1 element's content with the key combination
h1.innerHTML = `Press ${keyCombination} to turn the text green`

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Check if the key combination is pressed
   if (event.ctrlKey && event.key === 'C') {
      // If the key combination is pressed, highlight the h1 element in green
      h1.style.color = 'green'
   }
})

// Select the h1 element
const h1 = document.querySelector('h1')

// Set the initial key combination to display in the h1 element
let keyCombination = 'Ctrl+C'

// Set the initial color of the h1 element
h1.style.color = 'red'

// Update the h1 element's content with the key combination
h1.innerHTML = `Press ${keyCombination} to turn the text green`

// Add an event listener to the document to listen for keydown events
document.addEventListener('keydown', function (event) {
   // Check if the key combination is pressed
   if (event.ctrlKey && event.key === 'C') {
      // If the key combination is pressed, highlight the h1 element in green
      // and update the key combination to Ctrl+F5
      h1.style.color = 'green'
      keyCombination = 'Ctrl+F5'
      h1.innerHTML = `Press ${keyCombination} to turn the text blue`
   } else if (event.ctrlKey && event.key === 'F5') {
      // If the key combination is pressed, highlight the h1 element in blue
      h1.style.color = 'blue'
   }
})
