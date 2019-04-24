FROM node:10.15-alpine

RUN apk add --update --no-cache alpine-sdk git python && \
  rm -rf /tmp/* /var/cache/apk/*

RUN mkdir /home/node/auth-server
WORKDIR /home/node/auth-server

COPY ./package* /home/node/auth-server/
RUN npm install

COPY . /home/node/auth-server

EXPOSE 8000

CMD [ "npm", "start" ]
