# Automação E2E — Adopet

Projeto de testes end-to-end com Cypress para o fluxo de cadastro da aplicação Adopet.

## Cenário documentado
- Acessar a aplicação.
- Navegar até a página de cadastro.
- Preencher o formulário por meio de Page Object.
- Submeter o cadastro.

## Tecnologias
- Node.js 20 (recomendado)
- Cypress 14
- Mochawesome

## Instalação e execução
```bash
npm install
npm test
npm run cy:open
```

## Relatórios
Os relatórios Mochawesome são configurados em `cypress/results`. A gravação de vídeos está habilitada na configuração do Cypress.

## Aplicação testada
https://adopet-frontend-cypress.vercel.app — ambiente público externo, sujeito a indisponibilidade e alterações.

## Estrutura
```
cypress/
  e2e/
  fixtures/
  support/
cypress.config.js
package.json
```
