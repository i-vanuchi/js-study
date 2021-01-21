'use strict';

// Selecting Elements
const elScore0 = document.querySelector('#score--0');
const elScore1 = document.querySelector('#score--1');
const elDice = document.querySelector('.dice');

// Starting conditions
elScore0.textContent = 0;
elScore1.textContent = 0;
elDice.classList.add('hidden');