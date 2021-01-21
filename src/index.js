import './styles.css';
import apiService from './js/apiService';
var debounce = require('lodash.debounce');
import refs from './js/refs';
import updateImagesMarkup from './js/markUpImages';

refs.searchRef.addEventListener('input', debounce(function (event) {
    event.preventDefault();

    apiService.query = event.target.value; // переменая - что ищет юзер
    
    refs.galleryContainer.innerHTML = ''; // при новом запросе поиска очищаем html контейнер для фотографий

    apiService.resetPage(); // при каждом новом запросе показываем результат поиска с 1-ой страницы

    apiService.fetchImages().then(hits => { // фу запроса на сервер, передаем ей что вводит в поиск юзер
        updateImagesMarkup(hits);
    }) 
}, 500));

refs.loadMoreBtn.addEventListener('click', () => {
    
    apiService.fetchImages().then(hits => {
        updateImagesMarkup(hits);

        window.scrollTo({
            top: document.documentElement.offsetHeight
          });
    });  
})






