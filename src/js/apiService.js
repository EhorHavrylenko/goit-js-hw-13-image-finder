
const galleryCont = document.querySelector('.gallery')

const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;
const apiKey = '19920161-2470b7440ca60025ed5778af0';

const imageSearch = (inputValue) => {

  return fetch(`${baseURL}${inputValue}&page=1&per_page=12&key=${apiKey}`)
      .then(response => response.json())
      .then(data => { 
        galleryCont.insertAdjacentHTML('beforeEnd', data.map((el) => `
         <li><img src="${el.previewURL}"></li>
         `))
        })
      .catch(error => console.log(error))
}

export default imageSearch;




