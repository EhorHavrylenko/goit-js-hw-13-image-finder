import refs from './refs';

function updateImagesMarkup(hits){
   refs.galleryContainer.insertAdjacentHTML('beforeEnd', hits.map(el => `
   <div class="photo-card">
   <img src="${el.webformatURL}" alt="" />

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
}

export default updateImagesMarkup;
