const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // IP o dominio del servidor de la base de datos
    port: process.env.DB_PORT, // Puerto de la base de datos (5432 por defecto para Postgres)
    dialect: process.env.DB_DIALECT, // Cambiado a 'postgres'
    logging: false, // O true si quieres ver las consultas en la consola
  }
);

module.exports = sequelize;
