<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="./crud-delta/aplicacao-mobile/assets/logo/logo.jpg" alt="Logo" width="300" height="250">
 
  <h3 align="center">Gerenciador de Alunos</h3>

  <p align="center">
   Uma forma incrível de catalogar seus alunos
</a>

</p>

##

<details open="open">
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Tecnologias Utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Pré requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Utilidade</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

<img src="./crud-delta/aplicacao-mobile/assets/logo/preview.jpg" alt="Logo" width="320" height="560">

Uma solução mobile para catalogar os alunos, contendo todas as funções de uma CRUD, fazendo uso de recursos como Sequelize para gerenciar o banco de dados e também utilizando serviços da amazon(amazon s3) para upload de imagens e amazonec2 para hospedagem do servidor

- API-GET (http://3.88.66.44:3000/students)

### Tecnologias utilizadas

- [React Native ](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->

## Getting Started

### Pré requisitos

- Expo
  ```sh
  npm install --global expo-cli
  ```

### Instalação - aplicação mobile

1. Após finalizar a instalação do expo-cli realize o clone do repositório
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Acesse o diretório da aplicação
   ```sh
    cd aplicacao-mobile
   ```
3. Instale todas as dependências com um único comando :)
   ```sh
   npm install
   ```
4. Agora é só executar
   ```JS
   expo start
   ```

### Instalação - solução backend

A solução está sendo hospedada em um serviço de cloud da amazon - (amazonec2 - [3.88.66.44:3000/students](http://3.88.66.44:3000/students)), porém caso queira hospedar o servidor na própria máquina

1. Instale o [**Docker**](https://hub.docker.com/editions/community/docker-ce-desktop-windows/).

2. Execute este comando e a aplicação já estará rodando
   ```sh
   docker-compose up
   ```

<!-- CONTACT -->

## Contato

Paulo Oliveira - paulooliveiratsx@gmail.com

Project Link: [Paulo Henrique de Oliveira / delta-tech-exercise · GitLab](https://gitlab.com/paulostrix/delta-tech-exercise)
