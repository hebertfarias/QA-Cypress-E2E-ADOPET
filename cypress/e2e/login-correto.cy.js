import Login from '../support/pages/cadastro/pagina-login';

describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });
           
        it('Deve preencher os campos e fazer login', () => {
            Login.acessarPaginaDeLogin();
            Login.preencherCampos();
            Login.submeterLogin();
            cy.wait(2000);            
            cy.get('.header__user').click();
            cy.wait(1000);
            cy.get('[data-test="submit-button"]').click(); 
       
        });
  });