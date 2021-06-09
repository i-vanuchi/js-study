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

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   // book: function() { }
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );

//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Geralt de Rivia');
// lufthansa.book(635, 'Maxine Caulfild');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // copiada a função para fora porque copiar todo o código para dentro do outro objeto seria uma má prática.

// // book(23, 'Sara Williams'); // somente uma chamada de função regular. Então 'this' aponta para undefined (strict mode), por isso NÃO FUNCIONA

// // Agora precisaremos de uma maneira de dizer ao JS manualmente qual será o valor de 'this'
// // Podemos fazer isso com os métodos Call, Apply e Bind

// // Método Call
// book.call(eurowings, 23, 'Sara Williams'); // O método call chama a função, setando 'this' para eurowings (primeiro argumento). Os demais argumentos são os exigidos pela função original
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 78, 'Mark Grayson');
// console.log(swiss);

// // Método Apply
// const flightData = [583, 'Helena Pera'];
// book.apply(swiss, flightData);

// // Better way of doing apply method
// const flightData2 = [411, 'Barry Allen'];
// book.call(swiss, ...flightData2);

// // -------- Lecture: The Bind method --------

// // book.call(swiss, 78, 'Mark Grayson');

// const bookEW = book.bind(eurowings); // retorna uma nova função com a keyword this valendo 'eurowings'
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// // podem ser definidos mais argumentos  usando o bind (partial application)
// // no exemplo abaixo é criada uma nova função com a this keyword + o número do voo setados

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Peter Parker');
// bookEW23('Uma Pessoa');

// // Com Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // da forma que está abaixo, a keyword this será o elemento do qual o event listener está anexado

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// // para que a keyword this seja definida como o objeto proprietário do método (lufthansa, nesse caso) pode ser usado o método bind, como abaixo.

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // outro exemplo de partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // aqui definimos a keyword this como null, pq ela não importa. Poderia ser qualquer valor, mas o Null é um padrão utilizado nessa situação.

// // Obs: a ordem dos parâmetros na função importam. Nesse caso foi definido como padrão a taxa pq ela é o primeiro parâmetro da função.

// // Challenge: fazer a função addVAT mas utilizando a técnica de funções retornando funções.

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(500));
// console.log(addVAT2(200));

// -------- Lecture: Immediately Invoked Function Expressions (IIFE) --------

// const runOnce = function () {
//   console.log('This will never run again.');
// };

// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again.');
//   const isPrivate = 56;
// })();

// // console.log(isPrivate); // náo pode ser acessada de um escopo externo

// (() => console.log('This will ALSO never run again.'))();

// {
//   const isPrivate = 56; // forma de proteger uma variável sem uso de IIFE.
//   var notPrivate = 27; // var pode ser acessada de fora
// }

// // console.log(isPrivate); // continua não podendo ser acessada.
// console.log(notPrivate);

// -------- Lecture: Closures --------

// Closure é o ambiente de variáveis encerrado do contexto de execução em que uma função foi criada, mesmo que esse CE já tenha sido encerrado

// Closure dá à função acesso a todas as variáveis da função pai, mesmo depois dessa função pai já ter retornado.

// CLosure garante que uma função não perca a conexão com as variáveis que existiram em seu "local de nascimento"

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking(); // consegue acessar a variável passengerCount apenas por conta da closure.

// booker();
// booker();
// booker();

// -------- Lecture: More Closures examples --------

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // se não fosse a Closure, essa variável seria utilizada na callback function.
boardPassengers(180, 5);
