# Step 1: Build Stage
# Using -slim instead of -alpine to provide glibc, required by tools like lightningcss
FROM node:20-slim AS build

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Step 2: Production Stage
# We can still use alpine for the final production image to keep it lightweight
FROM nginx:stable-alpine

# Copy the build output from the first stage to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html



# Railway typically assigns a port via the PORT environment variable
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]