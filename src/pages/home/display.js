import { photographerFactory } from "../../factories/photographer.js";

/**
 * Loop through photographers and append photographers cards in the dom
 * @param {photographersType} photographers 
 */

export const displayIndexData = (photographers) => {
  const photographersSection = document.querySelector(".photographer-section");

  photographers.forEach((photographer) => {
    const photographerHTMLModel = photographerFactory(photographer);
    photographersSection.insertAdjacentHTML("beforeend", photographerHTMLModel.index);
  });
};