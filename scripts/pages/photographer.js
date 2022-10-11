import { displayModal, closeModal } from "../utils/contactForm.js"
import "../../data/types.js"

const contactButton = document.querySelector(".contact-button")
contactButton.addEventListener("click", displayModal)
const closeModalImg = document.querySelector(".modal header img")
closeModalImg.addEventListener("click", closeModal)
