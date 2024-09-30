Catálogo de filmes

Essa aplicação consiste em um catálogo de filmes que permite o usuário navegar pelos filmes populares, por gêneros, e pesquisar filmes pelo título. A aplicação foi construída com o Nest.js no back-end e com React para o front-end, e consome dados da API do TMDb.

Instruções para execução

Primeiramente instalar (caso não possua) o Node.js e o NPM/Yarn.

BACK-END
1- Navegue até a pasta do back-end.
```bash
cd crud-nest
```

2- Instale as dependências
```bash
npm install
```

3- Inicialize o servidor.
```bash
npm run start
```

O back-end foi programado para ser executado em `https://localhost:3000`.

FRONT-END
1- Em um novo terminal, navegue até a pasta do front-end.
```bash
cd movie-catalogo
```

2- Instale as dependências.
```bash
npm install
```

3- Inicialize o front-end.
```bash
npm start
```

O front-end foi programado para ser executado em `http://localhost:3001`.


Sobre a API utilizada

Essa aplicação consome dados da API do TMDb (The Movie Database). Para conseguir acessar os filmes populares, filmes por gênero e pesquisar por títulos, as seguintes rotas foram criadas no back-end que faz a ligação com a API do TMDb:
- `/tmdb/popular`: Retorna filmes populares.
- `/tmdb/genre/:id`: Retorna filmes por um gênero específico.
- `/tmdb/search?query=nome`: Pesquisa filmes por título.

Decisões técnicas

A aplicação foi desenvolvida usando React no front-end.
O back-end foi desenvolvido em Nest.js.
Foi utilizado o React Router Dom para a navegação no front-end, facilitando a criação de algumas páginas na aplicação.
Na estilização foi utilizado o CSS, e foi escolhido para a customização as cores preto e vermelho.