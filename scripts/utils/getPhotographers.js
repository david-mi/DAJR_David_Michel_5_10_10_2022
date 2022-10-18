import "../../data/types.js"

/**
 * Fetch data from photographers.json
 * 
 * @returns {Promise<photographersType>}
 */

async function getPhotographers() {
  const response = await fetch("../data/photographers.json")
  const photographers = await response.json()
  return photographers
}

export default getPhotographers