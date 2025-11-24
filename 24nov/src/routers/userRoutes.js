const express = require("express");
const { getAllUsers, getUserByID, insertNewUser, removeUserByID, editUserByID } = require("../controllers/userControllers");
const router = express.Router();

router.get("/", getAllUsers)
router.get("/:idUser", getUserByID);

//ruta para crear usuario
router.post("/", insertNewUser);

router.patch("/edit/:idUser", editUserByID)

router.delete("/:idUser", removeUserByID);

module.exports = router;