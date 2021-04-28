'use strict';

// ---------- Lecture: Scoping in Practice ----------

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(firstName); // JS buscará pela variável no escopo acima (global);

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // ao declarar uma variável com o mesmo nome de uma variável existente em um escopo acima, o JS simplesmente a utilizará e não subirá os escopos procurando como faria se não a encontrasse no escopo atual;
//       const firstName = 'Steve';

//       // ao redefinir uma variável em um escopo interno, o JS não encontrará uma variável com o mesmo nome no escopo atual e precisará buscar no escopo acima, redefinindo a variável criada no escopo anterior;
//       output = 'NEW OUTPUT!';

//       // variável const que é BLOCK scoped
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       // funções são block scoped quando o strict mode está ativo;
//       function add(a, b) {
//         return a + b;
//       }
//     }

//     console.log(millenial); // variável var que é FUNCTION scoped e pertence ao escopo de toda a função printAge();
//     // console.log(add(1, 2));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Israel';
// calcAge(1990);

// ---------- Lecture: Hoisting and TDZ in Practice ----------

// variáveis
// console.log(me); // undefined
// // console.log(job); // Uncaught ReferenceError porque está na TDZ (Temporal Dead Zone)
// // console.log(year); // Uncaught ReferenceError porque está na TDZ (Temporal Dead Zone)

// var me = 'Israel';
// let job = 'Programmer';
// const year = 2021;

// Funções

// console.log(addDeclaration(2, 3)); // retorna o resultado corretamente
// console.log(addExpression(2, 3)); // Uncaught ReferenceError porque está na TDZ (Temporal Dead Zone)
// console.log(addArrow(2, 3)); // Uncaught ReferenceError porque está na TDZ (Temporal Dead Zone)

// console.log(addExpressionVar(2, 3)); // erro "addExpressionsVar is not a function", porque aqui estamos tentando invocar uma função que na vdd é um undefined, ex: undefined(2, 3)
// console.log(addArrowVar(2, 3)); // mesma situação da função addExpressionVar

// function addDeclaration(a, b) {
//   return a + b;
// }
// const addExpression = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;
// // funções utilizando var
// var addExpressionVar = function (a, b) {
//   return a + b;
// };
// var addArrowVar = (a, b) => a + b;

// Exemplo

// console.log(numProducts);

// if (!numProducts) deleteShoppingCart(); // será executada a função por causa do hoisting.
// // Nesse momento, numProducts ainda possui o valor undefined

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

/* Adicional: Mais uma diferença entre var, let e const, é que a primeira cria uma propriedade no objeto global window, enquanto as outras duas, não. */
/* 
  Conclusão:

  1 - Não declarar variáveis com var;
  2 - Sempre priorizar const e utilizar let caso seja realmente necessario reatribuir o valor da variável;
  3 - Declarar as variáveis no topo do escopo (melhor a legibilidade);
  4 - Escrever as funções primeiro e utiliza-las depois da declaração;
*/

// ---------- Lecture: The this Keyword in practice ----------

// console.log(this); // Simplesmente imprimir no console a variável this, mostra no console o objeto global window

// // -----

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // de uma chamada de função simples, será retornado undefined (No strict mode, do contrário será o objeto window tbm)
// };
// calcAge(1994);

// // -----

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // mostrará o objeto global window, visto que arrow functions não tem sua própria this e usa a da função circundante. Nesse caso o próprio escopo global (lexical this keyword)
// };
// calcAgeArrow(1994);

// -----

// const israel = {
//   year: 1994,
//   calcAge: function () {
//     console.log(this); // a palavra this dentro de um método apontará para o próprio objeto que está chamando o método
//     console.log(2037 - this.year);
//   },
// };
// israel.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = israel.calcAge; // "emprestado" o método do objeto israel para o obj matilda
// matilda.calcAge(); // quando chamamos o método, o valor da palavra this será o obj que CHAMOU a função. Nesse caso, matilda

// const f = israel.calcAge;
// f(); // será retornado undefined devido a "f" ser apenas uma chamada simples de função. f não está anexado a nenhum objeto

// ---------- Lecture: Regular Functions vs Arrow Functions ----------

// var firstName = 'Matilda'; // var cria propriedade no objeto window. Então assim o método greet referenciará Matilda

// const israel = {
//   firstName: 'Israel',
//   year: 1994,
//   calcAge: function () {
// console.log(this);
// console.log(2037 - this.year);

// Solução 1
// const self = this; // self or that
// const isMillenial = function () {
// console.log(this); // sendo uma regular function, a keyword this é setada para undefined e não referencia o objeto.
// console.log(this.year >= 1981 && this.year <= 1996);
// console.log(self);
// console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solução 2
// const isMillenial = () => {
//   console.log(this); // usando uma arrow function, a this keyword referencia o objeto
// console.log(this.year >= 1981 && this.year <= 1996);
// };

//   isMillenial();
// },

// greet: () => console.log(`Hey ${this.firstName}`), // arrow functions nao tem sua propria this keyword, entao referenciará a função circundante, nesse caso o objeto global window (declaração de objeto não gera um escopo). Window.firstName não existe, entao o resultado é 'Hey undefined';
// };
// israel.greet();
// israel.calcAge();

// arguments keyword

// const addExpression = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpression(2, 3);
// addExpression(2, 5, 5, 8, 10, 45); // argumentos a mais serão adicionados no objeto arguments e podemm ser utilizados, apesar de não terem um nome (ex: através de um loop)

// -----

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3);
// addArrow(2, 5, 5, 8, 10, 45); // ReferenceError: arguments is not defined. Arrow Functions não possuem um objeto arguments, somente regular functions (declaration ou expression)

// ---------- Lecture: Primitives vs Objects in Practice ----------

// ----- Primitivo

let lastName = 'Williams';
let oldLastName = lastName; // criando novo identificador que aponta para o mesmo endereço
lastName = 'Davis'; // alterando o valor de lastName, estamos criando um novo endereço para este identificador, com o valor atualizado. Enquanto oldLastName segue apontando para o endereço anterior.
console.log(lastName, oldLastName); // vemos que de fato são valores diferentes agora

// ----- Referência

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // apenas copiando a referência que aponta para o mesmo objeto no Heap.
marriedJessica.lastName = 'Davis'; // aparentemente alterando a propiedade lastName do obj marriedJessica, mas na vdd está sendo alterado para ambos, pois se trata do MESMO objeto
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// ----- Copiando objetos

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // esse método cria uma cópia apenas do que está no primeiro nível, uma cópia superficial. Se houver outro obj dentro deste obj, eles ainda serão na prática o msm obj
jessicaCopy.lastname = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
