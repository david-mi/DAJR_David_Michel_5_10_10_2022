import { photographerFactory } from "../factories/photographer.js"
import getPhotographers from "../utils/getPhotographers.js"
import "../../data/types.js"

/**
 * Loop through photographers and append photographers cards in the dom
 * @param {photographersType} photographers 
 */

function displayIndexData(photographers) {
    const photographersSection = document.querySelector(".photographer-section")

    photographers.forEach((photographer) => {
        const photographerHTMLModel = photographerFactory(photographer)
        photographersSection.insertAdjacentHTML("beforeend", photographerHTMLModel.index())
    })
};

/**
 * Gets called when loading the page
 * Gets photographers data and append it
 */

async function init() {
    const { photographers } = await getPhotographers()
    displayIndexData(photographers)
};

init()
