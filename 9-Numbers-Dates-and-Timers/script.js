'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    // '2019-11-18T21:31:17.178Z',
    // '2019-12-23T07:42:02.383Z',
    // '2020-01-28T09:15:04.904Z',
    // '2020-04-01T10:17:24.185Z',
    // '2020-05-08T14:11:59.604Z',
    // '2020-05-27T17:01:17.194Z',
    // '2020-07-11T23:36:17.929Z',
    // '2020-07-12T10:51:36.790Z',
    '2020-11-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-28T09:15:04.904Z',
    '2021-04-01T10:17:24.185Z',
    '2021-05-08T14:11:59.604Z',
    '2021-08-03T17:01:17.194Z',
    '2021-08-05T23:36:17.929Z',
    '2021-08-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (locale, date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed < 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const currencyFormatter = function (value, locale, currency) {
  // Passadas as informações especificamente, em vez de toda a acc, para que a função possa ser reutilizada de maneira mais prática em outras aplicações
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // use index of the looped array to loop over another one;

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(acc.locale, date);

    const formattedMov = currencyFormatter(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = currencyFormatter(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = currencyFormatter(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currencyFormatter(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = currencyFormatter(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease timer
    time--;
  };

  // Set time to 5 minutes
  let time = 120;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// ----------- Lecture: Adding Dates to Bankist App -----------

// fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = now.getHours();
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const locale = navigator.language;
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 4200);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ----------- Lecture: Converting and Checking Numbers -----------

// //Numbers são sempre representados internamente como flutuantes no JS, não importa se escrevemos como inteiros ou decimais. Ex:
// console.log(7 === 7.0);

// //Além disso, o JS armazena os números no formato de Base 2 (0 e 1), o que gera dificuldade na linguagem para representar determinadas frações. Ex:
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3); // deveria ser true, mas...

// //Isso faz com o que o JS não seja recomendado para operações financeiras ou científicas extremamente precisas.

// // Conversão
// console.log(Number('7'));
// console.log(+'7'); // conversão através de Type Coercion

// // Parsing
// console.log(Number.parseInt('27px', 10));
// console.log(Number.parseInt('e27', 10));

// console.log(Number.parseInt('2.5rem'));
// console.log(Number.parseFloat('2.5rem'));

// // Checking if a value is a literally NaN
// console.log(Number.isNaN(27));
// console.log(Number.isNaN('27'));
// console.log(Number.isNaN(+'27X'));
// console.log(Number.isNaN(27 / 0));

// // Checking if a value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(20 / 0));

// // Na prática, quando necessário checar se um número é ou não um número, usar isInteger se houver certeza de que se trata de um inteiro, do contrário, usar IsFinite;

// ----------- Lecture: Math and Rounding -----------

// // Raiz quadrada
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// // Raiz cúbica
// console.log(8 ** (1 / 3));
// // Checar o valor máximo
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2)); // faz type coercion
// console.log(Math.max(5, 18, '23px', 11, 2)); // não faz parsing
// // Checar o valor mínimo
// console.log(Math.min(5, 18, 23, 11, 2));
// // Calcular o raio de um círculo com 10x, usando a constante PI
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// // Gerar um valor de dado (como já feito em aulas passadas)
// console.log(Math.trunc(Math.random() * 6) + 1);
// // Gerar um valor aleatório entre dois valores (min e max) predeterminados
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(5, 10));
// console.log(randomInt(5, 10));
// console.log(randomInt(5, 10));
// console.log(randomInt(5, 10));
// console.log(randomInt(5, 10));

/*
--- Explicação do funcionamento da função acima ---
// Yeah, I was in the same boat. Like I get it - the code works, but how?? or rather - Why?

// After some reflection, here's what I got for you:

// As you can see, we are getting a random value from 0 – x. Where the max value in this range (x) is equal to the max minus the minimum value. If there’s no minimum, then the range can extend from 0 – max. But if there is a minimum value, then the maximum value will be reduced in proportion to the minimum value. This does reduce the maximum value, but the value being subtracted here (the min value) will be added to the final result. Thus, the maximum value will still reach the initial maximum value set in the final result. Inversely, when the minimum value is added back in at the end, this will extend the max value (as mentioned already) back to the initial value, however this will also have the effect of changing the starting position (minimum value) of the range such that we are now left with a range that still extends to the initial maximum set and only begins at the custom minimum value set.

// Here is a step-by-step of an example:

// min = 3;
// max = 7;

// // Math.floor(Math.random() * (max - min + 1)) + min

// // Each step

//   Math.floor(Math.random() * (7 - 3 + 1)) + min;
//   Math.floor(Math.random() * (4 + 1)) + 3;
//   Math.floor(Math.random() * (5)) + 3;
//   Math.floor(0.0 - 4.99) + 3;
//   (0 - 4) + 3;
//    3 - 7

// // example 2

// min = 0;
// max = 7;

//   Math.floor(Math.random() * (7 - 0 + 1)) + min;
//   Math.floor(Math.random() * (7 + 1)) + 0;
//   Math.floor(Math.random() * (8)) + 0;
//   Math.floor(0.0 - 7.99) + 0;
//   (0 - 7) + 0;
//    0 - 7

// // example 3

// min = 1;
// max = 7;

//   Math.floor(Math.random() * (7 - 1 + 1)) + 1;
//   Math.floor(Math.random() * (6 + 1)) + 1;
//   Math.floor(Math.random() * (7)) + 1;
//   Math.floor(0.0 - 6.99) + 1;
//   (0 - 6) + 1;
//    1 - 7
*/

