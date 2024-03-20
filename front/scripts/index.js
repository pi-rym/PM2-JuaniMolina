const {obtener_datos, api_url} = require('./datos');
const {datos_estrenos, apiUrl_tmdb} = require('./estrenos');
const axios = require('axios');


const fetchPeliculas = async () =>{
    try {
        const datos = await axios.get(api_url); 
        obtener_datos(datos.data);
    
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

