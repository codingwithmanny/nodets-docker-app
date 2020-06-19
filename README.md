# Node TypeScript Docker App

This is how to build a NodeJS TypeScript Docker app and deploy it to AWS Elastic Beanstalk.

See the full article here:

[**NodeJS TypeScript Docker Deployment Process With AWS EBS**](https://medium.com/@codingwithmanny/nodejs-typescript-docker-deployment-process-with-aws-ebs-14796cd78392)

- **Branch** [`branch/elastic-beanstalk`](https://github.com/codingwithmanny/nodets-docker-app/tree/branch/elastic-beanstalk)

## Requirements

- NVM or NodeJS 12.18.0
- Docker (For Testing)
- Yarn

## Local Setup

**Development**

```bash
yarn dev;
```

**Production**

```bash
yarn start;
```

## Docker Build

```bash
docker build . -t {image-name}:{tag-name}
```
