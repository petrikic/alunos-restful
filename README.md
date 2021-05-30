# API RESTFUL de Alunos

A `API RESTFUL de Alunos`, é uma api que simula um cadastro de alunos de uma universidade, seguindo o modelo da Universidade Federal de Mato Grosso do Sul.

## 🚀 Começando

* Primeiro, você deve clonar o repositório do projeto. No terminal de sua preferência, utilize o comando `git clone https://github.com/petrikic/alunos-restful`

### 📋 Pré-requisitos

Para utilizar o software, você vai precisar instalar:
* [Node.Js](https://nodejs.org/en/download/) - *`foi utilizada a v10.19.0 no projeto`*.
* [NPM](https://www.npmjs.com/) ou [YARN](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### 📋 Dependências

Foram instaladas as seguintes dependências:
* [body-parser](https://www.npmjs.com/package/body-parser)
* [express](https://www.npmjs.com/package/express)
* [multer](https://www.npmjs.com/package/multer)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [sqlite3](https://www.npmjs.com/package/sqlite3)

### 🔧 Instalação

* Com o diretório do projeto aberto em um terminal de sua preferência, execute o comando `npm install` ou `yarn` para baixar as dependências.

* Inicie o server com o comando `npm start` ou `yarn start`.

* Após iniciar o server, a aplicação estará rodando em [http://localhost:8080](http://localhost:8080).

## 📦 Utilização

Você pode utilizar a API nos seguintes ENDPOINTS:
* `GET` [http://localhost:8080/alunos]() - Permite que os usuários do serviço obtenham todos os alunos cadastrados no sistema - Status code: `200`, `400` ou `404`.

* `POST` [http://localhost:8080/alunos]() - Permite que os usuários do serviço cadastrem novos alunos no sistema - Status code: `201` ou `400`.

* `PUT` e `DELETE` [http://localhost:8080/alunos]() - Não permitidos - Status code: `405`.

* `GET` [http://localhost:8080/alunos/{id}]() - Permite que os usuários do serviço obtenham informações de um usuário específico a partir do seu identificador único (id) - Status code: `200` ou `404`.

* `PUT` [http://localhost:8080/alunos/{id}]() - Permite que os usuários do serviço modifiquem informações de um usuário cadastrado no sistema - Status code: `200` ou `404`.

* `DELETE` [http://localhost:8080/alunos/{id}]() - Permite que os usuários do serviço removam um usuário cadastrado no sistema - Status code: `200` ou `404`.

* `POST` [http://localhost:8080/alunos/{id}]() - Não permitido - Status code: `405`.

## 🛠️ Construído com

* [Visual Studio Code](https://code.visualstudio.com/) - *`a IDE utilizada no projeto.`*


## ✒️ Autores

* [**Cleriston Nantes Petrikic**](https://github.com/petrikic)
* [**Amadeu Olaia Junior**](https://github.com/gokyu)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/petrikic/alunos-restful/blob/master/LICENSE) para detalhes.
