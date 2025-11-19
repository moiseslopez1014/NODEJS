[12:07 PM] Aula 1 |  CODE SPACE
// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  // res.setHeader("Access-Control-Allow-Methods", "GET");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
 

 

 / EJERCICIO 5:
/* A,pliar ejercicio antrerior, con als siguiente omdificaciones:
FRONT:
Hacer peticiona una ruta http://localhost:3000/login, pasandole un email y una contraseña que se recoja de dos campos input de un formulario.
Estos campos iran dentro del body a la hora de enviar la peticion fetch
 
BACK:
Tener un array de obejtos de usuario, con el formato: user = {name, email, pass, role} donde role puede xer o "admin" o "user"
En la ruta para recibir la peticion del back, deberemos comporbar si existe un usuario que coincida
su email passweord y role.
De ser asi, devolvemos ese usuario y lo mostramos por consola
Sino, dos opciones:
Si coincide usuario y contraseña, devolver mensaje de no tiene privilegios
Si no coinciden, devolver mensaje de email o contraseña invalidos.
 
*/