import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
// Nuevo array de elementos <a> que contienen imágenes y subtítulos
const galleryElements = galleryItems.map(item => `
  <a href="${item.original}" class="gallery__item" data-subtitle="${item.description}">
    <img src="${item.preview}" alt="${item.description}" class="gallery__image" data-source="${item.original}">
  </a>
`).join('');

gallery.innerHTML = galleryElements;

// Evento de click a cada imagen
const images = gallery.querySelectorAll(".gallery__image");
images.forEach(image => {
  image.addEventListener("click", event => {
    event.preventDefault();
    const source = image.closest('.gallery__item').href;
    const title = image.alt;
    const lightbox = basicLightbox.create(`<img src="${source}" alt="${title}">`);
    lightbox.show();
  });
});

// Inicio de la biblioteca SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // Mostrar subtítulos
  captionDelay: 250 // Retraso de 250 milisegundos para mostrar el subtítulo
});

console.log(lightbox);
console.log(galleryItems);
