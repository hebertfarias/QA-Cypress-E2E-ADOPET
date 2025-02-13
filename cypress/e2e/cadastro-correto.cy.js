describe('Verificação da página cadastro', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
    cy.get('[data-test="register-button"]').click();
  });
  
  it('Deve preencher os campos do fomulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Ana Maria', 'ana.maria@hotmail.com', 'Senha123', 'Senha123');
  });
});