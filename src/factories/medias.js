import { likeSvgIcon } from "../icons/index.js";
import { updateMediaLikes, displayUpdatedTotalLikes } from "../pages/photographer/likes/index.js";
import { lightboxContainer, lightboxMediaContainer } from "../pages/photographer/constants.js";
import { handleKeydown } from "../pages/photographer/lightbox/lightbox.js";

/**
 * @param {mediaType} media 
 * @param {number} index current position in medias array
 * @returns {HTMLElement} html element to display
 */

export const mediaFactory = (media, index) => {
  let isMediaLiked = false;
  const mediaType = "image" in media ? "image" : "video";

  const baseArticleElement = createArticleBaseElement(media, isMediaLiked);

  const photographerHtmlModels = {
    image: () => {
      const mediaLink = document.createElement("a");
      const imgHtmlElement = `<img src="assets/photographers/${media.photographerId}/${media.image}" />`;
      mediaLink.href = "#";
      mediaLink.addEventListener("click", (event) => {
        handleMedias(event, index);
      });

      mediaLink.insertAdjacentHTML("beforeend", imgHtmlElement);
      baseArticleElement.insertAdjacentElement("afterbegin", mediaLink);
      return baseArticleElement;
    },
    video: () => {
      const mediaLink = document.createElement("a");
      const videoHtmlElement = `
        <video>
          <source
            src="assets/photographers/${media.photographerId}/${media.video}" 
            type="video/mp4" 
          />
          Impossible de charger la vidéo
        </video>
      `;
      mediaLink.href = "#";
      mediaLink.addEventListener("click", (event) => {
        handleMedias(event, index);
      });

      const svgImgContainer = document.createElement("img");
      svgImgContainer.classList.add("svg-img");
      svgImgContainer.src = "/assets/icons/play.svg";

      mediaLink.insertAdjacentHTML("beforeend", videoHtmlElement);
      mediaLink.insertAdjacentElement("beforeend", svgImgContainer);
      baseArticleElement.insertAdjacentElement("afterbegin", mediaLink);

      return baseArticleElement;
    }
  };

  return photographerHtmlModels[mediaType]();
};

function handleMedias(event, index) {
  event.preventDefault();
  const lightBoxMediaInfosContainerElements = document.querySelectorAll(".media-infos-container");
  document.addEventListener("keydown", handleKeydown);

  lightboxMediaContainer.dataset.idcurrent = index;
  lightboxContainer.classList.remove("hide-media");
  lightBoxMediaInfosContainerElements[index].classList.remove("hide-media");
}

function createArticleBaseElement(media, isMediaLiked) {
  const { title, likes } = media;

  const baseArticleElement = document.createElement("article");

  const articleMediaInfosElement = document.createElement("div");
  articleMediaInfosElement.classList.add("media-infos");

  const mediaTitleElement = document.createElement("p");
  mediaTitleElement.classList.add("media-name");
  mediaTitleElement.textContent = title;

  const likesCountElement = document.createElement("span");
  likesCountElement.classList.add("likes-count");
  likesCountElement.innerText = likes;

  const likeButton = document.createElement("button");
  likeButton.setAttribute("type", "button");
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click", () => {
    isMediaLiked = updateMediaLikes(media, isMediaLiked);
    likesCountElement.innerText = media.likes;
    displayUpdatedTotalLikes(isMediaLiked);
  });

  baseArticleElement.append(articleMediaInfosElement);
  likeButton.insertAdjacentHTML("beforeend", likeSvgIcon);
  articleMediaInfosElement.append(mediaTitleElement, likesCountElement, likeButton);

  return baseArticleElement;
}