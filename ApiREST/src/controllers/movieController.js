//const movieModel = require("../models/movieModel")

const getAllMovies = async (req, res) => {
    res.status(200).send({status: "Success", message: "Peliculas obtenidas correctamente."})
}

module.exports = { getAllMovies }