// ----- Lecture: Working with Strings - Part 1 -----

const airline = 'Azul Linhas Aéreas';
const plane = 'A320';

// // Todos esses métodos retornam novas strings, não alterando a inicial.

// console.log(plane[0]); // 'A'
// console.log(plane[1]); // '3'
// console.log(plane[2]); // '2'
// console.log('B737'[0]); // 'B'

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('s'));
// console.log(airline.lastIndexOf('s'));

// console.log(airline.indexOf('Linhas'));
// console.log(airline.indexOf('linhas')); // -1 pois não foi encontrado (buscas em strings são Case Sensitive)

// console.log(airline.slice(5)); // posição inicial onde a string será extraída. O resultado é uma SUBSTRING

// console.log(airline.slice(5, 11)); // posição inicial e posição final
// // O Length da string gerada sempre será o index final menos o inicial (11 - 5 = 6)

// console.log(airline.slice(0, airline.indexOf(' '))); // primeira palavra
// console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' '))); // segunda palavra
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // terceira palavra

// console.log(airline.slice(-1)); // especificando um valor negativo, a contagem do index é feita do fim da string pro começo
// console.log(airline.slice(2, -2));

// // Exemplo de uso - função que checa se o assento é o do meio.
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 🙁');
//   else console.log('You got lucky! 😉');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// // Sempre que chamamos um método em uma string, o JS converte a string primitiva em uma string objeto com o mesmo consteúdo (Boxing - pega a string e põe em uma caixa, que é o objeto)

// console.log(new String('israel'));
// console.log(typeof new String('israel')); // object
// console.log(typeof new String('israel').slice(1)); // quando a operação termina, o JS converte novamente a string objeto para string primitivo. Todos os métodos de strings retornam primitivos, mesmo se chamados em uma string objeto.

// ----- Lecture: Working with Strings - Part 2 -----

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('israel'.toUpperCase());

// // Consertar a capitalização de nomes

// const passenger = 'iSraEl'; // Israel
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Função que conserta a capitalização de nomes

// const nameFixer = function (passengerName) {
//   return (
//     passengerName.toLowerCase()[0].toUpperCase() +
//     passengerName.toLowerCase().slice(1)
//   );
// };

// console.log(nameFixer('naTaSHa'));
// console.log(nameFixer('SAMantHa'));
// console.log(nameFixer('saITaMA'));

// // Comparar emails

// const email = 'hello@domain.com';
// const loginEmail = '  Hello@domain.Com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// // Função que compara emails

// const emailComparator = function (correctEmail, enteredEmail) {
//   const emailFixed = enteredEmail.toLowerCase().trim();
//   console.log(`Correct email: ${correctEmail}
//   Entered email: ${enteredEmail}`);

//   const comparison =
//     correctEmail === emailFixed ? `Email is correct` : `Email is wrong`;
//   console.log(comparison);
//   return emailFixed;
// };
// emailComparator('teste@email.com', '  TestE@Email.Com \n');
// emailComparator('teste@email.com', '  TestEe@Email.Com \n');
// emailComparator('teste@email.com', '  TestE@Email.Co m \n');

// // Substituir strings (replace)

// const priceUS = 'U$288.97';
// const priceBR = priceUS.replace('U', 'R').replace('.', ',');
// console.log(priceUS, priceBR);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //solução sem replaceAll, usando regular expression (regexp) com a flag 'g', que significa global.

// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); // true
// console.log(plane2.includes('Boeing')); // false
// console.log(plane2.startsWith('Air')); // true

// if (plane2.startsWith('Air') && plane2.endsWith('neo')) {
//   console.log('Part of the NEW family!');
// }

// // Exercícios de prática
// // Função que checa se a bagagem está permitida para o embarque

// const checkBaggage = function (items) {
//   const fixedStr = items.toLowerCase();
//   if (fixedStr.includes('knife') || fixedStr.includes('gun')) {
//     console.log('You are NOT allowed on board!');
//   } else {
//     console.log('Welcome aboard! :)');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a Gun for protection');

// ----- Lecture: Working with Strings - Part 3 -----

// Split

console.log('a+very+nice+string'.split('+'));
console.log('Israel Vanuchi'.split(' '));

// Split + Join
const [firstName, lastName] = 'Israel Vanuchi'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const separateName = name.split(' ');
  const namesUpper = [];

  for (const n of separateName) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Solução 1
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Solução 2
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('valdeci santos silva');
capitalizeName('joao soares neto');

// Padding (adicionar caracteres na string até que ela tenha o tamanhoi desejado)

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Israel'.padStart(20, '+').padEnd(30, '+'));

// Exemplo real de padding

const maskCreditCard = function (number) {
  const strNumber = number + '';
  const maskedNumber = strNumber.slice(-4).padStart(strNumber.length, '*');
  return maskedNumber;
};

console.log(maskCreditCard(45892531514));
console.log(maskCreditCard('1254785'));
console.log(maskCreditCard(1541785412365225));

// Repeat

const weatherMsg = 'Bad weather... All departures delayed... ';
console.log(weatherMsg.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(9);
