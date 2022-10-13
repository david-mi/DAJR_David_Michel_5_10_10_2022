export function photographerFactory(data) {
  const { name, city, country, tagline, price, id, portrait } = data

  const photographerHtmlCard = {
    index: () => (
      `<article>
         <a href="/photographer.html?id=${id}">
           <img src="assets/photographers/${portrait}">
           <h2>${name}</h2>
         </a>
         <p class="infos">
           <strong class="location">${city}, ${country}</strong>
           <span class="tag-line">${tagline}</span>
           <span class="price">${price}€/jour</span>
         </p>
       </article>`
    ),
    photographer: () => (
      ` <h1>${name}</h1>
        <p>
          <strong class="location">${city}, ${country}</strong>
          <span class="tagline">${tagline}</span>
        </p>
        <img src="assets/photographers/${portrait}" alt=${name}>`
    )
  }

  return photographerHtmlCard
}





