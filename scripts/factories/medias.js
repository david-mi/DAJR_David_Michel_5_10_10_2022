import { likeSvgIcon } from "../../icons/heart.js"

export function mediaFactory(data, photographerMediaFolder) {
  const { title, likes } = data

  const photographerHtmlModels = {
    image: () => (
      `<article>
         <a href="#"> 
           <img src="assets/photographers/${photographerMediaFolder}/${data.image}" />
         </a>
         <div class="media-infos">
          <p class="media-name">${title}</p>
          <span class="likes-count">${likes}</span>
          <button 
            type="button"
            class="like-button"
          >
            ${likeSvgIcon}
          </button>
         </div>
       </article>`
    ),
    video: () => (
      `<article>
         <a href="#">
           <video>
             <source
              src="assets/photographers/${photographerMediaFolder}/${data.video}" 
              type="video/mp4" 
             />
             Impossible de charger la vidéo
           </video>
         </a>
         <div class="media-infos">
          <p class="media-name">${title}</p>
          <span class="likes-count">${likes}</span>
          <button 
            type="button"
            class="like-button"
          >
            ${likeSvgIcon}
          </button>
       </article>`
    )
  }

  return photographerHtmlModels
}
