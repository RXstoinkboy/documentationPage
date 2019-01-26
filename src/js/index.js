import { toggleDarkMode } from './darkMode.js';
import { returnHome } from './returnHome.js';
import { mobileNav, closeNav } from './mobileNav.js';
import { pullData } from './pullData.js';
import { search } from './search.js';

window.addEventListener('DOMContentLoaded', () => {
  const buttonDarkMode = document.querySelector('.button--toggleDarkMode');
  const buttonSizeDown = document.querySelector('.button--fontSizeDown');
  const buttonSizeUp = document.querySelector('.button--fontSizeUp');
  const buttonToTop = document.querySelector('.button--returnHome');
  const menuItems = document.querySelectorAll('.nav-link');
  const highlighter = document.createElement('div');
  const burger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav');
  const buttonReadMore = document.querySelectorAll('.main-section__readMore');
  const searchBar = document.querySelector('.nav__search');

  let current = 18;

  // change font size
  function changeSize(e) {
    if (e.target.classList == 'button button--fontSizeUp') {
      current++;
    } else {
      current--;
    }
    document.documentElement.style.setProperty('--fontSize', `${current}px`);
  }

  // highlighter for menu items
  highlighter.classList.add('menuSelector');
  document.body.appendChild(highlighter);

  function highlight() {
    const dimensions = this.getBoundingClientRect();

    const data = {
      width: dimensions.width,
      height: dimensions.height,
      left: dimensions.left,
      top: dimensions.top,
    };

    highlighter.style.width = `${data.width}px`;
    highlighter.style.height = `${data.height}px`;
    highlighter.style.top = `${window.scrollY + data.top}px`;
    highlighter.style.left = `${window.scrollX + data.left}px`;
  }

  buttonSizeDown.addEventListener('click', changeSize);
  buttonSizeUp.addEventListener('click', changeSize);
  buttonToTop.addEventListener('click', returnHome);
  buttonDarkMode.addEventListener('click', toggleDarkMode);
  menuItems.forEach(item => item.addEventListener('mouseenter', highlight));
  menuItems.forEach(item => item.addEventListener('click', closeNav));
  burger.addEventListener('click', mobileNav);
  buttonReadMore.forEach(button => button.addEventListener('click', pullData));
  searchBar.addEventListener('input', search);

  // do not display highlighter on mobiles
  window.addEventListener('resize', () => {
    if (window.innerWidth < 850) {
      highlighter.style.display = 'none';
    } else {
      highlighter.style.display = 'block';
      burger.innerHTML = 'MENU';
      if (nav.classList.contains('nav--active')) {
        nav.classList.remove('nav--active');
      }
    }
  });
});
