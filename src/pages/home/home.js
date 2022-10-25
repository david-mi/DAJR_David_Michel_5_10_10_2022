import { displayIndexData } from "./display.js";
import { getPhotographersApiData } from "../../utils/api.js";
import "../../data/types.js";

/**
 * Gets called when loading the page
 * Gets photographers data and append it
 */

const init = async () => {
    const { photographers } = await getPhotographersApiData();
    displayIndexData(photographers);
};

init();
