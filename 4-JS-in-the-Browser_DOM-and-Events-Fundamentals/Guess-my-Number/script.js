'use strict';

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
let score = 20;
let highscore = 0;
let tries = 5;

// Handling with the 'Check" button
document.querySelector('.check').addEventListener('click', function() {
    
    const guess = Number(document.querySelector('.guess').value);
    
    // When theres is no input
    if (!guess || guess < 1 || guess > 20) {
        displayMessage('⛔ No number!');
    
    //When the player wins
    } else if (guess === secretNumber) {

        displayMessage('🔥 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').setAttribute('disabled', '');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When the player choose a wrong number
    } else if (guess !== secretNumber) {
        if (score > 16) {
            displayMessage(guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😭 You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#c04141';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.check').setAttribute('disabled', '');
        };
        tries--;
        document.querySelector('.try').textContent = tries;
    }
});

// Handling with the "Again" button
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    tries = 5;
    secretNumber = generateSecretNumber();
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.try').textContent = tries;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').removeAttribute('disabled');       
})