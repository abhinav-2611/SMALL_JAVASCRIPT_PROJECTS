let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!');
    } else if (guess < 1) {
        alert('Please enter a value greater than or equal to 1.');
    } else if (guess > 100) {
        alert('Please enter a value less than or equal to 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 6) {
            cleanupGuess(guess);
            displayMessage(`Game over..random number was ${randomNum}`);
            endGame();
        } else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is too low!`);
    } else {
        displayMessage(`Number is too high!`);
    }
}

function cleanupGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    const guessRemained = 6 - numGuess;
    if (guessRemained >= 0) {
        remaining.innerHTML = guessRemained;
    }
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `${message}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}