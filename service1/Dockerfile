# Dockerfile for Service1

FROM node:14

WORKDIR /app

# Copy all files, including status.sh
COPY . .

# Install dependencies
RUN npm install


# Expose the application port
EXPOSE 8199

# Default command to run the app
CMD ["npm", "start"]