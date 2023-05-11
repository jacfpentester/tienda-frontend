# NODE Y VERSION
FROM node:16-alpine

# DIRECTORIO SOBRE EL QUE VAMOS A TRABAJAR
WORKDIR /app

# COPIAMOS EL package.json AL CONTENEDOR
COPY package*.json ./

# INSTALAR LAS DEPENDENCIAS DE LA APP
RUN yarn install

# COPIAMOS TODOS LOS ARCHIVOS DE LA APP AL CONTENEDOR
COPY . .

# COMPILAMOS PARA PRODUCCION
RUN npm run build
# RUN npm run


#EXPONEMOS EL PUERTO 3000 PARA QUE NGINX PUEDA COMUNICARSE CON LA APLICACION
EXPOSE 3000

# INICIAMOS LA APLICACION
CMD ["npm", "start"]























# # Base image
# FROM node:16

# # Set the working directory to /app
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# # RUN npm install -g npm@9.6.2
# RUN yarn install --force --ignore-scripts
# RUN npm rebuild bcrypt --build-from-source
# # RUN  audit fix --force


# # Copy the rest of the application code
# COPY . .

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# # Expose port 3000 for the Node.js server
# EXPOSE 3000

# # Start the Node.js server
# CMD ["yarn", "start:dev"]
# # RUN npm start

# # Iniciar NGINX en primer plano
# # CMD ["nginx", "-g", "daemon off;"]
