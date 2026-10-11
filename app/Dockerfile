FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Hardening: Chạy container với quyền non-root
USER node
EXPOSE 3000
CMD ["node", "server.js"]