# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Compile the TypeScript code
RUN npm run build

# Specify the command to run your script
# Replace 'start:zen-engine' with the script you want to run from your package.json
CMD ["npm", "run", "start:zen-engine"]