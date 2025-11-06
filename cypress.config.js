const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // This line sets up the cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use esbuild preprocessor
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
     on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'edge') {
          // Launch Chrome in incognito mode
          launchOptions.args.push('--incognito')
        }
        return launchOptions
      });

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://example.com",
  },
});