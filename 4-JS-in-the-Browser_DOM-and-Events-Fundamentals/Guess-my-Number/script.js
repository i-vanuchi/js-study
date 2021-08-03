'use strict';

// Elements
const number = document.querySelector('.number');
const body = document.querySelector('body');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const attemptsDisplay = document.querySelector('.try');

// FUNCTIONS
// Generates a number between 1 and 20
const generateSecretNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}
// Displays a message to the player
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// VARIABLES
let secretNumber = generateSecretNumber();
let scoreValue = 20;
let highscoreValue = 0;
let attempts = 5;

// Handling with the 'Check" button
checkBtn.addEventListener('click', function() {
    
    const guessValue = Number(guess.value);
    
    // When there is no input or the value isn't between 1 and 20.
    if (!guessValue || guessValue < 1 || guessValue > 20) {
        displayMessage('⛔ Invalid number!');
    
    //When the player wins
    } else if (guessValue === secretNumber) {

        displayMessage('🔥 Correct Number!');
        number.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        checkBtn.setAttribute('disabled', '');

        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            highscore.textContent = highscoreValue;
        }

    // When the player choose a wrong number
    } else if (guessValue !== secretNumber) {
        attempts--;
        attemptsDisplay.textContent = attempts;

        if (attempts > 0) {
            displayMessage(guessValue > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
            scoreValue--;
            score.textContent = scoreValue;
        } else {
            displayMessage('😭 You lost the game!');
            number.textContent = secretNumber;
            score.textContent = 0;
            body.style.backgroundColor = '#c04141';
            number.style.width = '30rem';
            checkBtn.setAttribute('disabled', '');
        };
    }
});

// Handling with the "Again" button
document.querySelector('.again').addEventListener('click', function() {
    scoreValue = 20;
    attempts = 5;
    secretNumber = generateSecretNumber();
    displayMessage('Start guessing...');
    number.textContent = '?';
    score.textContent = scoreValue;
    attemptsDisplay.textContent = attempts;
    guess.value = '';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    checkBtn.removeAttribute('disabled');       
})