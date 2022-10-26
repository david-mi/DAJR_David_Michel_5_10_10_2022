import "../data/types.js";

/**
 * @param {mediaType} media 
 * @param {number} index current position in medias array
 * @returns {string} html string to display
 */

export const lightBoxFactory = (media, index) => {
  const mediaType = "image" in media ? "image" : "video";

  const mediaContainer = document.createElement("article");
  mediaContainer.classList.add("media-infos-container", "hide");

  const photographerHtmlModels = {
    image: (
      `<img
          data-index=${index}
          src="assets/photographers/${media.photographerId}/${media.image}" 
        />
        <p class="media-title">${media.title}</p>`
    ),
    video: (
      `<video controls data-index=${index}>
          <source
            src="assets/photographers/${media.photographerId}/${media.video}" 
            type="video/mp4" 
          />
          Impossible de charger la vidéo
       </video>
       <p class="media-title">${media.title}</p>`
    )
  };

  mediaContainer.insertAdjacentHTML("beforeend", photographerHtmlModels[mediaType]);

  return mediaContainer;
};
