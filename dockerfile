FROM node:18-alpine

# create a app directory
WORKDIR /app

# install the app dependencies
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8001

CMD [ "node", "index" ]
