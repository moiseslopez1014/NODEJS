//inicializamos express y cors(*)
const express = require("express");
const cors = require("cors");
const { usuarios } = require("./mockedData");
const { pelis } = require("./mockedPelis");


//creamos aplicacion con express (app como servidor que creamos)(*)
const app = express();
//middleware para que analize las solicitudes deJSON (*)
app.use(express.json());

//CORS INSTALL npm i cors

app.use(
    cors({
        origin: "http://localhost:5173",
        methods:["GET", "POST", 'PATCH', "OPTIONS"],
        allowedHeaders:["Content-Type"],
}))

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
    console.log(email, pass);

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

//se ponen:
//1 Route params
//2 Query params
//3 headers
//4 body


// Ejercicio 9

app.get('/productos', (req, res) => {
    const {categoria, precio_max} = req.query;
    res.send("Buscando productos de la categoría X con precio máximo Y");
})

//ejercicio 10

app.get('/movies/', (req, res) => {
    res.send(pelis)
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    const pelicula = pelis.find((p) => 
        p.id === Number(id)
    );
    res.send(pelicula);
})

// 11

app.post ('/movies', (req, res) => {
    const recibepeli = req.body;
    const pelincontrada = pelis.find((p) => p.id === recibepeli.id);
    if (!pelincontrada) {
        pelis.push(recibepeli);
        console.log(pelis);
        res.send('pelicula insertada correctamente')
    }
    else {
        console.log('ya existe id peli');
        res.send('Pelicula no insertada porque ya existia id');
    }
    
})

app.post('/orders/:userId/products/:productId', (req, res) => {
    //1
    const {userId, productId} = req.params;
    //2
    const {status, priority} = req.query;
    //3
    const {quantity, address} = req.body;
    //4
    const {auth_token, client_id} = req.headers;

    if(!quantity || !address) {
        return res.status(400).send('faltan campos obligatorios del body')
    }
    if (!auth_token || !client_id) {
        return res.status(400).send('faltan campos obligatorios del header')
    }
    
    console.log('parametros recibidos: \n');
    console.log('route params');
    console.log(userId);
    console.log(productId);
    console.log('query params');
    console.log(status);
    console.log(priority);
    console.log('body');
    console.log(quantity);
    console.log(address);
    console.log('headers');
    console.log(auth_token);
    console.log(client_id);
    


    const response = {
       "message": "Pedido recibido correctamente",
       "routeParams": {userId, productId},
       "queryParams": {status, priority},
       "bodyParams": {quantity, address},
       "headerParams": {auth_token, client_id}
     };
    res.send(JSON.stringify(response))
})


//ejemplo de endpoint bastante comun
app.patch('/users/:idUser', (req, res) => {

    const { idUser } = req.params;
    const { lastName, email } = req.body;

    /*const userModified = db.usuarios.updateOne({
        id: idUser
    },
{
    lastname: lastName,
    email: email
})*/



    res.send('Bro')

})

//otro comun que comina body y headers
//datos a actualizar en body y autentificacion en header con un token






//puerto para usar(*)
const PORT = 3000;

//lanzo el server escuchando en ese puerto(*)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} y tal...`);
});

