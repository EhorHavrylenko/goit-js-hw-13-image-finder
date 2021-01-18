import './styles.css';
import imageSearch from './js/apiService';
var debounce = require('lodash.debounce');

const refs = {
    searchRef: document.querySelector('.input-form'),
    // galleryContainer: document.querySelector('.gallery'),
}

refs.searchRef.addEventListener('input', debounce(handleInput, 500));

function handleInput(e){
    e.preventDefault();
    let inputValue = e.target.value; // переменая что ищет юзер
    return imageSearch(inputValue) // фу запроса на сервер, передаем ей что вводит в поиск юзер
}

