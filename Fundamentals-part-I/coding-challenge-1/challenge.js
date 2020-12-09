/* 

    Mark e John estão tentando comparar seus índices de massa corporal (IMC, ou BMI - Body Mass Index), do qual é calculado usando a seguinte formula:

    mass / height ** 2;
    ou
    mass / (height * height);

    1. Armazene o peso e altura de Mark e de John em variáveis.
    2. Calcule seus IMCs usando a fórmula.
    3. Crie uma variável booleana "markHigherBMI" contendo a informação sobre se Mark tem um IMC maior do que o de John.

*/

let heightMark, massMark;
let heightJohn, massJohn;

// Test 1

heightMark = 1.69;
massMark = 78;
heightJohn = 1.95;
massJohn = 92;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = bmiMark > bmiJohn;

console.log("Data 1:")
console.log("Mark's BMI is " + bmiMark + ", and John's BMI is " + bmiJohn);
console.log("Is Mark's BMI higher than John's?");
console.log("Answer: ", markHigherBMI);

// Test 2

heightMark = 1.88;
massMark = 95;
heightJohn = 1.76;
massJohn = 85;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = bmiMark > bmiJohn;

console.log("Data 2:")
console.log("Mark's BMI is " + bmiMark + ", and John's BMI is " + bmiJohn);
console.log("Is Mark's BMI higher than John's?");
console.log("Answer: ", markHigherBMI);