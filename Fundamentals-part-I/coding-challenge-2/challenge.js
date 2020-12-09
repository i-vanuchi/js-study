
// Use o código do Challenge #1

// Mostre um output no console, dizendo quem tem o maior IMC. Use o Template Literal para incluir os valores dos IMCs no output.


// mass / height ** 2;
// mass / (height * height);

let heightMark, massMark;
let heightJohn, massJohn;

// Test 1

heightMark = 1.69;
massMark = 78;
heightJohn = 1.95;
massJohn = 92;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Data 1:");

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}

// Test 2

heightMark = 1.88;
massMark = 95;
heightJohn = 1.76;
massJohn = 85;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Data 2:")

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`);
}
