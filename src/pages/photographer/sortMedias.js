import "../../data/types.js";
import { displayphotographerLightbox } from "./lightbox/display.js";
import { displayPhotographerMedias } from "./display.js";

/**
 * 
 * @param {mediaType} medias 
 */


export const sortMedias = (medias, mediaFolder, callback) => {
  const sortedMediasByPopularity = medias.sort(callback);

  displayPhotographerMedias(sortedMediasByPopularity, mediaFolder);
  displayphotographerLightbox(sortedMediasByPopularity, mediaFolder);
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