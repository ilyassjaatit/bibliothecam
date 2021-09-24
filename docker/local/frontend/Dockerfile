FROM node:14.17.6-alpine
RUN apk add yarn

WORKDIR ./frontend
RUN yarn install
CMD ["npm", "start"]