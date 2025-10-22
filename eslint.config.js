// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': ['error'],
    },
    ignores: ['dist/*'],
  },
]);
