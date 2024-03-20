const  movieServices  = require('../services/movieServices')

const getAllMovies = async (req, res)=>{
    try {
        const movies = await movieServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const createMovie = async (req, res) =>{
    try {
        await movieServices.createMovieService(req.body);

        res.status(201).json({message: "Pelicula Creada Exitosamente"})
    } catch (error) {
        res.status(400).jason({error:error.message})
    }
}

module.exports = { 
    getAllMovies, 
    createMovie
};