describe('Verificação da página cadastro', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
    cy.get('[data-test="register-button"]').click();
  });
  it('Deve preencher os campos do fomulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Ana Maria', 'email.com', 'senha123', 'senha123');
    cy.get('[data-test="submit-button"]').click();
    // Faz a verificação se a mensagem descrita esta sendo exibida/visivel ao usuario na tela
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
    it('Deve preencher os campos do fomulário corretamente para cadastrar um novo usuário', () => {
      cy.get('[data-test="submit-button"]').click();
      // Faz a verificação se a mensagem descrita esta sendo exibida/visivel ao usuario na tela
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
  });
});