// Show the modal window after 15 seconds
setTimeout(function () {
   document.querySelector('.modal').style.display = 'block'
}, 2500)

// Hide the modal window when the close button is clicked
document.querySelector('.close-button').addEventListener('click', function () {
   document.querySelector('.modal').style.display = 'none'
})

// Hide the modal window when the 'ESC' key is pressed
document.addEventListener('keydown', function (event) {
   if (event.keyCode === 27) {
      document.querySelector('.modal').style.display = 'none'
   }
})

// const h1 = document.querySelector('h1')
// const h3 = document.querySelector('h3')
// const shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S']
// const shortcutsUse = ['найти', 'выделить', 'скопировать', 'вставить', 'сохранить']

// let keyCombination = shortcuts[0]

// h1.innerHTML = `${keyCombination}`

// document.addEventListener('keydown', function (event) {
//    event.preventDefault()

//    if (event.ctrlKey && event.keyCode == 70) {
//       h1.style.color = '#cbfb45'
//       h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[0]}`

//       setTimeout(() => {
//          keyCombination = shortcuts[1]
//          h1.innerHTML = `${keyCombination}`
//          h3.innerHTML = ``
//          h1.style.color = 'white'
//       }, 2000)
//    } else if (event.ctrlKey && event.keyCode == 65) {
//       h1.style.color = '#cbfb45'
//       h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[1]}`

//       setTimeout(() => {
//          keyCombination = shortcuts[2]
//          h1.innerHTML = `${keyCombination}`
//          h3.innerHTML = ``
//          h1.style.color = 'white'
//       }, 2000)
//    } else if (event.ctrlKey && event.keyCode == 67) {
//       h1.style.color = '#cbfb45'
//       h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[2]}`

//       setTimeout(() => {
//          keyCombination = shortcuts[3]
//          h1.innerHTML = `${keyCombination}`
//          h3.innerHTML = ``
//          h1.style.color = 'white'
//       }, 2000)
//    } else if (event.ctrlKey && event.keyCode == 86) {
//       h1.style.color = '#cbfb45'
//       h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[3]}`

//       setTimeout(() => {
//          keyCombination = shortcuts[4]
//          h1.innerHTML = `${keyCombination}`
//          h3.innerHTML = ``
//          h1.style.color = 'white'
//       }, 2000)
//    } else if (event.ctrlKey && event.keyCode == 83) {
//       h1.style.color = '#cbfb45'
//       h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[4]}`

//       setTimeout(() => {
//          keyCombination = 'Пройдено!'
//          h1.innerHTML = `${keyCombination}`
//          h3.innerHTML = ``
//          h1.style.color = '#cbfb45'
//       }, 2000)
//    }
// })
