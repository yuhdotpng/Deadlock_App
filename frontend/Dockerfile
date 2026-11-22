# Setting up a base image with node preinstalled
FROM node:18-alpine AS build

# Sets up a working directory inside container
WORKDIR /app

# Copies the package.json file into 
COPY package.json .
COPY package-lock.json .
# install node dependencies 
# RUN npm install
RUN npm ci

# Copy application code
COPY . .

# Accept build argument 
ARG VITE_API_URL 
ENV VITE_API_URL=${VITE_API_URL}

RUN npm run build

# Serving the built files (multi-stage build)
FROM nginx:alpine 
COPY --from=0 /app/dist /usr/share/nginx/html

#  Expose the port the app runs on
EXPOSE 80

# Setting up production application and starting nginx
CMD [ "nginx", "-g", "daemon off;"]