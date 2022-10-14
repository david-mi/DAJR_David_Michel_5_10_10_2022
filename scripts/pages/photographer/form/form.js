import { form } from "../constants.js"
import "./types.js"
const formModalTitleElement = document.querySelector(".modal header h2")

export function handleSubmit(event) {
  event.preventDefault()
  console.log("submit")
}

/**
 * Insert photographers name into form title
 * 
 * @param {*} photographer photographer's name
 */

export function displayPhotographerNameToForm(photographer) {
  formModalTitleElement.innerText += ` ${photographer}`
}

