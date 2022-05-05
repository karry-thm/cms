FROM node:lts-slim
WORKDIR /app
COPY . .
RUN yarn && yarn build
ENTRYPOINT [ "yarn", "start" ]