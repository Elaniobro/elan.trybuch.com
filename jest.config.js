require('dotenv').config()
const { defaults } = require('jest-config')
const env = process.env.NODE_ENV.toUpperCase()
const puppeteerModes = ['acceptance', 'integration']
const { TEST_MODE } = process.env
const PUPPETEER_MODE = puppeteerModes.includes(TEST_MODE)

process.env.API_URL = process.env[`API_${env}_URL`]
process.env.API_KEY = process.env[`API_${env}_KEY`]

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  preset: PUPPETEER_MODE ? 'jest-puppeteer' : defaults.preset,
  setupFiles: ['dotenv/config', './nuxt.config.js'],
  setupFilesAfterEnv: ['dotenv/config', './nuxt.config.js'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testMatch:
    TEST_MODE === 'integration'
      ? ['**/?(*.)+(integration).[tj]s?(x)']
      : defaults.testMatch,
  testURL: 'http://localhost:3000',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
