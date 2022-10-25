/**
 * - Sum each likes count present in photographer card
 * - Show the result in {@link totalLikesElement}
 * @param {photographerType} photographer
 */

export const displayTotalLikesAndPrice = (photographer) => {
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

export const displayUpdatedTotalLikes = (isMediaLiked) => {
  const totalLikesElement = document.querySelector(".total-likes");
  const totalLikesCounts = Number(totalLikesElement.innerText);

  if (isMediaLiked) {
    totalLikesElement.innerText = totalLikesCounts + 1;
  } else {
    totalLikesElement.innerText = totalLikesCounts - 1;
  }
};