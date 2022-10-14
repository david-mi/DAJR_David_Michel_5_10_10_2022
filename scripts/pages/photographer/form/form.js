import { form } from "../constants.js"
import { validator } from "./validators.js"
import "./types.js"

const formModalTitleElement = document.querySelector(".modal header h2")
const inputs = form.querySelectorAll("input[name]")

// Adding a listener to each inputs with the associated validator method as callback

inputs.forEach(input => {
  if (input.name === "firstName" || input.name === "lastName") {
    input.addEventListener("input", validator.name)
  } else {
    input.addEventListener("input", validator[input.name])
  }
})

/**
 * Insert photographers name into form title
 * 
 * @param {string} photographer photographer's name
 */

export function displayPhotographerNameToForm(photographer) {
  formModalTitleElement.innerText += ` ${photographer}`
}


/**
 * Submit form and check if fields are valid
 * if yes, making an {@link formBodyType} object with input values
 * 
 * @param {Event} event 
 */

export function handleSubmit(event) {
  event.preventDefault()
  const isFormValid = form.reportValidity()

  if (isFormValid) {
    const formData = new FormData(form)
    const formBody = Object.fromEntries(formData.entries())
    console.log(formBody)
  }
}
