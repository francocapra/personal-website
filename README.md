# Franco Capra - Personal Website

Este projeto é um portfólio pessoal moderno, responsivo e fácil de manter.

## Estrutura de Pastas

```
personal-website/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── img/
├── index.html
├── README.md
├── .gitignore
├── wrangler.toml
```

## Como rodar localmente

1. Clone o repositório
2. Rode um servidor local dentro da pasta do projeto:
   ```
   python3 -m http.server 8000
   ```
3. Acesse http://localhost:8000

## Deploy

O deploy é feito automaticamente pelo Cloudflare Pages ao subir alterações no branch `main` do GitHub.

---

- Todos os arquivos estáticos (CSS, JS) estão em `assets/`.
- Imagens futuras devem ser colocadas em `assets/img/`.
- O arquivo `netlify.toml` pode ser removido se não utilizar mais Netlify.
- O arquivo `wrangler.toml` está configurado para Cloudflare Pages.
