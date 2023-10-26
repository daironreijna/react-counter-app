module.exports = {
    testEnvironment: 'jsdom', // Specify the test environment
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'], // Define test file patterns

    // Other Jest configuration options
    setupFilesAfterEnv: ['./setup.js'],
};