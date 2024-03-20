require("dotenv").config();
const{ BASE_URL } = process.env;
const Movie_model = require("../models/Movie");


class Movie {
    constructor({id, title, year, director, duration, genre, rate, poster}){
        if(!title || !year || !poster){
            throw new Error("Falta llenar campos");
        }
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports ={
    getMovies: async ()=>{
        try{
            const moviesdb = await Movie_model.find();
            return moviesdb
        
        }catch (error){
            throw new Error(error);
        }
    },

    createMovieService: async (movie)=>{
        try {
            const newMovie = await Movie_model.create(movie);
            console.log("LLEGUE AL SERVICE");
            return newMovie;
        } catch (error) {
            throw Error(error.message);
        }
    }
}


