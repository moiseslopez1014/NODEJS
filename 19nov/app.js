//inicializamos express(*)
const usuarios = require('./mockedData.js')
const express = require("express");


//creamos aplicacion con express (app como servidor que creamos)(*)
const app = express();
//middleware para que analize las solicitudes deJSON (*)
app.use(express.json());

//rutas
//endpoint principal o raiz
app.get('/', (req, res) => {
    res.send('Hola, papo')
})

app.get('/about', (req, res) => {
    res.send(JSON.stringify('Acerca de como hago lo que me sale del papo'))
});

app.get('/contact', (req, res) => {
    res.send('Contacte a su puta madre para recibir dos collejones')
})

app.get('/info', (req, res) => {
    const dataUser = {
        nombre: 'Moises',
        edad: 34,
        curso: 'NodeJS'
    }
    res.send(JSON.stringify({
        status: 'success',
        data: dataUser
    }))
});

app.post('/login', (req, res) => {
    // obtengo email y pass desde mi front
    const {email, pass} = req.body;

    //busco dentro de mi array de usuarios si encuentro el que me ha llegado
    const usuario = usuarios.find(
        (u) => u.email === email && u.pass === pass
    );

    //si no se encuentra
    if(!usuario) {
        return res.status(200).json({
            status: 'Failed',
            message: 'email o contraseña incorrectos',
        });
    }
    //si no es admin
    if (usuario.role !== 'admin') {
        return res.status(200).json({
            status: 'Failed',
            message: 'El usuario no tiene privilegios',
        });
    }
    res.status(200).json({
        status: 'Success',
        userData: usuario
    })

})

app.get('/hora', (req, res) => {
    const ahora = new Date().toISOString();
    res.send(ahora)
})

//puerto para usar(*)
const PORT = 3000;

//lanzo el server escuchando en ese puerto(*)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} y tal...`);
});

