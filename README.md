# chain_egg



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/news
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## Docker

```
$ docker network create chain_default
$ docker build .
$ docker-compose -f docker-compose.chaincore.yml up -d 
```

docker-compose -f docker-compose.logging.yml up -d 