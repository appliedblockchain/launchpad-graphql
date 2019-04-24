FROM node:10.15-alpine

RUN apk add --update --no-cache alpine-sdk git python && \
  rm -rf /tmp/* /var/cache/apk/*

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY ./package* /home/node/app/
RUN npm install

COPY . /home/node/app

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
