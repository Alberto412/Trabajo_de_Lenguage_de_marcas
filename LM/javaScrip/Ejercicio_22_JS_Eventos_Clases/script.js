// Selección de elementos
const toggleBtn = document.getElementById('toggleMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menuLateral');

// Función para mostrar/ocultar menú
function toggleMenu() {
    menu.classList.toggle('hidden');
}

// Event listeners
toggleBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);