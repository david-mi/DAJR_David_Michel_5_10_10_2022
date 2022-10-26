import "../data/types.js";

/**
 * @param {mediaType} media 
 * @param {number} index current position in medias array
 * @returns {string} html string to display
 */

export const lightBoxFactory = (media, index) => {
  const mediaType = "image" in media ? "image" : "video";

  const photographerHtmlModels = {
    image: () => {
      const linkHtmlContent = `
      <div class="media-infos-container hide">
        <img
          data-index=${index}
          src="assets/photographers/${media.photographerId}/${media.image}" 
        />
        <p class="media-title">${media.title}</p>
      </div>
      `;

      return linkHtmlContent;
    },

    video: () => {
      const linkHtmlContent = `
      <div class="media-infos-container hide">
          <video controls data-index=${index}>
            <source
              src="assets/photographers/${media.photographerId}/${media.video}" 
              type="video/mp4" 
            />
            Impossible de charger la vidéo
          </video>
          <p class="media-title">${media.title}</p>
      </div>
      `;

      return linkHtmlContent;
    }
  };

  return photographerHtmlModels[mediaType]();
};
