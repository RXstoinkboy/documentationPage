export function pullData() {
  const random = Math.floor(Math.random() * 100);

  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(data => data.json())
  //   .then(json => json[random].body)
  //   .then((someText) => {
  //     const paragraph = document.createElement('p');
  //     paragraph.classList.add('main-section__content');
  //     this.before(paragraph);

  //     paragraph.innerHTML = someText;
  //   })
  //   .catch((error) => {
  //     throw new Error(error, 'Sorry, something went wrong');
  //   });

  const getData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await data.json();
      const someText = await json[random].body;

      const paragraph = document.createElement('p');
      paragraph.classList.add('main-section__content');
      this.before(paragraph);

      paragraph.innerHTML = someText;
    }
    catch (error) {
      throw new Error(error, 'Sorry, something went wrong...');
    }

  };
  getData();


}
