import { displayModal, closeModal } from "../../utils/contactForm.js"
import getPhotographers from "../../utils/getPhotographers.js"
import { photographerFactory } from "../../factories/photographer.js"
import "./form.js"
import "../../../data/types.js"

const photographHeader = document.querySelector(".photograph-header")
const contactButton = document.querySelector(".contact-button")
const closeModalImg = document.querySelector(".modal header img")
const form = document.querySelector(".modal form")

contactButton.addEventListener("click", displayModal)
closeModalImg.addEventListener("click", closeModal)
form.addEventListener("submit", handleSubmit)

/**
 * Gets photographer id from url parameters and returns it as a number
 * 
 * if id is not found or contains anything different than a number, returns null
 * convert id to a number and returns it
 * @returns {number | null} photographer id
 */

const getPhotographerId = () => {
  const url = new URL(location.href)
  const photographerId = url.searchParams.get("id")

  if (/^\d+$/.test(photographerId) === false || photographerId === null) {
    throw new Error("Invalid id")
  }
  return Number(photographerId)
}

/**
 * @param {photographerType[]} photographers 
 * @param {number} photographerId 
 * @returns {photographerType} targeted photographer
 */

const getPhotographer = (photographers, photographerId) => {
  const findPhotographer = photographers.find((photographers) => photographers.id === photographerId)
  if (findPhotographer === undefined) {
    throw new Error("Photographer not found")
  }

  return findPhotographer
}

/**
 * @param {mediaType[]}  medias
 * @param {number} photographerId 
 * @returns {mediaType[]} medias from targeted photographerId
 */

const getPhotographerMedias = (medias, photographerId,) => {
  return medias.filter((media) => media.photographerId === photographerId)
}

/* Redirects to index.html */

const redirectToIndex = () => {
  window.location.href = "index.html"
}

/**
 * fetch photographers file
 * get photographer id from url params
 * get photographer associated infos and medias 
 * if any error is thrown, redirects to index.html
 */

const getPhotographerData = async () => {
  try {
    const { media, photographers } = await getPhotographers()
    const photographerId = getPhotographerId()
    const photographer = getPhotographer(photographers, photographerId)
    const photographerMedias = getPhotographerMedias(media, photographerId)
    return { photographer, photographerMedias }
  }
  catch (err) {
    console.error(err)
    redirectToIndex()
  }
}

function displayPhotographerData(photographer) {
  const photographerHTMLModel = photographerFactory(photographer)
  photographHeader.insertAdjacentHTML("afterbegin", photographerHTMLModel.photographer())
}

async function init() {
  const { photographer, photographerMedias } = await getPhotographerData()
  displayPhotographerData(photographer)
}

init()
