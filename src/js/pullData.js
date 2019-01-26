export function pullData() {
  const paragraph = document.createElement('p');
  paragraph.classList.add('main-section__content');
  this.before(paragraph);
  const random = Math.floor(Math.random() * 100);

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    const someText = json[random].body;

    paragraph.innerHTML = someText;
  };
  getData();
}
