// 1. Selecciona la caja y los botones
const caja = document.getElementById('miCaja');
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');

// 2. Cambiar color de fondo
btnColor.addEventListener('click', () => {
    caja.style.backgroundColor = 'purple'; // Puedes cambiar por cualquier color
});

// 3. Cambiar texto interno
btnTexto.addEventListener('click', () => {
    caja.innerText = 'Hola JS';
});

// 4. Agregar un nuevo elemento a la lista
btnAgregar.addEventListener('click', () => {
    const nuevoLi = document.createElement('li');
    nuevoLi.innerText = `Elemento ${lista.children.length + 1}`;
    lista.appendChild(nuevoLi);
});