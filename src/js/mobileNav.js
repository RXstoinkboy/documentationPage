export function mobileNav() {
  const burger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav');

  if (burger.innerHTML === 'MENU') {
    burger.innerHTML = 'CLOSE';
  } else {
    burger.innerHTML = 'MENU';
  }

  nav.classList.toggle('nav--active');

}

export function closeNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');

  if (window.innerWidth < 850) {
    nav.classList.remove('nav--active');
    burger.innerHTML = 'MENU';
  }
}
