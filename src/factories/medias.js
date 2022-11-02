import { likeSvgIcon } from "../icons/index.js";
import { updateMediaLikes, displayUpdatedTotalLikes } from "../pages/photographer/likes/index.js";
import { lightboxContainer, lightboxMediaContainer } from "../pages/photographer/constants.js";
import { handleKeydown } from "../pages/photographer/lightbox/lightbox.js";
import { toggleDisplayOnElements } from "../pages/photographer/likes/display.js";
import { videoFactory, imageFactory } from "./index.js";

/** 
 * @param {mediaType} media 
 * @param {number} index current position in medias array
 * @returns {HTMLElement} html element to display with either image or video injected in it
 */

export const mediaFactory = (media, index) => {
  let isMediaLiked = false;
  const mediaType = "image" in media ? "image" : "video";

  const baseArticleElement = createBaseArticleElement(media, isMediaLiked);

  const mediaLink = document.createElement("a");
  mediaLink.href = "#";
  mediaLink.title = media.title;
  mediaLink.addEventListener("click", (event) => {
    handleMediaClick(event, index);
  });

  const photographerMediaHtmlModel = mediaType === "image"
    ? imageFactory(media, index).imageMedia
    : videoFactory(media, index).videoMedia;

  baseArticleElement.insertAdjacentElement("afterbegin", mediaLink);
  mediaLink.insertAdjacentHTML("beforeend", photographerMediaHtmlModel);

  return baseArticleElement;
};

/**
 * Adding tabindex attribute at -1 on every focusable 
 * elements who aren't inside lightbox {@link focusableElementsOutsideLightbox}
 * Add keydown listener to document for lightbox keyboard navigation
 * Opens lightbox with the clicked media displayed
 * Put focus on next media button
 * Add overflow class to body to remove vertical scrollbar
 * 
 * @param {MouseEvent} event 
 * @param {number} index current position in medias array
 */

function handleMediaClick(event, index) {
  event.preventDefault();
  const mediasInfosContainers = document.querySelectorAll(".media-infos-container");
  const focusableElementsOutsideLightbox = document.querySelectorAll("button:not(.lightbox button), a, select");

  focusableElementsOutsideLightbox.forEach(element => {
    element.tabIndex = -1;
  });

  document.addEventListener("keydown", handleKeydown);

  lightboxMediaContainer.dataset.idcurrent = index;
  const currentDisplayedMedia = mediasInfosContainers[index];
  toggleDisplayOnElements([lightboxContainer, currentDisplayedMedia], false);

  const nextMediaButton = document.querySelector(".next-media");
  nextMediaButton.focus();

  document.body.classList.add("overflow");
}

/**
 * @param {mediaType} media 
 * @param {boolean} isMediaLiked if the media has been liked by the user
 * @returns {HTMLElement} base HTMLElement structure wich will be common to image and video medias
 */

function createBaseArticleElement(media, isMediaLiked) {
  const { title, likes } = media;

  const baseArticleElement = document.createElement("article");

  const articleMediaInfosElement = document.createElement("div");
  articleMediaInfosElement.classList.add("media-infos");

  const mediaTitleElement = document.createElement("h2");
  mediaTitleElement.classList.add("media-name");
  mediaTitleElement.textContent = title;

  const likesCountElement = document.createElement("span");
  likesCountElement.classList.add("likes-count");
  likesCountElement.innerText = likes;

  const likeButton = document.createElement("button");
  likeButton.setAttribute("type", "button");
  likeButton.setAttribute("aria-label", "likes");
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