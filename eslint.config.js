import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    // Global ignores
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.turbo/',
      '.next/',
      'coverage/',
      'assets/js/**', // Ignore generated JS files
    ],
  },
  // Base recommended configuration from ESLint
  eslintJs.configs.recommended,

  // Configuration for JS/MJS files (Browser environment)
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Keep node globals if they might be used
        es2021: true,
      },
    },
    rules: {
      // Add specific rules for JS/MJS if needed
      'no-undef': 'error',
    },
  },

  // React configurations (using the new flat config structure)
  {
    files: ['**/*.jsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Import plugin configuration
  {
    files: ['**/*.{js,jsx,mjs}'], // Apply to all relevant files
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'warn',
      'import/prefer-default-export': 'off',
    },
  },

  // Custom rules and overrides for all JS files
  {
    files: ['**/*.{js,jsx,mjs}'], // Apply globally or adjust as needed
    languageOptions: {
      globals: {
        // Already defined more specifically above, can remove general browser/node here if desired
        // ...globals.browser,
        // ...globals.node,
        es2021: true,
      },
    },
    rules: {
      // Base ESLint rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Apply Prettier recommended rules to disable conflicting style rules
      ...prettierConfig.rules,
    },
  },
];
