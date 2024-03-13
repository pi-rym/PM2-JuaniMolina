const  movieServices  = require('../services/movieServices')

const movieController = async (req, res)=>{
    try {
        const movies = await movieServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({error: "Error del servidor"})
    }
}

module.exports = movieController;