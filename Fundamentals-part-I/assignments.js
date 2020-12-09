// const country = 'Brazil';
// const continent = 'South America';
// let population = 212.4;
// const isIsland = false;
// const language = 'Portuguese';

// let half = population / 2;
// console.log(half);

// population++;
// console.log(population);
// population--;

// console.log(population > 6);
// console.log(population > 33);

// // const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// const description = `${country} is in ${continent} and its ${population} million people speaks ${language}.`;

// console.log(description);

// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33 - population} below average.`)
// }

// // Lecture: Type Conversions and Coercion

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
// console.log('7' + 4 - '2') // 72
// console.log(2 * '2' + 5) // 9

// Lecture: Equality Operators - Assignment 8

// const numNeighbours = Number(prompt("How many neughbour countries does your country have?"));

// if (numNeighbours === 1) {
//     console.log("Only one border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders!");
// }

// Lecture: Logical Operators - Assignment 9

const country = 'Brazil';
let population = 38;
const isIsland = false;
const language = 'English';

if (language === 'English' && population < 50 && !isIsland) {
    console.log("You should live in Brazil! :)");
} else {
    console.log("Brazil doesn't meet your criteria. :(");
}