import "../data/types.js";
import { videoFactory, imageFactory } from "./index.js";

/**
 * @param {mediaType} media 
 * @param {number} index current position in medias array
 * @returns {string} html string to display
 */

export const lightBoxFactory = (media, index) => {
  const mediaType = "image" in media ? "image" : "video";

  const mediaContainer = document.createElement("article");
  mediaContainer.classList.add("media-infos-container", "hide");

  const photographerLigthboxHtmlModel = mediaType === "image"
    ? imageFactory(media, index).imageLightbox
    : videoFactory(media, index).videoLightbox;

  mediaContainer.insertAdjacentHTML("beforeend", photographerLigthboxHtmlModel);

  return mediaContainer;
};
