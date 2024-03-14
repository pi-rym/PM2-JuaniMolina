const  movieServices  = require('../services/movieServices')

const movieController = async (req, res)=>{
    try {
        const movies = await movieServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = movieController;