import { displayModal, closeModal } from "../../utils/contactForm.js"
import { getPhotographerData } from "./getters.js"
import { photographerFactory } from "../../factories/photographer.js"
import { mediaFactory } from "../../factories/medias.js"
import { form } from "./constants.js"
import { showStatsPriceElementInfos } from "./likes.js"
import { handleSubmit, displayPhotographerNameToForm } from "../photographer/form/form.js"
import "../../../data/types.js"

const photographHeader = document.querySelector(".photograph-header")
const photographerMedias = document.getElementById("medias")
const contactButton = document.querySelector(".contact-button")
const closeModalImg = document.querySelector(".modal header button")

contactButton.addEventListener("click", displayModal)
closeModalImg.addEventListener("click", closeModal)
form.addEventListener("submit", handleSubmit)

function displayPhotographerData(photographer) {
  const photographerHTMLModel = photographerFactory(photographer)
  photographHeader.insertAdjacentHTML("afterbegin", photographerHTMLModel.photographer())
}

async function init() {
  const { photographer, photographerMedias } = await getPhotographerData()
  const photographerMediaFolder = photographer.portrait.replace(/\..+/, "")
  displayPhotographerData(photographer)
  displayPhotographerNameToForm(photographer.name)
  displayPhotographerMedias(photographerMedias, photographerMediaFolder)
  showStatsPriceElementInfos(photographer)
}

function displayPhotographerMedias(medias, photographerMediaFolder) {
  medias.forEach(media => {
    const mediaType = "image" in media ? "image" : "video"

    const photographerHtmlModels = mediaFactory(media, photographerMediaFolder)
    photographerMedias.insertAdjacentHTML("afterbegin", photographerHtmlModels[mediaType]())
  })
}

init()
