# Franco Capra - Personal Website

Este projeto é um portfólio pessoal moderno, responsivo e fácil de manter, utilizando HTML, CSS e JavaScript puro.

## Estrutura de Pastas

```
personal-website/
├── assets/
│   └── img/          (para imagens)
├── index.html        (estrutura principal do site)
├── styles.css        (estilos CSS)
├── script.js         (funcionalidades interativas)
├── README.md
├── .gitignore
├── wrangler.toml     (configuração do Cloudflare Pages)
├── _headers          (configuração de cabeçalhos HTTP)
└── .github/          (configurações de CI/CD)
```

## Como rodar localmente

1. Clone o repositório
2. Você pode rodar o projeto de duas maneiras:

   **Usando Python:**

   ```
   python3 -m http.server 8000
   ```

   **Usando o servidor Node.js incluído:**

   ```
   npm install
   npm run serve
   ```

3. Acesse http://localhost:8000 (ou a porta indicada pelo servidor)

## Deploy

O deploy é feito automaticamente pelo Cloudflare Pages ao subir alterações no branch `main` do GitHub.

## Desenvolvimento

- O projeto utiliza ESLint e Prettier para manter a qualidade do código
- Hooks do Git (Husky) são utilizados para garantir que o código esteja formatado antes de cada commit
- Testes automatizados podem ser executados com `npm test`

## Características

- Design responsivo para todos os tamanhos de tela
- Modo claro/escuro com detecção automática de preferência do sistema
- Navegação suave com rolagem animada
- Formulário de contato funcional
- Otimizado para SEO e acessibilidade

---

- Os arquivos principais (HTML, CSS, JS) estão na raiz para facilitar a manutenção
- Imagens devem ser colocadas em `assets/img/`
- O arquivo `wrangler.toml` está configurado para Cloudflare Pages
