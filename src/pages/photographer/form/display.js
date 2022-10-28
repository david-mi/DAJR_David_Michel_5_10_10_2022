import { form } from "../constants.js";

const modal = document.getElementById("contact_modal");

/**
 * - Changing display mode of contact modal to block
 * - Put focus to close button if using a keyboard to navigate
 * - Adding tabindex attribute at -1 on every focusable 
 *   elements who aren't inside form modal {@link focusableElementsOutsideForm}
 * - Add overflow class to body to remove vertical scrollbar
 */

export const displayModal = () => {
  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select");
  modal.classList.add("display-modal");

  const closeFormButton = document.querySelector(".close-form");
  closeFormButton.focus();

  focusableElementsOutsideForm.forEach(element => {
    element.tabIndex = -1;
  });

  document.body.classList.add("overflow");
};

/**
 * - Changing display mode of contact modal to none
 * - Removing tabindex attribute on every focusable 
 *   elements who aren't inside form modal {@link focusableElementsOutsideForm}
 * - Resetting form inputs
 * - Remove overflow class from body to get vertical scrollbar back
 */

export const closeModal = () => {
  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select");
  modal.classList.remove("display-modal");

  focusableElementsOutsideForm.forEach(element => {
    element.removeAttribute("tabindex");
  });

  form.reset();
  document.body.classList.remove("overflow");
};
