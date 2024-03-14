const axios = require('axios')
require("dotenv").config();
const{ BASE_URL } = process.env;


class Movie {
    constructor({title, year, director, duration, genre, rate, poster}){
        if(!title || !year || !poster){
            throw new Error("Falta llenar campos");
        }
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
            const { data } = await axios(BASE_URL);
            const movies = data.map((movie)=> new Movie(movie));
            console.log(data);
            return movies
        
        }catch (error){
            throw new Error(error);
        }
    }
}

