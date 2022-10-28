import { handleCloseLightbox, handleMediaDisplay } from "./index.js";

const nextMediaButton = document.querySelector(".next-media");
const previousMediaButton = document.querySelector(".previous-media");
const closeLightboxButton = document.querySelector(".close-lightbox");

nextMediaButton.addEventListener("click", () => handleMediaDisplay().next());
previousMediaButton.addEventListener("click", () => handleMediaDisplay().previous());
closeLightboxButton.addEventListener("click", handleCloseLightbox);

/**
 * Handle pressed keys to trigger next or previous media in lightbox
 * 
 * @param {KeyboardEvent} key  name of pressed key
 */

export function handleKeydown({ key }) {
  if (key === "Escape") {
    handleMediaDisplay().close();
  }

  if (key === "ArrowRight") {
    handleMediaDisplay().next();
  }

  if (key === "ArrowLeft") {
    handleMediaDisplay().previous();
  }
}

/**
 * @param {HTMLElement} lightboxMediaContainer 
 * @returns {number} data-idcurrent from {@link lightboxMediaContainer} converted to number
 */

export function getMediaContainerDataId(lightboxMediaContainer) {
  return Number(lightboxMediaContainer.dataset.idcurrent);
}


