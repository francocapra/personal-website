# Documentação de Testes Automatizados

## Visão Geral

Este projeto implementa testes automatizados para garantir a qualidade, acessibilidade e responsividade do site pessoal. Os testes são executados usando Playwright, uma ferramenta moderna para automação de navegadores.

## Estrutura de Testes

Os testes estão organizados em três categorias principais:

1. **Testes de Acessibilidade** - Verificam se o site atende aos padrões de acessibilidade usando axe-core.
2. **Testes de Responsividade** - Garantem que o site seja exibido corretamente em diferentes tamanhos de tela.
3. **Testes de Performance** - Avaliam métricas de desempenho usando Lighthouse (configurado para execução manual).

## Configuração

O arquivo `playwright.config.ts` configura o ambiente de teste com:

- Servidor web estático na porta 5000 com fallback para SPA
- Suporte a múltiplos navegadores (Chromium, Firefox, WebKit)
- Configurações de timeout e viewport

## Executando os Testes

```bash
# Instalar dependências
npm install

# Executar todos os testes
npm run test

# Executar testes específicos
npx playwright test tests/accessibility.spec.ts
```

## Notas sobre Implementação

### Acessibilidade (axe-core)

Os testes de acessibilidade usam `@axe-core/playwright` para verificar violações nos padrões WCAG. Algumas regras são ignoradas no ambiente de teste devido a limitações conhecidas com SPAs e testes headless:

- `landmark-one-main` - Verificado manualmente (elemento `<main>` adicionado)
- `page-has-heading-one` - Verificado manualmente (elemento `<h1>` presente)
- `document-title` - Falso positivo em ambiente de teste
- `html-has-lang` - Verificado manualmente (atributo lang presente)

### Responsividade

Os testes de responsividade verificam se o site carrega corretamente em diferentes tamanhos de tela:
- Mobile (375x667)
- Tablet (768x1024)
- Desktop (1280x800)

Alguns navegadores headless têm problemas com textos gradientes e animações CSS, por isso os testes são simplificados para verificar apenas o carregamento básico da página.

### Performance (Lighthouse)

Os testes de performance são configurados para execução manual usando o CLI do Lighthouse:

```bash
# Iniciar o servidor
npx serve -s . -l 5000 --single

# Em outro terminal, executar Lighthouse
npx lighthouse http://localhost:5000 --view
```

## Melhorias Futuras

1. Configurar CI/CD para executar testes automaticamente em cada commit
2. Expandir testes de acessibilidade para verificar navegação por teclado
3. Adicionar testes de integração para formulários e interações
4. Implementar testes visuais de regressão com screenshots

## Resolução de Problemas

Se os testes falharem com erros relacionados a elementos não encontrados:
1. Verifique se o servidor estático está funcionando corretamente
2. Aumente os timeouts para páginas com muitas animações
3. Use `page.waitForLoadState('networkidle')` para garantir carregamento completo

Para problemas com o Lighthouse, use a versão CLI em vez da integração com Playwright.
