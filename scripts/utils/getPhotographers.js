import "../../data/types.js";

/**
 * Fetch data from photographers.json
 * 
 * @returns {Promise<photographersType>}
 */

const getPhotographers = async () => {
  const response = await fetch("../data/photographers.json");
  const photographers = await response.json();
  return photographers;
};

export default getPhotographers;