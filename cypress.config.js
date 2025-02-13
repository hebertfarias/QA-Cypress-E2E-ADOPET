const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mik7mj",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    //reporta as opções escolhidas
    reporterOptions: {
      // diretorio onde vai ficar os relatorios
      reportDir: 'cypress/results',
      // Não ira sobreescrever os arquivos, por isso esta como false
      overwrite: false,
      // Ira gerar relatorios em html, conforme escolhido true
      html: true,
      // Não ira gerar relatorios em json, conforme escolhido false
      json: false,
      // Ira captar formatos de dia, mes, ano hora, minutos e segundos, todos os reportsOptions são de escolha
      timestamps: "mmddyyyy_HHMMss" }
  },
});
