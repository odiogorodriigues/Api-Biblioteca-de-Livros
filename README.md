# API Node.js - Biblioteca de Livros

Esta é uma API Node.js simples para gerenciar uma biblioteca de livros. Permite realizar operações básicas como adicionar, listar, atualizar e excluir livros. Utiliza as seguintes dependências:

- **express**: Um framework web para Node.js que facilita a criação de APIs e aplicativos web.
- **body-parser**: Um middleware que facilita o acesso aos dados enviados no corpo das requisições HTTP.
- **cors**: Um middleware que habilita o controle de acesso a recursos de uma aplicação web de diferentes origens.
- **nodemon**: Uma ferramenta utilitária que ajuda a desenvolver aplicativos baseados em Node.js ao monitorar mudanças nos arquivos e automaticamente reiniciar o servidor.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

2. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/api-biblioteca-livros.git
```

3. Na raiz do projeto, instale as dependências utilizando npm ou yarn:

```bash
npm install
```

4. Após a instalação das dependências, inicie o servidor:

```bash
npm start
```

## Uso

A API será executada na porta padrão 5000, a menos que seja especificado de outra forma.

## Endpoints

A API oferece os seguintes endpoints:

- `GET /livros`: Retorna uma lista de todos os livros na biblioteca.
- `GET /livros/:id`: Retorna os detalhes de um livro específico com base no ID fornecido.
- `POST /livros`: Adiciona um novo livro à biblioteca.
- `PUT /livros/:id`: Atualiza os detalhes de um livro existente com base no ID fornecido.
- `DELETE /livros/:id`: Remove um livro da biblioteca com base no ID fornecido.

Certifique-se de fornecer os dados necessários nos formatos adequados para cada endpoint.

## Links

Entre na api pelo link: https://api-biblioteca-de-livros-1bkb2zlhj-odiogorodriigues-projects.vercel.app