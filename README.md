# Busca de Endereço

> Aplicação para busca de endereço pelo CEP, utilizando as API`s [ViaCEP](https://viacep.com.br/) e [Google Map](https://maps.googleapis.com/) para exibir a localização no Mapa.

## Demonstação

A aplicação esta hospedada no [netlify](https://www.netlify.com/). Acesse o link [https://unruffled-hermann-6fc551.netlify.com/](https://unruffled-hermann-6fc551.netlify.com/) para executa-la.

## Instalação

_Tenha instalado em sua maquina o [Git](http://git-scm.com/). Caso prefira, instale o [Yarn](https://yarnpkg.com/)._

1. Fork este repositório e crie um novo branch — ou crie um novo branch caso tenha permissão.

2. Depois de obter sua cópia local, instale suas dependências:

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn
   ```

4) Crie um arquivo `.env` no diretório raiz, com as sequintes variaveis:

   ```sh
   REACT_APP_URL_API_VIACEP=https://viacep.com.br/ws
   REACT_APP_URL_API_MAPS=https://maps.googleapis.com/maps/api
   REACT_APP_TOKEN_MAPS=<KEY Google Maps>
   REACT_APP_TOKEN_MAPGL=<KEY MapGL>
   ```

## Execução

Após a instalação, você podera executar a aplicação em modo de desenvolvimento:

```sh
npm start
```

ou

```sh
yarn start
```

_Isso iniciará o servidor em `localhost:3000`_

## Build

Execute:

```sh
npm run build
```

ou

```sh
yarn build
```

_Isso irá criar um diretório `build` na raiz, com a aplicacão preparada para ser executada em producão._

## Testes

_Todos os arquivos de testes terminam com `.spec.tsx`_

Use o seguinte comando para executar os testes:

```sh
npm test
```

ou

```sh
yarn test
```

_Caso deseja gerar os aquivos de Coverage, execute:_

```sh
npm run coverage
```

ou

```sh
yarn coverage
```

_Isso irá criar um diretório `__tests__` dentro do diretório `src` com os arquivos de Coverage_

## Licença

[MIT](https://opensource.org/licenses/MIT)
