Configura CORS para permitir peticiones desde tu frontend en http://localhost:5173.
 
Asegúrate de tener express.json() para leer el body en JSON.
 
## Ejercicio 1 – GET /movies
 
Crea un endpoint que devuelva todas las películas del array bbddMocked.
 
Si existe -> Respuesta: listado completo en JSON.
Si no existe -> Respuesta: Mensaje comunicancdo que no hay peliculas para listar
 
## Ejercicio 2 – GET /movies/:id
 
Crea un endpoint que devuelva una película concreta por id.
 
Si existe → devolver la película.
Si no existe → status 404 y mensaje "Película no encontrada".
 
## Ejercicio 3 – POST /movies
 
Crea un endpoint para añadir una película nueva al array.
 
Body (JSON): titulo, descripcion, anio, valoracion, poster_img.
Se debe verificar en el backEnd que todos los campos llegan.
 
El servidor generará un id nuevo (incremental).
 
Si ok -> Respuesta: la película creada con su id.
 
## Ejercicio 4 – PUT /movies/:id
 
Crea un endpoint para reemplazar completamente una película.
 
Comprobacion en el backend -> Body debe contener todos los campos (titulo, descripcion, anio, valoracion, poster_img).
 
Si la película no existe → Status 404 y mensaje de error.
Si se reemplaza ok -> Respuesta: película actualizada.
 
## Ejercicio 5 – PATCH /movies/:id/rating
 
Crea un endpoint para actualizar solo la valoración (valoracion) de una película.
 
Body (JSON): { "valoracion": 9.5 }
 
Si la película no existe → Status 404 y mensaje de error.
Si ok -> Respuesta: película con la nueva valoración.
 
## Ejercicio 6 – DELETE /movies/:id
 
Crea un endpoint para borrar una película.
 
Si existe → borrarla y devolver mensaje de éxito.
Si no existe → Status 404 y mensaje de error.