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

const israel = {
  year: 1994,
  calcAge: function () {
    console.log(this); // a palavra this dentro de um método apontará para o próprio objeto que está chamando o método
    console.log(2037 - this.year);
  },
};
israel.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = israel.calcAge; // "emprestado" o método do objeto israel para o obj matilda
matilda.calcAge(); // quando chamamos o método, o valor da palavra this será o obj que CHAMOU a função. Nesse caso, matilda

const f = israel.calcAge;
f(); // será retornado undefined devido a "f" ser apenas uma chamada simples de função. f não está anexado a nenhum objeto
