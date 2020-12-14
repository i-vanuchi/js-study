/*

    De volta aos às duas equipes de ginástica, os Dolphins e os Koalas!
    Há uma nova disciplina, que funciona diferente.
    Cada equipe compete 3 vezes, e então a pontuação média das 3 competições é calculada (uma média por equipe).
    Uma equipe vence somente se tiver pelo menos o DOBRO da pontuação média da outra equipe. De outra forma, nenhuma equipe vence!

    1. Crie uma Arrow Function 'calcAverage' para calcular a média de 3 pontuações.
    2. Use a função para calcular a média para ambas as equipes.
    3. Cria uma função 'checkWinner' que recebe a pontuação média de cada equipe como parâmetros ('avgDolphins' and 'avgKoalas'), e então mostra o vencedor no console, junto com os dados da vitória, de acordo com as regras acima. "Ex: Koalas win (30 vs 13)".
    4. Use a função 'checkWinner' para determinar o vencedor para os dados de teste 1 e 2.
    5. Ignore empates desta vez.

    Dados de teste:

    1 - Dolphins 44, 23 e 71. Koalas 65, 54 e 49.
    2 - Dolphins 85, 54 e 41. Koalas 23, 34 e 27.

*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);

console.log(averageDolphins, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins wins (${avgDolphins} vs ${avgKoalas}) 🏆`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas wins (${avgKoalas} vs ${avgDolphins}) 🏆`;
    } else {
        return "Nobody wins the trophy 😥"
    }
}

console.log(checkWinner(averageDolphins, averageKoalas));