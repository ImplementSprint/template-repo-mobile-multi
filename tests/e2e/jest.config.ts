import type { Config } from 'jest';

const config: Config = {
  rootDir: '../..',
  testMatch: ['<rootDir>/tests/e2e/**/*.e2e.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  verbose: true,
  testRunner: 'jest-circus/runner',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  reporters: ['detox/runners/jest/reporter'],
  setupFilesAfterEnv: ['<rootDir>/tests/e2e/init.ts'],
};

export default config;