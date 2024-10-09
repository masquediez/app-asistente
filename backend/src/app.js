const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./api/routes/auth");
const userRoutes = require("./api/routes/user");
const sequelize = require("./config/database"); // Importar la configuración de la base de datos
require("dotenv").config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 5050;

// Configurar CORS
app.use(cors());

// Middleware para leer el cuerpo de las solicitudes
app.use(express.json());
app.use(cookieParser());

// Usar las rutas de autenticación y usuarios
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Sincronizar la base de datos
sequelize
  .sync({ force: false }) // Cambia a true si quieres recrear las tablas en cada inicio
  .then(() => {
    console.log("La base de datos ha sido sincronizada correctamente");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });

// Manejo de errores
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
