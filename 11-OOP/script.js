"use strict";

// ---------- 203. What is Object-Oriented Programming? ----------

// Consultar anotações no DOCs

// ---------- 204. OOP in JavaScript ----------

// Consultar anotações no DOCs

// ---------- 205. Constructor Functions and the new Operator ----------

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Nunca fazer isso, pq seria criado o método para cada instância, o que é péssimo para performance;
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

// nome das constructors são capitalizados (convenção);
// arrow functions não servem porque não possuem this keyword própria;
// diferença de constructor e regular function é que a constructor é invocada usando o operador new;

const israel = new Person("Israel", 1994);
console.log(israel);

// 1. novo {} é criado;
// 2. função é invocada, this = {};
// 3. {} linkado a um protótipo;
// 4. function retorna automaticamente {};
//esses quatro passos acontecem por ccausa do operador 'new';

const peter = new Person("Peter", 2002);
const ciri = new Person("Cirilla", 2008);

console.log(peter, ciri);

console.log(israel instanceof Person);

// ---------- 206. Prototypes ----------

// Toda e qualquer função no javascript tem uma propriedade chamada Prototype;
// Todo objeto criado por uma função construtura, terá acesso a todas as propriedades e métodos que definirmos na propriedade Prototype da construtura;
//
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

ciri.calcAge();
peter.calcAge();

console.log(ciri.__proto__); // criado pelo passo 3 da aula anterior;
console.log(ciri.__proto__ === Person.prototype);
// Person.prototype não é o protótipo de Person, mas sim o protótipo de todos os objetos criados a partir da função construtora Person, ou seja, de todas as instâncias de Person;
console.log(Person.prototype.isPrototypeOf(ciri)); // true
console.log(Person.prototype.isPrototypeOf(peter)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
// ".prototype" pode ser interpretado como ".prototypeOfLinkedObjects"

// setando propriedades no protótipo
Person.prototype.species = "Homo Sapiens";
console.log(ciri.species, peter.species);

console.log(ciri.hasOwnProperty("firstName")); // true
console.log(ciri.hasOwnProperty("species")); // false (propriedade pertence ao protótipo - Person.prototype);

// ---------- 207. Prototypal Inheritance and The Prototype Chain ----------

// Object.prototype: topo da Prototype Chain
console.log(ciri.__proto__.__proto__);
console.log(ciri.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
// Consultar restante nas pgs 167 e 168 do pdf;

// ---------- 208. Prototypal Inheritance on Built-in Objects ----------

const arr = [2, 5, 2, 5, 85, 2]; // [] === new Array();
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // Object.protype

// criar um método em Array.prototype;
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
//essa pratica não é recomendada, a menos que esteja trabalhando em um projeto pequeno pessoal, porque pode causar problemas. Por exemplo, caso seja implementado nas engines um método de mesmo nome, mas com outra funcionalidade, ou caso esteja trabalhando em equipe e mais de uma pessoa crie o mesmo método mas com nomes diferentes, etc;

// prototype chain de um elemento do DOM
const heading1 = document.querySelector("h1");
console.dir(heading1);
