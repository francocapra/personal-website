# Guia Detalhado de CI/CD para o Site Pessoal

Este guia explica como implementar e configurar o pipeline de Integração Contínua (CI) e Entrega Contínua (CD) para o site pessoal usando GitHub Actions e Cloudflare Pages.

## Visão Geral do Pipeline

O pipeline de CI/CD implementado automatiza:
- Execução de testes (acessibilidade, responsividade)
- Verificação de qualidade de código (linting, formatação)
- Deploy automático para Cloudflare Pages

## Pré-requisitos

1. Conta no GitHub com o repositório do site
2. Conta no Cloudflare com Pages configurado
3. Token de API do Cloudflare com permissões para Pages
4. ID da conta Cloudflare

## Estrutura do Workflow

O arquivo `.github/workflows/ci-cd.yml` já foi criado com a seguinte estrutura:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    # Executa testes automatizados
    ...
  
  lint:
    # Verifica qualidade do código
    ...
  
  deploy:
    # Realiza o deploy para Cloudflare Pages
    ...
```

## Passos para Configuração Completa

### 1. Verificar a Integração com Cloudflare Pages

O Cloudflare Pages já está configurado para monitorar a branch main do repositório. Confirme que a integração está funcionando corretamente:

1. Acesse o dashboard do Cloudflare
2. Vá para "Pages" > "personal-website"
3. Verifique se o status da integração com GitHub está ativo
4. Confirme que a branch configurada para deploy é "main"

**Nota**: Não são necessários segredos adicionais para o deploy, pois o Cloudflare Pages já está integrado diretamente com o GitHub.

### 2. Verificar a Integração do Cloudflare Pages com GitHub

Para confirmar que o Cloudflare Pages está corretamente conectado ao seu repositório GitHub:

1. Acesse o [Dashboard do Cloudflare](https://dash.cloudflare.com/)
2. Vá para "Pages" e selecione seu projeto
3. Clique na aba "Settings" > "Builds & deployments"
4. Verifique se:
   - A conexão com GitHub está ativa
   - O repositório correto está selecionado
   - A branch "main" está configurada para deploy automático
   - As configurações de build estão corretas para seu projeto

Se a integração não estiver configurada, você pode conectar seu repositório GitHub seguindo as instruções no painel do Cloudflare Pages.

### 3. Configurar Notificações (Opcional)

Você pode configurar notificações para ser alertado sobre o status dos workflows:

1. Acesse seu repositório no GitHub
2. Vá para "Settings" > "Notifications"
3. Configure as preferências de notificação para "Workflows"

Isso permitirá que você seja notificado quando os workflows forem executados, falharem ou tiverem sucesso.

### 4. Verificar Configurações do Cloudflare Pages

Como o Cloudflare Pages já está configurado, verifique se as configurações estão corretas:

1. Acesse o [Dashboard do Cloudflare](https://dash.cloudflare.com/)
2. Vá para "Pages" e selecione seu projeto
3. Clique em "Settings" > "Build & deployments"
4. Verifique as configurações de build:
   - Framework preset: Deve estar configurado corretamente para seu projeto
   - Build command: Deve estar configurado conforme necessário
   - Build output directory: Deve apontar para o diretório correto
   - Branch deployments: Deve estar configurado para a branch "main"
5. Se necessário, ajuste as configurações clicando em "Edit"

### 5. Personalizar o Workflow (Opcional)

Você pode personalizar o workflow conforme necessário:

- Alterar a versão do Node.js
- Modificar os comandos de teste
- Adicionar etapas de build específicas
- Configurar notificações

## Como Funciona o Pipeline

1. **Quando acionado:**
   - Em cada push para a branch main
   - Em cada pull request para a branch main

2. **Job de Testes:**
   - Faz checkout do código
   - Configura Node.js
   - Instala dependências
   - Instala o navegador Chromium para Playwright
   - Executa os testes
   - Armazena relatórios de teste como artefatos

3. **Job de Linting:**
   - Verifica a formatação do código com Prettier
   - Executa ESLint para garantir qualidade do código

4. **Job: Verificação Final**

Este job:
- Só executa quando os testes e linting passam
- Só executa em pushes para a branch main
- Confirma que o código está pronto para deploy
- Cria um comentário no commit informando que o deploy será iniciado pelo Cloudflare Pages

## Monitoramento e Solução de Problemas

### Monitoramento

Você pode monitorar o status das execuções do workflow:

1. Acesse seu repositório no GitHub
2. Vá para a aba "Actions"
3. Veja o histórico de execuções e seus status

### Solução de Problemas Comuns

- **Falha nos testes:** Verifique os logs para identificar quais testes falharam
- **Falha no linting:** Corrija os problemas de formatação ou estilo de código
- **Falha no deploy:** Verifique se os segredos estão configurados corretamente

## Benefícios da Implementação

- **Garantia de qualidade:** Evita que código com problemas seja implantado
- **Automação:** Reduz trabalho manual e possibilidade de erros humanos
- **Feedback rápido:** Identifica problemas logo após as alterações
- **Histórico de builds:** Mantém registro de todas as builds e seus resultados

## Próximos Passos

- Adicionar testes de performance com Lighthouse CLI
- Configurar notificações de falha/sucesso
- Implementar ambientes de staging e produção
- Adicionar análise de cobertura de código
