/**
 * Fetch data from photographers.json
 * 
 * @returns {Promise<photographersType>}
 */

export const getPhotographersApiData = async () => {
  const response = await fetch("src/data/photographers.json");
  const photographers = await response.json();
  return photographers;
};
