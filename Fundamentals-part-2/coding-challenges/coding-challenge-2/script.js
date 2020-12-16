/*

    Steven ainda está construindo sua calculadora de gorjetas, usando as mesmas regras de antes: Gorjeta de 15% sobre o valor da conta, se o valor for entre 50 e 300, e se o valor for diferente, a gorjeta será de 20%.

    1. Escreva a função 'calcTip' que pega qualquer valor de conta como input e retorna a gorjeta correspondente. Teste a função usando uma conta no valor de 100.
    2. Então, crie o array 'bills' (contas) com os seguintes valores de conta: 125, 555 e 44.
    3. Crie o array 'tips' contendo o valor de gorjeta para cada valor de conta, calculados através da função criada anteriormente.
    4. BONUS - Crie o array 'total' contendo os valores totais (bill + tip).

*/

const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    return bill * tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);