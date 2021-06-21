'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

// ---------- Lecture: Creating DOM Elements ----------

// Boa prática: Em vez de trabalhar com variáveis globais, procurar passar os dados que a função precisa diretamente na função;

const displayMovements = function (movements) {
  // limpando o container antes de inserir as movement_rows;
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    // variável que define se é um deposito ou retirada;
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // template string com o html que será inserido no Movements Container;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
    // inserindo o html do template acima, no movements container;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// NOTES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ---------- Notes about the Lecture: Simple Array Methods ----------

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // - SLICE METHOD - Almost like the string method

// // NÂO ALTERA o array original;

// console.log(arr.slice(2)); // retorna um novo array, "fatiado" a partir do index passado como argumento

// console.log(arr.slice(2, 4)); // passando index de início e de final (somente o do início é incluso no array retornado). Nesse caso, somente os indexes 2 e 3 serão inclusos;
// // o Length do array retornado é o parâmetro final - o parâmetro inícial.

// console.log(arr.slice(-2)); // valores negativos fatiam o array de trás para frente;

// console.log(arr.slice(-1)); // o valor -1 sempre trará o último elemento do array;

// console.log(arr.slice(1, -2)); // extrai a partir do index 1, deixando de fora os 2 últimos elementos;

// console.log(arr.slice()); // não utilizar nenhum argumento resulta em uma "shallow copy";

// console.log([...arr]); // o mesmo resultado de não usar nenhum argumento. A escolha entre as duas maneiras é apenas questão de preferência;

// // - SPLICE METHOD

// // parecido com o SLICE, porém ALTERA o array original;

// // console.log(arr.splice(2)); // extrai os elementos a partir do index 2, assim como o SLICE;

// console.log(arr); // podemos ver aqui que o array original foi alterado, permanecendo apenas o que não foi extraído pelo splice acima;

// // o splice é usado normalmente para remover elementos de um array, quase sempre o último; Exemplo abaixo:

// console.log(arr.splice(-1));
// console.log(arr);

// arr.splice(1, 2); // o segundo parâmetro serve para especificar quantos elementos serão deletados. Nesse caso, a partir do index 1, serão deletados 2 elementos (B e C);
// console.log(arr);

// // - REVERSE METHOD - inverte a ordem dos elementos

// // esse método ALTERA o array original

// arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f']; // apenas um array com ordem incorreta;

// console.log(arr2.reverse()); // retorna o array na ordem reversa / contrária;

// // - CONCAT METHOD

// // NÂO ALTERA os arrays originais;

// const letters = arr.concat(arr2); // retorna os dois arrays concatenados;
// console.log(letters);
// console.log([...arr, ...arr2]); // mesmo resultado, também sem alterar os arrays originais. Novamente: a escolha entre as duas maneiras é apenas questão de preferência

// // JOIN METHOD

// console.log(letters.join(' - ')); // retorna uma string com os elementos do array separados pelo separador definido no argumento;

// ---------- Notes about the Lecture: Looping Arrays - forEach ----------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // array loop com for of
// for (const movement of movements) {
//   if (movement > 0) console.log(`Deposit value: $${movement},00.`);
//   else console.log(`Withdraw value: $${Math.abs(movement)},00.`);
// }

// // array loop com forEach
// // o método forEach recebe como argumento uma callback function e, como argumento dessa callback function, está sendo passado o elemento correspondente à execução atual do forEach.
// console.log('--------------- FOREACH ---------------');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0)
//     console.log(`Movement ${index + 1}: You deposited $${movement},00.`);
//   else
//     console.log(
//       `Movement ${index + 1}: You withdrew $${Math.abs(movement)},00.`
//     );
// });

// // Exemplificação da execução:
// // Cada execução do forEach, chamará a função anônima callback com o valor do elemento atual do array;
// // 0: function(200)
// // 1: function(450)
// // 2: function(-400)

// // Acessando o index com for of:
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0)
//     console.log(`Movement ${i + 1}: You deposited $${movement},00.`);
//   else
//     console.log(`Movement ${i + 1}: You withdrew $${Math.abs(movement)},00.`);
// }

