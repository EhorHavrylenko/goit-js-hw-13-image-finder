import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


function updateImagesMarkup(hits){
   refs.galleryContainer.insertAdjacentHTML('beforeEnd', hits.map(el => `
   <div class="photo-card" >
   <img class="small-photo" src="${el.webformatURL}" id="${el.id}" alt="" />

 <div class="stats">
   <p class="stats-item">
     <i class="material-icons">thumb_up</i>
     ${el.likes}
   </p>
   <p class="stats-item">
     <i class="material-icons">visibility</i>
     ${el.views}
   </p>
   <p class="stats-item">
     <i class="material-icons">comment</i>
     ${el.comments}
   </p>
   <p class="stats-item">
     <i class="material-icons">cloud_download</i>
     ${el.downloads}
   </p>
 </div>
</div>`).join(' '))

const photoCards = document.querySelectorAll('.photo-card');

photoCards.forEach(photo => photo.addEventListener('click', (e) => {

    const idEl = e.target.id;
    let clickEl = hits.find(img => img.id == idEl);
    let bigSizeImg = clickEl.largeImageURL;

    function showBigImage(){
      basicLightbox.create(`
         <img class="big-img" width="1400" height="900" src=${bigSizeImg}>
        `).show()
     } 

     showBigImage() 

}
))
}

export default updateImagesMarkup;
