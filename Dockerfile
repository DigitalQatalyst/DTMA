# Step 1: Use an official Node.js image from Docker Hub
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json if available
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy the rest of the app's code into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Define the command to run the app
CMD ["node", "server.js"]
