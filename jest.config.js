// jest.config.js
// that Jest fails the tests if the code coverage falls below 50%
module.exports = {
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
    },
  };
  