FROM node:18.16.1-bullseye-slim

ARG user=node
ARG group=node

WORKDIR /app

VOLUME /app/docs

COPY --chown=${user}:${group} package*.json ./

RUN npm ci

COPY . ./

CMD ["npm", "run", "build:src"]
