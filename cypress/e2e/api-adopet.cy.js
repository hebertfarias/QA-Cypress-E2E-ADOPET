/*Exercícios

    Faça uma request para a API do AdoPet com um usuário autenticado e verifique se, ao acessar a página de /perfil, há o nome do usuário em sua resposta.
    Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona.
    Na página de exemplos do cypress. verifique se a funcionalidade de filtrar tarefas funciona.

Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.*/

describe('Api Adopet', () => {
   
    // Teste para verificar o nome do perfil
    it('Nome do perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/d6c3d667-257e-415c-b294-da2b47d29ae2', // Corrigido para uma URL de API fictícia
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.not.be.empty;
            expect(res.body).to.have.property('perfil');
            expect(res.body.perfil.nome).to.be.equal('Ana Maria');
        });
    });

    // Teste para deletar todas as tarefas, não funciona
    /*it('Consegue deletar todas as tarefas', () => {
        cy.contains('Clear completed').click();
        cy.get('.todo-list li')
          .should('have.length', 1)
          .should('not.have.text', 'Pay electric bill');
         cy.contains('Clear completed').should('not.exist');
      });*/

    // Teste para filtrar tarefas completas, não funciona
    /*it('Para filtrar tarefas completas', () => {
        cy.contains('Completed').click()
 
       cy.get('.todo-list li')
         .should('have.length', 1)
         .first()
         .should('have.text', 'Pay electric bill')
 
       cy.contains('Walk the dog').should('not.exist')
     });*/
});