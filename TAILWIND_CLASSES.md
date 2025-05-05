# Documentação de Classes Tailwind

Este documento serve como referência para as principais classes Tailwind utilizadas no projeto, organizadas por componente e funcionalidade.

## Esquema de Cores

O esquema de cores segue as variáveis definidas no `tailwind.config.js` e inclui suporte para tema claro e escuro:

```
- primary / primary-dark: Cor principal para destaque (azul)
- secondary: Cor secundária para cabeçalhos e subtítulos
- accent / accent-dark: Cor de destaque para hover e elementos interativos
- background / background-dark: Cor de fundo principal
- background-light / background-dark-light: Cor de fundo para cards e elementos elevados
- text / text-dark: Cor padrão para textos
- gray-light / gray-dark: Cor para bordas e separadores
```

## Tipografia

```
- text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl
- font-light, font-normal, font-medium, font-semibold, font-bold
- leading-tight, leading-normal, leading-relaxed, leading-loose
- tracking-tight, tracking-normal, tracking-wide
- text-center, text-left, text-right
```

## Layout Responsivo

Utilizamos breakpoints para garantir uma experiência adequada em diferentes dispositivos:

```
- sm: min-width 640px
- md: min-width 768px
- lg: min-width 1024px
- xl: min-width 1280px
- 2xl: min-width 1536px
```

Classes comuns para layout responsivo:

```
- flex-col: Empilha elementos verticalmente (mobile-first)
- md:flex-row: Alinha elementos horizontalmente em telas médias
- grid-cols-1 md:grid-cols-2 lg:grid-cols-3: Grid responsivo que aumenta colunas em telas maiores
- hidden md:flex: Oculta em mobile, exibe em telas médias e acima
- max-w-xl, max-w-2xl, max-w-3xl, max-w-4xl, max-w-5xl, max-w-6xl: Controle da largura máxima
```

## Componentes Principais

### Navegação

```
- fixed: Mantém a navbar fixa no topo
- top-0 left-0 w-full: Posicionamento e largura
- shadow-md: Efeito de elevação
- z-50: Define a ordem de empilhamento
- hidden md:flex: Esconde em dispositivos móveis e exibe em telas médias
```

### Cards 

Cards de Skills/Experiência:
```
- rounded-lg: Cantos arredondados
- bg-background-light dark:bg-background-dark-light: Cor de fundo adaptável 
- p-5, p-6, p-8: Diferentes níveis de padding interno
- shadow hover:shadow-md: Efeito sutil de elevação com interação de hover
- transition-all: Suaviza as transições de propriedades
```

### Botões

```
- px-6 py-3: Padding horizontal e vertical
- bg-primary text-white: Cores primárias (fundo e texto)
- font-medium: Peso da fonte
- rounded-lg: Bordas arredondadas
- hover:bg-primary/90: Efeito hover com opacidade
- transition-colors: Transição suave de cores
- focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2: Estilo de foco acessível
```

Botão Secundário (outline):
```
- border-2 border-primary: Borda com cor primária
- text-primary: Texto na cor primária
- hover:bg-primary/10: Fundo translúcido no hover
```

### Lista com Marcadores

```
- space-y-2: Espaçamento entre itens
- list-disc: Estilo de marcador como disco
- pl-5: Padding à esquerda
- mt-2: Margem superior
```

### Formulários

Inputs e Textareas:
```
- px-4 py-3: Padding interno
- rounded-lg: Cantos arredondados
- border border-gray-light: Estilo da borda
- focus:border-primary focus:outline-none: Estilo do estado de foco
- transition-colors: Transição suave
- dark:bg-background-dark-light dark:border-gray-dark-light: Suporte ao modo escuro
```

## Efeitos e Transições

```
- transition-colors: Transição suave de cores
- transition-transform: Transição suave de transformações
- duration-300: Duração da transição em milissegundos
- hover:shadow-md: Aumenta a sombra no hover
- hover:text-primary: Muda a cor do texto no hover
```

## Tema Escuro

Para suportar o tema escuro, usamos estas variantes:

```
- dark:bg-background-dark
- dark:text-text-dark
- dark:border-gray-dark
- dark:bg-background-dark-light
```

## Utilitários de Acessibilidade

```
- sr-only: Visível apenas para leitores de tela
- focus:outline-none focus:ring-2: Melhora a visibilidade do foco para usuários de teclado
- aria-label: Usado para fornecer descrições para leitores de tela
- aria-hidden="true": Para elementos decorativos
```
