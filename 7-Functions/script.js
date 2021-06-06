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

// // Meu próprio exemplo (Trocar a cor do h1 para uma cor aleatória a cada click no body)

// const changeColorH1 = function () {
//   const chars = [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//   ];

//   let color = '';
//   for (let i = 0; i < 6; i++) {
//     color += chars[Math.trunc(Math.random() * 16)];
//   }

//   document.querySelector('h1').style.color = `#${color}`;
// };

// document.body.addEventListener('click', changeColorH1);

// -------- Lecture: Functions Returning Functions --------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}!`);
//   };
// };

// const greeterHey = greet('Hey'); // greet('Hey') resulta basicamente na função retornada da função greet, portanto é um valor e pode ser armazenada em outra variável;
// greeterHey('Steven');
// greeterHey('Bob');

// greet('Hello')('Peter'); // como greet é basicamente a função retornada, é possível encadear a chamada da função;

// // Funções retornando outras funções é algo importante e comum no JS, especialmente quando é o usado o paradigma Functional Programming;

// // A mesma função feita com arrow functions
// const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);

// arrowGreet('E ae')('parça');

// -------- Lecture: The Call and Apply Methods --------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function() { }
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Geralt de Rivia');
lufthansa.book(635, 'Maxine Caulfild');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // copiada a função para fora porque copiar todo o código para dentro do outro objeto seria uma má prática.

// book(23, 'Sara Williams'); // somente uma chamada de função regular. Então 'this' aponta para undefined (strict mode), por isso NÃO FUNCIONA

// Agora precisaremos de uma maneira de dizer ao JS manualmente qual será o valor de 'this'
// Podemos fazer isso com os métodos Call, Apply e Bind

// Método Call
book.call(eurowings, 23, 'Sara Williams'); // O método call chama a função, setando 'this' para eurowings (primeiro argumento). Os demais argumentos são os exigidos pela função original
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 78, 'Mark Grayson');
console.log(swiss);

// Método Apply
const flightData = [583, 'Helena Pera'];
book.apply(swiss, flightData);

// Better way of doing apply method
const flightData2 = [411, 'Barry Allen'];
book.call(swiss, ...flightData2);
