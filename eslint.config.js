import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
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

  // Import plugin configuration
  {
    files: ['**/*.{js,mjs}'], // Apply to JS/MJS files
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
    files: ['**/*.{js,mjs}'], // Apply globally or adjust as needed
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
