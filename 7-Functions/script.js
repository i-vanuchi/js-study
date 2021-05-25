'use strict';

// -------- Lecture: Default Parameters --------

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   passengersNum = 3,
//   price = 199 * passengersNum
// ) {
//   // ES5
//   // passengersNum = passengersNum || 1;
//   // price = price || '$199';

//   const booking = {
//     flightNum,
//     passengersNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LFH123');
// createBooking('LFH123', 2, 800);
// createBooking('LFH123', 2);
// createBooking('LFH123', undefined, 1000);

// -------- Lecture: How Passing Arguments Works: Value vs. Reference --------

// const flight = 'LH234';
// const israel = {
//   name: 'Israel Vanuchi',
//   passport: 4561234756,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // não altera o valor original (flight), pois é primitivo
//   passenger.name = 'Mr. ' + passenger.name; // altera o valor original do objeto, pois é apenas outro identificador para o mesmo objeto.

//   if (passenger.passport === 4561234756) {
//     alert('Checked in!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, israel);
// // console.log(flight);
// // console.log(israel);

// // É o mesmo que...
// // const flightNum = flight;
// // const passenger = israel;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000); // novamente, altera o objeto original
// };

// newPassport(israel);
// checkIn(flight, israel);

// -------- Lecture: Functions Accepting Callback Functions --------

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Somewhere somehow', upperFirstWord);
// console.log('---------------------');
// transformer('Somewhere somehow', oneWord);

// // Exemplo usando elementos do DOM

// const high5 = function () {
//   console.log('🖐');
// };

// document.body.addEventListener('click', high5);

// // Exemplo com forEach (será abordado mais adiante)

// ['Peter', 'May', 'Harry'].forEach(high5);

// Meu próprio oexemplo (Trocar a cor do h1 para uma cor aleatória a cada click no body)

const changeColorH1 = function () {
  const chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  let color = '';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.trunc(Math.random() * 16)];
  }

  document.querySelector('h1').style.color = `#${color}`;
};

document.body.addEventListener('click', changeColorH1);
