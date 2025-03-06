![alt text](chatbot.png)
# 🚀 Testes de Chatbot com Cypress! 🤖🔥

Olá! 👋  
Projeto de testes com **Chatbots baseados em regras** utilizando o **Cypress**, uma ferramenta poderosa para automação de testes. Abaixo, compartilho um resumo do que foi abordado e os passos necessários para configurar e executar o projeto.

---

## 🔎 **O que aprendi?**

- **Como funciona um Chatbot baseado em regras**: Entendi a lógica por trás de um chatbot que segue regras pré-definidas para interagir com o usuário.
- **Como levantar cenários de teste com base nas regras**: Aprendi a identificar e criar cenários de teste que cobrem todas as possíveis interações do chatbot.
- **Como criar e rodar testes manuais e automatizados**: Desenvolvi testes manuais e automatizados para garantir que o chatbot funcione conforme o esperado.

---

## 🛠️ **Passos para configurar e executar o projeto**

### 1. **Criar um diretório**
   - Crie uma pasta para o projeto:
     ```bash
     mkdir testes-chatbot-cypress
     cd testes-chatbot-cypress
     ```

### 2. **Instalar dependências**
   - Instale as dependências do projeto Node.js (se ainda não tiver um `package.json`):
     ```bash
     npm install
     ```
- **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina.

### 3. **Instalar o Cypress**
   - Instale o Cypress como dependência de desenvolvimento:
     ```bash
     npm install cypress --save-dev
     ```
   - **Pré-requisitos**: Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina.

### 4. **Rodar a aplicação local**
   - O projeto roda localmente, inicie com:
     ```bash
     npm run dev
     ```

### 5. **Executar o Cypress**
   - Abra o Cypress no modo interativo:
     ```bash
     npx cypress open
     ```
   - Ou execute os testes em modo **headless** (sem interface gráfica):
     ```bash
     npx cypress run
     ```

---

## 📌 **Instrutor do curso/projeto 👨‍🏫**
   - Quem lecionou o conteúdo do curso foi o [Fernando Papito](https://www.linkedin.com/in/qapapito/), que possui uma didática incrível, e traz projetos com problemas reais do dia a dia
