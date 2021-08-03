'use strict';

const restaurant = {
  rName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Desestruturando objeto recebido como argumento da função
  orderDelivery: function ({ address, starterIndex = 1, time, mainIndex = 0 }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    let str = '';

    for (let i = 0; i < otherIngredients.length; i++) {
      // i === otherIngredients.length - 1
      //   ? (str += `and ${otherIngredients[i]}`)
      //   : (str += `${otherIngredients[i]}, `);
      if (i === otherIngredients.length - 1) {
        otherIngredients.length === 1
          ? (str += `${otherIngredients[i]}`)
          : (str += `and ${otherIngredients[i]}`);
      } else if (i === otherIngredients.length - 2) {
        str += `${otherIngredients[i]} `;
      } else {
        str += `${otherIngredients[i]}, `;
      }
    }

    console.log(
      `Order Received! Your ${mainIngredient} pizza with ${str} will be delivered in 30 minutes.`
    );
  },
};

// ----- Lecture: Destructuring objects -----

// restaurant.orderDelivery({
//   time: '22:00',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // mesmo nome
// const { rName, openingHours, categories } = restaurant;
// console.log(rName, openingHours, categories);

// // atribuindo as propriedades a variáveis de nomes diferentes
// const {
//   rName: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // definindo valores padrão (sem valor padrão e sem propriedade correspondente no objeto, retorna undefined)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // alterando variáveis
// let a = 123;
// let b = 999;
// const obj = { a: 23, b: 7 };

// // sem o parênteses, o JS entende que vc está tentando atribuir um valor a um bloco de código, não a um objeto
// ({ a, b } = obj);
// console.log(a, b);

// // Objetos aninhados

// const {
//   fri: { open, close },
// } = openingHours; // definindo novos nomes ----- const { fri: { open: o, close: c } } = openingHours;
// console.log(open, close);

// ----- Lecture: Destructuring arrays -----

// const arr = [1, 2, 3];
// console.log(arr);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Alternando valores de variáveis entre si
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recebendo 2 valores retornados de uma função

// const [starterFood, mainFood] = restaurant.order(2, 0);
// console.log(`Starter food: ${starterFood}
// Main food: ${mainFood}`);

// // Desestruturando arrays aninhadas

// const nested = [2, 3, [5, 6]];
// // const [i, j, k] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Valores default

// const [p = 1, q = 1, r = 1] = [8, 9]; // Quando não sabemos o tamanho do array a ser desestruturado, podemos definir valores padrão para as variáveis que receberão os elementos do array
// console.log(p, q, r);

// ----- Lecture: The Spread Operator (...) -----

// const arr = [7, 8, 9];

// adicionando 1 e 2 no início do array - Forma 1
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// adicionando 1 e 2 no início do array - For Loop
// let badNewArr2 = [1, 2];

// for (let i = 0; i < arr.length; i++) {
//   badNewArr2.push(arr[i]);
// }
// console.log(badNewArr2);

// adicionando 1 e 2 no início do array - For Loop 2
// let badNewArr3 = [];

// for (let i = arr.length; i >= 0; i--) {
//   badNewArr3.unshift(arr[i]);

//   if (i === 0) {
//     badNewArr3.unshift(2);
//     badNewArr3.unshift(1);
//   }
// }
// console.log(badNewArr3);

// Utilizando o Spread

// const newArr = [1, 2, ...arr];

// Criando outro array para o menu, com elemento adicional

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copiando arrays

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Mesclando arrays

// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(fullMenu);

// Spread em Strings

// const str = 'Israel';
// const letters = [...str, ' ', 'V.'];
// console.log(letters);

// spread só pode ser usado onde é esperado valores separados por vírgula, ou seja, construções de arrays ou argumentos de funções

// console.log(`${...str} Vanuchi`); // Exemplo de local onde spread não pode ser usado.

// Exemplo mais realista
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objetos

// copia com propriedades a mais
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

//copia simples
// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);

//alternando o nome de um deles e mostrando no console que de fato são dois objetos diferentes
// restaurantCopy.rName = 'Ristorante Roma';
// console.log(restaurant.rName);
// console.log(restaurantCopy.rName);

// ----- Lecture: REST Pattern and Parameters -----

// // 1 - Destructuring
// // SPREAD, porque está no lado DIREITO do =
// const arr = [1, 2, 3, ...[4, 5]];

// // REST, porque está no lado ESQUERDO do =
// const [a, b, ...outros] = [1, 2, 3, 4, 5];
// console.log(a, b, outros);

// // desestruturando mainFood e starterFood usando REST
// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFoods);

// // Objetos

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2 - Functions - Rest Arguments

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(1, 2, 3);
// add(5, 5, 10, 2);
// add(9, 11, 10, 5, 2, 3);
// // passando um array como argumento, espalhando os elementos com o spread e reagrupando com o rest argument.
// const x = [3, 5, 2];
// add(...x);

// // Exemplo mais prático do uso do Rest
// restaurant.orderPizza('cheese', 'pepperoni', 'olives', 'onion', 'mushrooms');

// ----- Lecture: Short Circuiting (&& and ||) -----

// console.log('===== OR =====');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // Essas duas soluções não funcionam se o numGuests for 0, porque 0 é um falsy value

// console.log('===== AND =====');

// console.log(0 && 'Israel');
// console.log(7 && 'Israel');

// console.log('Hello' && 23 && null && 'Israel');

// // Exemplo prático

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('cheese', 'pepperoni');
// }

// ----- Lecture: The Nullish Coalescing Operator (??) -----

// restaurant.numGuests = 0;

