# Windsurf Guidelines

Este documento explica cada regra definida em `.windsurfrules` e como o time deve lidar com lint, testes e formatação.

## Arquitetura

- **files_max_lines = 250**: quebre arquivos maiores.
- **function_max_lines = 50**: aplique composição de funções.
- **layers**: respeitar pastas `app/ ui/ hooks/ services/ lib/ infra/ tests`.
- **prohibit_relative_parent_imports**: use aliases no `tsconfig.json`.

## Estilo de Código

- **var_case = camelCase**, **component_case = PascalCase**.
- **print_width = 100**, **semi = false**, **single_quote = true**.
- Instalar extensão Prettier no editor.

## Performance

- **dynamic_import_threshold_kb = 25**: use `React.lazy`/`next/dynamic`.
- **require_virtualization_for_lists = 100**: usar `react-window`.

## UX/a11y

- **require_aria_for_interactive**: botões, links, campos com descrições.
- **all_async_fn_must_show_spinner**: usar `isLoading` + `<Spinner />`.

## Testing & Docs

- **branches_test_coverage = 80**: Cobertura mínima via `vitest` ou `jest`.
- **jsdoc_required = public_functions**: documentar helpers.

## Fluxo de Desenvolvimento

1. `npm install`
2. `npx husky install` (apenas uma vez após clone)
3. Commits disparam `lint-staged` + testes. Se algo falhar, commit é abortado.
4. Use `npm run lint` e `npm run format` antes de abrir PR.
