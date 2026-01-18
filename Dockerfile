# Stage 1: Build the React app
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:alpine
# Copy the build files from the builder stage to Nginx's web directory
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80, which is the default for Nginx
EXPOSE 80
# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
