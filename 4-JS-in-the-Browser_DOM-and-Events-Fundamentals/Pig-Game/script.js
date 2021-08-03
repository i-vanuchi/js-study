'use strict';

// Selecting Elements
const elmScore0 = document.querySelector('#score--0');
const elmScore1 = document.querySelector('#score--1');
const elmPlayer0 = document.querySelector('.player--0');
const elmPlayer1 = document.querySelector('.player--1');
const elmCurrent0 = document.getElementById('current--0');
const elmCurrent1 = document.getElementById('current--1');
const elmDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Control variables
let scores, activePlayer, currentScore, playing;

// FUNCTIONS
const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    elmPlayer0.classList.toggle('player--active');
    elmPlayer1.classList.toggle('player--active');
}
// Starting conditions
const init = function() {
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    elmScore0.textContent = 0;
    elmScore1.textContent = 0;
    elmCurrent0.textContent = 0;
    elmCurrent1.textContent = 0;
    playing = true;
    elmDice.classList.add('hidden');
    elmPlayer0.classList.remove('player--winner');
    elmPlayer1.classList.remove('player--winner');
    elmPlayer0.classList.add('player--active');
}

init();

// Rolling the dice
btnRoll.addEventListener('click', function() {
    if (playing) {
        // Generate the dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice img according to the dice number
        elmDice.src = `dice-${dice}.png`;
        elmDice.classList.remove('hidden');

        // Check for rolled 1.
        if(dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        } else {
            switchPlayer();
        }
    }
});
// Holding the score
btnHold.addEventListener('click', function() {
    if (playing) {
        // 1 Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        // 2 Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            elmDice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});
// New Game
btnNew.addEventListener('click', init);