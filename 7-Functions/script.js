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
