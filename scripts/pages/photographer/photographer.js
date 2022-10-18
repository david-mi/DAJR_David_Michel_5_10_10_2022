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

/**
 * Display photographer data in the dom
 * 
 * @param {photographerType} photographer 
 */

function displayPhotographerData(photographer) {
  const photographerHTMLModel = photographerFactory(photographer)
  photographHeader.insertAdjacentHTML("afterbegin", photographerHTMLModel.photographer())
}

/**
 * Loops through photographer medias, create a mediaFactory
 * and call the correct method to return an element based on media type.
 * Append element to the dom
 * 
 * @param {mediaType} medias 
 * @param {string} photographerMediaFolder 
 */

function displayPhotographerMedias(medias, photographerMediaFolder) {
  medias.forEach(media => {
    const mediaType = "image" in media ? "image" : "video"

    const photographerHtmlModels = mediaFactory(media, photographerMediaFolder)
    photographerMedias.insertAdjacentElement("afterbegin", photographerHtmlModels[mediaType]())
  })
}

/**
 * Gets called on page load
 * Display photographer data in the dom
 * Display photographer name in the form
 * Display photographer medias data in the dom
 * Display showStatsPriceElementInfos in the dom
 */

async function init() {
  const { photographer, photographerMedias } = await getPhotographerData()
  const photographerMediaFolder = photographer.portrait.replace(/\..+/, "")
  displayPhotographerData(photographer)
  displayPhotographerNameToForm(photographer.name)
  displayPhotographerMedias(photographerMedias, photographerMediaFolder)
  showStatsPriceElementInfos(photographer)
}

init()
