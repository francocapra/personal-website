# Guia de Estilo e Convenções do Projeto

Este documento define as convenções de codificação, estrutura e práticas de desenvolvimento para este projeto.

## 1. Filosofia Geral

- **Clareza e Simplicidade:** O código deve ser fácil de ler, entender e manter.
- **Consistência:** Siga as regras definidas neste guia consistentemente.
- **Funcional e Declarativo:** Prefira padrões funcionais e declarativos. Evite classes onde funções e hooks são suficientes.
- **Modularidade:** Construa componentes e funções pequenas e reutilizáveis.
- **Não se Repita (DRY):** Evite duplicação de código através de abstrações e utilitários.

## 2. TypeScript

- **Tipagem Estrita:** Habilite e respeite o modo `strict` do TypeScript.
- **Interfaces vs Tipos:** Prefira `interface` para definir shapes de objetos e `type` para uniões, interseções ou tipos mais complexos.
- **Evitar `any`:** Use tipos específicos sempre que possível. Se necessário, use `unknown` e faça a devida verificação de tipo.
- **Evitar `enum`:** Use uniões de literais de string/número ou `as const` para criar conjuntos de constantes.
- **Documentação de Tipos:** Use TSDoc para explicar tipos complexos ou props de componentes.

## 3. React & Expo (React Native)

- **Componentes Funcionais:** Use exclusivamente componentes funcionais com Hooks.
- **Nomenclatura de Componentes:** Use PascalCase (ex: `UserProfileCard`). Exporte componentes usando `export function ComponentName(...)` ou `export const ComponentName = (...)`.
- **Nomenclatura de Hooks:** Use camelCase prefixado com `use` (ex: `useUserData`).
- **Props:** Use interfaces TypeScript para definir as props dos componentes.
- **Estado:** Use `useState` para estado local simples. Use `useReducer` ou bibliotecas de gerenciamento de estado (Zustand, Context API com cuidado) para lógica de estado mais complexa.
- **JSX Declarativo:** Mantenha o JSX o mais limpo e semântico possível. Evite lógica complexa diretamente no JSX; extraia para variáveis ou funções auxiliares.
- **Performance:** Utilize `React.memo`, `useCallback`, `useMemo` quando necessário para otimizar, mas evite otimizações prematuras. Use `react-native-reanimated` e `react-native-gesture-handler` para animações e gestos performáticos.
- **Acessibilidade (a11y):** Implemente boas práticas de acessibilidade usando props nativas (`accessibilityLabel`, `accessibilityRole`, etc.).
- **Componentes Nativos/Expo:** Prefira usar os componentes fornecidos pelo React Native e Expo (`View`, `Text`, `Pressable`, componentes da `expo-av`, `expo-camera`, etc.) para garantir consistência e acesso a APIs nativas.

## 4. Estilização (Pré-Tailwind)

- _Esta seção será atualizada após a migração para Tailwind._
- Atualmente (ou anteriormente): Use `StyleSheet.create` para estilos em React Native ou abordagens como Styled Components/CSS Modules na web, conforme aplicável.
- **Pós-Tailwind:** Use exclusivamente classes utilitárias do Tailwind CSS. Defina customizações e temas no `tailwind.config.js`. Evite estilos inline ou `StyleSheet` exceto em casos muito específicos e justificados.

## 5. Estrutura de Arquivos e Nomenclatura

- **Diretórios:** Use `kebab-case` (ex: `src/components/auth-wizard`).
- **Arquivos de Componentes:** Use PascalCase (ex: `UserProfileCard.tsx`).
- **Arquivos de Hooks/Utils:** Use camelCase (ex: `useFetchData.ts`, `stringUtils.ts`).
- **Estrutura Sugerida (Exemplo):**
  ```
  src/
  ├── assets/
  ├── components/
  │   ├── common/
  │   └── feature-specific/
  ├── hooks/
  ├── navigation/
  ├── screens/ (ou pages/)
  ├── services/ (ou api/)
  ├── store/ (ou context/)
  ├── styles/ (ou theme/)
  │   └── tailwind.config.js
  ├── types/
  ├── utils/
  └── App.tsx
  ```
