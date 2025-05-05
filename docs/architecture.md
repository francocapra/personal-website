# Controle do Projeto - Website Pessoal Franco Capra

Este documento serve como guia central e controle do projeto de atualização do website pessoal de Franco Capra, com implementação de padrões de codificação e migração para Tailwind CSS.

**Data de atualização:** 03/05/2025

## 📋 Panorama do Projeto

Este projeto visa estabelecer regras de codificação claras e consistentes para todo o código-fonte, além de modernizar a implementação de estilos através da migração para o Tailwind CSS. A implementação está sendo conduzida em fases progressivas e bem definidas para garantir estabilidade durante todo o processo.

## 🛠️ Ferramentas e Metodologias

- **Model Context Protocol (MCP):** Utilizar os servidores MCP sempre que necessário para tarefas especializadas:
  - **github MCP:** Para operações relacionadas ao GitHub
  - **playwright MCP:** Para automação de navegador e testes
  - **sequential-thinking MCP:** Para resolução de problemas complexos que exigem raciocínio estruturado

## 🌟 Fases e Tarefas do Projeto

### Fase 1: Definição das Regras do Projeto ✅ CONCLUÍDO

**Descrição:** Estabelecimento das regras de codificação, formatação e estilo que serão aplicadas consistentemente em todo o projeto.

**Tarefas:**

- ✅ Criar arquivo [`STYLE_GUIDE.md`](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/STYLE_GUIDE.md) com regras de estilo e convenções
- ✅ Instalar e configurar ESLint para validação de código
- ✅ Instalar e configurar Prettier para formatação consistente
- ✅ Configurar Husky e lint-staged para automatizar verificações pré-commit
- ✅ Estabelecer regras específicas para TypeScript no ESLint
- ✅ Documentar o processo de instalação e configuração

**Dependências:** Nenhuma

**Responsáveis:** Franco Capra, Cascade

### Fase 2: Implementação Progressiva das Regras ✅ CONCLUÍDO

**Descrição:** Aplicação das regras estabelecidas ao código existente e correção de problemas identificados.

**Tarefas:**

- ✅ Executar Prettier para formatar todo o código existente
- ✅ Rodar ESLint para identificar violações de estilo
- ✅ Resolver erros `no-undef` em `assets/js/script.mjs`
- ✅ Atualizar configuração do ESLint para usar formato moderno (`eslint.config.js`)
- ✅ Ajustar configuração para ignorar arquivos gerados/transpilados
- ✅ Confirmar funcionamento dos hooks pré-commit
- ✅ Testar a integração completa do fluxo de verificação

**Dependências:** Fase 1

**Responsáveis:** Franco Capra, Cascade

### Fase 3: Planejamento da Migração para Tailwind CSS ✅ CONCLUÍDO

**Descrição:** Preparação de configuração e estratégia para migrar gradualmente de CSS personalizado para Tailwind CSS.

**Tarefas:**

- ✅ Instalar dependências (`tailwindcss`, `postcss`, `autoprefixer`)
- ✅ Criar arquivos de configuração do Tailwind (`tailwind.config.js`, `postcss.config.js`)
- ✅ Mapear cores e variáveis existentes para o tema do Tailwind
- ✅ Criar [assets/css/main.css](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/assets/css/main.css) com diretivas do Tailwind
- ✅ Configurar script `build:css` no package.json
- ✅ Incluir CSS gerado no HTML
- ✅ Desenvolver o plano detalhado de migração ([TAILWIND_MIGRATION.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/TAILWIND_MIGRATION.md))
- ✅ Criar plugin personalizado para integrar com sistema de temas existente

**Dependências:** Fase 2

**Responsáveis:** Franco Capra, Cascade

### Fase 4: Implementação do Tailwind CSS ✅ CONCLUÍDA

**Descrição:** Migração gradual dos estilos existentes para Tailwind CSS, seguindo o plano estabelecido.

**Tarefas:**

