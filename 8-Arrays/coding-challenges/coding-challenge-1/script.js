/*
  Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and store the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.


*/

// Test data 1:

const dataJulia1 = [3, 5, 2, 12, 7];
const dataKate1 = [4, 1, 15, 8, 3];

// Test data 2:

const dataJulia2 = [9, 16, 6, 8, 3];
const dataKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // 1
  const dogsJuliaCopy = dogsJulia.slice(1, -2);
  console.log(dogsJuliaCopy);

  // 2
  const totalDogs = dogsJuliaCopy.concat(dogsKate);
  console.log(totalDogs);

  // 3
  totalDogs.forEach(function (age, i) {
    if (age >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
    else console.log(`Dog number ${i + 1} is still a puppy 🐶.`);
  });
};

// 4
checkDogs(dataJulia1, dataKate1);
