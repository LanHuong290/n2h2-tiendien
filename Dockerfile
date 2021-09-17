FROM php:7.4-cli

USER root

WORDIR /app

COPY . .

EXPOSE 8080

CMD [ "php","-5","0.0.0.0:8080]