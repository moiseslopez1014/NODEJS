// Estas dos lineas siempre
const express = require("express");
const { getAllMovies } = require("../controllers/movieController");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies)

// Esta linea siempre
module.exports = router