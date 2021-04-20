'use strict';

// ---------- Lecture: Scoping in Practice ----------

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); // JS buscará pela variável no escopo acima (global);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // ao declarar uma variável com o mesmo nome de uma variável existente em um escopo acima, o JS simplesmente a utilizará e não subirá os escopos procurando como faria se não a encontrasse no escopo atual;
      const firstName = 'Steve';

      // ao redefinir uma variável em um escopo interno, o JS não encontrará uma variável com o mesmo nome no escopo atual e precisará buscar no escopo acima, redefinindo a variável criada no escopo anterior;
      output = 'NEW OUTPUT!';

      // variável const que é BLOCK scoped
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // funções são block scoped quando o strict mode está ativo;
      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial); // variável var que é FUNCTION scoped e pertence ao escopo de toda a função printAge();
    // console.log(add(1, 2));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Israel';
calcAge(1990);
