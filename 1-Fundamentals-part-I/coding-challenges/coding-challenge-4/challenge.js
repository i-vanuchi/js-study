/*
   Steven quer construir uma calculadora de gorjeta bem simples para usar sempre que for comer em um restaurante. Em seu país, é comum dar 15% de gorjeta se o valor da conta for entre 50 e 300. Se o valor for diferente, a gorjeta é de 20%.

   1. Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'tip' para isso. Não é permitido o uso de declarações 'if/else' 😅.
   2. Mostre uma string no console contendo o valor da conta, da gorjeta e o valor total (conta + gorjeta). Exemplo: "The bill was 275, the tip was 41.25, and the total value 316.25".

*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total  value ${total}`);
