import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryDiv = document.querySelector(".gallery");

const makeGalleryImage = (image) => {
  const { preview, original, description } = image;
  return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        data-source="${original}" 
        alt="${description}"/>
        </a>
    </div>`;
};

const createGallery = galleryItems.map(makeGalleryImage).join("");

galleryDiv.insertAdjacentHTML("beforeend", createGallery);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});