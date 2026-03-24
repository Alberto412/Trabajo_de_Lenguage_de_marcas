let peliculasData = [];

async function cargarPeliculas() {
    const response = await fetch('datos.xml');
    const text = await response.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");

    const peliculas = xml.querySelectorAll("pelicula");

    peliculasData = Array.from(peliculas).map(p => ({
        titulo: p.querySelector("titulo").textContent,
        descripcion: p.querySelector("descripcion").textContent,
        anio: p.querySelector("anio").textContent,
        genero: p.querySelector("genero").textContent
    }));

    renderPeliculas(peliculasData);
}

function renderPeliculas(lista) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    lista.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h2>${p.titulo}</h2>
            <p>${p.descripcion}</p>
            <small>${p.anio} - ${p.genero}</small>
        `;

        contenedor.appendChild(div);
    });
}

// FILTRO
document.getElementById("buscador").addEventListener("keyup", e => {
    const texto = e.target.value.toLowerCase();

    const filtradas = peliculasData.filter(p =>
        p.titulo.toLowerCase().includes(texto)
    );

    renderPeliculas(filtradas);
});

cargarPeliculas();