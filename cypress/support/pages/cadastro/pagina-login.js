import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Login {
    acessarPaginaDeLogin(){
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get(el.loginButton).click();

    }
    preencherCampos(){
        cy.get(el.loginEmail).type('ana.maria@hotmail.com');
        cy.get(el.loginPassword).type('Senha123');
        
    }
    submeterLogin(){
        cy.get(el.submitButton).click();
    }
}

export default new Login();
