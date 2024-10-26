let height = document.getElementById('height')
let weight = document.getElementById('weight')
let button = document.getElementById('button')
let score = document.getElementById('score')
let result = document.querySelector('.result')

button.addEventListener('click', () => {
    let newHeight = Number(height.value)
    let newWeight = Number(weight.value)
    newHeight /= 100
    let squareHeight = newHeight * newHeight
    let bmiValue = newWeight / squareHeight
    score.textContent = bmiValue.toFixed(1)
    result.style.display = 'block'
    if (score.textContent < 18.6) {
        score.style.background = '#ffeaa7'
    }
    else if (score.textContent < 24.9) {
        score.style.background = '#55efc4'
    }
    else {
        score.style.background = '#d63031'
    }
})

let form = document.getElementById('form')
form.addEventListener('submit', ev => {
    ev.preventDefault()
})