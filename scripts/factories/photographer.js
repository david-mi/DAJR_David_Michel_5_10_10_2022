function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {
        const linkNode = document.createElement("a")
        linkNode.href = `/photographer.html?id=${id}`
        const articleNode = document.createElement("article")
        const imgNode = document.createElement("img")
        imgNode.setAttribute("src", picture)
        const h2Node = document.createElement("h2")
        h2Node.textContent = name

        const infosNode = document.createElement("p")
        infosNode.classList.add("infos")
        const locationNode = document.createElement("strong")
        locationNode.classList.add("location")
        locationNode.innerText = `${city}, ${country}`
        const taglineNode = document.createElement("span")
        taglineNode.classList.add("tag-line")
        taglineNode.innerText = tagline
        const priceNode = document.createElement("span")
        priceNode.classList.add("price")
        priceNode.innerText = `${price}€/jour`

        linkNode.append(imgNode, h2Node)
        infosNode.append(locationNode, taglineNode, priceNode)
        articleNode.append(linkNode, infosNode)
        return (articleNode)
    }
    return { name, picture, getUserCardDOM }
}
