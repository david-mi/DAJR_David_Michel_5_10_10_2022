import { photographerFactory } from "../factories/photographer.js"
import getPhotographers from "../utils/getPhotographers.js"

function displayIndexData(photographers) {
    const photographersSection = document.querySelector(".photographer-section")
    let photographersSectionHtml = ""

    photographers.forEach((photographer) => {
        const photographerCardHTML = photographerFactory(photographer)
        photographersSectionHtml += photographerCardHTML
    })

    photographersSection.insertAdjacentHTML("beforeend", photographersSectionHtml)
};

async function init() {
    const { photographers } = await getPhotographers()
    displayIndexData(photographers)
};

init()
