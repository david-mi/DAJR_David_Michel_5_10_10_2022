import { photographerFactory, mediaFactory } from "../../factories/index.js";
import { photographerMediasElement } from "./constants.js";

const photographHeader = document.querySelector(".photograph-header");


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
 */

export const displayPhotographerMedias = (medias) => {
  medias.forEach((media, index) => {
    const photographerHtmlModels = mediaFactory(media, index);
    photographerMediasElement.insertAdjacentElement("beforeend", photographerHtmlModels);
  });
};