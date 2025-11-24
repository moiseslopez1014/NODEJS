const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length === 0 ) return res.status(200).send("No hay usuarios");
        res.status(200).send({status: "Success", data: users})
    } catch (error) {
        res.status(500).send({status: "Failed", error: error.message})
    }
}

const getUserByID = (req, res) => {
    const {idUser} = req.params;
    res.status(200).send(`Hola al IDUSER: ${idUser}`)
}

const insertNewUser = (req, res) => {
   const newUser = req.body;
   console.log(newUser);
   res.status(200).send(JSON.stringify(newUser));
}

module.exports = { getAllUsers, getUserByID, insertNewUser }