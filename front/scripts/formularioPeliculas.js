const axios = require('axios')
const { api_url } = require("./datos")

const limpiar = document.getElementById("limpiar");
const enviar = document.getElementById("enviar");
const reset = () => {
    document.getElementById("form_peliculas").reset();
}

//? LIMPIAR FORMULARIO
limpiar.addEventListener("click", reset);


const render_genero =  () =>{
    const generos = ['Action', 
        'Adventure',
        'Comedy',
        'Drama',
        'Horror',
        'Sci-Fi',
        'Fantasy',
        'Romance',
        'Thriller',
        'Mystery',
        'Crime',
        'Suspense',
        'Animation',
        'Documentary',
        'Musical',
        'Western',
        'Historical',
        'Biographical',
        'War',
        'Sports'];

        const genero = document.getElementById('genero');
        genero.innerHTML = generos.map(genero => {
            return `<div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="${genero}" name="genre" value="${genero}">
            <label class="form-check-label" for="${genero}">
            ${genero}
                    </label>
                    </div>`
                }).join('');
}

render_genero();


function validacionMovie({title, year, director, duration, genre, rate,  poster}){
    if (!title || !year || !director || !duration || !genre.length || !rate || !poster) {
        alert("Faltan Datos.Por favor, completa todos los campos.");
        return false;
    };

    const añoActual = new Date().getFullYear();
    if (isNaN(year) || year.length !== 4 || (year) > añoActual) {
        alert("Por favor, ingresa un año válido (No puede ser mayor al año actual!).");
        return false;
    };

    if (isNaN(rate) || rate < 0 || rate > 10) {
        alert("Por favor, ingresa una puntuación válida (entre 0 y 10).");
        return false;
    };

    return true;
};

const postMovie = async(nuevaPelicula)=>{
    try {
        const respuesta = await axios.post(api_url, nuevaPelicula);
        console.log(respuesta.data);
        alert("Pelicula Agregada")
        window.location.href = "../index.html"
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
}

//? ENVIAR FORMULARIO
const capturarValores = (event)=>{
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genero = document.getElementsByName("genre");
    const rate = document.getElementById("score").value;
    const poster = document.getElementById("imagen").value;
    const genre = [];
    
    for(let i = 0; i < genero.length; i++){
        if(genero[i].checked){
            genre.push(genero[i].value);
        }
    };
    const nuevaPelicula = {title, year, director, duration, genre, rate,  poster};
    
    if(!validacionMovie(nuevaPelicula)){
        return
    }

    postMovie(nuevaPelicula);
    reset();

}

enviar.addEventListener("click", capturarValores);
