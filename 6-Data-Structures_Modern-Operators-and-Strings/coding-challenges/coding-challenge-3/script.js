/*
    Coding Challenge 3

    Vamos continuar com nosso app de apostas em futebol! Dessa vez, nós temos um map chamado 'gameEvents' com os eventos que ocorreram durante a partida. Os valores são os próprios eventos, e as chaves são os minutos em que cada evento ocorreu.

    Tarefas:
    1. Criar um array 'events' dos diferentes eventos que ocorreram no jogo (sem duplicatas).
    2. Depois de terminada a partida, foi verficado que o cartão amarelo no minuto 64 foi injusto. Então remova esse evento do registro de eventos.
    3. Calcule e mostre no console a seguinte string: "An event happened, on average, every 9 minutes" (tenha em mente que uma partida tem 90 minutos).
    4. Aplique um loop no 'gameEvents' e mostre cada elemento no console, marcando se foi no primeiro ou no segundo tempo (depois dos 45min) do jogo, assim: "[FIRST HALF] 17: ⚽ GOAL"
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 SUBSTITUTION'],
  [47, '⚽ GOAL'],
  [61, '🔁 SUBSTITUTION'],
  [64, '🟡 YELLOW CARD'],
  [69, '🔴 RED CARD'],
  [70, '🔁 SUBSTITUTION'],
  [72, '🔁 SUBSTITUTION'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 YELLOW CARD'],
]);

console.log(gameEvents);

// 1
console.log('----- TASK 1 -----');
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
console.log('----- TASK 2 -----');
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log('----- TASK 3 -----');

console.log(
  `An event happened, on average, every ${Math.trunc(
    90 / gameEvents.size
  )} minutes.`
);

// 4
console.log('----- TASK 4 -----');
for (const [minute, event] of gameEvents) {
  let str = '';
  minute > 48 ? (str = 'SECOND') : (str = 'FIRST');
  console.log(`[${str} HALF] ${minute}: ${event}`);
}
