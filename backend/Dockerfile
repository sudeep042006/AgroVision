# Use the official, lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install dependencies (only production ones to keep it light)
RUN npm ci --only=production

# Copy the rest of your application code
COPY . .

# Expose the port your Express app runs on (assuming 3000, change if different)
EXPOSE 5050

# Command to start your application
CMD ["npm", "start"]