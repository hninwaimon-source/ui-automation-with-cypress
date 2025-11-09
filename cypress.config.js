const { defineConfig } = require('cypress');

module.exports = defineConfig({

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    },
    
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        specPattern: 'cypress/integration/**/*.feature'
    }
});
