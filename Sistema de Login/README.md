# Sistema de Login WebDriver

Projeto simples de automação de teste usando Selenium WebDriver e ChromeDriver.

## Descrição

Este repositório contém uma página de login básica (`index.html`) e um script de teste em Node.js (`teste.js`) que automatiza a interação com o formulário usando `selenium-webdriver`.

O formulário valida um usuário estático:
- usuário: `admin`
- senha: `123`

## Estrutura do projeto

- `index.html` — página de login simples com campos de usuário e senha.
- `script.js` — lógica de front-end para validar as credenciais e exibir a mensagem.
- `teste.js` — script de automação que abre a página local e realiza um login via Selenium.
- `package.json` — dependências e script de execução.

## Pré-requisitos

- Node.js instalado
- Google Chrome instalado
- Dependências instaladas com `npm install`

## Instalação

No diretório do projeto:

```bash
npm install
```

## Execução

### Abrir a aplicação manualmente

Basta abrir o arquivo `index.html` no navegador.

### Executar o teste automatizado

```bash
npm test
```

O script `teste.js` abrirá o Chrome, preencherá o formulário e exibirá o resultado no terminal.

## Resultado esperado

- Se usar `admin` e `123`, a mensagem exibida deve ser: `Login realizado com sucesso`.
- Para outras credenciais, a mensagem será: `Usuário ou senha inválidos`.

## Observações

O teste usa um caminho local para o arquivo HTML. Se for executar em outra máquina, ajuste o caminho em `teste.js` conforme necessário.
