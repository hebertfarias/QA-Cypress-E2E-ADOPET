Cypress.Commands.add('cadastrar', (name, email, senha) => { 
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
});  
Cypress.Commands.add('login', (email, senha) => { 
    cy.get('[data-test="input-loginEmail"]').type(email);
    // preeche os dados da senha para fazer o login
    cy.get('[data-test="input-loginPassword"]').type(senha);
    // encontra o botão de login na pagina e clica para que o login seja realizado
    cy.get('[data-test="submit-button"]').click();
    cy.wait(1000); // aguarda para o teste inicializar as ações, nesse caso 1000ms igual a 1 segundo
});


 
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })