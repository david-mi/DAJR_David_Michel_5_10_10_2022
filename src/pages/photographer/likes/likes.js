import "../../../data/types.js";

/**
 * - increment by 1 the targeted photographer likes count in photographers
 * if the user did not like the media already, else it decrement the value by one
 *
 * @param {mediaType} mediaReference {@link mediaReference} 
 * @param {boolean} isMediaLiked if user liked the media already 
 */

export const updateMediaLikes = (mediaReference, isMediaLiked) => {
  if (isMediaLiked) {
    mediaReference.likes--;
  } else {
    mediaReference.likes++;
  }

  return !isMediaLiked;
};