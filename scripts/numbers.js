let limit = 10
let num

const $input = document.getElementById('input')
const $guess = document.getElementById('guess')
const $output = document.getElementById('output')
const $restart = document.getElementById('restart')

let responsesCorrect = [
    'A winner is YOU!',
    'That is indeed the correct number!',
    'You won!'
]
let responsesLow = [
    'Needs to be bigger.',
    "That's a very sad small number.",
    'Too low.'
]
let responsesHigh = [
    'Overly sufficient response.',
    'Are you trying to guessmaxx or something?',
    'Sharing is caring, but not that much.'
]

function Check() {
    $output.classList.remove('incorrect')
    $output.classList.remove('correct')

    if ($input.value > num) {
        $output.innerText = PickRandom(responsesHigh)
        $output.classList.add('incorrect')
    } else if ($input.value < num) {
        $output.innerText = PickRandom(responsesLow)
        $output.classList.add('incorrect')
    } else {
        Win()
    }
}

function Win() {
    $output.innerText = PickRandom(responsesCorrect)
    $output.classList.add('correct')

    $guess.classList.add('hidden')
    $restart.classList.remove('hidden')
}

function PickRandom(_array) {
    let index = Math.random() * _array.length
    index = Math.floor(index)

    return _array[index]
}

function Restart() {
    RollNumber()

    $restart.classList.add('hidden')
    $guess.classList.remove('hidden')
}

function RollNumber() {
    $output.innerText = "Guess a number from 1 to "+limit+"."
    
    num = Math.random() * limit + 1
    num = Math.floor(num)
    limit += 5
}


RollNumber()