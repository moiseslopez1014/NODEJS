// EJERCICIO 9:
//   Crear una ruta GET /productos que reciba query params:
//     - categoria
//     - precio_max
//   y devuelva un texto:
//     "Buscando productos de la categoría X con precio máximo Y"
 
// EJERCICIO 10:
//   Crear un array en memoria de películas y exponer:
//
//   - GET /movies
//     Devuelve todas las películas.
//
//   - GET /movies/:id
//     Devuelve una película por id (id puede ser un número).
 
// EJERCICIO 11:
//   Crear una ruta POST /movies que reciba una película en req.body
//   y la añada al array.



// EJERCICIO 12 - COMPLETO - ENDPOINT /orders
 
/*
 
Crea un endpoint en tu servidor Express que reciba información
sobre un "pedido" (order) usando LOS 4 TIPOS DE PARÁMETROS:
 
1) Route Params (params):
   - userId: id del usuario que hace el pedido
   - productId: id del producto
 
   Ruta:  POST /orders/:userId/products/:productId
 
2) Query Params:
   - status: estado inicial del pedido (por defecto "pending")
   - priority: prioridad del pedido (por ejemplo "low", "normal", "high")
 
   Ejemplo de URL:
   POST http://localhost:3000/orders/123/products/999?status=pending&priority=high
 
3) Body Params (JSON):
   - quantity: número de unidades del producto
   - address: dirección de envío
 
   Ejemplo de body (JSON):
   {
     "quantity": 3,
     "address": "Calle Falsa 123, Madrid"
   }
 
4) Header Params:
   - auth-token: token de autenticación ficticio
   - client-id: id del cliente que hace la request
 
   Ejemplo de headers:
   auth-token: 123abc456
   client-id: web-app-01
 
REQUISITOS DEL ENDPOINT:
 
- Debe ser un POST en la ruta:
    /orders/:userId/products/:productId
 
- Debe:
  a) Leer correctamente:
     - req.params.userId y req.params.productId
     - req.query.status y req.query.priority
     - req.body.quantity y req.body.address
     - req.headers["auth-token"] y req.headers["client-id"]
 
  b) Hacer console.log de todos los parámetros (bien formateados).
 
  c) Responder con un JSON que incluya TODOS los datos recibidos,
     algo como:
 
     {
       "message": "Pedido recibido correctamente",
       "routeParams": {...},
       "queryParams": {...},
       "bodyParams": {...},
       "headerParams": {...}
     }
 
- Si falta algún dato importante (por ejemplo quantity o address),
  devolver un status 400 y un mensaje de error adecuado.
*/
 
 