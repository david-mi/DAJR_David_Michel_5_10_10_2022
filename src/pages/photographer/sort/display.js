import "../../../data/types.js";
import { photographerMediasElement, lightboxMediaContainer } from "../constants.js";
import { displayPhotographerMedias } from "../display.js";
import { displayphotographerLightbox } from "../lightbox/display.js";

/**
 * Insert sorted medias in both photographerMediasElement anb lightboxMediaContainer
 * reset innerHTML in both elements before insertion 
 * 
 * @param {mediaType[]} sortedMedias medias sorted by name or popularity or date
 */

export const displaySortedMedias = (sortedMedias) => {
  photographerMediasElement.innerHTML = "";
  displayPhotographerMedias(sortedMedias);

  lightboxMediaContainer.innerHTML = "";
  displayphotographerLightbox(sortedMedias);
};