# API de Login com Node.js e JWT

## Descrição do Projeto

API simples de autenticação desenvolvida com Node.js, utilizando Express para roteamento, JWT para autenticação, Prisma como ORM, e Bcrypt para hash de senhas.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm

## Tecnologias Utilizadas

- Express.js
- Prisma
- JSON Web Token (JWT)
- Bcrypt

## Instalação

1. Clone o repositório:

```bash
git clone https://seu-repositorio.git
cd nome-do-projeto
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o Prisma:

```bash
npx prisma generate
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com recarregamento automático

## Configuração

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione as variáveis de ambiente necessárias:
   - `DATABASE_URL`
   - `JWT_SECRET`

## Funcionalidades

- Registro de usuários
- Autenticação com JWT
- Proteção de rotas
- Hash de senhas

## Segurança

- Senhas criptografadas com Bcrypt
- Tokens JWT para autenticação
- Proteção contra injeção de dados
