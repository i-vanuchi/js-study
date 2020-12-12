// ---------- Lecture: Functions ----------

'use strict';

function describeCountry(country, population, capitalCity) {

    const countryData = `${country} has ${population} million people and its capital city is ${capitalCity}.`;

    return countryData;
}

const country1 = describeCountry('Brazil', 212.4, 'Brasília');
const country2 = describeCountry('Canada', 37.6, 'Ottawa');
const country3 = describeCountry('Netherlands', 17.3, 'Amsterdam');

console.log(country1);
console.log(country2);
console.log(country3);