// // Rounding Integers
// console.log('----- ROUNDING -----');
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.9));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));
// // Todos esses métodos fazem type coercion

// // trunc e floor são parecidos quando lidamos com números positivos, mas não com números negativos.
// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // Rounding Decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));
// // o método toFixed é invocado em um tipo primitivo, e como sabemos, primitivos não possuem métodos. Então, por trás das cenas, JS fará o 'boxing', que transforma o número em um número objeto e depois novamente em um primitivo (após a operação ser concluída)

// ----------- Lecture: The Remainder Operator -----------

// console.log(5 % 2);
// console.log(5 / 2);

// console.log(8 % 3);
// console.log(8 / 3);

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(214));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'aquamarine';
//     if (i % 3 === 0) row.style.backgroundColor = 'orange';
//   });
// });

// ----------- Lecture: Working with BigInt -----------

// // maior número que o javascript pode representar com precisão. Mais que isso já sai meio torto
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// // BigInt
// console.log(4567894512341564875645612341564454787656585n);
// console.log(BigInt(485235));

// // Operações com BigInt
// console.log(100000n + 100000n);
// console.log(3624524512121545645612315786217621425362974811n * 100000n);

// // métodos aritméticos não funcionam em bigInt
// // console.log(Math.sqrt(16n));

// // não pode misturar BigInt com outros tipos em operações, mesmo Number
// const huge = 12458965214895234957945216785942n;
// const notHuge = 7;
// // console.log(huge * notHuge);

// // porem... com operadores lógicos é possível sim
// console.log(20n > 15);
// console.log(20n === 20); // FALSE (Igualdade restrita não faz type coercion)
// console.log(typeof 20n); // bigint
// console.log(20n == 20); // TRUE (Igualdade não-restrita faz type coercion)
// console.log(20n == '20'); // TRUE (Igualdade não-restrita faz type coercion)

// console.log(huge + ' is really BIG!!!!');

// // Divisões
// console.log(10n / 3n); // corta a parte decimal, tipo o Math.trunc
// console.log(10 / 3);

// ----------- Lecture: Creating Dates -----------

// // Criar data (4 maneiras, através do new Date())
// // 1 - sem nenhum argumento no constructor, assim ele atribui o tempo atual
// const now = new Date();
// console.log(now);

// // 2 - Passando uma string, de maneira que o constructor forme a data a partir dela
// const now2 = new Date('Jul 01 2021 15:10:12');
// console.log(now2);
// const christmas = new Date('December 25, 2013'); // not good idea (unreliable)
// console.log(christmas);

// console.log(new Date(account1.movementsDates[0]));

// // 3 - passando ano, mes, dia, hora, minuto e segundo no constructor
// console.log(new Date(2037, 10, 22, 15, 40, 7)); // o mes é 0-based (????)
// console.log(new Date(2037, 10, 31, 15, 40, 7)); // dia 31 de nov não existe, então é automaticamente corrigido para o dia seguinte

// // 4 - passando milisegundos após "Unix Date" (?), que é Jan 01 1970.
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000));
// console.log(3 * 24 * 60 * 60 * 1000); // timestamp

// // Trabalhando com datas
// console.log('-------------- Working with Dates --------------');
// const future = new Date(2037, 10, 15, 15, 40);
// console.log(future);

// console.log(future.getFullYear()); // dont use getYear();
// console.log(future.getMonth()); // 0-based
// console.log(future.getDate()); // retorna o dia do mês
// console.log(future.getDay()); // retorna o dia da semana (0 é domingo)
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // retorna uma string formatada em padrão internacional
// console.log(future.getTime()); // retorna o timestamp (milisegundos que passaram desde jan 1 1970)

// console.log(new Date(2141923200000)); // revertendo o timestamp gerado acima de volta para uma data

// console.log(Date.now()); // retorna o timestamp de agora;

// // também temos o "set" equivalente para esses métodos. Ex:
// future.setFullYear(2045);
// console.log(future);

// ----------- Lecture: Operations with Dates -----------

// const future = new Date(2037, 10, 15, 15, 40);
// console.log(+future); // converter para número retorna o timestamp

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)); // Math.abs corta o sinal e faz retornar o valor de dias entre as datas infependente de qual veio primeiro;

// const days1 = calcDaysPassed(new Date(2037, 4, 14), new Date(2037, 4, 24));
// console.log(days1);

// // Para cálculos mais precisos com datas, envolvendo fuso horário e etc, recomenda-se o uso da biblioteca Moments.js (free);

// ----------- Lecture: Internationalizing Numbers (intl) -----------

// const num = 3884764.23;

// const options = {
//   // style: 'unit',
//   // style: 'percent',
//   style: 'currency',
//   // unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US: ' + new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ' + new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria: ' + new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   'Nav Locale: ',
//   new Intl.NumberFormat(navigator.locale, options).format(num)
// );

// // ----------- Lecture: Timers - setTimeout and setInterval -----------

// // setTimeout
// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   'cheese',
//   'garlic'
// );

// const ingredients = ['bacon', 'tomato'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your second pizza with ${ing1} and ${ing2} 🍕`),
//   4500,
//   ...ingredients
// );

// if (ingredients.includes('tuna')) clearTimeout(pizzaTimer);

// // setInterval
// setInterval(function () {
//   const now = new Date();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();
//   console.log(`${hour}:${minute}:${second}`);
// }, 1000);
