import { test, expect } from '@playwright/test';

// Test to capture a screenshot of the homepage
test.describe('Homepage Screenshot', () => {
  test('should capture homepage screenshot on desktop', async ({ page }) => {
    // Testar desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/'); // Navigate to the base URL served locally
    await expect(page).toHaveURL(new RegExp('localhost')); // Check if it loaded

    // Take the screenshot
    await page.screenshot({
      path: 'playwright-screenshot.png',
      fullPage: true,
    });
    console.log('Screenshot saved to playwright-screenshot.png');
  });
});
