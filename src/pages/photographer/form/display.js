import { form } from "../constants.js";

const modal = document.getElementById("contact_modal");

/**
 * Changing display mode of contact modal to block
 * Adding tabindex attribute at -1 on every focusable 
 * elements who aren't inside form modal {@link focusableElementsOutsideForm}
 */

export const displayModal = () => {
  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select");
  modal.classList.add("display-modal");
  document.body.classList.add("overflow");

  focusableElementsOutsideForm.forEach(element => {
    element.tabIndex = -1;
  });
};

/**
 * Changing display mode of contact modal to none
 * Removing tabindex attribute on every focusable 
 * elements who aren't inside form modal {@link focusableElementsOutsideForm}
 * reseting form inputs
 */

export const closeModal = () => {
  const focusableElementsOutsideForm = document.querySelectorAll("button:not(.modal button), a, select");
  modal.classList.remove("display-modal");
  document.body.classList.remove("overflow");

  focusableElementsOutsideForm.forEach(element => {
    element.removeAttribute("tabindex");
  });

  form.reset();
};
