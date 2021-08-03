/*
    Vamos melhorar o calculadora de gorjetas de Steven.

    1. Crie o array 'bills' contendo todos os 10 valores de conta de teste.
    2. Crie arrays vazias para as gorjetas e para os totais ('tips' e 'totals').
    3. Use a função 'calcTip' que escrevemos anteriormente (não precisa escrever de novo) para calcular as gorjetas e os totais (bill + tip) para cada valor de conta no array 'bills'. Use um loop for para realizar os 10 cálculos!

    Valores de teste: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52

    Bonus:

    4. Escreva a função 'calcAverage' que pega um array chamado 'arr' como argumento. Essa função calcula a média de todos os números do array.
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    return bill * tip;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
};

console.log(bills);
console.log(tips);
console.log(totals);

// Bonus (Item 4):

const testValues = [8, 12, 10, 5, 15, 25, 3, 7, 10, 5];

const calcAverage = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(calcAverage(totals));