const api_url = "http://localhost:3000/movies";

function objeto_a_tarjeta({title, year, director, duration, genre, rate, poster}){ //  * funcion para recibir por parametro un objeto y pasarlo a una tarjeta
    const contenedor_tarjetas = document.getElementById('contenedor_tjt');


    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card'); //* Creo una tarjeta para almacenar la foto y debajo el texto descriptivo

    const imagen_tarjeta = document.createElement('img'); //*Traigo la informacion de la tarjeta
    imagen_tarjeta.classList.add('card-img-top');
    imagen_tarjeta.src = poster;
    imagen_tarjeta.alt = title;

    const texto_tarjeta = document.createElement('div'); //* Creo un div para mostrar la informacion de la tarjeta
    texto_tarjeta.classList.add('card-body', 'text-body-tamaño');

    const enlace_titulo = document.createElement('a');
    enlace_titulo.classList.add('enlace-titulo', 'tamaño-titulo');
    enlace_titulo.href = "#"
    enlace_titulo.textContent = title;

    const info_tarjeta = document.createElement('p'); //* Creo la informacion de la pelicula en la tjt y como se va a ver
    info_tarjeta.classList.add('card-text');
    info_tarjeta.innerHTML = 
    `<strong>Año:</strong> ${year} <br>
    <strong>Director:</strong> ${director} <br>
    <strong>Duración:</strong> ${duration} <br>
    <strong>Género:</strong> ${genre} <br>
    <strong>Calificación:</strong> ${rate}`
    

    //*Agrego todos los elementos y los devuelvo
    tarjeta.appendChild(imagen_tarjeta);
    tarjeta.appendChild(texto_tarjeta);
    texto_tarjeta.appendChild(enlace_titulo);
    texto_tarjeta.appendChild(info_tarjeta);
    

    contenedor_tarjetas?.appendChild(tarjeta);

}

function cargar_generos(datos){
    const generos = document.getElementById('menu-genero');
    const generos_unicos = obtenerGenerosUnicos(datos);

    generos.innerHTML = "";

    generos_unicos.forEach(genero => {
        const opcion = document.createElement('li');
        const link_opcion = document.createElement('a');
        link_opcion.textContent = genero;
        link_opcion.href = "#";
        link_opcion.classList.add('dropdown-item');
        opcion.appendChild(link_opcion);
        generos.appendChild(opcion)
    });
}

function obtenerGenerosUnicos(peliculas) {
    return peliculas.reduce((generos, pelicula) =>{
        pelicula.genre.forEach(genero => {
            if(!generos.includes(genero)){
                generos.push(genero);
            }
        });
        return generos;
    },[]);
}

// ? 
function obtener_datos(datos) {
    cargar_generos(datos);
    datos.forEach((dato)=> objeto_a_tarjeta(dato));
}

module.exports = {
    obtener_datos,
    api_url
}