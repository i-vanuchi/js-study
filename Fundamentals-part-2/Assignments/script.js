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

// const percentageOfWorld3 = population => (population / 7800) * 100;

// const brazil3 = percentageOfWorld3(212.4);
// const japan3 = percentageOfWorld3(126.5);
// const southKorea3 = percentageOfWorld3(51.6);

// console.log(brazil3);
// console.log(japan3);
// console.log(southKorea3);

// ---------- Lecture: Functions calling other Functions ----------

// function fruitSlicer(fruit) {
//     return fruit * 4;
// }

// function juiceMachine(apple, orange) {
//     const applePieces = fruitSlicer(apple);
//     const orangePieces = fruitSlicer(orange);

//     return `The juice was made with ${applePieces} apple piece(s) and ${orangePieces} orange piece(s).`;
// }

// console.log(juiceMachine(3, 2));

// ---------- Lecture: Introduction to Arrays ----------
// const nickName = 'Isra';
// const friends = ['Michael', 'Peter', 'Bruce', 'Clark', 'Matthew'];

// friends[3] = 'Liza';

// const years = new Array(1994, 2002, 2006, 2014, 2018);

// console.log(years[2]);

// console.log(friends[friends.length - 1]);

// const myself = [nickName, 'Programmer', friends, 2020 - 1994, years];
// console.log(myself);

// ---------------------------------------------------

// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const years = new Array(1994, 2002, 2006, 2014, 2018);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];

// console.log(ages);

// ---------- Lecture: Basic Array Operations (Methods) ----------

// const friends = ['Michael', 'Peter', 'Bruce', 'Clark', 'Matthew'];
// console.log(friends);

// Add

// friends.push('Steve');
// console.log(friends);

// friends.unshift('Miles');
// console.log(friends);

//Remove

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// IndexOf and Includes

// console.log(friends.indexOf('Bruce'));

// console.log(friends.includes('Clark')); // true
// console.log(friends.includes(456)); //false

// if (friends.includes('Clark')) {
//     console.log('You have a friend called Clark!');
// }

// ---------- Lecture: Introduction to Objects ----------

// const keanuArray = [
//     'Keanu',
//     'Reeves',
//     2077 - 2010,
//     'web developer',
//     ['Michael', 'John', 'Tom']
// ]

// const keanu = {
//     firstName: 'Keanu',
//     lastName: 'Reeves',
//     age: 2077 - 2010,
//     job: 'web developer',
//     friends: ['Michael', 'John', 'Tom']
// }

// ---------- Lecture: Dot vs. Bracket Notation ----------

// const keanu = {
//     firstName: 'Keanu',
//     lastName: 'Reeves',
//     age: 2077 - 2010,
//     job: 'web developer',
//     friends: ['Michael', 'John', 'Tom']
// }

// console.log(keanu.firstName);
// console.log(keanu['firstName']);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.');

// if (keanu[interestedIn]) {
//     console.log(keanu[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends.');
// }

// keanu.location = 'Novigrad';
// keanu['twitter'] = "There isn't";
// console.log(keanu);

// Challenge
// Keanu has 3 friends and his best friend is called Michael.

// console.log(`${keanu.firstName} has ${keanu.friends.length} friends and his best friend is called ${keanu.friends[0]}.`);

// ---------- Lecture: Dot vs. Object Methods ----------

const keanu = {
    firstName: 'Keanu',
    lastName: 'Reeves',
    birthYear: 1967,
    job: 'Web Developer',
    friends: ['Michael', 'John', 'Tom'],

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    hasDriversLicense: function () {
        return this.age >= 18 ? true : false;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense() ? 'a' : 'no'} driver's license.`;
    }
}

console.log(keanu.getSummary());