/**
 * Prevent going outside opened modal while tabbing / shift tabbing
 * and trap focus between first and last focusable element in modal
 * 
 * @param {KeyboardEvent} event 
 * @param {string} modalContainerClass the given modal class
 */

export const handleModalFocusTrap = (event, modalContainerClass,) => {
  const focusableModalElements = document.querySelectorAll(`${modalContainerClass} :is(a, select, video, button, input)`);
  const firstFocusableElement = focusableModalElements[0];
  const lastFocusableElement = focusableModalElements[focusableModalElements.length - 1];
  const { activeElement } = document;

  if (activeElement === lastFocusableElement && event.shiftKey === false) {
    event.preventDefault();
    firstFocusableElement.focus();
  } else if (activeElement === firstFocusableElement && event.shiftKey === true) {
    event.preventDefault();
    lastFocusableElement.focus();
  }
};