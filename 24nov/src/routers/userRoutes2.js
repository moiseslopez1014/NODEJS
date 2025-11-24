const express = require("express");
const { createNewUser } = require("../controllers/userControllers2");
const router = express.Router();

router.post("/", createNewUser);


module.exports = router;