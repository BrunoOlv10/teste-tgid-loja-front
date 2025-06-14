# Teste TGID Loja Front
Este projeto é uma aplicação front-end construída com React e TypeScript, simulando uma API utilizando um arquivo JSON (dbTeste.json) como banco de dados. Tanto o front-end quanto a simulação da API estão na mesma estrutura de pastas.

<br>

## 🚀 Iniciando o Projeto
Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o Repositório
Abra o terminal e execute o comando:
<br>
```bash
git clone https://github.com/BrunoOlv10/teste-tgid-loja-front.git
cd teste-tgid-loja-front
```

### 2. Instalar Dependências
Execute o comando para instalar as dependências do projeto:
<br>
```bash
npm install
```

### 3. Iniciar o Back-End (API Simulada com JSON Server)
Execute o comando para iniciar o JSON Server usando o dbTeste.json como banco de dados fake:
<br>
```bash
npx json-server --watch src/dbTeste.json --port 3001
```

### 4. Iniciar Front-End (React)
Execute o comando para iniciar o front-end da aplicação:
<br>
```bash
npm start
```
