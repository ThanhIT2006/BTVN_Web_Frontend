// step 1
let currentColor = 'transparent'

// step 2
let colors = ['red', 'orange', 'yellow', 'blue', 'green', 'cyan', 'violet','#5B2C0D',`#415763`,`#0E8FD2`]

// step 3
function getColor(previousColor) {
  let listColors =colors.filter(color => color !== previousColor)
  randomColor = listColors[Math.floor(Math.random() * listColors.length)]
  currentColor = randomColor
  return randomColor
}

// step 4
let btnElement = document.querySelector(".change")
let bodyElement = document.querySelector(".container")

btnElement.addEventListener('click', function() {
  bodyElement.style.backgroundColor = getColor(currentColor)
})
