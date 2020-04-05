FROM node:stretch AS build-stage
WORKDIR /app
COPY ./package.json /app
COPY ./.babelrc /app
COPY ./yarn.lock /app
COPY ./src /app/src
RUN ["sh", "-ce", "yarn install --production=false"]
RUN ["sh", "-ce", "yarn build"]

FROM node:alpine
COPY --from=build-stage /app /app
WORKDIR /app
CMD ["sh" ,"-ce", "yarn start"]