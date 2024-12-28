FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps && \
    chmod -R 777 /app/node_modules

RUN chown -R node:node /app

COPY . .

EXPOSE 5173

USER node

CMD ["npm", "run", "dev"]
