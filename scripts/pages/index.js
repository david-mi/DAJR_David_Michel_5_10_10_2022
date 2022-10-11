import { photographerFactory } from "../factories/photographer.js"
import getPhotographers from "../utils/getPhotographers.js"

async function displayIndexData(photographers) {
    const photographersSection = document.querySelector(".photographer-section")

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer)
        const userCardDOM = photographerModel.getUserCardDOM()
        photographersSection.appendChild(userCardDOM)
    })
};

async function init() {
    const { photographers } = await getPhotographers()
    displayIndexData(photographers)
};

init()
