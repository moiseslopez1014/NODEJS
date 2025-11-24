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

const getUserByID = async (req, res) => {
    try {
        const {idUser} = req.params;
        const user = await userModel.findById(idUser);
        if(!user) return res.status(200).send("No existe usuario");
        res.status(200).send({status: "Success", data: user})
    } catch (error) {
        res.status(500).send({status: "Failed", error})
    }
}

const insertNewUser = async (req, res) => {
    try {
       const { name, lastName, email, password } = req.body;
        if(!name || !lastName || !email || !password) {
            return res.status(400).send({status: "Failed", message: "Falta algun campo obligatorio"});
        }
        const newUser = {name, lastName, email, password};
        const user = await userModel.create(newUser);
        if(!user) {
            return res.status(400).send({status: "Failed", message: "Falta algun campo obligatorio"});
        }
        res.status(200).send({status: "Success", message: "El usuario se ha creado correctamente: ", user})
   } catch (error) {
        res.status(500).send({status: "Failed", error: error.message})
   }
}


const removeUserByID = async (req, res) => {
    const {idUser} = req.params;
    try {
        const user = await userModel.findByIdAndDelete(idUser);
        if (!user) return res.status(200).send("No existe usuario")
        res.status(200).send({status: "Success", data: "El usuario se ha eliminado correctamente: ", user});

    } catch (error) {
        res.status(500).send({status: "Failed", error: error.message})
    }
}

const editUserByID = async (req, res) => {
    try {
        const {idUser} = req.params;

        const newUser = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(idUser, newUser, {
            new:true,
            runValidators: true
        })
        res.status(200).send({status: "success", data: updatedUser})
    } catch (error) {
        
    }
}

module.exports = { getAllUsers, getUserByID, insertNewUser, removeUserByID, editUserByID }