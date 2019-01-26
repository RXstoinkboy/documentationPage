export function pullData() {
  const random = Math.floor(Math.random() * 100);

  const getData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await data.json();
      const someText = json[random].body;

      const paragraph = document.createElement('p');
      paragraph.classList.add('main-section__content');
      this.before(paragraph);

      paragraph.innerHTML = someText;
    }
    catch (error) {
      throw new Error('Sorry, something went wrong...');
    }

  };
  getData();
}
