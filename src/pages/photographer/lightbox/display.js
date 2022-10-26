import { lightboxMediaContainer } from "../constants.js";
import { lightBoxFactory } from "../../../factories/index.js";

/**
 * Display phototographer lightbox in the DOM
 * 
 * @param {mediaType} medias 
 */

export const displayphotographerLightbox = (medias) => {
  medias.forEach((media, index) => {
    const lightboxMediaHtml = lightBoxFactory(media, index);
    lightboxMediaContainer.insertAdjacentElement("beforeend", lightboxMediaHtml);
  });
};