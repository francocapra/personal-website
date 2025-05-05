# Franco Capra - Personal Website

Este projeto é um portfólio pessoal moderno, responsivo e fácil de manter, utilizando HTML, CSS e JavaScript puro.

## Estrutura de Pastas

```
personal-website/
├── assets/           # Imagens
├── index.html        # Estrutura principal
├── styles.css        # CSS global e imports
├── script.js         # Importa módulos JS
├── sections/         # CSS modular por seção
├── components/       # CSS modular de componentes
├── modules/          # JS modular
├── docs/             # Documentação detalhada
├── ...
```

- CSS e JS são modularizados conforme as melhores práticas.
- Documentação detalhada está em `/docs`.

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências para testes e lint:

   ```bash
   npm install
   ```

3. Inicie um servidor local para visualizar o site (exemplo usando Python):

   ```bash
   python3 -m http.server 8000
   ```

4. Acesse http://localhost:8000

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
