'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---------- 182. How the DOM Really Works ----------

/* Checar o DOC no word com as anotações */

// ---------- 183. Selecting, Creating and Deleting Elements ----------
// Selectionando Elementos
// Seleciona todo o document. No console, vemos todo o html
console.log(document.documentElement);
// Seleciona o head e o body
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// allButtons retorna uma HTMLCollection (LiveCollection), que é diferente de uma NodeList. A HTMLCollection atualiza automaticamente de acordo com alterações no DOM. NodeLists não atualizam, continuando com os mesmos itens que possuía no momento em que foi criada;

document.getElementsByClassName('btn'); // tbm retorna uma HTMLCollection

// Criando e Inserindo elementos
// insertAdjacentHTML (revisar o funcionamento no bankist app)

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // adiciona o elemento no início do header
header.append(message); // adiciona o elemento no final do header
// importante notar que o elemento é adicionado apenas UMA vez, pois o elemento não pode estar em mais de um lugar ao mesmo tempo;
// dessa forma, prepend e append podem ser usados não somente para inserir elementos, mas também para movê-los de um lugar para o outro no DOM;
// Cada elemento no DOM é único, mas e se quisermos inserir um elemento múltiplas vezes? Bem, para isso precisamos criar um clone do Node:
// header.append(message.cloneNode(true)); // o argumento "true" significa que todos os elementos filhos seram copiados tbm;

// header.before(message); // adiciona o elemento antes do header (como irmão);
// header.after(message); // adiciona o elemento depois do header (tbm como irmão);

// Deletar elementos
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // como era feito antes do método remove();
  });
