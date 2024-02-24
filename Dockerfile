FROM node:21.6-alpine3.18
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=0 /usr/app/dist /usr/share/nginx/html