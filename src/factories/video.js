import "../data/types.js";
import "./types.js";

/**
 * @param {mediaType} media 
 * @param {number} [index] current position in medias array
 * @returns {videoFactory}
 */

export const videoFactory = (media, index) => {
  return {
    videoMedia: (
      `<video title="${media.title}">
         <source
           src="./assets/photographers/${media.photographerId}/${media.video}" 
           type="video/mp4" 
         >
         Impossible de charger la vidéo
       </video>
       <img 
         class="svg-img" 
         src="/assets/icons/play.svg"
         alt="" 
       >`
    ),
    videoLightbox: (
      `<video controls data-index=${index}>
          <source
            src="./assets/photographers/${media.photographerId}/${media.video}" 
            type="video/mp4" 
          >
          Impossible de charger la vidéo
       </video>
       <h2 class="media-title">${media.title}</h2>`
    )
  };
};