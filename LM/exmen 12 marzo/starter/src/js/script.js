// 1. Selecciona el botón por su ID
const boton = document.getElementById('btn');
// 2. Agrega el Event Listener para el evento 'click'
boton.addEventListener('click', botonAlt);
// 3. Dentro de la función del evento:
//    - Cambia el texto del botón
//    - Añade una clase (ej: 'btn--success') para cambiar el color
//    - Muestra el mensaje en consola
function botonAlt() {
    
    boton.innerText = '¡Añadido!';
    boton.style.backgroundColor = "grean";

}
