'use strict';

// ---------- Lecture: Functions ----------

// function describeCountry(country, population, capitalCity) {

//     const countryData = `${country} has ${population} million people and its capital city is ${capitalCity}.`;

//     return countryData;
// }

// const country1 = describeCountry('Brazil', 212.4, 'Brasília');
// const country2 = describeCountry('Canada', 37.6, 'Ottawa');
// const country3 = describeCountry('Netherlands', 17.3, 'Amsterdam');

// console.log(country1);
// console.log(country2);
// console.log(country3);

// ---------- Lecture: Function Declarations vs. Expressions ----------

// Function Declaration

// function percentageOfWorld1(population) {
//     return (population / 7800) * 100;
// }

// const brazil = percentageOfWorld1(212.4);
// const japan = percentageOfWorld1(126.5);
// const southKorea = percentageOfWorld1(51.6);

// console.log(brazil);
// console.log(japan);
// console.log(southKorea);

// //Function Expression

// const percentageOfWorld2 = function (population) {
//     return (population / 7800) * 100;
// }

// const brazil2 = percentageOfWorld2(212.4);
// const japan2 = percentageOfWorld2(126.5);
// const southKorea2 = percentageOfWorld2(51.6);

// console.log(brazil2);
// console.log(japan2);
// console.log(southKorea2);

// ---------- Lecture: Arrow Functions ----------

const percentageOfWorld3 = population => (population / 7800) * 100;

const brazil3 = percentageOfWorld3(212.4);
const japan3 = percentageOfWorld3(126.5);
const southKorea3 = percentageOfWorld3(51.6);

console.log(brazil3);
console.log(japan3);
console.log(southKorea3);