- 🔄 Implementar elementos básicos (tipografia, cores, espaçamento)
  - ✅ Migrar estilos do `<body>` para Tailwind
  - ✅ Migrar cabeçalhos (`<h2>`, `<h3>`) para Tailwind
  - ✅ Converter cartões de habilidades para Tailwind
  - ✅ Adaptar listas para Tailwind
  - ✅ Migrar sistema de grid para grid responsivo do Tailwind
  - ✅ Converter formulário de contato para Tailwind
  - ✅ Migrar botões para Tailwind
- 🔄 Implementar componentes independentes (botões, cards, badges)
  - ✅ Migrar cards de experiência profissional para Tailwind
  - ✅ Adicionar elementos visuais da timeline com classes do Tailwind
  - ✅ Migrar seção About Me para Tailwind
  - ✅ Migrar seção Skills para Tailwind
  - ✅ Migrar seção de contato para Tailwind
  - ✅ Migrar rodapé para Tailwind
- 🔄 Migrar componentes de layout (navegação, grid, seções)
  - ✅ Migrar navegação principal para Tailwind
  - ✅ Implementar responsividade na navegação
  - ✅ Adicionar menu mobile responsivo
  - ✅ Migrar seção hero para Tailwind
  - ✅ Adicionar call-to-action na seção hero
- ✅ Adaptar elementos responsivos e interativos
  - ✅ Adicionar comportamento responsivo para diferentes dispositivos
  - ✅ Implementar smooth scrolling para melhor UX
  - ✅ Melhorar transições para tema claro/escuro
- ✅ Documentar as classes Tailwind usadas para elementos principais
  - ✅ Criar arquivo `TAILWIND_CLASSES.md` com documentação completa
  - ✅ Documentar padrões de cores, tipografia e layout

**Dependências:** Fase 3

**Responsáveis:** Franco Capra, Cascade

### Fase 5: Testes e Validação 🔄 EM ANDAMENTO

**Descrição:** Verificar a qualidade, compatibilidade e acessibilidade do projeto após a migração para o Tailwind CSS.

**Tarefas:**

- ✅ Verificar compatibilidade com diferentes dispositivos e navegadores
  - ✅ Testar em dispositivos móveis (iOS e Android)
  - ✅ Testar em tablets
  - ✅ Testar em desktops com diferentes tamanhos de tela
  - ✅ Validar nos principais navegadores (Chrome, Firefox, Safari, Edge)
- ✅ Validar integridade do design durante a transição
  - ✅ Confirmar que o design está consistente em todos os componentes
  - ✅ Verificar transições entre modo claro/escuro
  - ✅ Validar animações e interações
- ✅ Confirmar acessibilidade e boas práticas
  - ✅ Executar validador de acessibilidade (axe via Playwright)
  - ✅ Verificar uso correto de atributos ARIA
  - ✅ Testar navegação por teclado
  - ✅ Validar contraste de cores
- ✅ Otimizar performance
  - ✅ Executar PageSpeed Insights (via Lighthouse)
  - ✅ Verificar tempo de carregamento
  - ✅ Otimizar imagens e assets

**Dependências:** Fase 4

**Responsáveis:** Franco Capra

## 📁 Arquivos Relevantes

### Configuração e Documentação

- [.eslintrc.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/.eslintrc.js) - Configuração antiga do ESLint
- [eslint.config.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/eslint.config.js) - Nova configuração do ESLint
- [.prettierrc.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/.prettierrc.js) - Configuração do Prettier
- [package.json](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/package.json) - Scripts e dependências
- [STYLE_GUIDE.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/STYLE_GUIDE.md) - Guia de estilo de código
- [TAILWIND_MIGRATION.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/TAILWIND_MIGRATION.md) - Plano detalhado de migração para Tailwind

### Tailwind CSS

- [tailwind.config.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/tailwind.config.js) - Configuração do Tailwind CSS
- [postcss.config.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/postcss.config.js) - Configuração do PostCSS
- [assets/css/main.css](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/assets/css/main.css) - Arquivo CSS base com diretivas Tailwind
- [assets/css/output.css](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/assets/css/output.css) - Arquivo CSS gerado pelo Tailwind
- [plugins/tailwind-theme-plugin.js](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/plugins/tailwind-theme-plugin.js) - Plugin personalizado para integração com temas

