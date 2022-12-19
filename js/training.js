const h1 = document.querySelector('h1')
const h3 = document.querySelector('h3')
const shortcuts = ['Ctrl+F5', 'Ctrl+F6', 'Ctrl+F7']
const shortcutsUse = ['скопировать', 'вставить', 'вырезать']

let keyCombination = shortcuts[0]

h1.innerHTML = `${keyCombination}`

document.addEventListener('keydown', function (event) {
   event.preventDefault()

   if (event.ctrlKey && event.key === 'F5') {
      h1.style.color = 'green'
      h3.innerHTML = `Нажмите ${keyCombination} чтобы ${shortcutsUse[0]}`

      setTimeout(() => {
         keyCombination = 'Ctrl+F6'
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 3000)
   } else if (event.ctrlKey && event.key === 'F6') {
      h1.style.color = 'green'
      h3.innerHTML = `Нажмите ${keyCombination} чтобы ${shortcutsUse[1]}`

      setTimeout(() => {
         keyCombination = 'Ctrl+F7'
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 3000)
   } else if (event.ctrlKey && event.key === 'F7') {
      h1.style.color = 'green'
      h3.innerHTML = `Нажмите ${keyCombination} чтобы ${shortcutsUse[2]}`

      setTimeout(() => {
         keyCombination = 'Ctrl+F8'
         h1.innerHTML = `${keyCombination}`
         h3.innerHTML = ``
         h1.style.color = 'white'
      }, 3000)
   }
})
