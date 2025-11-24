const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        minlength: [3, "Minimo 3 caracteres"],
        maxlength: 30
    },
    lastName: {
        type: String,
        required: [true, "El apellido es obligatorio"],
        minlength: [3, "Minimo 3 caracteres"],
        maxlength: 30
    },
    email: {
        type: String,
        required: [true, "Email requerido"],
        unique: [true, "Email ya existente"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password obligatorio"]
    },
    role: {
        type: String,
        enum: ['user', "admin"],
        default: "user"
    }
});

const userModel = mongoose.model("Users", userSchema, "user");

module.exports = userModel;