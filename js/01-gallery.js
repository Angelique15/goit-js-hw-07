import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
// Nuevo array de elementos <a> que contienen imágenes y títulos
const galleryElements = galleryItems.map(item => `
  <a href="${item.original}" class="gallery__item">
    <img src="${item.preview}" alt="${item.description}" class="gallery__image">
  </a>
`).join('');

gallery.innerHTML = galleryElements;

// Evento de click a cada imagen
const images = gallery.querySelectorAll(".gallery__image");
images.forEach(image => {
  image.addEventListener("click", event => {
    event.preventDefault();
    const source = image.dataset.source;
    const title = image.alt;
    const lightbox = basicLightbox.create(`<img src="${source}" alt="${title}">`);
    lightbox.show();
  });
});
console.log(galleryItems);


