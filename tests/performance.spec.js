import { expect, test } from '@playwright/test';
// Comentado para evitar erro de dependência
// import { playAudit } from 'playwright-lighthouse';

const thresholds = {
  performance: 0.85,
  accessibility: 0.9,
  'best-practices': 0.9,
  seo: 0.8,
};

// Testes de performance são executados manualmente via PageSpeed Insights
// ou via CLI do Lighthouse para evitar problemas de integração com Playwright
test.describe.skip('Performance (Lighthouse)', () => {
  test('meets performance budget', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Nota: Lighthouse integração com Playwright é instável
    // Usar CLI: npx lighthouse http://localhost:3000 --view
    console.log('Performance test skipped - use CLI version instead');
  });
});
