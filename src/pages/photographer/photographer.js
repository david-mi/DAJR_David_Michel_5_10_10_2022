import "../../data/types.js";
import { displayModal, closeModal } from "./form/index.js";
import { getPhotographerData } from "./getters.js";
import { displayPhotographerData } from "./display.js";
import { displayTotalLikesAndPrice } from "./likes/index.js";
import { handleSubmit, displayPhotographerNameToForm } from "../photographer/form/index.js";
import { sortCallbacks, displaySortedMedias } from "./sort/index.js";
import { form } from "./constants.js";

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
    const sortedMedias = photographerMedias.sort(sortCallback);
    displaySortedMedias(sortedMedias);
  });
  displayPhotographerData(photographer);
  displayPhotographerNameToForm(photographer.name);
  const sortedByPopularityMedias = photographerMedias.sort(sortCallbacks.popularity);
  displaySortedMedias(sortedByPopularityMedias);
  displayTotalLikesAndPrice(photographer);
};

init();
