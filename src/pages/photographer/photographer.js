import { displayModal, closeModal } from "../../utils/displayForm.js";
import { getPhotographerData } from "./getters.js";
import { displayPhotographerData } from "./display.js";
import { form } from "./constants.js";
import { showStatsPriceElementInfos } from "./likes.js";
import { handleSubmit, displayPhotographerNameToForm } from "../photographer/form/index.js";
import { sortCallbacks, sortAndDisplayMedias } from "./sortMedias.js";
import "../../data/types.js";

const contactButton = document.querySelector(".contact-button");
const closeModalImg = document.querySelector(".modal header button");
const sortSelectMenu = document.querySelector("select");

contactButton.addEventListener("click", displayModal);
closeModalImg.addEventListener("click", closeModal);
form.addEventListener("submit", handleSubmit);

/**
 * Gets called on page load
 * Add listener to select sorting menu
 * Display photographer data in the dom
 * Display photographer name in the form
 * Display photographer medias data sorted by popularity in the dom
 * Display photographer daily rate and total likes in the dom
 */

const init = async () => {
  const { photographer, photographerMedias } = await getPhotographerData();
  sortSelectMenu.addEventListener("change", ({ target }) => {
    const sortOption = target.value;
    const sortCallback = sortCallbacks[sortOption];
    sortAndDisplayMedias(photographerMedias, sortCallback);
  });
  displayPhotographerData(photographer);
  displayPhotographerNameToForm(photographer.name);
  sortAndDisplayMedias(photographerMedias, sortCallbacks.popularity);
  showStatsPriceElementInfos(photographer);
};

init();
