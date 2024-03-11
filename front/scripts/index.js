const {obtener_datos, api_url} = require('./datos');
const {datos_estrenos, apiUrl_tmdb} = require('./estrenos');
const axios = require('axios');


// ? Función GET de AJAX para obtener datos de la API de alumnos
// $.get(api_url, obtener_datos);

//?CONEXION MEDIANTE GET CON LA API DE TMDB.
// $.get(apiUrl_tmdb, datos_estrenos);


//? OBTENCION DE DATOS ATRAVEZ DE AXIOS CON ASYNC/AWAIT.
const fetchPeliculas = async () =>{
    try {
        const datos = await axios.get(api_url); // !
        obtener_datos(datos.data);
        console.log(datos.data);
    
    } catch (error) {
    }
};

const fetchEstrenos = async ()=> {
    try {
        const estrenos = await axios.get(apiUrl_tmdb);
        datos_estrenos(estrenos.data);
    } catch (error) {
        
    }
}


fetchPeliculas();

fetchEstrenos();
