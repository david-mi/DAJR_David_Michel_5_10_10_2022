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
 * - Adding tabindex attribute at -1 on every focusable 
 *   elements who aren't inside form modal {@link focusableElementsOutsideForm}
 * - Add overflow class to body to remove vertical scrollbar
 */

export const displayModal = () => {
  formModal.classList.add("display-modal");
  document.addEventListener("keydown", handleFormFocusTrap);

  const closeFormButton = document.querySelector(".close-form");
  closeFormButton.focus();

  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select, video");
  focusableElementsOutsideForm.forEach(element => {
    element.tabIndex = -1;
  });

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

  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select, video");
  focusableElementsOutsideForm.forEach(element => {
    element.removeAttribute("tabindex");
  });

  form.reset();
  document.body.classList.remove("overflow");
};
