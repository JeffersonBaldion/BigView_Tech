Introducción
Este proyecto consiste en el desarrollo de un E-commerce (tienda en línea) junto con una API REST para gestionar las operaciones relacionadas con usuarios, productos y carritos de compra. La API REST está diseñada para recibir y procesar las solicitudes relacionadas con estos elementos, permitiendo así la interacción fluida entre el cliente y el servidor.

A continuación, se detallan los pasos para ejecutar el proyecto localmente y utilizar la API REST para gestionar las operaciones mencionadas.

Endpoints para /user
Obtener todos los usuarios
Método: GET
Ruta: /
Función: getAllUser
Obtener un usuario por ID
Método: GET
Ruta: /:id
Función: getUserById
Obtener un usuario por email
Método: POST
Ruta: /getUser
Función: getUserByEmail
Crear un nuevo usuario
Método: POST
Ruta: /newUser
Función: postUser
Actualizar un usuario por ID
Método: PUT
Ruta: /:id
Función: updateUser
Eliminar un usuario por ID
Método: DELETE
Ruta: /:id
Función: deleteUser

Endpoints para /cart
Obtener un carrito por ID
Método: GET
Ruta: /:id
Función: getCartById
Actualizar un carrito por ID
Método: PUT
Ruta: /:id
Función: updateCart

Endpoint para /product
Obtener todos los productos
Método: GET
Ruta: /
Función: getAllProduct

Sección Frontend
El frontend de la aplicación consta de varias secciones importantes:

Login
Descripción: Página de inicio de sesión para los usuarios.
Ruta: /
Landing Page
Descripción: Página de inicio de la aplicación que presenta información general y atractiva sobre la misma.
Ruta: /home
Catálogo
Descripción: Página que muestra todos los productos disponibles para la venta, con funcionalidad de búsqueda.
Ruta: /catalogo

Cada sección tiene su funcionalidad específica y contribuye a la experiencia completa del usuario en la aplicación.

Enlaces de despliegue
Frontend: https://bigview-tech.onrender.com
Backend: https://big-view-tech-server.vercel.app
Estos enlaces te llevarán a las versiones desplegadas de la aplicación, tanto para el frontend como para el backend.

