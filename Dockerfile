FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Builds the app for production
RUN npm run build

# Documents that Next.js listens on 3000 inside the container
EXPOSE 3000

# Starts the production server
CMD ["npm", "run", "start"]