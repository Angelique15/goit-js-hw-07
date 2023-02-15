import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
// Crear un nuevo array de elementos <a> que contienen imágenes y títulos
const galleryElements = galleryItems.map(item => `
  <a href="${item.original}" class="gallery__item">
    <img src="${item.preview}" alt="${item.description}" class="gallery__image">
  </a>
`).join('');

gallery.innerHTML = galleryElements;

const lightbox = basicLightbox.create(`
  <div class="modal">
    <img src="" alt="" class="modal__image">
  </div>
`, {
    onShow: (instance) => {
        const modalImage = instance.element().querySelector('.modal__image');
        const galleryItem = gallery.querySelector('.gallery__item--current');
        modalImage.src = galleryItem.href;
    }
});

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    lightbox.show();
    event.currentTarget.querySelector('.gallery__item').classList.add('gallery__item--current');
});


console.log(galleryItems);


