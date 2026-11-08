const apiBaseUrl = Cypress.env("ADOPET_API_URL") || "https://adopet-api-i8qu.onrender.com";

describe("API Adopet", () => {
  it("retorna o nome do perfil do adotante", () => {
    cy.request({
      method: "GET",
      url: `${apiBaseUrl}/adotante/perfil/d6c3d667-257e-415c-b294-da2b47d29ae2`,
      timeout: 10000,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("perfil");
      expect(response.body.perfil).to.have.property("nome", "Ana Maria");
    });
  });
});
