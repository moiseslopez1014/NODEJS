const getAllMovies = (req, res) => {
    res.status(200).send("Aqui estan todas la peliculas")
}


module.exports = { getAllMovies }