// Estas dos lineas siempre
const express = require("express");
const {
  getAllMovies,
  getMovieById,
  insertNewMovie,
  searchMovieByName,
  setCommentToMovie,
  removeCommentToMovie,
} = require("../controllers/movieController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies);

router.get("/:idMovie", getMovieById);

router.get("/search/:movieName", searchMovieByName);

router.post("/", insertNewMovie);

router.post("/comments/:idMovie", verifyToken, setCommentToMovie);

router.delete("/:idMovie/comments/:idComment", verifyToken, removeCommentToMovie)



// Esta linea siempre
module.exports = router;
