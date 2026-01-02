# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files ensuring both lock files are copied if present
COPY package*.json ./

# Install dependencies strictly
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite application to /app/dist
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

WORKDIR /app

# Install 'serve' package globally to serve static files
RUN npm install -g serve

# Copy the build output from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Serve the 'dist' directory on the port defined by the environment variable $PORT
# standard CMD for Google Cloud Run using 'serve'
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
