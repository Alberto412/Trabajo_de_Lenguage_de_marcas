async function cargarNoticias() {
    try {
        const response = await fetch('feed.xml');
        const data = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");

        const items = xml.querySelectorAll("item");
        const container = document.getElementById("noticias");

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const desc = item.querySelector("description").textContent;
            const date = item.querySelector("pubDate").textContent;
            const author = item.querySelector("author").textContent;
            const category = item.getAttribute("category");

            const article = document.createElement("article");
            article.classList.add("card", category.toLowerCase());

            article.innerHTML = `
                <h2>${title}</h2>
                <p>${desc}</p>
                <small>${author} - ${date}</small>
                <span>${category}</span>
            `;

            container.appendChild(article);
        });

    } catch (error) {
        console.error("Error cargando noticias:", error);
    }
}

cargarNoticias();