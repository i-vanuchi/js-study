/*
    Há dois times de ginástica, Dolphins e Koalas. Eles competem entre si 3 vezes. O vencedor com a maior média de pontuação ganha um troféu!

    1. Calcule a média de pontuação de cada time, usando os dados de teste abaixo.
    2. Compare as médias de pontuação dos times para determinar o vencedor da competição, e mostre no console. Não se esqueça que pode haver um empate, ou seja, ambos os times possuirem a mesma média de pontuação, então considere isso também.
    3. BONUS 1 - Inclua um requerimento de no mínimo 100 pontos. Com essa regra, um time só pode vencer se tiver a pontuação maior que o outro time, e ao mesmo tempo mais de 100 pontos. Dica: use um operador lógico para testar a pontuação mínima, bem como múltiplos blocos else-if.
    4. BONUS 2 - Pontuação mínima também se aplica ao empate! Então um empate só ocorre quando os dois times tiverem a mesma pontuação e ambos tiverem pontuação maior ou igual a 100 pontos. De outro modo, nenhum dos times ganha o troféu.

    Dados para os testes:

    1 - Dolphins pontuam 96, 108 e 89. Koalas pontuam 88, 91 e 110.
    BONUS 1 - Dolphins pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 123.
    BONUS 2 - Dolphins pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 106.
*/

const dolphinsAverage = (97 + 99 + 99) / 3;
const koalasAverage = (98 + 94 + 108) / 3;

console.log(`Dolphins score: ${dolphinsAverage}`);
console.log(`Koalas score: ${koalasAverage}`);

if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log("Draw!");
} else if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log("The Dolphins are the Winners!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
    console.log("The Koalas are the Winners!")
} else {
    console.log("There was no Winners. :(")
}
