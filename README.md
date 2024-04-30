E-commerce Big View
Este proyecto consiste en el desarrollo de un E-commerce (tienda en línea) junto con una API REST para gestionar las operaciones relacionadas con usuarios, productos y carritos de compra. La API REST está diseñada para recibir y procesar las solicitudes relacionadas con estos elementos, permitiendo así la interacción fluida entre el cliente y el servidor.

Ejecución local
Para ejecutar el proyecto localmente, sigue estos pasos:

Clona el repositorio de GitHub:
sh
Copy code
git clone https://github.com/tu-usuario/big-view-tech.git
Instala las dependencias del frontend y backend:
sh
Copy code
cd big-view-tech/frontend
npm install
cd ../backend
npm install
Inicia el servidor de desarrollo para el frontend y el backend:
sh
Copy code
cd frontend
npm start
sh
Copy code
cd backend
npm start
Accede a la aplicación en tu navegador:
Frontend: http://localhost:3000
Backend: http://localhost:4000
API REST
La API REST proporciona varios endpoints para interactuar con la aplicación:

Endpoints para /user
GET /: Obtener todos los usuarios.
GET /:id: Obtener un usuario por ID.
POST /getUser: Obtener un usuario por email.
POST /newUser: Crear un nuevo usuario.
PUT /:id: Actualizar un usuario por ID.
DELETE /:id: Eliminar un usuario por ID.
Endpoints para /cart
GET /:id: Obtener un carrito por ID.
PUT /:id: Actualizar un carrito por ID.
Endpoint para /product
GET /: Obtener todos los productos.
Sección Frontend
El frontend de la aplicación consta de varias secciones importantes:

Login: Página de inicio de sesión para los usuarios.
Landing Page: Página de inicio de la aplicación que presenta información general y atractiva sobre la misma.
Catálogo: Página que muestra todos los productos disponibles para la venta, con funcionalidad de búsqueda.
Cada sección tiene su funcionalidad específica y contribuye a la experiencia completa del usuario en la aplicación.

Enlaces de despliegue
Frontend: https://bigview-tech.onrender.com
Backend: https://big-view-tech-server.vercel.app
Estos enlaces te llevarán a las versiones desplegadas de la aplicación, tanto para el frontend como para el backend.
