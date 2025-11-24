const mongoose = require("mongoose");

const connectToDataBase = async () => {

    try {
        const URL_MONGO = process.env.URL_MONGO;
        await mongoose.connect(URL_MONGO);
        console.log("Conexion a la DB exitosa");
        
    } catch (error) {
        console.log("Error al conectar a la DB: ", error);
    }
};

module.exports = connectToDataBase;