Relatório de Testes Unitários - [Caue, Luis Felipe, Guilherme e Gabriel]
Este diretório contém os testes automatizados realizados com Jest para validar as regras de negócio do Projeto Integrador.

O que está sendo testado?
Módulo de Autenticação (auth.js):

Validação de formato de e-mail.

Fluxo de login com credenciais corretas/incorretas.

Módulo de Calculo de Frete (shipping.js):

Cálculo base para diferentes CEPs.

O que NÃO está sendo testado?
Integração com Banco de Dados: Os testes utilizam mocks para simular o banco, focando apenas na lógica da função.

Interface Gráfica (UI): Não estamos testando cliques em botões ou renderização de cores, apenas a lógica do JavaScript.

Chamadas de API Externas: As respostas de APIs de terceiros foram simuladas para evitar dependência de rede.
