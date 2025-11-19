// EJERCICIO 1:
//   Crea un servidor HTTP que tenga estas rutas:

//   - GET /
//     Respuesta: "Bienvenido a mi primer servidor"

//   - GET /about
//     Respuesta: "Acerca de mí: (nombre del alumno)"

//   - GET /contact
//     Respuesta: "Puedes contactar en: (email ficticio)"

// EJERCICIO 2:
//   Modifica el servidor para que devuelva JSON en la ruta /info:
//
//   - GET /info
//     Respuesta (JSON):
//       {
//         curso: "Node.js",
//         alumno: "Nombre del alumno",
//         año: 2025
//       }

// EJERCICIO 3:
//   Crea una ruta /hora que devuelva la hora actual del sistema.
// Nota: const ahora = new Date().toISOString();

// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
// res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
// res.setHeader("Access-Control-Allow-Methods", "GET,POST");
// res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// EJERCICIO 5:
// Ampliar ejercicio antrerior, con las siguiente modificaciones:
// FRONT:
// Hacer peticion a una ruta http://localhost:3000/login, pasandole un email y una contraseña que se recoja de dos campos input de un formulario.
// Estos campos iran dentro del body a la hora de enviar la peticion fetch

// BACK:
// Tener un array de objetos de usuario, con el formato: user = {name, email, pass, role} donde role puede ser "admin" o "user"
// En la ruta para recibir la peticion del back, deberemos comporbar si existe un usuario que coincida
// su email, pass y role. 
// De ser asi, devolvemos ese usuario y lo mostramos por consola
// Sino, dos opciones:
//      Si coincide usuario y contraseña, devolver mensaje de no tiene privilegios
//      Si no coinciden, devolver mensaje de email o contraseña invalidos.