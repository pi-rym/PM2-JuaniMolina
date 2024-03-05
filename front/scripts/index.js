console.log(tempData);

function objeto_a_tarjeta({title, year, director, duration, genre, rate, poster}){ //  * funcion para recibir por parametro un objeto y pasarlo a una tarjeta
    
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card'); //* Creo una tarjeta para almacenar la foto y debajo el texto descriptivo

    const imagen_tarjeta = document.createElement('img'); //*Traigo la informacion de la tarjeta
    imagen_tarjeta.classList.add('card-img-top');
    imagen_tarjeta.src = poster;
    imagen_tarjeta.alt = title;

    const texto_tarjeta = document.createElement('div'); //* Creo un div para mostrar la informacion de la tarjeta
    texto_tarjeta.classList.add('card-body');

    const enlace_titulo = document.createElement('a');
    enlace_titulo.classList.add('enlace-titulo');
    enlace_titulo.href = "#"

    const titulo_tarjeta = document.createElement('h4'); //* Creo el titulo y le adjunto el titlo traido.
    titulo_tarjeta.classList.add('card-title');
    titulo_tarjeta.textContent = title;

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
    enlace_titulo.appendChild(titulo_tarjeta);

    return tarjeta;

}

function cargar_generos(){
    const generos = document.getElementById('menu-genero');
    const generos_unicos = obtenerGenerosUnicos(tempData);

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
    const generos = new Set();
    peliculas.forEach(pelicula => {
        pelicula.genre.forEach(genero => {
        generos.add(genero);
        });
    });
    return Array.from(generos);
}

window.addEventListener('load', cargar_generos);

const contenedor_tarjetas = document.getElementById('contenedor_tjt');

const peliculas = tempData.map(objeto_a_tarjeta);

peliculas.forEach(pelicula => contenedor_tarjetas.appendChild(pelicula));



