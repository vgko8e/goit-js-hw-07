import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryRefs = document.querySelector('.gallery');
const imageMarkup = createGalleryMarkup(galleryItems);

galleryRefs.insertAdjacentHTML('beforeend', imageMarkup);
galleryRefs.addEventListener('click', onGalleryContainerClick);


function createGalleryMarkup (images) {
    return images
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;}).join("");
};

function onGalleryContainerClick(event) {
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')) {
        return;
    }
    
    const modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: () => {
        window.addEventListener('keydown', onKeyPress);
    },
    onClose: () => {
        window.addEventListener('keydown', onKeyPress)
    },});

    function onKeyPress(e) {
    if (e.code === 'Escape') {
    modalWindow.close(); 
        }
    }
    modalWindow.show();}
    


console.log (galleryItems);

// document.addEventListener('keydown', function(e) {
// if (e.key === 'Escape') {
//     //ваша функция закрытия окна
//     hideModal()
//     }
//     });