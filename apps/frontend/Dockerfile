FROM node:16-alpine3.15

RUN npm install -g http-server

WORKDIR /app


COPY package*.json ./

RUN npm install
RUN npm install @vue/cli@^5.0.8

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]