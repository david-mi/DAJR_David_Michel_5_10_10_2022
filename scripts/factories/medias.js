import { likeSvgIcon } from "../../icons/heart.js";
import { updateMediaLikeAndShowIt, updateTotalLikesAndShowIt } from "../pages/photographer/likes.js";
import { lightboxContainer, lightboxMediaContainer } from "../pages/photographer/constants.js";

export const mediaFactory = (media, photographerMediaFolder, index) => {
  let isMediaLiked = false;
  const mediaType = "image" in media ? "image" : "video";

  const baseArticleElement = createArticleBaseElement(media, isMediaLiked);

  const photographerHtmlModels = {
    image: () => {
      const mediaLink = document.createElement("a");
      const imgHtmlElement = `<img src="assets/photographers/${photographerMediaFolder}/${media.image}" />`;
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
            src="assets/photographers/${photographerMediaFolder}/${media.video}" 
            type="video/mp4" 
          />
          Impossible de charger la vidéo
        </video>
      `;
      mediaLink.href = "#";
      mediaLink.addEventListener("click", (event) => {
        handleMedias(event, index);
      });

      mediaLink.insertAdjacentHTML("beforeend", videoHtmlElement);
      baseArticleElement.insertAdjacentElement("afterbegin", mediaLink);
      return baseArticleElement;
    }
  };

  return photographerHtmlModels[mediaType]();
};

function handleMedias(event, index) {
  event.preventDefault();
  const lightBoxMediaInfosContainerElements = document.querySelectorAll(".media-infos-container");

  lightboxMediaContainer.dataset.idcurrent = index;
  lightboxContainer.classList.remove("hide-media");
  lightBoxMediaInfosContainerElements[index].classList.remove("hide-media");
}

function createArticleBaseElement({ title, likes }, isMediaLiked) {
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
    isMediaLiked = updateMediaLikeAndShowIt(media, likesCountElement, isMediaLiked);
    updateTotalLikesAndShowIt(isMediaLiked);
  });

  baseArticleElement.append(articleMediaInfosElement);
  likeButton.insertAdjacentHTML("beforeend", likeSvgIcon);
  articleMediaInfosElement.append(mediaTitleElement, likesCountElement, likeButton);

  return baseArticleElement;
}