// // Acessar o index com o forEach é mais fácil, pois no momento que a callback function é assionada, é passado não somente o elemento atual do array, mas o index e também o próprio array, respectivamente. No exemplo do forEach mais acima podemos ver os argumentos passados na função callback (movements, index, array). Pode ser passado somente o primeiro, os dois primeiros, ou todos os três, não importa. O que importa é a ordem, pois sempre deve ser respeitada essa ordem utilizada: 1 - elemento do array, 2 - index desse elemento e 3 - o próprio array (inteiro);

// // OBS: a ordem é o inverso do método entries. O entries retorna primeiro o index, depois o elemento. Já no forEach, primeiro é o elemento, depois o index, seguido do próprio array;

// // Quando usar forEach e quando usar For of?
// // o forEach não pode ser interrompido. "Break" e "continue" não funcionam. Então sempre que for necessário interromper um loop em determinado momento, deve-se usar o for of, do contrário, novamente é questão de preferência do desenvolvedor.

// ---------- Notes about the Lecture: forEach with Maps and Sets ----------

// // Map
// // Assim como em arrays, o forEach pode ser usado em Maps e Sets.
// // Em um Map, a função callback também pode receber 3 argumentos, sendo eles o valor atual, a key e o map inteiro, respectivamente. Praticamente a mesma coisa que com arrays;
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// // No caso dos Sets, não faz sentido o segundo parâmetro por conta dos valores não possuírem uma key nem index. Para evitar confusão com dois forEachs diferentes, foi mantido o mesmo padrão. Então, a segunda variável é simplesmente ignorada, já que significa o mesmo que a primeira. O último parâmetro retorna o próprio set.
// // OBS: usar o "_" para variáveis completamente desnecessárias é um tipo de padrão adotado pelos desenvolvedores.
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
//   console.log(map);
// });

// ---------- (Notes) Lecture - Data Transformations: map, filter, reduce ----------

// --- Map ---
// Executa um loop em um array assim como o forEach, porém criando um novo array. Além disso, é passada uma função callback que pode executar uma operação no elemento atual do array a cada iteração. Por exemplo, multiplicar cada elemento de um array de números, por 2, resultando em um novo array em que cada elemento seja o produto dessa operação.
// [3, 1, 4, 3, 2] -> map(current * 2) -> [6, 2, 8, 6, 4]

// --- Filter ---
// O filter permite filtrar elementos de um array que satisfaçam uma determinada condição. Por exemplo, filtrar e incluir no novo array retornado pelo filter, apenas os elementos que sejam maior que 2 (current > 2) em um array de números.
// [3, 1, 4, 3, 2] -> map(current > 2) -> [3, 4, 3]

// --- Reduce ---
// Reduce permite "reduzir" todos os elementos do array a um único valor. Por exemplo, somar todos os elementos utilizando uma variável para acumula-los (snowball effect). Esse exemplo da soma é apenas uma das operações que podem ser aplicadas.
// Aqui, não há um novo array retornado, apenas o valor "reduzido".
// [3, 1, 4, 3, 2] -> reduce(acc + current) -> 13

// ---------- (Notes) Lecture - The Map method ----------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
  // poderia ser retornado qualquer coisa aqui para ocupar a posição atual do array, por exemplo:
  // return 23;
  // isso resultaria em um array de mesmo length, mas com 23 em todas as posições;
});

// assim como no forEach, também foi passado como argumento da callback function, o elemento atual do array. O Map, assim como o forEach, tem acesso às mesmas 3 variáveis: elemento atual do array, index e o próprio array;
// na callback function deve ser retornado o valor que queremos no novo array, na posição atual;

console.log(movements);
console.log(movementsUSD);

// obtendo o mesmo resultado com for of:
const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);
// ambos resolvem o problema, mas são filosofias diferentes. Com o map, estamos mais alinhados com o paradigma Functional Programming, que é para onde o JS moderno tende a ir (segundo o Jonas);

// Simplificando o map com uma arrow function
const movementsUSDarrow = movements.map(mov => mov * euroToUsd);
console.log(movementsUSDarrow);

// Usando os 3 argumentos
const movementDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} $${Math.abs(
      mov
    )},00.`
);

console.log(movementDescriptions);
