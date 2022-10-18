import "../../../data/types.js"
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
