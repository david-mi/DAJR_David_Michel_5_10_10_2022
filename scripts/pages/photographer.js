import { displayModal, closeModal } from "../utils/contactForm.js"

const contactButton = document.querySelector(".contact_button")
contactButton.addEventListener("click", displayModal)
const closeModalImg = document.querySelector(".modal header img")
console.log(closeModalImg)
closeModalImg.addEventListener("click", closeModal)
