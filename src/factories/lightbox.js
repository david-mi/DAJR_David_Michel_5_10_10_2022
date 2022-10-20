
export const lightBoxFactory = (media, photographerMediaFolder, index) => {
  const mediaType = "image" in media ? "image" : "video";

  const photographerHtmlModels = {
    image: () => {
      const linkHtmlContent = `
      <div class="media-infos-container hide-media">
          <img
           data-index=${index}
           src="assets/photographers/${photographerMediaFolder}/${media.image}" 
          />
          <p class="media-title">${media.title}</p>
        </div>
      `;

      return linkHtmlContent;
    },

    video: () => {
      const linkHtmlContent = `
      <div class="media-infos-container hide-media">>
          <video controls data-index=${index}>
            <source
              src="assets/photographers/${photographerMediaFolder}/${media.video}" 
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
