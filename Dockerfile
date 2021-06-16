FROM node:16.3.0 as build

WORKDIR /app

COPY . /app

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/dud-ui /usr/share/nginx/html

EXPOSE 80

#docker run -d -p 80:80 --rm --name dud-ui dud-ui:latest