### Conteúdo Principal

- [index.html](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/index.html) - Arquivo HTML principal
- [assets/css/styles.css](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/assets/css/styles.css) - Estilos CSS originais
- [assets/js/script.mjs](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/assets/js/script.mjs) - JavaScript transpilado

## 📝 Estado da Memória

### Decisões-Chave Tomadas

1. **Configuração do Linting e Formatação:**

   - ESLint como ferramenta de linting
   - Prettier para formatação automática
   - Configuração integrada via `eslint-config-prettier`
   - Hooks de pré-commit via Husky e lint-staged

2. **Abordagem para Tailwind CSS:**

   - Migração gradual e progressiva
   - Manutenção temporária de ambos os CSS (original e Tailwind) durante a transição
   - Customização do tema do Tailwind para corresponder às cores e variáveis existentes
   - Criação de plugin personalizado para integrar com o sistema de temas do site

3. **Estratégia de Implementação:**
   - Abordagem por componentes, começando pelos elementos mais simples
   - Priorização de manter a aparência visual idêntica durante a migração
   - Foco em acessibilidade e responsividade em todos os componentes

### Pontos Importantes do Histórico

- Alguns desafios com a execução do Tailwind CLI via npm scripts foram resolvidos
- O sistema de temas (claro/escuro) foi mapeado para funcionar com o Tailwind
- Todas as cores e variáveis CSS foram mapeadas para o tema personalizado no Tailwind

### Configurações Estabelecidas

- **ESLint:** Configurado para TypeScript, com regras estritas
- **Prettier:** Configurado para usar aspas simples e trailing commas
- **Tailwind:** Configurado com tema personalizado que corresponde às cores/variáveis existentes
- **Scripts NPM:** Atualizados para executar build CSS, linting e formatação

## 🔄 Preservação do Progresso

### Instruções para Restaurar o Contexto

1. Leia este documento completamente para entender o estado atual do projeto
2. Verifique as fases do projeto para determinar o que já foi concluído e o que está em andamento
3. Consulte o [TAILWIND_MIGRATION.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/TAILWIND_MIGRATION.md) para detalhes sobre a estratégia de migração
4. Verifique os arquivos de configuração relevantes para entender as configurações atuais
5. Execute o servidor local para visualizar o estado atual do site:
   ```bash
   npx serve
   ```

### Comandos para Retomar o Trabalho

```bash
# Verificar o estado atual da formatação e linting
npm run lint
npm run format

# Build do CSS do Tailwind (após alterações em main.css ou tailwind.config.js)
npm run build:css

# Executar server local para visualizar alterações
npx serve
```

### Arquivos com Informações Críticas

- [PROJECT_CONTROL.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/PROJECT_CONTROL.md) (este arquivo) - Estado do projeto
- [TAILWIND_MIGRATION.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/TAILWIND_MIGRATION.md) - Plano de migração para Tailwind
- [STYLE_GUIDE.md](/Users/francocapra/Projects/AI-Tools/CascadeProjects/personal-website/STYLE_GUIDE.md) - Guia de estilo e convenções

## 📈 Uso Deste Documento de Controle

Este documento serve como fonte única da verdade para o estado e progresso do projeto. Para utilizá-lo eficazmente:

1. **Atualizações Regulares:** Após cada sessão de trabalho, atualize as marcações de status (✅, 🔄, ⏳, 🚫) conforme o progresso
2. **Checkpoint para Novos Chats:** Utilize este documento como ponto de partida ao iniciar um novo chat ou sessão de trabalho
3. **Comunicação Central:** Referencie este documento ao discutir aspectos específicos do projeto
4. **Rastreamento de Dependências:** Verifique as dependências entre tarefas antes de iniciar um novo componente do trabalho

---

**Documento mantido por:** Franco Capra & Cascade  
**Última atualização significativa:** 03/05/2025
