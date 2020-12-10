// ---------- Lectures: Values and Variables / Data Types / Let, Const and Var ----------
// ---------- Assignment 1, 2 and 3 ----------

// const country = 'Brazil';
// const continent = 'South America';
// let population = 212.4;
// const isIsland = false;
// const language = 'Portuguese';

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// ---------- Lecture: Basic Operators - Assignment 4 ----------

// let half = population / 2;
// console.log(half);

// population++;
// console.log(population);
// population--;

// console.log(population > 6);
// console.log(population > 33);

// // const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

// ---------- Lecture: Strings and Template Literals - Assignment 5 ----------

// const description = `${country} is in ${continent} and its ${population} million people speaks ${language}.`;

// console.log(description);

// ---------- Lecture: Taking Decisions: if - else statements - Assignment 6 ----------

// if (population > 33) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33 - population} below average.`)
// }

// ---------- Lecture: Type Conversions and Coercion - Assignment 7 ----------

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
// console.log('7' + 4 - '2') // 72
// console.log(2 * '2' + 5) // 9

// ---------- Lecture: Equality Operators - Assignment 8 ----------

// const numNeighbours = Number(prompt("How many neughbour countries does your country have?"));

// if (numNeighbours === 1) {
//     console.log("Only one border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border!");
// } else {
//     console.log("No borders!");
// }

// ---------- Lecture: Logical Operators - Assignment 9 ----------

// const country = 'Brazil';
// let population = 38;
// const isIsland = false;
// const language = 'English';

// if (language === 'English' && population < 50 && !isIsland) {
//     console.log("You should live in Brazil! :)");
// } else {
//     console.log("Brazil doesn't meet your criteria. :(");
// }

// ---------- Lecture: The Switch statement - Assignment 10.1 ----------

// const day = 'monday';

// if (day === 'monday') {
//     console.log('Plan course structure.');
//     console.log('Go to code meetup.');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos.');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos.');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :)');
// } else {
//     console.log('Not a valid day!');
// }
// 
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure.');
//         console.log('Go to code meetup.');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos.');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos.');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :)');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// ---------- Lecture: The Switch statement - Assignment 10.2 ----------

const language = 'portuguese';
console.log(language);

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers!');
        break;
    case 'english':
        console.log('3rd place!');
        break;
    case 'hindi':
        console.log('4th place!');
        break;
    case 'arabic':
        console.log('5th place!');
        break;
    default:
        console.log('Great language too!')
}