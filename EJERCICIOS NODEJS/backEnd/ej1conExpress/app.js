// Inicializamos express(*)
const express = require("express");

//Creamos aplicacion con express ( app como servidor que creamos)(*)
const app = express();

// Middleware para que analize JSON de las solicitudes(*)
app.use(express.json());

// RUTAS
// EndPoint principal o raiz
app.get("/renta",(req, res) => {
    res.send("Hola, mundo")
})

// EndPoint de about
app.get("/about", (req, res) => {
    res.send("Acerca de mí: Nombre del alumno")
})

// EndPoint de contact
app.get("/contact", (req, res) => {
    res.send("Puedes contactar en: alumno@example.com")
})

// EndPoint de info
app.get("/info", (req, res) => {
    const dataUser = {
      nombre: "Alejandro",
      edad: 45,
      curso: "NodeJS",
    };
    res.send(JSON.stringify({
        status: "Success",
        data: dataUser
    }))
})

// EndPoint de hora
app.get("/hora", (req,res) => {
    const ahora = new Date().toISOString();
    res.send(`Hora actual: ${ahora}`)
})

// Puerto a usar en mi server(*)
const PORT = 3000;

// Aqui es donde lanzo el server escuchando en ese puerto(*)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})