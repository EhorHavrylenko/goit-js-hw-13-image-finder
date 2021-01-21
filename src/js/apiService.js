import { defaults } from "autoprefixer";

const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;
const apiKey = '19920161-2470b7440ca60025ed5778af0';

// const imageSearch = (searchQuery, page = 1) => {

//   return fetch(`${baseURL}${searchQuery}&page=${page}&per_page=12&key=${apiKey}`)
//       .then(response => response.json())
//       .then(({hits})=> hits) // деструктурируем нужные нам объекты картинок
//       .catch(error => console.log(error))
// }

// export default imageSearch;

export default {
    searchQuery: '',
    page: 1,
    fetchImages(){

       return fetch(`${baseURL}${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`)
         .then(response => response.json())
         .then(({hits})=> { // деструктурируем нужные нам объекты картинок
           this.page +=1; // после того как успешно прошел htttp запрос, увеличиваем page на +1, чтобы показывались новые страницы результата запроса, иначе будет показывать лишь первая страница (первых 12 фотографий)
           return hits }) // и возращаем результат во внешний код 
         .catch(error => console.log(error))
   },

    resetPage(){
        this.page =1;
    },

    set query(value){ // обновляем параметр запроса за счет сетера свойства объекта
        this.searchQuery = value;
    }
}




