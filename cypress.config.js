const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    baseUrl: "https://coe-webstore.tdlbox.com/",
    setupNodeEvents(on, config) {
      trashAssetsBeforeRuns: true;
      // implement node event listeners here
    },
  },
});
