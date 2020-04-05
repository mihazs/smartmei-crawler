# smartmei-crawler
![](https://github.com/mihazs/smartmei-crawler/workflows/Test/badge.svg)
![](https://github.com/mihazs/smartmei-crawler/workflows/Build/badge.svg)
## Premissas assumidas

Assumi que as cotações e preços retornadas pela api terão no máximo 2 dígitos após o ponto fixo(precisão de 0.01).

## Stack utilizada
    - NodeJS
    - Babel
    - Mocha
    - Chai
    - Apollo Server
    - Docker
    - Github Actions
    - TDD

## Como executar
Após clonar o repositório, há as seguintes opções para execução:

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
ou

```bash

./start.sh

```
Em seguida abra o browser em:

```
http://localhost:4000

```

Abra o playground e boa diversão ;)