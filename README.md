# smartmei-crawler
![](https://github.com/mihazs/smartmei-crawler/workflows/Test/badge.svg)
![](https://github.com/mihazs/smartmei-crawler/workflows/Build/badge.svg)
## Premissas assumidas

Assumi que as cotações e preços retornadas pela api terão no máximo 2 dígitos após o ponto fixo(precisão de 0.01).

## Como executar

Com docker:

```bash

docker-compose up -d --build

```

Sem docker:

Execute os seguintes comandos:

```bash

yarn install --production=false
yarn build
yarn start

```
