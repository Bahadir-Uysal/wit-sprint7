import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import cypress from 'eslint-plugin-cypress'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js için de global değişkenler eklenebilir
        ...globals.commonjs, // CommonJS desteği
        ...globals['shared-node-browser'], // Hem tarayıcı hem de Node ortamı için
        ...globals.cypress, // Cypress global değişkenlerini ekliyoruz
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      cypress, // Cypress plugin'i eklendi
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Cypress test dosyaları için özel konfigürasyon
  {
    files: ['cypress/**/*.cy.{js,jsx}'],
    plugins: {
      cypress,
    },
    env: {
      'cypress/globals': true, // Cypress global değişkenlerini tanımak için
    },
  },
]
