FROM node:14-alpine as build
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app

RUN npm run build


FROM nginx:1.19-alpine as publish

RUN apk add --no-cache jq moreutils

COPY --from=build /app/dist/gitlab-helper /usr/share/nginx/html
COPY docker/entrypoint.sh /

COPY docker/default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x entrypoint.sh

CMD sh -c "/entrypoint.sh && \
    nginx -g 'daemon off;'"
