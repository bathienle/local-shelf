FROM node:20.12.0-bookworm

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]