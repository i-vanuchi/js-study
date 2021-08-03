/*
    Coding Challenge 4

    Escreva um programa que recebe uma lista de nomes de variáveis escritas em underscore_case e as converte para camelCase.
    Os dados de entrada virão de um textarea inserido no DOM e a conversão ocorrerá quando o botão for pressionado.

    Test data:
    underscore_case
     firstName
    Some_Variable
       calculate_AGE
    delayed_departure

    Devem prodozir esse output (5 console.log outputs separados):
    underscoreCase    ✅
    firstName         ✅✅
    someVariable      ✅✅✅
    calculateAge      ✅✅✅✅
    delayedDeparture  ✅✅✅✅✅

*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Elementos
const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.textContent = 'Converter';
textArea.value = `underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure`;

btn.addEventListener('click', function () {
  const arr = textArea.value.split('\n');

  // My Solution
  for (const variable of arr) {
    const [first, second] = variable.toLowerCase().trim().split('_');
    const vFixed = [first, second[0].toUpperCase(), second.slice(1)].join('');

    console.log(
      `${vFixed.padEnd(20)}${'✅'.repeat(arr.indexOf(variable) + 1)}`
    );
  }

  // Jonas Solution
  // for (const [i, row] of arr.entries()) {
  //   const [first, second] = row.toLowerCase().trim().split('_');
  //   const output = `${first}${second.replace(
  //     second[0],
  //     second[0].toUpperCase()
  //   )}`;

  //   console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  // }
});
