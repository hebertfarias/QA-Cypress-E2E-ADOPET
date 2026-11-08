const apiBaseUrl = Cypress.env("ADOPET_API_URL") || "https://adopet-api-i8qu.onrender.com";

describe("API Adopet - mensagens", () => {
  it("retorna mensagens da API", () => {
    cy.request({
      method: "GET",
      url: `${apiBaseUrl}/mensagem/d6c3d667-257e-415c-b294-da2b47d29ae2`,
      timeout: 10000,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("msg");
      expect(response.body.msg).to.be.a("string").and.not.be.empty;
    });
  });
});
