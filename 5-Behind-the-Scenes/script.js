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
