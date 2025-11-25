const bcrypt = require("bcrypt")
const userModel = require("../models/userModel")

const BCRYPT_ROUNDS= Number(process.env.BCRYPT_ROUNDS || 10);

const signup = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const newUser = {
      name,
      lastName,
      email,
      password: await bcrypt.hash(password, BCRYPT_ROUNDS),
    };
    const user = await userModel.create(newUser);
    if (!user) return res.status(400).send({status: "Failed", message: "No se ha podido crear el usuario"});
    res.status(200).send({status: "Success", message: "Se ha podido crear el usuario correctamente"})
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    res.send("perfecto")
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { signup, login };
