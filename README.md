# User Management FRONT

Uma plataforma de gerenciamento de usuários desenvolvida com React e Vite, utilizando TypeScript. Esta aplicação integra-se com um backend Rails e utiliza Docker.

---

## Funcionalidades

Cadastro, edição, exclusão, visualização de detalhes de usuários e seus endereços e verificação de cpf e email disponivel.

---

## Stack Tecnológico

### Frontend

- **Framework:** React com Vite.
- **Linguagem:** TypeScript.
- **Estilização:** Styled-Components e Styled-Icons.
- **Formulários:** React Hook Form e validação com Zod.

---

## Instalação e Configuração

### Pré-requisitos

- Docker e Docker Compose
- Backend Rails configurado e em execução

### Instalação do Frontend

1. Clone o repositório:
   ```bash
   git clone https://github.com/marco-duart/user_management_front.git
   cd user_management_front
   ```
2. Variáveis de ambiente
   Criar um arquivo .env na pasta raiz do diretório, ou renomear o .env.example.
   Preencher com suas variáveis de ambiente ou utilizar as variáveis padrão comentadas no .env.example, também disponíveis abaixo:

   ```bash
   VITE_API_URL=http://localhost:3000
   ```

---

## Configuração com Docker

### Iniciando o Ambiente

1. Construa e inicie os contêineres Docker:
   ```bash
   docker-compose up --build
   ```

2. O frontend estará disponível em `http://localhost:5173`.

### Parando o Ambiente

Para parar os contêineres Docker:
```bash
docker-compose down
```

---

## Principais Bibliotecas

| Biblioteca
|------------------------|
| `react`                | 
| `vite`                 |
| `react-hook-form`      |
| `zod`                  |
| `cpf-cnpj-validator`   |
| `date-fns`             |
| `axios`                |
| `react-router-dom`     |
| `styled-components`    |
| `react-modal`          |

---