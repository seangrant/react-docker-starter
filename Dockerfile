FROM node:4.2.2
MAINTAINER sgrant

COPY . /src

RUN cd /src; npm install

EXPOSE 8080

CMD cd /src && node ./server.js
