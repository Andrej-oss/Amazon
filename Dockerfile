FROM node:14.15.0-slim

RUN mkdir amazon
COPY . .
WORKDIR ./amazon

RUN yarn install

CMD ["yarn", "run", "dev"]
