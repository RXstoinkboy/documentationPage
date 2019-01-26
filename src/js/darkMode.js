export function toggleDarkMode() {
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
  console.log(this.innerHTML);

  if (bgColor != 'white') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--mainTextColor', 'rgb(22, 69, 122)');
    this.innerHTML = 'Dark mode';

  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--mainTextColor', 'white');
    this.innerHTML = 'Light mode';
  }
}