- **Organização Interna de Componentes:**
  1.  Imports
  2.  Interface(s) de Props
  3.  Componente funcional (exportado)
  4.  Subcomponentes (se houver, definidos dentro ou fora)
  5.  Hooks (`useState`, `useEffect`, custom hooks)
  6.  Funções auxiliares (handlers, etc.)
  7.  JSX retornado
  8.  Estilos (`StyleSheet.create` - _a ser removido_) ou configuração relacionada a estilos.

## 6. Formatação e Linting

- **Prettier:** Use Prettier para formatação automática de código. A configuração deve estar no `package.json` ou `.prettierrc`.
- **ESLint:** Use ESLint para identificar problemas de código e garantir aderência aos padrões. A configuração deve estar no `.eslintrc.js` (ou similar).
- **Integração:** Use `lint-staged` e `husky` para rodar Prettier e ESLint automaticamente antes de cada commit.

## 7. Controle de Versão (Git)

- **Branching Model:**
  - `main`: Código de produção estável.
  - `develop`: Branch de integração para novas funcionalidades.
  - `feature/<nome-descritivo>`: Para desenvolvimento de novas funcionalidades (branch a partir de `develop`).
  - `fix/<nome-descritivo>`: Para correções de bugs (branch a partir de `develop` ou `main` se for hotfix).
- **Commits:** Use o padrão [Conventional Commits](https://www.conventionalcommits.org/).
  - Formato: `<type>(<optional scope>): <description>`
  - Exemplos: `feat(auth): add login screen`, `fix(profile): correct user data display`, `chore(deps): update dependencies`, `refactor: improve state management logic`, `docs: update README`
- **Pull Requests (PRs):**
  - Crie PRs de `feature/*` ou `fix/*` para `develop`.
  - Descreva claramente as mudanças no PR.
  - Associe o PR a issues relevantes (se usar GitHub Issues, etc.).
  - PRs devem passar por todas as verificações (lint, tests, build) antes de serem mesclados.

## 8. Revisão de Código

- **Obrigatório:** Pelo menos uma aprovação é necessária para mesclar PRs em `develop`.
- **Foco:** Lógica de negócios, clareza, performance, segurança, aderência às convenções, cobertura de testes.
- **Feedback:** Seja construtivo e claro. Sugira soluções alternativas quando apropriado.

## 9. Testes

- **Ferramentas:** Use Jest e React Testing Library (ou ferramentas específicas do Expo/React Native).
- **Tipos:**
  - **Unitários:** Para funções utilitárias, hooks e lógica isolada.
  - **Integração/Componente:** Para testar interações dentro de um componente ou entre componentes relacionados.
  - **E2E (End-to-End):** (Opcional, mas recomendado para fluxos críticos) Use ferramentas como Detox ou Maestro.
- **Cobertura:** Busque uma cobertura de testes significativa (ex: >70%), especialmente para lógica crítica.
- **Localização:** Coloque arquivos de teste (`*.test.tsx` ou `*.spec.tsx`) próximos aos arquivos que eles testam.

## 10. Documentação

- **README.md:** Mantenha o README atualizado com:
  - Descrição do projeto.
  - Instruções de instalação de dependências.
  - Como rodar o projeto (desenvolvimento, build).
  - Como rodar os testes.
  - Informações sobre a estrutura do projeto.
  - Links para documentação relevante (API, etc.).
- **TSDoc/JSDoc:** Use para documentar funções, hooks, tipos e props complexos ou não óbvios.

## 11. Gerenciamento de Dependências

- Use `npm` ou `yarn` consistentemente.
- Use `npm ci` ou `yarn install --frozen-lockfile` em ambientes de CI/CD para garantir instalações reprodutíveis.
- Mantenha as dependências atualizadas, avaliando o impacto das atualizações.

## 12. Convenções Específicas do Windsurf Cascade

- **Memórias:** Use memórias para registrar decisões arquiteturais, preferências do usuário, ou informações importantes que devem persistir entre sessões.
- **Ferramentas:** Use as ferramentas apropriadas para cada tarefa (edição, busca, execução de comandos, etc.).

---

_Este guia é um documento vivo e pode ser atualizado conforme o projeto evolui._
