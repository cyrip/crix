FROM alpine:3.7
RUN apk add --no-cache --update nodejs
COPY . /code
RUN cd /code && npm install express
ENTRYPOINT ["node", "/code/server.js"]

