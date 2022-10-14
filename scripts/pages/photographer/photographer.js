import { displayModal, closeModal } from "../../utils/contactForm.js"
import { getPhotographerData } from "./getters.js"
import { photographerFactory } from "../../factories/photographer.js"
import { displayPhotographerNameToForm } from "./form.js"
import { handleSubmit } from "./form.js"
import "../../../data/types.js"

const photographHeader = document.querySelector(".photograph-header")
const contactButton = document.querySelector(".contact-button")
const closeModalImg = document.querySelector(".modal header button")
const form = document.querySelector(".modal form")

contactButton.addEventListener("click", displayModal)
closeModalImg.addEventListener("click", closeModal)
form.addEventListener("submit", handleSubmit)

function displayPhotographerData(photographer) {
  const photographerHTMLModel = photographerFactory(photographer)
  photographHeader.insertAdjacentHTML("afterbegin", photographerHTMLModel.photographer())
}

async function init() {
  const { photographer, photographerMedias } = await getPhotographerData()
  displayPhotographerData(photographer)
  displayPhotographerNameToForm(photographer.name)
}

init()
