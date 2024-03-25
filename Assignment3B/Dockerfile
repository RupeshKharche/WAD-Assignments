# Use NodeJs runtime as base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy all the required files into the working directory
COPY package*.json ./
COPY server.js ./
COPY config ./config
COPY controllers ./controllers
COPY models ./models
COPY routes ./routes
COPY .env ./

# Install dependencies
RUN npm install

# Expose the port of the application
EXPOSE 8080

# Run application
CMD ["npm", "run", "start"]