import "../data/types.js";
import "./types.js";

/**
 * @param {mediaType} media 
 * @param {number} [index] current position in medias array
 * @returns {imageFactory}
 */

export const imageFactory = (media, index) => {
  return {
    imageMedia: (
      `<img 
          src="assets/photographers/${media.photographerId}/${media.image}"
          alt="${media.title} ouvrir lightbox"
       >`
    ),
    imageLightbox: (
      `<img
          data-index=${index}
          src="./assets/photographers/${media.photographerId}/${media.image}"
          alt="${media.title}"
        >
        <h2 class="media-title">${media.title}</h2>`
    )
  };
};