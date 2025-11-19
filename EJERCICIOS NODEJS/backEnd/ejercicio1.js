const http = require("http");
const { usuarios } = require("./mockedData");

const server = http.createServer((req, res) => {
  // Para permitir conexiones entre localhost del front y del back evitando restriccion Cors
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Responder a las peticiones OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido a mi primer servidor");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Acerca de mí: Nombre del alumno");
  } else if (req.method === "GET" && req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Puedes contactar en: alumno@example.com");
    // Ruta para testear Ejercicio 2 y 4
  } else if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const data = {
      nombre: "Alejandro",
      edad: 45,
      curso: "NodeJS",
    };
    res.end(
      JSON.stringify({
        status: res.statusCode,
        data,
      })
    );
    // Ruta para testear Ejercicio 3
  } else if (req.method === "GET" && req.url === "/hora") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const ahora = new Date().toISOString();
    res.end(`Hora actual: ${ahora}`);
    // Ruta para testear Ejercicio 5
  } else if (req.method === "POST" && req.url === "/login") {
    
    // Hay que ahcer esto por que el body llega como stream(trozos datos)
    // Lo capturamos así
    
    let body = "";

    req.on("data", (info) => {
      body += info.toString();
    });

    req.on("end", () => {
      const { email, pass } = JSON.parse(body);

      const usuario = usuarios.find(
        (u) => u.email === email && u.pass === pass
      );

      // Usuario no encontrado
      if (!usuario) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            status: "Failed",
            message: "Email o contraseña incorrectos",
          })
        );
      }

      // Usuario encontrado pero sin permisos
      if (usuario.role !== "admin") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            status: "Failed",
            message: "El usuario no tiene privilegios",
          })
        );
      }

      // Usuario admin encontrado (OK)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "Success", userData: usuario }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
