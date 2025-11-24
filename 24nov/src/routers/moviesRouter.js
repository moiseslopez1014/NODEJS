const express = require("express");
const { getAllMovies } = require("../controllers/movieControllers");
const router = express.Router();

router.get("/", getAllMovies);

module.exports = router;