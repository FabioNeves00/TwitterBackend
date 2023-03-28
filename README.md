<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Table of contents
| Sections |
|:-:|
| [Dependencies](#dependencies) |
| [Diagrams](#diagrams) |
| [Installation](#installation) |
| [Run without docker](#without-docker) |
| [Run with docker](#with-docker) |

## Description

Twitter backend clone made with Nestjs, Typescript, PostgreSQL, TypeORM and JWT

## Dependencies

- [NodeJs v19.7.0](https://nodejs.org/en/download)

- [PostgreSQL v14.16](https://www.postgresql.org/download/)
- [Docker](https://docs.docker.com/desktop/)

## Diagrams

### Database:
![image](https://user-images.githubusercontent.com/67487494/228229263-9ae8dd63-7b00-41be-8b27-a32a3d931c9e.png)


### Use cases:
![image](https://user-images.githubusercontent.com/67487494/228230016-bb46176d-a9a5-4f51-be52-4e0189341537.png)


## Installation

```bash
# clone the api source code
$ git clone https://github.com/FabioNeves00/TwitterBackend twitter-backend

# change directory to files
$ cd twitter-backend

# install deps
$ npm install

# install nestjs cli to run api locally
$ npm install -g @nestjs/cli
```

## Running the app
### Without docker
#### Database
##### Obs: Install PostgreSQL from the [website](#Dependencies)
```bash
# enter postgres terminal
$ sudo su -u postgres psql

# create database
$ CREATE DATABASE twitter;

# exit
$ \q
```
#### API
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### With docker

```bash
# build the api and database images, run and detach from terminal
$ sudo docker compose build && sudo docker compose up -d
```

## License

Nest is [MIT licensed](LICENSE).
