FROM node:14

# app directory
WORKDIR /usr/src/app 

# install dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn 

COPY . . 
COPY .env-production .env

RUN yarn build 

ENV NODE_ENV development 

EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node 