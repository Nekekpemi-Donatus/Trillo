const btn__moveRight = document.querySelector('.btn__moveRight');
const btn__moveLeft = document.querySelector('.btn__moveLeft');
const box__left_1 = document.querySelector('.box-1__left');
const box__right_1 = document.querySelector('.box-1__right');
const box__left_2 = document.querySelector('.box-2__left');
const box__right_2 = document.querySelector('.box-2__right');
const box_1 = document.querySelector('.box-1');
const box_2 = document.querySelector('.box-2');

const moveRight = () => {
  box__left_1.style.transform = 'translateX(149.9%)';
  box__right_1.style.transform = 'translateX(-66.9%)';
  box__left_2.style.transform = 'translateX(0)';
  box__right_2.style.transform = 'translateX(0)';
  box_1.classList.toggle('hidden');
  box_2.classList.remove('hidden');
};

const moveLeft = () => {
  box__left_1.style.transform = 'translateX(0)';
  box__right_1.style.transform = 'translateX(0)';
  box__left_2.style.transform = 'translateX(66.9%)';
  box__right_2.style.transform = 'translateX(-149.7%)';
  box_1.classList.toggle('hidden');
  box_2.classList.toggle('hidden');
};

btn__moveRight.addEventListener('click', moveRight);
btn__moveLeft.addEventListener('click', moveLeft);
