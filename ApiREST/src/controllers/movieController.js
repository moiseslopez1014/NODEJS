const movieModel = require("../models/movieModel");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    if (movies.length === 0)
      return res.status(200).send("No hay peliculas que mostrar");
    res.status(200).send({ status: "Success", data: movies });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { idMovie } = req.params;
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("No existe pelicula con ese id");
    res.status(200).send({ status: "Success", data: movie });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const insertNewMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      director,
      rating,
      posterURL,
      trailerURL,
      year,
    } = req.body;
    if (
      !title ||
      !description ||
      !category ||
      !director ||
      !rating ||
      !posterURL ||
      !trailerURL ||
      !year
    )
      return res.status(400).send("Falta algun parametro obligatorio");

    const newMovie = {
      title,
      description,
      category,
      director,
      rating,
      posterURL,
      trailerURL,
      year,
    };

    const insertMovie = await movieModel.create(newMovie);
    if (!insertMovie) {
      return res
        .status(400)
        .send({ status: "Failed", message: "No se ha podido crear la peli" });
    }
    res.status(200).send({ status: "Success", data: newMovie });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const searchMovieByName = async (req, res) => {
  try {
    const { movieName } = req.params;
    const movies = await movieModel.find({
      title: { $regex: movieName, $options: "i" }, //que no distinga mayus
    });
    if (movies.length === 0)
      return res.status(200).send("no se encontraron peliculas");
    res.status(200).send({ status: "Success", data: movies });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};


const setCommentToMovie = async (req, res) => {
  try {
    const { idMovie } = req.params;
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("No existe pelicula con ese id");
    //rescato el comentario que vendra enviado en el body
    const { comment } = req.body;
    //si he llegado aqui, si o si  tiene que esta pyload dentro del req, sino verifytoken hubiese fallado
    const idUser = req.payload._id;
    //me construyo 

    const commentObject = {
      userId: idUser,
      comment: comment
    }
    movie.comments.push(commentObject);
    movie.save();
    res.status(200).send({
      status: "Success",
      data: movie
    });


  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
}


const removeCommentToMovie = async (req, res) => {
  try {
    const { idMovie, idComment } = req.params;
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("no existe pelicula")
      const comment = movie.comments.id(idComment);
    if (!comment) return res.status(200).send("no existe comentario")
      comment.deleteOne();
    movie.save();

    res.status(200).send({
      status: "Success",
      data: movie
    });

  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });

  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  insertNewMovie,
  searchMovieByName,
  setCommentToMovie,
  removeCommentToMovie
};
