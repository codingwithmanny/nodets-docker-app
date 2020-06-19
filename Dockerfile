# Base
FROM node:12.18-alpine3.12

# Build App
COPY $PWD /home/node/app

WORKDIR /home/node/app

RUN yarn install --prod;

# Ports
EXPOSE 80

# Run At Start
CMD ["/bin/sh", "-c", "yarn start"]