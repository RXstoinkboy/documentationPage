import { toggleDarkMode } from './darkMode.js';

window.addEventListener('DOMContentLoaded', () => {
  const buttonDarkMode = document.querySelector('.button--toggleDarkMode');
  const buttonSizeDown = document.querySelector('.button--fontSizeDown');
  const buttonSizeUp = document.querySelector('.button--fontSizeUp');

  let current = 18;

  function changeSize(e) {
    if (e.target.classList == 'button button--fontSizeUp') {
      current++;
    } else {
      current--;
    }
    document.documentElement.style.setProperty('--fontSize', `${current}px`);
  }

  buttonSizeDown.addEventListener('click', changeSize);
  buttonSizeUp.addEventListener('click', changeSize);

  buttonDarkMode.addEventListener('click', toggleDarkMode);
});
