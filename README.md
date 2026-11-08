# Automação E2E — Adopet

Projeto de testes end-to-end e de contrato de API com Cypress para o fluxo de cadastro da aplicação Adopet.

## Cenários
- Cadastro de adotante pela interface.
- Contrato da API de perfil do adotante.
- Contrato da API de mensagens.

## Tecnologias
- Node.js 20
- Cypress 14
- Mochawesome

## Instalação e execução
```bash
npm ci
npm test
npm run cy:open
```

## Testes de API
Os testes aceitam a variável `CYPRESS_ADOPET_API_URL`. Sem ela, utilizam a API pública configurada originalmente. O workflow do GitHub Actions inicia um mock HTTP local e aponta os testes para ele, evitando que a disponibilidade ou o tempo de inicialização do serviço público externo tornem a CI instável.

Para executar o mock localmente:
```bash
node scripts/adopet-api-mock.js
```
Em outro terminal:
```bash
CYPRESS_ADOPET_API_URL=http://127.0.0.1:4177 npm test
```

O mock valida os contratos esperados pelos testes; ele não substitui uma validação de integração contra o serviço real.

## Aplicação testada
https://adopet-frontend-cypress.vercel.app — ambiente público externo, sujeito a indisponibilidade e alterações.

## Relatórios
Os relatórios Mochawesome são configurados em `cypress/results`. Vídeos e screenshots são preservados como artefatos do GitHub Actions.
