const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.end ('Hola, NodeJS esta funcionando cpn GET');
    }
    else if (req.method === 'POST' && req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.end ('Hola, NodeJS esta funcionando cpn POST');
    }
    else if (req.method === 'GET' && req.url === '/info') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        const data = {
            nombre: 'Alejandro',
            edad: 45,
            curso: 'NodeJS',
            year: 2025,
        }

        res.end (JSON.stringify(data));
        
    }
    else {
        res.writeHead(404, {'Content-type': "text/plain"});
        res.end('No se ha encontrado la ruta')
    }
});

server.listen(3000, ()=> {
    console.log('Servidor escuchando y tal');
});