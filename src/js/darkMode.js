export function toggleDarkMode() {
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor');
  if (bgColor == 'white') {
    document.documentElement.style.setProperty('--backgroundColor', 'black');
    document.documentElement.style.setProperty('--mainTextColor', 'white');
  } else {
    document.documentElement.style.setProperty('--backgroundColor', 'white');
    document.documentElement.style.setProperty('--mainTextColor', 'rgb(22, 69, 122)');
  }
}
