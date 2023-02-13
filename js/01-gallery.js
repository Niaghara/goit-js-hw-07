import { galleryItems } from "./gallery-items.js";
// Change code below this line
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

galleryDiv.addEventListener("click", onClickImage);

function onClickImage(e) {
  e.preventDefault();
  const eImage = e.target.dataset.source;
  if (!eImage) return;

  const instance = basicLightbox.create(
    `<img src="${eImage}" width="800" height="600">`
  );
  instance.show();

  galleryDiv.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
