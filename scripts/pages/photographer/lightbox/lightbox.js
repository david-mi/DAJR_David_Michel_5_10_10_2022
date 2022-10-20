import { lightBoxFactory } from "../../../factories/index.js";
export const displayphotographerLightbox = (medias, photographerMediaFolder) => {
  medias.forEach((media, index) => {
    const lightboxMediaHtml = lightBoxFactory(media, photographerMediaFolder, index);
    lightboxMediaContainer.insertAdjacentHTML("beforeend", lightboxMediaHtml);
  });
};
