# PayBank - Playwright


O **PayBank_PW** é um projeto desenvolvido para simular um sistema bancário simples. Este projeto foi criado como parte de um exercício prático para aplicar conceitos de programação, automação de testes e boas práticas de desenvolvimento.

O objetivo principal é oferecer uma aplicação funcional que possa ser utilizada como base para estudos e aprimoramentos, além de servir como exemplo para quem está aprendendo a desenvolver e testar sistemas semelhantes. 
O projeto foi desenvolvido durante a primeira **Tech Week - QATW**, em parceria com o **QA Papito**, e inclui um pipeline completo que eleva a eficiência no desenvolvimento de software.

<img src="https://github.com/carolprotasio/paybank_pw/blob/main/assets/paybank_login.png" alt="web" width="600"/>
<img src="https://github.com/carolprotasio/paybank_pw/blob/main/assets/paybank_dash.png" alt="web" width="600"/>


## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

- **Linguagem de Programação**: JavaScript
- **Framework de Automação de Testes**: Playwright
- **Containerização**: Docker
- **Relatórios de Testes**: Allure Reports
- **Runtime**: Node.js
- **Banco de Dados**: PostgreSQL
- **Cache**: Redis
- **Integração Contínua**: Jenkins

📊 Além disso, foi criado um **pipeline completo** que integra todas essas tecnologias, garantindo eficiência no desenvolvimento e entrega do software.

### O que foi feito no projeto:
✅ **Testes manuais e automatizados**  
✅ **Automação de regressão**  
✅ **Integração com as melhores práticas e ferramentas**  

Os testes foram automatizados utilizando o framework **Playwright**, e os resultados são gerados em **Allure Reports** para uma análise detalhada. Além disso, o projeto conta com integração contínua via **Jenkins**, garantindo a execução automática dos testes em diferentes ambientes.

## 🔧 Pré-requisitos

Antes de começar a utilizar o projeto, certifique-se de que você possui os seguintes requisitos instalados em sua máquina:

1. **Node.js**
2. **Docker**
3. **Git**
4. **Playwright**
5. **Allure Reports**
6. **Jenkins** 
7. **Redis**
8. **PostgreSQL**

Siga os passos abaixo para configurar e executar o projeto em sua máquina:

### 📥 1. Clonar o repositório

Primeiro, clone o repositório do projeto:

```bash
git clone https://github.com/carolprotasio/paybank_pw.git
cd paybank_pw
```
## 📚 2. Instalar dependências

Instale as dependências do projeto utilizando o `npm`:

```bash
npm install
```
## ⚙️ 3. Configurar o ambiente
Banco de Dados (PostgreSQL) e Cache (Redis)
O projeto utiliza Docker para rodar o PostgreSQL e o Redis. Certifique-se de que o Docker está instalado e em execução, e então execute o seguinte comando para subir os containers:

```bash
docker-compose up -d
```
## ▶️ 4. Execute o projeto 
```bash
npm start
```
Isso iniciará o servidor e a aplicação estará disponível em http://localhost:3000
## 🧪 5. Executar testes automatizados
Para rodar os testes automatizados com o Playwright, utilize o seguinte comando:

```bash
npx playwright test
```

## 🚀 Conclusão

O **PayBank_PW** é um projeto de automação de testes, demonstrando a aplicação de conceitos fundamentais e boas práticas de engenharia de qualidade. Durante a primeira **Tech Week - QATW**, em parceria com o **QA Papito**, foi possível criar um pipeline completo que integra ferramentas modernas como **Playwright**, **Docker**, **Allure Reports**, **Redis**, **PostgreSQL** e **Jenkins**, elevando a eficiência no desenvolvimento e entrega do software.

Agradeço a todos que contribuíram para o desenvolvimento deste projeto e esperamos que ele seja útil para quem está começando na área de desenvolvimento e qualidade de software, ou para quem deseja entender melhor como integrar diferentes tecnologias em um pipeline de CI/CD.

---

**Nota**: Este projeto é open-source e está disponível no GitHub. Sinta-se à vontade para contribuir, reportar issues ou sugerir melhorias!
