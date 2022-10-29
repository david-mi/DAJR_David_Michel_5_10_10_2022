import { lightboxContainer, lightboxMediaContainer } from "../constants.js";
import { toggleDisplayOnElements } from "../likes/display.js";
import { lightBoxFactory } from "../../../factories/index.js";
import { getMediaContainerDataId, handleKeydown } from "./index.js";

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

/**
 * Hide previous showed media in lightbox
 * 
 * @return {object} object with methods to show next or previous media from lightbox or closing it
 */

export function handleMediaDisplay() {
  const mediasInfosContainers = document.querySelectorAll(".media-infos-container");
  const mediaContainerId = getMediaContainerDataId(lightboxMediaContainer);
  mediasInfosContainers[mediaContainerId].classList.add("hide");

  return {

    /** Close lightbox */

    close: handleCloseLightbox,

    /**
     * Decrement mediaContainer id, show the associated media
     * 
     * {@link previousId} will determine the previous wich is the media position in medias list
     * and store it in mediaContainer data-idcurrent attribute
     */

    previous() {
      const previousId = mediaContainerId === 0
        ? mediasInfosContainers.length - 1
        : mediaContainerId - 1;

      lightboxMediaContainer.dataset.idcurrent = previousId;
      mediasInfosContainers[previousId].classList.remove("hide");
    },

    /**
     * increment mediaContainer id, show associated media
     * 
     * {@link nextId} will determine the previous wich is the media position in medias list
     * and store it in mediaContainer data-idcurrent attribute
     */

    next() {
      const nextId = (mediaContainerId + 1) % mediasInfosContainers.length;

      lightboxMediaContainer.dataset.idcurrent = nextId;
      mediasInfosContainers[nextId].classList.remove("hide");
    }
  };
}

/**
 * - Removes tabindex attribute on every focusable 
 *   elements who aren't inside lightbox {@link focusableElementsOutsideLightbox}
 * - Focus the same media who was focused inside ligtbox in medias sections
 * - Hide lightbox and media wich was displayed inside it
 * - Remove overflow class from body to get vertical scrollbar back
 * - Remove keydown listener
 */

export function handleCloseLightbox() {
  const mediaContainerId = getMediaContainerDataId(lightboxMediaContainer);
  const mediasInfosContainers = document.querySelectorAll(".media-infos-container");
  const focusableElementsOutsideLightbox = document.querySelectorAll("button:not(.lightbox button), a, select");

  focusableElementsOutsideLightbox.forEach(element => {
    element.removeAttribute("tabindex");
  });

  focusMediaFromLightbox(mediaContainerId);

  const currentDisplayedMedia = mediasInfosContainers[mediaContainerId];
  toggleDisplayOnElements([currentDisplayedMedia, lightboxContainer], true);
  document.body.classList.remove("overflow");

  document.removeEventListener("keydown", handleKeydown);
}

/**
 * Focus the same media who was focused inside ligtbox in medias sections
 * 
 * @param {number} mediaContainerId id of current displayed media
 */

function focusMediaFromLightbox(mediaContainerId) {
  const mediaLinks = document.querySelectorAll("#medias article a");
  mediaLinks[mediaContainerId].focus();
}