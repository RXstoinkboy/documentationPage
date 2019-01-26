export function changeSize(e) {
  const fontSize = getComputedStyle(document.documentElement).getPropertyValue('--fontSize');
  console.log(fontSize);

  document.documentElement.style.setProperty('--fontSize', '30px');

}
