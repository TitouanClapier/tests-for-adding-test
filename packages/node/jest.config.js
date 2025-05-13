module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        lines: 80,
        statements: 80,
        branches: 70,
        functions: 80
      }
    },
    testMatch: ["**/__tests__/**/*.test.ts"]
  };
  