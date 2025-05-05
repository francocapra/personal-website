# Plano de Migração para Tailwind CSS

Este documento define a estratégia para migrar gradualmente os estilos do site de CSS personalizado para Tailwind CSS.

## Configuração Concluída

- [x] Instalação das dependências do Tailwind CSS, PostCSS e Autoprefixer
- [x] Configuração básica com `tailwind.config.js` e `postcss.config.js`
- [x] Criação do arquivo CSS de entrada com diretivas do Tailwind
- [x] Configuração do script `build:css` para gerar o arquivo CSS
- [x] Inclusão do CSS gerado no HTML, mantendo também o CSS existente
- [x] Extensão da configuração do Tailwind para usar as cores e variáveis existentes
- [x] Integração com o sistema de temas existente (claro/escuro)

## Estratégia de Migração

A migração será feita em fases, começando pelos componentes menores e mais simples, para minimizar riscos e permitir testes contínuos.

### Fase 1: Elementos Básicos e Utilitários

Migrar os estilos básicos como:
1. **Tipografia**: Estilos de texto, cabeçalhos, parágrafos
2. **Cores e Temas**: Usar as cores definidas no tema do Tailwind
3. **Espaçamento**: Margens e preenchimentos
4. **Layouts Simples**: Contêineres e grades básicas

### Fase 2: Componentes Independentes

Migrar componentes isolados que não afetam muito o layout geral:
1. **Botões**: Converter as classes de botões para Tailwind
2. **Cards**: Migrar os cartões de experiência, projetos, etc.
3. **Badges e Labels**: Elementos decorativos menores
4. **Ícones**: Garantir compatibilidade dos ícones com o novo sistema

### Fase 3: Componentes de Layout

Abordar os componentes mais complexos que afetam o layout:
1. **Navegação**: Migrar a barra de navegação
2. **Grid e Flex Layouts**: Converter os sistemas de grade
3. **Seções de Página**: Migrar os contêineres de seção
4. **Footer**: Converter o rodapé

### Fase 4: Responsividade e Interatividade

Migrar aspectos responsivos e interativos:
1. **Media Queries**: Substituir por classes responsivas do Tailwind
2. **Animações**: Converter animações para utilitários do Tailwind
3. **Estados Interativos**: Hover, focus, active, etc.
4. **Transições**: Migrar efeitos de transição

### Fase 5: Refinamento e Limpeza

Finalizar a migração:
1. **Remover CSS Redundante**: Eliminar estilos não utilizados
2. **Otimização**: Garantir que apenas classes necessárias sejam incluídas
3. **Documentação**: Atualizar a documentação com as novas convenções
4. **Remoção do CSS Legacy**: Remover completamente o arquivo CSS antigo

## Convenções de Nomenclatura

Seguir as convenções do [STYLE_GUIDE.md](./STYLE_GUIDE.md):

- Usar Tailwind conforme a documentação oficial
- Evitar classes personalizadas sempre que possível
- Quando necessário, usar o padrão `@apply` no arquivo CSS principal
- Para componentes complexos que se repetem, considerar a extração para componentes reutilizáveis

## Ferramentas de Verificação

- `npm run build:css` para gerar o arquivo CSS do Tailwind
- Verificação visual em múltiplos dispositivos
- Teste cruzado em diferentes navegadores

## Conclusão

Esta abordagem permite uma migração gradual e controlada para o Tailwind CSS, mantendo a compatibilidade e o design durante todo o processo. O objetivo final é ter um sistema de design mais consistente, manutenível e flexível.
