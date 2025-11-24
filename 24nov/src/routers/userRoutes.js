const express = require("express");
const { getAllUsers, getUserByID, insertNewUser } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getAllUsers)
router.get("/:idUser", getUserByID);

//ruta para crear usuario
router.post("/", insertNewUser)

module.exports = router;