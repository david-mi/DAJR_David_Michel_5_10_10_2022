import { photographerFactory, mediaFactory } from "../../factories/index.js";

const photographHeader = document.querySelector(".photograph-header");
const photographerMedias = document.getElementById("medias");

/**
 * Display photographer data in the dom
 * 
 * @param {photographerType} photographer 
 */

export const displayPhotographerData = (photographer) => {
  const photographerHTMLModel = photographerFactory(photographer);
  photographHeader.insertAdjacentHTML("afterbegin", photographerHTMLModel.photographer());
};

/**
 * Loops through photographer medias, create a mediaFactory
 * and call the correct method to return an element based on media type.
 * Append element to the dom
 * 
 * @param {mediaType} medias 
 * @param {string} photographerMediaFolder 
 */

export const displayPhotographerMedias = (medias, photographerMediaFolder) => {
  photographerMedias.innerHTML = "";
  medias.forEach((media, index) => {
    const photographerHtmlModels = mediaFactory(media, photographerMediaFolder, index);
    photographerMedias.insertAdjacentElement("beforeend", photographerHtmlModels);
  });
};