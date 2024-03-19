//!DATOS PARA INGRESAR A LA API
const apiKey_tmdb = "4b444edf26f8c894f2cc2effec19b5b5";
const apiUrl_tmdb = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey_tmdb}&region=AR&language=es`;

//?FUNCIONES
function objeto_a_tarjeta(data) {
    const contenedor_tarjetas = document.getElementById('estrenos_tjt');
    
    //?CREO ELEMENTOS DE LA TARJETA
    const card = document.createElement('div');
    const fila = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const imagen = document.createElement('img');
    const card_body = document.createElement('div');
    // const card_title = document.createElement('h3');
    const link_title = document.createElement('a');
    const card_text = document.createElement('p');

    //?AGREGO LAS CLASES CORRESPONDIENTES 
    contenedor_tarjetas.classList.add('container', 'justify-content-center');
    card.classList.add('card', 'mb-3','card-estreno');
    fila.classList.add('row', 'g-0');
    col1.classList.add('col-md-2'); 
    col2.classList.add('col-md-10');
    imagen.classList.add('img-fuid', 'rounded-start', 'card-img'); // Añadí 'img-fluid' para hacer la imagen responsive
    card_body.classList.add('card-body');
    // card_title.classList.add('card-title');
    link_title.classList.add('enlace-titulo');
    link_title.setAttribute('target', '_blank')
    card_text.classList.add('card-text');


    //?LE PASO LOS DATOS QUE OBTENGO
    imagen.src =`https://image.tmdb.org/t/p/w500${data.poster_path}`;
    imagen.alt = data.title;
    link_title.href = `https://www.themoviedb.org/movie/${data.id}`; // Establecer el href del enlace
    link_title.textContent = data.title; // Asignar el texto del enlace
    card_text.innerHTML = `
        <strong>Año:</strong> ${data.release_date} <br>
        <strong>Reseñas:</strong> ${data.overview}`;

    //?APPENDEO LOS ELEMENTOS PARA DARLE FORMA
    // card_title.appendChild(link_title);
    card_body.appendChild(link_title);
    card_body.appendChild(card_text);

    col1.appendChild(imagen);
    col2.appendChild(card_body);

    fila.appendChild(col1);
    fila.appendChild(col2);

    card.appendChild(fila);

    //?AGREGO LAS TARJETAS AL CONTENEDOR
    contenedor_tarjetas.appendChild(card);
}


function datos_estrenos (datos) {
    datos.results.forEach(dato => objeto_a_tarjeta(dato));
};

module.exports = {
    datos_estrenos,
    apiUrl_tmdb
}
