# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=production
ENV HOST_URL=""

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "app.js"]

# How to pass & run the docker image with env variable
# docker run -d -p 8080:8080 -e HOST_URL=http://localhost:4200 sparun1607/node-docker