export function search() {
  const searchBar = document.querySelector('.nav__search');
  const searchInput = searchBar.value;
  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((item) => {
    if (item.innerHTML.includes(searchInput)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
