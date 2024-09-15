# Use the slim version of Node.js on Debian Bookworm as the base image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

COPY package*.json .

RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Run the app when the container launches
ENTRYPOINT ["node", "server.js"]