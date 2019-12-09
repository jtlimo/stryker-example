module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: ['./components/**/*.test.js'],
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions: {
      spec: ['./components/**/*.test.js'],
      opts: './test/mocha.opts',
    },
  });
};
