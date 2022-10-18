import { form } from "../pages/photographer/constants.js"

/**
 * Changing display mode of contact modal to block
 */

export const displayModal = () => {
    const modal = document.getElementById("contact_modal")
    modal.style.display = "block"
}

/**
 * Changing display mode of contact modal to none
 * reseting form inputs
 */

export const closeModal = () => {
    const modal = document.getElementById("contact_modal")
    modal.style.display = "none"
    form.reset()
}
