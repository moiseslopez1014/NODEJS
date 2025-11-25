// Estas dos lineas siempre
const express = require("express");
const { getAllMovies, getMovieById, insertNewMovie, searchMovieByName } = require("../controllers/movieController");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies);

router.get("/:idMovie", getMovieById);

router.get("/search/:movieName", searchMovieByName);

router.post("/", insertNewMovie);



// Esta linea siempre
module.exports = router