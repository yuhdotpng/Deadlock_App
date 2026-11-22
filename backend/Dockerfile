# Setting up a base image with node preinstalled
FROM node:18-alpine

# Sets up a working directory inside container
WORKDIR /app

# Copies the package.json file into 
COPY package.json .
COPY package-lock.json .
# install node dependencies 
RUN npm install

# Copy application code
COPY . .

# Creating SQLite database
RUN mkdir -p /app/data

#  Expose the port the app runs on
EXPOSE 5000

# Step 7: Define the command to run the application
CMD ["npm", "start"]