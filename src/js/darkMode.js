export function toggleDarkMode() {
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
  const codes = document.querySelectorAll('code');
  console.log(this.innerHTML);

  if (bgColor != 'white') {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--mainTextColor', 'rgb(22, 69, 122)');
    codes.forEach((code) => {
      code.style.backgroundColor = 'rgb(231, 231, 231)';
      code.style.color = 'grey';
    });
    this.innerHTML = 'Dark mode';

  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--mainTextColor', 'white');
    codes.forEach((code) => {
      code.style.backgroundColor = '#151515';
      code.style.color = 'white';
    });
    this.innerHTML = 'Light mode';
  }
}
