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
// // Selectionando Elementos
// // Seleciona todo o document. No console, vemos todo o html
// console.log(document.documentElement);
// // Seleciona o head e o body
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// // allButtons retorna uma HTMLCollection (LiveCollection), que é diferente de uma NodeList. A HTMLCollection atualiza automaticamente de acordo com alterações no DOM. NodeLists não atualizam, continuando com os mesmos itens que possuía no momento em que foi criada;

// document.getElementsByClassName('btn'); // tbm retorna uma HTMLCollection

// // Criando e Inserindo elementos
// // insertAdjacentHTML ('afterbegin', '<div class="simple-div">A simple div</div>')
// // insertAdjacentHTML recebe duas strings como argumento, sendo a primeira a que especifica o local em que o elemento será inserido no HTML (vide mdn), e a segunda sendo a tag por si só, como se estivessemos inserindo no proprio documento HTML;

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // adiciona o elemento no início do header
// header.append(message); // adiciona o elemento no final do header
// // importante notar que o elemento é adicionado apenas UMA vez, pois o elemento não pode estar em mais de um lugar ao mesmo tempo;
// // dessa forma, prepend e append podem ser usados não somente para inserir elementos, mas também para movê-los de um lugar para o outro no DOM;
// // Cada elemento no DOM é único, mas e se quisermos inserir um elemento múltiplas vezes? Bem, para isso precisamos criar um clone do Node:
// // header.append(message.cloneNode(true)); // o argumento "true" significa que todos os elementos filhos seram copiados tbm;

// // header.before(message); // adiciona o elemento antes do header (como irmão);
// // header.after(message); // adiciona o elemento depois do header (tbm como irmão);

// // Deletar elementos
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message); // como era feito antes do método remove();
//   });

// ---------- 184. Styles, Attributes and Classes ----------

// Copiada a criação dos elementos para a aula atual;
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // não retorna nada, pq esse método retorna apenas CSS inline;
console.log(message.style.backgroundColor); // retorna normalmente pq o backgroundColor foi setado através do método "style", que por sua vez insere o CSS como inline

// mas, se quiser o valor mesmo assim, é possível da seguinte maneira:
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

// adicionar 40px ao valor computado do height:
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// setar propriedade (custom property, a.k.a css variable) no documento (document = :root) via JS;
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

logo.alt = 'Minimalist logo';
// Não-padrão
console.log(logo.student); // undefined
console.log(logo.getAttribute('student'));
logo.setAttribute('company', 'Bankist');

// links
console.log(logo.src); // retorna a src absoluta
console.log(logo.getAttribute('src')); // retorna a src relativa
// o mesmo vale para href
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('f', 's');
logo.classList.remove('f', 's');
logo.classList.toggle('f');
logo.classList.contains('f'); // not includes
//não usar
// logo.className = 'a-class';
