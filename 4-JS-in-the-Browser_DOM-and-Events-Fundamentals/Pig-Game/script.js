'use strict';

// Selecting Elements
const elmScore0 = document.querySelector('#score--0');
const elmScore1 = document.querySelector('#score--1');
const elmCurrent0 = document.getElementById('current--0');
const elmCurrent1 = document.getElementById('current--1');
const elmDice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions
elmScore0.textContent = 0;
elmScore1.textContent = 0;
elmDice.classList.add('hidden');

let currentScore = 0;

// Rolling the dice
btnRoll.addEventListener('click', function() {
    // Generate the dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display the dice img according to the dice number
    elmDice.src = `dice-${dice}.png`;
    elmDice.classList.remove('hidden');

    // Check for rolled 1.
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        elmCurrent0.textContent = currentScore;
    } else {
        // Switch to the other player
    }

})