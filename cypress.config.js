const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "mik7mj",
  e2e: {
    setupNodeEvents(on, config) { return config; },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss"
    }
  }
});
