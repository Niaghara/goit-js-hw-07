import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryDiv = document.querySelector(".gallery");

const makeGalleryImage = (image) => {
  const { preview, original, description } = image;
  return `<a class="gallery__item" href="${original}" >
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`;
};

const createGallery = galleryItems.map(makeGalleryImage).join("");

galleryDiv.insertAdjacentHTML("beforeend", createGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
