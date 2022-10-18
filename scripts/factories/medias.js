import { likeSvgIcon } from "../../icons/heart.js"
import { updateMediaLikeAndShowIt, updateTotalLikesAndShowIt } from "../pages/photographer/likes.js";

export const mediaFactory = (data, photographerMediaFolder) => {
  const { title, likes } = data

  const articleElement = document.createElement("article");

  const articleMediaInfosElement = document.createElement("div");
  articleMediaInfosElement.classList.add("media-infos")

  const mediaTitleElement = document.createElement("p")
  mediaTitleElement.classList.add("media-name")
  mediaTitleElement.textContent = title

  const likesCountElement = document.createElement("span")
  likesCountElement.classList.add("likes-count")
  likesCountElement.innerText = likes

  const likeButton = document.createElement("button")
  likeButton.setAttribute("type", "button")
  likeButton.classList.add("like-button")
  likeButton.addEventListener("click", () => {
    updateMediaLikeAndShowIt(data, likesCountElement)
    updateTotalLikesAndShowIt()
  })

  articleElement.append(articleMediaInfosElement)
  likeButton.insertAdjacentHTML("beforeend", likeSvgIcon)
  articleMediaInfosElement.append(mediaTitleElement, likesCountElement, likeButton)

  const photographerHtmlModels = {
    image: () => {
      const linkHtmlContent = `
      <a href="#"> 
        <img src="assets/photographers/${photographerMediaFolder}/${data.image}" />
      </a>
      `
      articleElement.insertAdjacentHTML("afterbegin", linkHtmlContent)

      return articleElement
    },
    video: () => {
      const linkHtmlContent = `
      <a href="#"> 
        <video>
          <source
            src="assets/photographers/${photographerMediaFolder}/${data.video}" 
            type="video/mp4" 
          />
          Impossible de charger la vidéo
        </video>
      </a>
      `
      articleElement.insertAdjacentHTML("afterbegin", linkHtmlContent)

      return articleElement
    }
  }

  return photographerHtmlModels
}
