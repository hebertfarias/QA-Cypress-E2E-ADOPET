
describe('Api Adopet', ()=> {
    const tempoEsperado = Math.random() * 1000
       
    it('Mensagens API', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/d6c3d667-257e-415c-b294-da2b47d29ae2',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg') // Tem intermitencia nas analises e um teste Flaky           
            expect(res.duration).to.be.lte(tempoEsperado)
    });
  });
});