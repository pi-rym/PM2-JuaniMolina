const limpiar = document.getElementById("limpiar");
const saludar = document.getElementById("saludar");

//? LIMPIAR FORMULARIO
limpiar.addEventListener("click", () => {
    document.getElementById("form_peliculas").reset();
});