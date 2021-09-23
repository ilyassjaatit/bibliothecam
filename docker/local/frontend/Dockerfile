FROM node:16-alpine3.11
RUN apk add yarn

WORKDIR /frontend

COPY frontend/package.json ./
COPY frontend/package-lock.json ./

CMD ["npm", "start"]