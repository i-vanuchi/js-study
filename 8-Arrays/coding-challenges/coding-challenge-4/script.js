/*

*/

// test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
console.log('-------- 1 --------');
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));

// console.log(dogs);

// 2
console.log('-------- 2 --------');
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(sarahsDog);
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'
  }.`
);

// 3
console.log('-------- 3 --------');
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(cur => cur.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(cur => cur.owners);

// // Solução alternativa
// // const ownersEatTooMuch2 = [];
// // const ownersEatTooLittle2 = [];

// // dogs.map(dog =>
// //  dog.curFood > dog.recFood
// //     ? ownersEatTooMuch2.push(dog)
// //    : ownersEatTooLittle2.push(dog)
// // );

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4
console.log('-------- 4 --------');

const logFoodInfo = function (dogsArr) {
  let owners = dogsArr
    // .reduce((ownersArr, cur) => ownersArr.concat(cur.owners), [])
    .join(' and ');

  const str = `${owners}'s dogs eat too ${
    dogsArr[0].recFood > dogsArr[0].curFood ? 'little' : 'much'
  }`;

  return str;
};

console.log(logFoodInfo(ownersEatTooMuch));
console.log(logFoodInfo(ownersEatTooLittle));

// 5
console.log('-------- 5 --------');

// dogs.push({
//   weight: 35,
//   curFood: 250,
//   owners: ['Jaskier', 'Essi'],
//   recFood: 250,
// });
const foodExactly = dogs.some(dog => dog.recFood === dog.curFood);
console.log(foodExactly);

// 6
console.log('-------- 6 --------');

const foodOkay = dogs.some(
  dog =>
    // dog.curFood >= dog.recFood - dog.recFood * 0.1 &&
    // dog.curFood <= dog.recFood + dog.recFood * 0.1
    dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
);
console.log(foodOkay);

// 7
console.log('-------- 7 --------');

const dogsOkayAmount = dogs.filter(
  dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
);
console.log(dogsOkayAmount);

// 8
console.log('-------- 8 --------');
// criar shallow copy
// ordenar por porção de comida recomendada de forma ascendente

const dogsAscendingRecFood = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsAscendingRecFood);
console.log(dogs);
