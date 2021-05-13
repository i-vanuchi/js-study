// ----- Lecture: Working with Strings - Part 1 -----

const airline = 'Azul Linhas Aéreas';
const plane = 'A320neo';

// Todos esses métodos retornam novas strings, não alterando a inicial.

console.log(plane[0]); // 'A'
console.log(plane[1]); // '3'
console.log(plane[2]); // '2'
console.log('B737'[0]); // 'B'

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('s'));
console.log(airline.lastIndexOf('s'));

console.log(airline.indexOf('Linhas'));
console.log(airline.indexOf('linhas')); // -1 pois não foi encontrado (buscas em strings são Case Sensitive)

console.log(airline.slice(5)); // posição inicial onde a string será extraída. O resultado é uma SUBSTRING

console.log(airline.slice(5, 11)); // posição inicial e posição final
// O Length da string gerada sempre será o index final menos o inicial (11 - 5 = 6)

console.log(airline.slice(0, airline.indexOf(' '))); // primeira palavra
console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' '))); // segunda palavra
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // terceira palavra

console.log(airline.slice(-1)); // especificando um valor negativo, a contagem do index é feita do fim da string pro começo
console.log(airline.slice(2, -2));

// Exemplo de uso - função que checa se o assento é o do meio.
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 🙁');
  else console.log('You got lucky! 😉');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Sempre que chamamos um método em uma string, o JS converte a string primitiva em uma string objeto com o mesmo consteúdo (Boxing - pega a string e põe em uma caixa, que é o objeto)

console.log(new String('israel'));
console.log(typeof new String('israel')); // object
console.log(typeof new String('israel').slice(1)); // quando a operação termina, o JS converte novamente a string objeto para string primitivo. Todos os métodos de strings retornam primitivos, mesmo se chamados em uma string objeto.
