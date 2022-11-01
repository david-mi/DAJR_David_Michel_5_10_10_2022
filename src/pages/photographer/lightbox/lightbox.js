import { handleCloseLightbox, handleMediaDisplay } from "./index.js";
import { handleModalFocusTrap } from "../../../utils/focusTrap.js";

const nextMediaButton = document.querySelector(".next-media");
const previousMediaButton = document.querySelector(".previous-media");
const closeLightboxButton = document.querySelector(".close-lightbox");

nextMediaButton.addEventListener("click", () => handleMediaDisplay().next());
previousMediaButton.addEventListener("click", () => handleMediaDisplay().previous());
closeLightboxButton.addEventListener("click", handleCloseLightbox);

/**
 * Handle pressed keys to trigger next or previous media in lightbox
 * 
 * @param {KeyboardEvent}
 */

export function handleKeydown(event) {
  const { key } = event;
  const keysHandler = {
    Tab: () => handleModalFocusTrap(event, ".lightbox"),
    Escape: () => handleMediaDisplay().close(),
    ArrowRight: () => handleMediaDisplay().next(),
    ArrowLeft: () => handleMediaDisplay().previous()
  };

  if (key in keysHandler) {
    keysHandler[event.key]();
  }

}

/**
 * @param {HTMLElement} lightboxMediaContainer 
 * @returns {number} data-idcurrent from {@link lightboxMediaContainer} converted to number
 */

export function getMediaContainerDataId(lightboxMediaContainer) {
  return Number(lightboxMediaContainer.dataset.idcurrent);
}


