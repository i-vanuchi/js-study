const country = 'Brazil';
const continent = 'South America';
let population = 212.4;
const isIsland = false;
const language = 'Portuguese';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

let half = population / 2;
console.log(half);

population++;
console.log(population);
population--;

console.log(population > 6);
console.log(population > 33);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

const description = `${country} is in ${continent} and its ${population} million people speaks ${language}.`;

console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} below average.`)
}