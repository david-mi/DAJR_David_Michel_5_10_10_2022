import { form } from "../pages/photographer/constants.js";

/**
 * Changing display mode of contact modal to block
 */

export const displayModal = () => {
    const modal = document.getElementById("contact_modal");
    modal.classList.add("display-modal");
    document.body.classList.add("overflow");
};

/**
 * Changing display mode of contact modal to none
 * reseting form inputs
 */

export const closeModal = () => {
    const modal = document.getElementById("contact_modal");
    modal.classList.remove("display-modal");
    document.body.classList.remove("overflow");
    form.reset();
};
