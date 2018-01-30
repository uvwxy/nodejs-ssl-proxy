FROM node:carbon
LABEL maintainer="Paul Smith <code@uvwxy.de>"

WORKDIR /opt/nodejs-ssl-proxy/
COPY index.js ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]