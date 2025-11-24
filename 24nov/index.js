require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDataBase = require("./src/db/connectDB");
const userRouter = require("./src/routers/userRoutes");
const movieRouter = require("./src/routers/moviesRouter")

//puerto para usar(*)
const PORT = Number(process.env.PORT) || 3000; // || 3000 como buena practica para usar un puerto por defecto

//creamos aplicacion con express (server como servidor que creamos)(*)
const server = express();
//middleware para que analize las solicitudes deJSON (*)
server.use(express.json());

connectToDataBase();

//CORS INSTALL npm i cors

server.use(
    cors({
        origin: "http://localhost:5173",
        allowedHeaders:["Content-Type"]
}))


//rutas
//endpoint principal o raiz
server.get('/', (req, res) => {
    res.send('Hola, papo')
})
//router for user
server.use("/api/users", userRouter);

//router for movies
server.use("/api/movies", movieRouter);



//lanzo el server escuchando en ese puerto(*)
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} y tal...`);
});

