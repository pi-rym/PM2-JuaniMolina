const { Router } = require("express");
const  {getAllMovies, createMovie}  = require("../controllers/movieController")

const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.post("/", createMovie);

module.exports = movieRouter;