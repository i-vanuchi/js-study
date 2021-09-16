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

//O que acontece ao criar um objeto com o operador 'new';
// 1. novo {} é criado;
// 2. função construtora é invocada, this = {};
// 3. {} linkado a um protótipo;
// 4. function retorna automaticamente {};

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

// ---------- 210. ES6 Classes ----------

// class expression
// const PersonClass = class {

// }

// class declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // métodos serão adicionados à propriedade .prototype
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // static method (only available in the PersonClass itself, not in the instances). the others are instance methods
  static hey() {
    console.log("Hey there! 👋");
  }
}

const julia = new PersonClass("Julia", 1997);
console.log(julia);
julia.calcAge();

console.log(julia.__proto__ === PersonClass.prototype);

// adicionar método como na sintaxe de constructor tbm funciona, mas não é necessário e fica mais bagunçado;
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

julia.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizen
// 3. Classes are executed in strict mode

// ---------- 211. Getters and Setters ----------

const account = {
  owner: "Pablo",
  movements: [100, 200, 300, 400, 450],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 15;
console.log(account.latest);

// exemplo com a classe usada na aula anterior
class PersonClass2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // métodos serão adicionados à propriedade .prototype
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  //aqui
  get age() {
    return 2025 - this.birthYear;
  }

  //sempre que um objeto for criado a partir dessa classe, no momento da atribuição do fullName na construtora, esse setter será executado;
  //setar propriedade que já existe;
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonClass2("Jessica Davis", 1997);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonClass2("Walter White", 1965);

// ---------- 212. Static Methods ----------

Array.from(document.querySelectorAll("h1"));
Number.parseFloat(12);

// PersonClass.hey = function () {
//   console.log("Hey there! 👋");
//   console.log(this); // a propria função construtora, pq é ela que está chamando o método;
// };
PersonClass.hey();
// julia.hey(); // erro. não foi implementada a função no protótipo;

// ---------- 213. Object.create ----------

// checar slide

// não tem função construtora, nem propriedades prototype, nem operador new envolvidos
// em vez disso, podemos setar manualmente qual o obj será o protótipo do obj criado

// obj protótupo
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
  // nada a ver com funções construtoras. só um método que pode ser chamado para implementar as propriedades mais facilmente;
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
//criar obj e linkar ao protótipo (obj literal PersonProto)
const steve = Object.create(PersonProto);
console.log(steve);
steve.name = "Steve";
steve.birthYear = 1918;
steve.calcAge();

console.log(steve.__proto__);
console.log(steve.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

function funcaoTeste() {
  return 1 + 1;
}

console.log(PersonProto.prototype);
console.log(steve.__proto__);
// console.log(sarah.__proto__ === );
