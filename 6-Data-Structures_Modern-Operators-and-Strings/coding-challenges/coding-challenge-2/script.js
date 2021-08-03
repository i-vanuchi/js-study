/*
  
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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
console.log('----- Task 1 -----');
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
console.log('----- Task 2 -----');

// (Solução A)
function calcOddAverage(obj) {
  let totalOdd = 0;
  const odds = Object.values(obj);
  for (const odd of odds) totalOdd += odd;
  return totalOdd / odds.length;
}
console.log(calcOddAverage(game.odds));

// 3
console.log('----- Task 3 -----');

const oddEntries = Object.entries(game.odds);

for (const [team, odd] of oddEntries) {
  // game[team] && console.log(`Odd of victory ${game[team]}: ${odd}`);
  // game[team] || console.log(`Odd of draw: ${odd}`);
  const teamStr = team === 'x' ? 'draw:' : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Bonus
console.log('----- Task 4 (Bonus) -----');

const scorers = {};
for (const player of game.scored) {
  // scorers[player] && (scorers[player] += 1);
  // scorers[player] || (scorers[player] = 1);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
