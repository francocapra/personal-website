// Plugin para integrar o atual sistema de temas com o Tailwind CSS
// Isso permite a tradução do atributo data-theme para classes do Tailwind para o modo escuro

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addVariant }) {
  // Adiciona uma variante personalizada para o modo escuro baseado no atributo data-theme
  addVariant('theme-dark', '[data-theme="dark"] &');
});
