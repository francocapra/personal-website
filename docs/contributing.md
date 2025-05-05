# Husky e lint-staged

O projeto já inclui Husky.

```bash
npm run prepare   # instala hooks para novo clone
git commit -m "feat: exemplo" # dispara lint + testes
```

`pre-commit` executa:

1. `lint-staged` → ESLint + Prettier somente nos arquivos alterados.
2. `npm test` → suíte completa.

Para adicionar outro hook:

```bash
npx husky add .husky/pre-push "npm run typecheck"
```
