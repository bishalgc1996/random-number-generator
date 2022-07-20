/*
const number = document.querySelector('.number')
const btn = document.querySelector('.generate')

const generateNumber = () => {
  // Generate number between 1 and 100
  const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
  number.innerHTML = randomNumber
}

btn.addEventListener('click', generateNumber)

 */




/*   Random number generator  */
function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const num = document.querySelector('.number')
const btn = document.querySelector('.reset')

btn.addEventListener('click', function () {
  num.innerHTML = random(1, 100)
})
