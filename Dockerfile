# Base
FROM node:12.18-alpine3.12

# Build App
COPY /opt/elasticbeanstalk/deployment/deploymetadata.json /tmp

COPY $PWD /home/node/app

WORKDIR /home/node/app

RUN yarn install --prod; \
    apk add jq;

# Add Entry point
COPY $PWD/docker/entrypoint.sh /usr/local/bin

RUN dos2unix /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/bin/sh", "/usr/local/bin/entrypoint.sh"]

# Ports
EXPOSE 80

# Run At Start
CMD ["/bin/sh", "-c", "yarn start"]