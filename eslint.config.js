import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
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

  // TypeScript configurations
  ...tseslint.configs.recommended,

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
      '@typescript-eslint/no-unused-expressions': 'warn', // Apply specific TS rules if needed, or disable
      'no-undef': 'error',
    },
  },

  // React configurations (using the new flat config structure)
  {
    files: ['**/*.{jsx,tsx}'],
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
    files: ['**/*.{js,jsx,ts,tsx,mjs}'], // Apply to all relevant files
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Explicitly point to tsconfig
        },
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

  // Custom rules and overrides for all JS/TS files
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'], // Apply globally or adjust as needed
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
      'no-unused-vars': 'off', // Disabled in favor of TypeScript rule

      // TypeScript rules overrides
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Apply Prettier recommended rules to disable conflicting style rules
      ...prettierConfig.rules,
    },
  }
);
