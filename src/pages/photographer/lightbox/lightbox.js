import { lightBoxFactory } from "../../../factories/index.js";
import { lightboxContainer, lightboxMediaContainer } from "../constants.js";

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
  if (key === "ArrowRight") {
    handleMediaDisplay().next();
  }

  if (key === "ArrowLeft") {
    handleMediaDisplay().previous();
  }
}

function getMediaContainerDataId(lightboxMediaContainer) {
  return Number(lightboxMediaContainer.dataset.idcurrent);
}

function handleMediaDisplay() {
  const mediasInfosContainers = document.querySelectorAll(".media-infos-container");
  const mediaContainerId = getMediaContainerDataId(lightboxMediaContainer);
  mediasInfosContainers[mediaContainerId].classList.add("hide-media");

  return {
    previous() {
      let previousId = mediaContainerId === 0
        ? mediasInfosContainers.length - 1
        : mediaContainerId - 1;

      lightboxMediaContainer.dataset.idcurrent = previousId;
      mediasInfosContainers[previousId].classList.remove("hide-media");
      lightboxMediaContainer.dataset.idcurrent = previousId;
    },
    next() {
      const nextId = (mediaContainerId + 1) % mediasInfosContainers.length;
      lightboxMediaContainer.dataset.idcurrent = nextId;
      mediasInfosContainers[nextId].classList.remove("hide-media");
      lightboxMediaContainer.dataset.idcurrent = nextId;
    }
  };
}

function handleCloseLightbox() {
  const mediaContainerId = getMediaContainerDataId(lightboxMediaContainer);
  const mediasInfosContainers = document.querySelectorAll(".media-infos-container");
  mediasInfosContainers[mediaContainerId].classList.add("hide-media");
  lightboxContainer.classList.add("hide-media");

  document.removeEventListener("keydown", handleKeydown);
}

export const displayphotographerLightbox = (medias, photographerMediaFolder) => {
  medias.forEach((media, index) => {
    const lightboxMediaHtml = lightBoxFactory(media, photographerMediaFolder, index);
    lightboxMediaContainer.insertAdjacentHTML("beforeend", lightboxMediaHtml);
  });
};
