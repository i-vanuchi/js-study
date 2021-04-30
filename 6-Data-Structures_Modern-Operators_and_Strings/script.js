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

  order: function (starterIndex, mainIndex) {
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
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

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

const arr = [7, 8, 9];

// adicionando 1 e 2 no início do array - Forma 1
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// adicionando 1 e 2 no início do array - For Loop
// let badNewArr2 = [1, 2];
// console.log(badNewArr2);

// for (let i = 0; i < arr.length; i++) {
//   badNewArr2.push(arr[i]);
// }
// console.log(badNewArr2);

// adicionando 1 e 2 no início do array - For Loop 2
// let badNewArr2 = [];

// for (let i = arr.length; i >= 0; i--) {
//   badNewArr2.unshift(arr[i]);

//   if (i === 0) {
//     badNewArr2.unshift(2);
//     badNewArr2.unshift(1);
//   }
// }
// console.log(badNewArr2);

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
