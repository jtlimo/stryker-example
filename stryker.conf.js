module.exports = function(config) {
  config.set({
    mutator: "javascript",
    mutate: [
        './components/**/*.js',
        '!./components/example/domain/domain-example.unit.test.js'
    ],
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions: {
      spec: ['./components/**/*.test.js'],
    },
  });
};
