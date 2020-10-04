const search = document.querySelector('.search__inner');
const searchWindow = document.querySelector('.search__wrapper');
const seachIcon = document.querySelector('.search__img');
const menu = document.querySelector('.header__list');
const burger = document.querySelector('.burger');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.controls__btn-left');
const btnNext = document.querySelector('.controls__btn-right');
const headerTitle = document.querySelector('.header-body__title');
const headerText = document.querySelector('.header-body__text');

const openSeach = () => {
  search.classList.toggle('cross')
  searchWindow.classList.toggle('open');
  seachIcon.classList.toggle('active-search');
};
const openMenu = () => {
  burger.classList.toggle('active-burger');
  menu.classList.toggle('active-menu');
};

search.addEventListener('click', openSeach);
burger.addEventListener('click', openMenu);

// SLider==================================================
let position = 0;
// Укажите количество слайдов sliderToShow
const sliderToShow = 2;
// Укажите количество слайдов в  sliderToShow
const trackWidth = (sliderToShow - 1) * 100;

btnPrev.addEventListener('click', () => {
  position += 100

  setPosition();
  checkBtns();
  replaceTextSlide2();
});
btnNext.addEventListener('click', () => {
  position -= 100

  setPosition();
  checkBtns();
  replaceTextSlide2();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}%)`;
};
const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position === -trackWidth;
};
const replaceTextSlide2 = () => {
  if (position === -100) {
    headerTitle.innerHTML = 'Автоматическое пожаротушение';
    headerText.innerHTML = 'Все виды установок автоматического пожаротушения для защиты: торговых, офисных и производственных помещений.'
  }    
  if (position === 0) {
    headerTitle.innerHTML = 'Пожарная сигнализация';
    headerText.innerHTML = 'Проектирование, монтаж и техническое обслуживание пожарной сигнализации в Москве и Московской области.'
  }
  // для следующего слайдера тест position === (Сдесь добавлять для каждого слайдера 100 p.s Обрати внимание МИНУС position === -100)
  // if (position === -200) {
  //   headerTitle.innerHTML = 'Заголовок';
  //   headerText.innerHTML = 'Текст'
  // }
};
checkBtns();
// SLider==================================================

