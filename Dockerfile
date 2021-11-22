# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache g++ make
WORKDIR /bot
COPY . .
RUN npm install
CMD ["node", "bot.js"]