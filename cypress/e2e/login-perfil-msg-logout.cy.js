import Login from '../support/pages/cadastro/pagina-login';

describe('Login e testes so site ADOPET', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
    cy.get('[data-test="login-button"]').click();
  });
  it('Deve carregar as páginas e testes', () => {
    Login.preencherCampos();
    Login.submeterLogin();
    cy.get('.header__user').click();
    cy.wait(1000);
    cy.get('.button').click();
    //cy.get('input[name="fotoperfil"]').click();
    cy.get('input[name="nome"]').type('Ana Maria');
    cy.get('input[name="telefone"]').type('11991112233');
    cy.get('input[name="cidade"]').type('São Paulo');
    cy.get('#sobre').type('Amo a natureza e adoro animais!');
    cy.get('[data-test="submit-button"]').click();
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
    // encontra o local de falar com responsavél e clica para ser direcionado
    cy.contains('a', 'Falar com responsável').click();
    cy.get('input[name="name"]').type('Ana Maria');
    cy.get('input[name="phone"]').type('11991112233');
    cy.get('#petName').type('Felícia');
    cy.get('#msg').type('Gostaria de mais informações para adoção da gatinha Felícia');
    cy.get('[data-test="submit-button"]').click();
    //cy.get('.header__home').click();
    cy.get('.header__user').click();
    cy.wait(1000);
    cy.get('[data-test="submit-button"]').click();
  });
});