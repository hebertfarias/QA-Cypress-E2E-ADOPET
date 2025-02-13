describe('Verificação da página cadastro', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, }).as('stubPost');
  });
  it('Deve da erro no login devido a falta de preenchimento', () => {
    // login abaixo foi refaurado personalizado para o aquivo /.support/commands.js
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
    cy.wait(1000);
  });
  it('Deve falhar pois os campos estão preenchidos de forma incorreta com padrao de acesso', () => {
    // login abaixo foi refaurado personalizado para o aquivo /.support/commands.js
    cy.login('@email', 'senha123');
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    cy.wait(1000);
  });
  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=>{
    cy.login('ana.maria@hotmail.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  });
});