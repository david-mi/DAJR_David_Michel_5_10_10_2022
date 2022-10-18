import "../../../data/types.js"

/**
 * increment by 1 the targeted photographer likes count in photographers
 * and shows it in the associated likesCountElement
 *
 * @param {mediaType} mediaReference {@link mediaReference} 
 * @param {HTMLDivElement} likeCountElement {@link photographersType}
 */

export const updateMediaLikeAndShowIt = (mediaReference, likeCountElement) => {
  mediaReference.likes++
  likeCountElement.innerText = mediaReference.likes
}

/**
 * Sum each likes count present in photographer card
 * Show the result
 * @param {photographerType} photographer
 */

export const showStatsPriceElementInfos = (photographer) => {
  const totalLikesElement = document.querySelector(".total-likes")
  const likesCountElementsArray = Array.from(document.querySelectorAll(".likes-count"))
  const photographerPriceElement = document.querySelector(".photographer-price")
  photographerPriceElement.innerText = `${photographer.price}€ / jour`

  const totalLikesCounts = likesCountElementsArray.reduce((total, currentMedia) => {
    const currentMediaLikesNumber = Number(currentMedia.innerText)
    return total += currentMediaLikesNumber
  }, 0)
  totalLikesElement.innerText = totalLikesCounts
}

/**
 * Get total likes count shown in the dom
 * Update the dom value by one
 */

export const updateTotalLikesAndShowIt = () => {
  const totalLikesElement = document.querySelector(".total-likes")
  const totalLikesCounts = Number(totalLikesElement.innerText)
  totalLikesElement.innerText = totalLikesCounts + 1
}