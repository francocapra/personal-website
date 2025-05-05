# Franco Capra - Personal Website

Este projeto é um portfólio pessoal moderno, responsivo e fácil de manter, utilizando HTML, CSS e JavaScript puro.

## Estrutura de Pastas

```
personal-website/
├── src/
│   ├── assets/           # Imagens e outros recursos
│   ├── components/       # CSS modular de componentes (botões, nav, etc.)
│   ├── js/               # Módulos JS específicos (ex: animações)
│   ├── modules/          # Módulos JS principais (tema, formulário, etc.)
│   ├── sections/         # CSS modular por seção da página (hero, about, etc.)
│   ├── index.html        # Estrutura principal HTML
│   ├── script.js         # Ponto de entrada JS, importa módulos
│   └── styles.css        # CSS global, variáveis e imports
├── docs/                 # Documentação detalhada
├── tests/                # Testes Playwright
├── .github/              # Workflows de CI/CD
├── ... (arquivos de configuração, etc.)
```

- Todo o código fonte (HTML, CSS, JS, Assets) reside no diretório `src/`.
- CSS e JS são modularizados conforme as melhores práticas.
- Documentação detalhada está em `/docs`.

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências para testes e lint:

   ```bash
   npm install
   ```

3. Inicie um servidor local para visualizar o site:

   ```bash
   npm run serve
   ```

4. Acesse http://localhost:8080 (ou a porta indicada pelo `serve`)

> O site funciona apenas com arquivos estáticos (HTML, CSS, JS puro). Não é necessário nenhum build ou transpilação.

## Deploy

O deploy é feito automaticamente pelo Cloudflare Pages ao subir alterações no branch `main` do GitHub.

## Desenvolvimento

- O projeto utiliza ESLint e Prettier para manter a qualidade e formatação do código.
- Husky executa testes Playwright automaticamente antes de cada commit.
- Testes automatizados podem ser executados com `npm test`.

## Características

- Design responsivo para todos os tamanhos de tela
- Modo claro/escuro com detecção automática de preferência do sistema
- Navegação suave
- Formulário de contato funcional
- Otimizado para SEO e acessibilidade (testes Playwright/axe-core)
- Estrutura modular de CSS e JS para facilitar manutenção e colaboração por IA
- **Acessibilidade garantida:** contraste de cores revisado e testado automaticamente (WCAG 2 AA)
- Código semântico, landmarks e roles apropriados

---

## Documentation

- [Documentation Index](docs/README.md)

Para todas as convenções, regras e guias detalhados, consulte a documentação acima.
