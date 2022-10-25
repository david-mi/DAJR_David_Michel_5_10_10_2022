import "../../data/types.js";
import { displayphotographerLightbox } from "./lightbox/display.js";
import { displayPhotographerMedias } from "./display.js";
import { photographerMediasElement, lightboxMediaContainer } from "./constants.js";

/**
 * 
 * @param {mediaType} medias 
 */


export const sortAndDisplayMedias = (medias, callback) => {
  const sortedMediasByPopularity = medias.sort(callback);

  photographerMediasElement.innerHTML = "";
  displayPhotographerMedias(sortedMediasByPopularity);

  lightboxMediaContainer.innerHTML = "";
  displayphotographerLightbox(sortedMediasByPopularity);
};

export const sortCallbacks = {
  date(a, b) {
    return Date.parse(a.date) - Date.parse(b.date);
  },
  popularity(a, b) {
    return b.likes - a.likes;
  },
  title(a, b) {
    return a.title.localeCompare(b.title);
  }
};