//inicializamos express y cors(*)
const express = require("express");
const cors = require("cors");
const movies = require("./mocked");

//creamos aplicacion con express (app como servidor que creamos)(*)
const app = express();
//middleware para que analize las solicitudes deJSON (*)
app.use(express.json());

//CORS INSTALL npm i cors

app.use(
    cors({
        origin: "http://localhost:5173"
}))

//rutas
//endpoint principal o raiz

    let peliculasmodificadas = [...movies]

//1
app.get('/movies', (req, res) => {
    if(!movies) {
        res.status(204).send('No hay peliculas que mostrar');
    }
    else {
        res.status(200).send(JSON.stringify(movies));
    }
})


//2

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const foundMovie = movies.find((m) => 
        m.id === Number(id));

    if (!foundMovie) {
        res.status(404).send('pelicula no encontrada');
    }
    else {
        res.status(200).send(JSON.stringify(foundMovie));
    }
});

//3

app.post('/movies', (req,res) => {
    const pelirecibida = req.body;
    if (!pelirecibida || !pelirecibida.titulo || !pelirecibida.descripcion || !pelirecibida.anio || !pelirecibida.valoracion ) {
        res.status(400).send('No se envio una pelicula o no tiene el formato requerido');
    }
    else {
        // mejor un max
        const nuevoID = (movies[movies.length -1].id) + 1;
        pelirecibida.id = nuevoID;
        movies.push(pelirecibida);
        res.status(201).send(movies);
    }
})

//4

app.put('/movies/:id', (req,res) => {
    const { id } = req.params;
    const pelinueva = req.body;
    let peliencontrada = movies.find((p) => 
        p.id === Number(id)
    )
    /*

    const movieIndex = movies.findIndex((m) => m.id === id);
    if (movieIndex === -1){
        return res.status(404).send('no se ha encontrado pelicula');
    }
    movies[movieIndex] = pelinueva;

    */

    if (!peliencontrada) {
        res.status(404).send('No se ha encontrado la pelicula')
    }
    else if (!pelinueva.titulo || !pelinueva.descripcion || !pelinueva.anio || !pelinueva.valoracion || !pelinueva.poster_img) {
        res.status(400).send('Se ha enviado una peli sin los campos requeridos')
    }
    else {
        pelinueva.id = Number(id);
        peliculasmodificadas = movies.filter((m) => m.id !== Number(id));
        peliculasmodificadas.push(pelinueva);
        res.status(200).send(peliculasmodificadas)
    }
})

//5 

app.patch('/movies/:id/rating', (req,res) => {
    const { id } = req.params;
    const  rating  = req.body;
    console.log(rating);

    const movieIndex = movies.findIndex((m) => m.id === id);
    if (movieIndex === -1){
        return res.status(404).send('no se ha encontrado pelicula');
    }
    else if (!rating) {
        res.send('no hay campo de valoracion')
    }
    else {
        movies[movieIndex].valoracion = rating.value;
        res.send(JSON.stringify(movies))
    }

})


app.delete('/movies/:idMovie', (req, res) => {
    const { idMovie } =req.params;

    const movieIndex = movies.findIndex((m) => m.id === Number(idMovie));
    if (movieIndex === -1) {
        return res.status(404).send('pelicula no encontrada');
    }

    const movieDeleted = movies.splice(movieIndex, 1)[0];
    res.status(200).send(JSON.stringify({
        message: 'Pelicula borrada correctamente',
        movieDeleted
    }))
})



//puerto para usar(*)
const PORT = 3000;

//lanzo el server escuchando en ese puerto(*)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} y tal...`);
});
