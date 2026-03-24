const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const telefono = document.getElementById("telefono");

// REGEX
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const regexTelefono = /^[0-9]{9}$/;

// FUNCIONES
function setError(input, mensaje) {
    const group = input.parentElement;
    group.classList.add("error");
    group.classList.remove("success");
    group.querySelector("small").textContent = mensaje;
}

function setSuccess(input) {
    const group = input.parentElement;
    group.classList.add("success");
    group.classList.remove("error");
}

// VALIDACIONES
function validarUsuario() {
    if (usuario.value.trim() === "") {
        setError(usuario, "Usuario obligatorio");
    } else {
        setSuccess(usuario);
    }
}

function validarCorreo() {
    if (!regexCorreo.test(correo.value)) {
        setError(correo, "Correo inválido");
    } else {
        setSuccess(correo);
    }
}

function validarPassword() {
    if (!regexPassword.test(password.value)) {
        setError(password, "Mínimo 8 caracteres, 1 mayúscula y 1 número");
    } else {
        setSuccess(password);
    }
}

function validarConfirmar() {
    if (confirmar.value !== password.value) {
        setError(confirmar, "Las contraseñas no coinciden");
    } else {
        setSuccess(confirmar);
    }
}

function validarTelefono() {
    if (!regexTelefono.test(telefono.value)) {
        setError(telefono, "Teléfono inválido (9 dígitos)");
    } else {
        setSuccess(telefono);
    }
}

// EVENTOS (tiempo real)
usuario.addEventListener("keyup", validarUsuario);
correo.addEventListener("keyup", validarCorreo);
password.addEventListener("keyup", validarPassword);
confirmar.addEventListener("keyup", validarConfirmar);
telefono.addEventListener("keyup", validarTelefono);