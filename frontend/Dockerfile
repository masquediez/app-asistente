# Utilizar la imagen oficial de Node como base
FROM node:16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación al contenedor
COPY . .

# Compilar la aplicación de React
RUN npm run build

# Instalar un servidor estático para servir el frontend
RUN npm install -g serve

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para ejecutar el servidor estático en producción
CMD ["serve", "-s", "build", "-l", "3000"]