// // Aqui, o short circuit não functiona porque o 0 é falsy.
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: reconhece como falsy apenas null e undefined, portanto o short circuit funciona
// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);

// ----- Lecture: Looping Arrays - The for-of Loop -----

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // For comum
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// // For of
// for (const item of menu) console.log(item);

// // Obtendo o Index do item do menu
// // o método entries retorna um novo array contendo o index + o elemento
// for (const item of menu.entries()) console.log(item);

// // Imprimindo em template string
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // Melhorando o template string através da desestruturação
// for (const [i, value] of menu.entries()) {
//   console.log(`${i + 1}: ${value}`);
// }

// ----- Lecture: Enhanced Object Literals -----

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const hours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   // 3 - Calcular nomes de propriedades
//   [`day ${4 + 2}`]: {
//     open: 0,
//     close: 24,
//   },
// };

// const anotherRestaurant = {
//   rName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // 1 - Criar propriedade a partir de objeto existente
//   hours,

//   // 2 - Escrever métodos com sintaxe mais simples e compacta
//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
// };
// console.log(anotherRestaurant);

// ----- Lecture: Optional Chaining (?.) -----

// // SEM encadeamento opcional
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // COM encadeamento opcional
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Exemplo
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // Métodos

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderSomething?.(0, 1) ?? 'Method does not exist');

// // Arrays

// const users = [
//   { name: 'Israel', email: 'example@mail.com' },
//   { name: 'Someone', email: 'some-email@mail.com' },
// ];

// console.log(users[0]?.name ?? 'User does not exist');
// console.log(users[1]?.email ?? 'User does not exist');
// console.log(users[2]?.name ?? 'User does not exist');

// ----- Lecture: Looping Objects: Object Keys, Values, and Entries -----

// // NOMES das propriedades
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We're open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // VALORES das propriedades
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Objeto inteiro
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}.`);
// }

// ----- Lecture: Sets -----

// // Criando um Set
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// // Set formado por uma string
// console.log(new Set('Israel'));

// // Obtendo o tamanho do Set. Usa-se Size em vez de Length (como em arrays)
// console.log(ordersSet.size);

// // Checando se o Set contém determinado elemento (boolean). Semelhante ao método "includes" usado em arrays
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // Adicionando elementos ao Set
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread'); // adicionado o mesmo elemento duas vezes. O segundo é ignorado por conta do Set armazenar apenas valores únicos.

// // Deletando elementos do Set
// ordersSet.delete('Risotto');

// // Não há maneira de se obter valores de um set

// // Deletando TODOS os elementos de um set
// // ordersSet.clear();

// // Visto que Sets são iteráveis, podemos aplica-los um loop
// console.log('----- LOOPING -----');
// for (const order of ordersSet) console.log(order);

// // Exemplo de aplicação de um Set
// console.log('----- REAL LIFE EXAMPLE -----');

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// // Caso seja necessário apenas saber a quantidade de valores únicos
// // 1
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// // 2
// console.log(new Set(staff).size);

// // Quantidade de letras não repetidas em uma string
// console.log(new Set('israelvanuchi').size);

// ----- Lecture: Maps - Fundamentals -----

// // Criar um Map
// const rest = new Map();

// // Adicionar um elemento usando o método set
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');

// // O método set retorna o Map atualizado
// console.log(rest.set(2, 'Lisbon, Portugal'));

// // Como o método set retorna o Map atualizado, é possível encadear seu uso
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// // Ler um valor do Map usando o método Get
// console.log(rest.get('name'));
// console.log(rest.get(true));

// // Exemplo do uso de boolean como nome da key
// const time = 21;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// // Checar se o Map contém determinado elemento
// console.log(rest.has('categories'));

// // Deletar elemento do Map
// rest.delete(2);
// console.log(rest);

// // Obter o tamanho do Map
// console.log(rest.size);

// // Deletar TODO o conteúdo do Map
// // rest.clear();
// // console.log(rest);

// // Usar array como nome da key

// // rest.set([1, 2], 'Teste');
// // console.log(rest.get([1, 2])); // não funciona porque esse array não é o mesmo passado no método set. Apesar de serem iguais, eles apontam para objetos diferentes no Heap.

// const arr = [1, 2];
// rest.set(arr, 'Teste');
// console.log(rest.get(arr)); // Agora sim é o mesmo array!

// // Adicionar elementos do DOM ao Map
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// ----- Lecture: Maps - Iteration -----

// Outra forma de criar um Map, passando como argumento um array de arrays, onde o primeiro valor do array é a key e o segundo é o valor dessa key.
const question = new Map([
  ['question', 'What is the best food in the world?'],
  [1, 'Strogonoff'],
  [2, 'Pizza'],
  [3, 'Lanche'],
  [4, 'Todas'],
  ['correct', 4],
  [true, 'Correct! 🎉'],
  [false, 'Try Again!'],
]);

console.log(question);

// Converter objeto em map
const opHours = restaurant.openingHours;
console.log(Object.entries(opHours)); // Object.entries transforma o objeto em um array de arrays, o mesmo formato em que maps armazenam os dados

const hoursMap = new Map(Object.entries(opHours)); // Basta passar o objeto com o método entries como argumento do map. Ele será guardado no formato correto.
console.log(hoursMap);

// Iterações - Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 4;
console.log(answer);

// usando as keys boolean para definir se a resposta foi correta ou não
// console.log(question.get(question.get(answer) === 'JavaScript')); // Minha resposta
console.log(question.get(question.get('correct') === answer));

// Convertendo Map para Array

const questionArr = [...question];
console.log(questionArr);
// Métodos usados em arrays e também em Maps
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
