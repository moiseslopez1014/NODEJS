const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "El titulo es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "descripcion necesaria"]
    },
    category: {
        type: String,
        required: [true, "categoria necesaria"]
    },
    director: {
        type: String,
        required: [true, "director necesario"]
    },
    rating: {
        type: String,
        required: [true, "rating necesario"]
    },
    posterURL: {
        type: String,
        required: [true, "poster necesario"]
    },
    trailerURL: {
        type: String,
        required: [true, "trailer necesario"]
    },
    year: {
        type: String,
        required: [true, "year necesario"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const movieModel = mongoose.model("Movie", movieSchema, "movies");

module.exports = movieModel;
