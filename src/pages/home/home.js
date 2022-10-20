import { photographerFactory } from "../../factories/photographer.js";
import { getPhotographersApiData } from "../../utils/api.js";
import "../../../data/types.js";

/**
 * Loop through photographers and append photographers cards in the dom
 * @param {photographersType} photographers 
 */

const displayIndexData = (photographers) => {
    const photographersSection = document.querySelector(".photographer-section");

    photographers.forEach((photographer) => {
        const photographerHTMLModel = photographerFactory(photographer);
        photographersSection.insertAdjacentHTML("beforeend", photographerHTMLModel.index());
    });
};

/**
 * Gets called when loading the page
 * Gets photographers data and append it
 */

const init = async () => {
    const { photographers } = await getPhotographersApiData();
    displayIndexData(photographers);
};

init();
