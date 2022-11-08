/**
* @typedef mediaType
* @type {{
  *  id: number,
  *  photographerId: number,
  *  title: string,
  *  image?: string,
  *  video?:string,
  *  likes: number,
  *  date: string,
  *  price: number,
  * }}
  */

/**
* @typedef photographerType
* @type {{
*  name: string,
*  id: number,
*  city: string,
*  country: string,
*  tagline: string,
*  price: number,
*  portrait: string
* }}
*/

/**
 * @typedef photographersType
 * @type {{
 *  photographers: Array<photographerType>,
 *  media: Array<mediaType>
 * }}
 */



