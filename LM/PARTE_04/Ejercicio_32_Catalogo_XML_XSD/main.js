fetch('productos.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");

        const productos = xml.getElementsByTagName("producto");
        const container = document.getElementById("productos");

        Array.from(productos).forEach(prod => {
            const nombre = prod.getElementsByTagName("nombre")[0].textContent;
            const precio = prod.getElementsByTagName("precio")[0].textContent;
            const descripcion = prod.getElementsByTagName("descripcion")[0].textContent;
            const categoria = prod.getElementsByTagName("categoria")[0].textContent;

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${nombre}</h3>
                <p>${descripcion}</p>
                <p><strong>${precio} €</strong></p>
                <span>${categoria}</span>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error cargando XML:", error));