'use strict';

// Elements Selection
const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const overlay = document.querySelector('.overlay');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// ---****--- 185. Implementing Smooth Scrolling ---****---
// button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // console.log(e.target.getBoundingClientRect()); // retorna as coordenadas do elemento em relação ao viewport

  // console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset); // retorna o scroll atual em relação ao topo e à extremidade esquerda da página

  // console.log(
  //   'height/width viewport: ',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // ); // retornam a altura e a largura da viewport, respectivamente;

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageYOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageYOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling modern
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////

// ---------- 189. Event Delegation: Implementing page navigation ----------

// Page navigation

// withot event delegation (not performatic)
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the element

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// ---------- 191. Building a Tabbed Component ----------

// tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // Add active classes
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ---------- 192. Passing Arguments to Event Handlers ----------

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// ---------- 193. Implementing a Sticky Navigation: The Scroll Event ----------

// bad for performance
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY >= initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// ---------- 194. A better way: The Intersection Observer API ----------

// const obsCallback = (entries, observer) => {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ---------- 195. Revealing Elements on Scroll ----------

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// ---------- 196. Lazy Loading Images ----------

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// ---------- 197. Building a Slider Component: Part 1 ----------
// ---------- 198. Building a Slider Component: Part 2 ----------

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button`
      );
    });
  };

  function activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  const goToSlide = function (slide) {
    console.log(currentSlide);
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;

      currentSlide = +slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
// console.log(document.querySelector(`.dots__dot[data-slide="${slide}"]`));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// // Copiada a criação dos elementos para a aula atual;
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); // não retorna nada, pq esse método retorna apenas CSS inline;
// console.log(message.style.backgroundColor); // retorna normalmente pq o backgroundColor foi setado através do método "style", que por sua vez insere o CSS como inline

// // mas, se quiser o valor mesmo assim, é possível da seguinte maneira:
// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// // adicionar 40px ao valor computado do height:
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// // setar propriedade (custom property, a.k.a css variable) no documento (document = :root) via JS;
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// logo.alt = 'Minimalist logo';
// // Não-padrão
// console.log(logo.student); // undefined
// console.log(logo.getAttribute('student'));
// logo.setAttribute('company', 'Bankist');

// // links
// console.log(logo.src); // retorna a src absoluta
// console.log(logo.getAttribute('src')); // retorna a src relativa
// // o mesmo vale para href
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add('f', 's');
// logo.classList.remove('f', 's');
// logo.classList.toggle('f');
// logo.classList.contains('f'); // not includes
// //não usar pois sobrescreve todas as outras classes existentes
// // logo.className = 'a-class';

// ---------- 186. Types of Events and Event Handlers ----------

// const h1 = document.querySelector('h1');
// // forma que usamos até aqui para lidar com eventos;
// //vantagens: possível adicionar outro evento só mudando a função; remover o evento;
// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // });

// // outra forma de lidar com eventos;
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');
// // };

// // removendo o evento
// //escutar o evento só uma vez
// // const alertH1 = function (e) {
// //   alert('addEventListener: Great! You are reading the heading :D');

// //   h1.removeEventListener('mouseenter', alertH1);
// // };

// // h1.addEventListener('mouseenter', alertH1);

// //remover depois de um tempo
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// ---------- 187. Event Propagation: Bubbling and Capturing ----------

/* Checar o DOC no word com as anotações */

// ---------- 188. Event Propagation in Practice ----------

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// const randomColor = () => `rgb(${randomInt(0, 255)},
//                           ${randomInt(0, 255)},
//                           ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // target: elemento onde o evento de fato ocorreu
//   // currentTarget: elemento do qual o handler está atrelado
//   // currentTarget === this

//   // Stop Propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   false // 3° parâmetro true ativa o handler na Capturing Phase (false é o default)
// );

// ---------- 190. DOM Traversing ----------

// const h1 = document.querySelector('h1');

// // Descendo: child

// console.log(h1.querySelectorAll('.highlight'));
// // 1. vai o quão fundo for necessário na árvore DOM e seleciona os elementos sendo filhos diretos ou não;
// // 2. Se houverem outros elementos no DOM com essa classe, não serão selecionados a menos que sejam filhos do h1;

// console.log(h1.childNodes);
// // seleciona todos os nodes dentro do h1, sejam eles elementos, textos ou até comentários;

// console.log(h1.children);
// // seleciona apenas os elementos filhos diretos do h1;

// h1.firstElementChild.style.color = 'aquamarine';
// h1.lastElementChild.style.color = 'crimson';
// // selecionam o primeiro e último elemento filho, respectivamente;

// // Subindo: parents

// console.log(h1.parentNode);
// // seleciona o pai direto do elemento;
// console.log(h1.parentElement);
// // seleciona o pai direto do elemento(?);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// // seleciona o pai do elemento, que seja correspondente ao seletor e que esteja mais próximo no DOM;
// // é usado com frequência, especialmente em Delegação de Eventos;
// // se a query corresponder ao próprio elemento que chama o método, ele mesmo será selecionado;
// // pode-se dizer que o closest é o inverso do querySelector, pois o querySelector seleciona filhos do elemento não importa o quão distantes no DOM. Já o closest seleciona pais do elemento, tbm não importando o quão distante estejam;

// // Indo para os lados: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // seleciona o elemento irmão mais próximo anterior e seguinte, respectivamente;

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// // seleciona o node irmão mais próximo anterior e seguinte, respectivamente;

// console.log(h1.parentNode.children);
// [...h1.parentNode.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(.3)';
// });
// // selecionando e lidando com irmãos que não são diretos ao elemento;
