/*
  Estamos construindo um aplicativo de apostas em futebol!
  Suponha que recebamos dados de um web service sobre um determinado jogo (variável 'game'). Neste desafio vamos trabalhar com esses dados.

  Suas tarefas:
  1. Crie um array de jogadores para cada equipe (variáveis ​​'players1' e 'players2');
  2. O primeiro jogador em qualquer array de jogadores é o goleiro e os outros são jogadores de campo. Para o Bayern de Munique (equipe 1), crie uma variável ('gk') com o nome do goleiro e um array ('fieldPlayers') com todos os 10 jogadores restantes;
  3. Crie um array 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadores);
  4. Durante o jogo, o Bayern de Munique (equipe 1) usou 3 jogadores substitutos. Portanto, crie um novo array ('players1Final') contendo todos os jogadores originais do team1 mais 'Thiago', 'Coutinho' e 'Perisic';
  5. Com base no objeto game.odds, crie uma variável para cada chance (chamada 'team1', 'draw' e 'team2');
  6. Escreva uma função ('printGoals') que recebe um número arbitrário de nomes de jogadores (NÃO usar array) e imprime cada um deles no console, junto com o número de gols que foram marcados no total (número de nomes de jogadores passados);
  7. A equipe com menor 'odd' tem maior probabilidade de vencer. Imprima no console qual equipe tem mais probabilidade de vencer, SEM usar uma declaração if / else ou o operador ternário.
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 3.25,
    x: 1.33,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...scorers) {
  console.log('Scorers:', ...scorers);
  console.log(`Number of Goals: ${scorers.length}`);
};

printGoals('Lewandowski', 'Muller', 'Sancho', 'Gotze');
printGoals(...game.scored);

// 7
console.log('Team 1:', team1);
console.log('Draw:', draw);
console.log('Team 2:', team2);

team2 > team1 &&
  draw > team1 &&
  console.log('Bayern Munich is more likely to win');

team1 > draw && team2 > draw && console.log('Draw is more likely to happen.');

team1 > team2 &&
  draw > team2 &&
  console.log('Borussia Dortmund is more likely to win');
