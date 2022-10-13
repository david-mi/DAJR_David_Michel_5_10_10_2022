import { photographerFactory } from "../factories/photographer.js"
import getPhotographers from "../utils/getPhotographers.js"

function displayIndexData(photographers) {
    const photographersSection = document.querySelector(".photographer-section")

    photographers.forEach((photographer) => {
        const photographerHTMLModel = photographerFactory(photographer)
        photographersSection.insertAdjacentHTML("beforeend", photographerHTMLModel.index())
    })
};

async function init() {
    const { photographers } = await getPhotographers()
    displayIndexData(photographers)
};

init()
