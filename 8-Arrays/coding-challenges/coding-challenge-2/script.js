/*
  

*/

// test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(ages) {
  // 1
  const humanAges = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))

    // 2 (com função regular)
    .filter(dogAge => dogAge >= 18);

  // 3
  // const dogAgesAverage =
  //   humanAges.reduce(function (acc, dogAge) {
  //     return acc + dogAge;
  //   }, 0) / humanAges.length;
  // 3 - solução alternativa
  const dogAgesAverage = humanAges.reduce(function (acc, dogAge, i, arr) {
    return acc + dogAge / arr.length;
  }, 0);

  return dogAgesAverage;
}

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
