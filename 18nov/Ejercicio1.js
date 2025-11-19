const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.end ('Bienvenido a mi primer servidor');
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.end ('Acerca de mi: Moises Lopez Iglesias');
    }
    else if (req.method === 'GET' && req.url === '/contact') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        res.end ('Puedes contactar en: moizeeeee@gmail.com');
    }
    else if (req.method === 'GET' && req.url === '/info') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        const data = {
            curso: 'Node.js',
            almuno: 'Moises',
            año: 2025
        }
        res.end (JSON.stringify(data));
    }
    else if (req.method === 'GET' && req.url === '/hora') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        const ahora = new Date().toISOString();
        res.end (ahora);
    }
    else if (req.method === 'GET' && req.url === '/random') {
        res.writeHead(200, { 'Content-type': 'text/plain'});
        const random = Math.random().toISOString();
        res.end (random);
    }
    else {
        res.writeHead(404, {'Content-type': "text/plain"});
        res.end('No se ha encontrado la ruta')
    }
});

server.listen(3000, ()=> {
    console.log('Servidor escuchando en tal');
});