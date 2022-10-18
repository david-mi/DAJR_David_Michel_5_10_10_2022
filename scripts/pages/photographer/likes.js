import "../../../data/types.js";

/**
 * - increment by 1 the targeted photographer likes count in photographers
 * if the user did not like the media already, else it decrement the value by one
 * - Shows the value in the associated likesCountElement
 *
 * @param {mediaType} mediaReference {@link mediaReference} 
 * @param {HTMLDivElement} likeCountElement {@link photographersType}
 * @param {boolean} isMediaLiked has user already liked the media
 */

export const updateMediaLikeAndShowIt = (mediaReference, likeCountElement, isMediaLiked) => {
  if (isMediaLiked === true) {
    mediaReference.likes--;
    isMediaLiked = false;

  } else {
    mediaReference.likes++;
    isMediaLiked = true;
  }

  likeCountElement.innerText = mediaReference.likes;

  return isMediaLiked;
};

/**
 * Sum each likes count present in photographer card
 * Show the result
 * @param {photographerType} photographer
 */

export const showStatsPriceElementInfos = (photographer) => {
  const totalLikesElement = document.querySelector(".total-likes");
  const likesCountElementsArray = Array.from(document.querySelectorAll(".likes-count"));
  const photographerPriceElement = document.querySelector(".photographer-price");
  photographerPriceElement.innerText = `${photographer.price}€ / jour`;

  const totalLikesCounts = likesCountElementsArray.reduce((total, currentMedia) => {
    const currentMediaLikesNumber = Number(currentMedia.innerText);
    return total += currentMediaLikesNumber;
  }, 0);
  totalLikesElement.innerText = totalLikesCounts;
};

/**
 * Get total likes count shown in the dom
 * if the user has already liked the media, decrement the total count by one
 * if not, increment the total count by one
 * 
 * @param {boolean} isMediaLiked has user already liked the media
 */

export const updateTotalLikesAndShowIt = (isMediaLiked) => {
  const totalLikesElement = document.querySelector(".total-likes");
  const totalLikesCounts = Number(totalLikesElement.innerText);
  if (isMediaLiked === true) {
    totalLikesElement.innerText = totalLikesCounts + 1;
  } else {
    totalLikesElement.innerText = totalLikesCounts - 1;
  }
};