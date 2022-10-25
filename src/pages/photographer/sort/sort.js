import "../../../data/types.js";

/**
 * Contains all callbacks that will be applied to Array.sort method
 */

export const sortCallbacks = {
  /**
   * @param {mediaType} nextMedia  next media in Array.sort loop
   * @param {mediaType} currentMedia current media in Array.sort loop
   * @returns {number} return value of Array.sort callback call for each iteration 
   */

  date(nextMedia, currentMedia) {
    return Date.parse(nextMedia.date) - Date.parse(currentMedia.date);
  },

  /**
   * @param {mediaType} nextMedia  next media in Array.sort loop
   * @param {mediaType} currentMedia current media in Array.sort loop
   * @returns {number} return value of Array.sort callback call for each iteration 
   */

  popularity(nextMedia, currentMedia) {
    return currentMedia.likes - nextMedia.likes;
  },

  /**
   * @param {mediaType} nextMedia  next media in Array.sort loop
   * @param {mediaType} currentMedia current media in Array.sort loop
   * @returns {number} return value of Array.sort callback call for each iteration 
   */

  title(nextMedia, currentMedia) {
    return nextMedia.title.localeCompare(currentMedia.title);
  }
};