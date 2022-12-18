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
