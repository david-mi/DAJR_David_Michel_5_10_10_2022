import "../../data/types.js";
import { displayphotographerLightbox } from "./lightbox/lightbox.js";
import { displayPhotographerMedias } from "./display.js";

/**
 * 
 * @param {mediaType} medias 
 */

const sortByDate = (medias, mediaFolder) => {
  const sortedMediasByDate = medias.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  displayPhotographerMedias(sortedMediasByDate, mediaFolder);
  displayphotographerLightbox(sortedMediasByDate, mediaFolder);
};

/**
 * 
 * @param {mediaType} medias 
 */

const sortByTitle = (medias, mediaFolder) => {
  const sortedMediasByTitle = medias.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  displayPhotographerMedias(sortedMediasByTitle, mediaFolder);
  displayphotographerLightbox(sortedMediasByTitle, mediaFolder);
};

/**
 * 
 * @param {mediaType} medias 
 */

const sortByPopularity = (medias, mediaFolder) => {
  const sortedMediasByPopularity = medias.sort((a, b) => {
    return b.likes - a.likes;
  });

  displayPhotographerMedias(sortedMediasByPopularity, mediaFolder);
  displayphotographerLightbox(sortedMediasByPopularity, mediaFolder);
};

export const sortMediasBy = {
  date: sortByDate,
  popularity: sortByPopularity,
  title: sortByTitle
};