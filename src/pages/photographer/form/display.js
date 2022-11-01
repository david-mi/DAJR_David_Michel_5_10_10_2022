import { form } from "../constants.js";
import { handleModalFocusTrap } from "../../../utils/focusTrap.js";

const formModal = document.getElementById("contact_modal");

/**
 * triggers {@link handleModalFocusTrap}
 * @param {KeyboardEvent} sevent 
 */

const handleFormFocusTrap = (event) => {
  if (event.key === "Tab") {
    handleModalFocusTrap(event, ".modal");
  }
};

/**
 * - Changing display mode of contact modal to block
 * - Add document eventlistener attached to {@link handleFormFocusTrap}
 * - Put focus to close button if using a keyboard to navigate
 * - Add overflow class to body to remove vertical scrollbar
 */

export const displayModal = () => {
  formModal.classList.add("display-modal");
  document.addEventListener("keydown", handleFormFocusTrap);

  const closeFormButton = document.querySelector(".close-form");
  closeFormButton.focus();

  document.body.classList.add("overflow");
};

/**
 * - Changing display mode of contact modal to none
 * - Remove document eventlistener attached to {@link handleFormFocusTrap}
 * - Resetting form inputs
 * - Remove overflow class from body to get vertical scrollbar back
 */

export const closeModal = () => {
  formModal.classList.remove("display-modal");
  document.removeEventListener("keydown", handleFormFocusTrap);
  form.reset();
  document.body.classList.remove("overflow");
};
