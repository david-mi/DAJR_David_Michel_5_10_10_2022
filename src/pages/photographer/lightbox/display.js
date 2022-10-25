import { lightboxMediaContainer } from "../constants.js";
import { lightBoxFactory } from "../../../factories/index.js";

/**
 * Display phototographer lightbox in the DOM
 * 
 * @param {mediaType} medias 
 * @param {string} photographerMediaFolder 
 */

export const displayphotographerLightbox = (medias, photographerMediaFolder) => {
  lightboxMediaContainer.innerHTML = "";

  medias.forEach((media, index) => {
    const lightboxMediaHtml = lightBoxFactory(media, photographerMediaFolder, index);
    lightboxMediaContainer.insertAdjacentHTML("beforeend", lightboxMediaHtml);
  });
};