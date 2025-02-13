import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
    });
           
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            Cadastro.acessarPaginaDeCadastro();
            Cadastro.preencherFormulario();
            Cadastro.submeterCadastro();
       
        });
     });
