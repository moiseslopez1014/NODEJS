// Estas dos lineas siempre
const express = require("express");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
const {
  getAllUsers,
  getUserById,
  insertNewUser,
  deleteUserById,
  editUserById,
  addFavoriteMovie
} = require("../controllers/userController");

// Ruta para obtener todos los usuarios
router.get("/", getAllUsers);
// Ruta para obtener usuario por id
router.get("/:idUser", getUserById);
// Ruta para crear usuario
router.post("/", insertNewUser);
// Ruta para editar un usuario
router.patch("/edit/:idUser", editUserById)
// Ruta para eliminar un usuario
router.delete("/delete/:idUser", deleteUserById);

//ruta para anadir una peli favorita
router.patch("/:idUser/favorites/:idMovie", addFavoriteMovie);

// Esta linea siempre.Exportamos el router
module.exports = router;
