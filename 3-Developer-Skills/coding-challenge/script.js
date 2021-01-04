'use strict';

/* 
    Coding Challenge #1

    Dado um array com temperaturas maximas previstas, o termômetro exibirá uma string com as temperaturas. Exemplo: [17, 21, 23] exibirá "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...".

    1 - Crie a função 'printForecast' que receberá um array 'arr' e exibirá uma string como a do exemplo, no console. Tente com os dois dados de teste.
    2 - Entenda o problema e quebre-o em sub-problemas!

*/

// criar loop que percorra o array
// cada iteração gerará uma string
// criar uma string que receberá os resultados
// concatenar as strings geradas

// Test data
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    
    let finalString = '... ';
    
    for (let i = 0; i < arr.length; i++) {
        finalString += ` ${arr[i]}ºC in ${i + 1} days ...`;
    }

    return finalString;
}

console.log(printForecast(temps2));