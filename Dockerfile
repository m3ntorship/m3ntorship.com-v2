FROM node:lts-alpine

RUN mkdir /home/node/app/

WORKDIR /home/node/app

COPY . .

RUN yarn && yarn build

EXPOSE 3000

CMD yarn start
