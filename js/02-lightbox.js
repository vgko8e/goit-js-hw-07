import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryImageMarkup = createGallerySheet(galleryItems);


galleryEl.insertAdjacentHTML('beforeend', galleryImageMarkup);


function createGallerySheet (image) {
    return image
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    }).join("");
    
    };

let openImage = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250});
openImage.on('show.simplelightbox')


console.log(galleryItems);
