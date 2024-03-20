const { Router } = require("express");
const  {getAllMovies, createMovie}  = require("../controllers/movieController")
const validarDatosMovie = require("../middleware/validacionPostMovie")

const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.post("/", validarDatosMovie ,createMovie);

module.exports = movieRouter;