# Examen PARTE_03: Tarjeta de Producto Interactiva (30 min)

## Objetivo
Demostrar el dominio de la automatización con **Gulp**, el uso de **SASS** para estilos avanzados y la manipulación básica del **DOM** con JavaScript.

## Requisitos Previos
1. Abre la carpeta `starter` en tu editor.
2. Ejecuta `npm install` para instalar las dependencias necesarias.

---

## Pasos a realizar

### 1. Automatización con Gulp (4 pts)
Crea un archivo `gulpfile.js` en la raíz de la carpeta `starter` que realice lo siguiente:
- Importe `gulp`, `gulp-sass` y el compilador de `sass`.
- Defina una tarea llamada `compilar` que tome archivos `.scss` de `src/scss/` y los guarde en `dist/css/`.
- Defina una tarea `default` que observe (watch) los cambios en los archivos SASS y ejecute la tarea `compilar` automáticamente.

### 2. Estilos con SASS (4 pts)
Modifica el archivo `src/scss/style.scss` (debes crearlo):
- Crea una **variable** para el color principal del producto (ej: `#e74c3c`).
- Aplica **anidamiento** (nesting) para dar estilo a la tarjeta (`.card`) y sus elementos internos (`.card__title`, `.card__img`, etc.).
- La tarjeta debe tener un borde y una sombra suave.
- Implementa un **media query** para que, en pantallas de menos de 600px, la tarjeta ocupe el 100% del ancho disponible.

### 3. Interactividad con JS (2 pts)
En el archivo `src/js/script.js` (debes crearlo o usar el existente):
- Selecciona el botón "Comprar" de la tarjeta.
- Al hacer clic, el botón debe cambiar su texto a "¡Añadido!" y cambiar su clase CSS para volverse de color verde.
- Muestra un mensaje en la consola indicando "Producto añadido al carrito".

---

> [!IMPORTANT]
> Al finalizar, asegúrate de que Gulp esté funcionando y que el archivo CSS resultante en `dist/css/` se cargue correctamente en el HTML.
