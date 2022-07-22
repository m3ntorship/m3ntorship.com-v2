FROM node:lts-alpine

RUN mkdir /home/node/app/

WORKDIR /home/node/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY .next .next
COPY public public

EXPOSE 3000

CMD yarn start