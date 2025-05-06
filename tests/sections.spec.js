import { test, expect } from '@playwright/test';

test.describe('Section Screenshots', () => {
  test('should capture screenshots of different page sections', async ({
    page,
  }) => {
    await page.goto('/'); // Navigate to the base URL served locally
    await page.waitForLoadState('networkidle'); // Wait for the page to be relatively settled

    // Define the selectors for the sections
    const sectionSelectors = [
      '#home',
      '#about',
      '#experience',
      '#projects',
      '#contact',
    ];

    // Loop through sections, scroll, and screenshot
    for (const selector of sectionSelectors) {
      const sectionElement = page.locator(selector);

      // Check if the element exists before trying to interact
      if ((await sectionElement.count()) > 0) {
        console.log(`Scrolling to section: ${selector}`);
        await sectionElement.scrollIntoViewIfNeeded();

        // Optional: Wait a moment for animations or lazy-loaded content
        await page.waitForTimeout(500); // Adjust timing if needed

        // Create a filename from the selector (removing '#' and '/')
        const filename = `screenshot-section-${selector.replace(/[#/]/g, '')}.png`;
        console.log(`Taking screenshot: ${filename}`);

        // Take a screenshot of the current viewport
        await page.screenshot({ path: filename });
      } else {
        console.warn(`Section not found: ${selector}`);
      }
    }
  });

  test('should capture screenshots of different page sections in dark mode', async ({
    page,
  }) => {
    await page.goto('/'); // Navigate to the base URL served locally
    await page.waitForLoadState('networkidle'); // Wait for the page to be relatively settled

    // Click the theme toggle button to switch to dark mode
    console.log('Switching to dark mode...');
    const themeToggle = page.locator('.theme-toggle i'); // Selector for the theme icon
    await themeToggle.click();
    await page.waitForTimeout(500); // Wait for theme transition

    // Define the selectors for the sections
    const sectionSelectors = [
      '#home',
      '#about',
      '#experience',
      '#projects',
      '#contact',
    ];

    // Loop through sections, scroll, and screenshot
    for (const selector of sectionSelectors) {
      const sectionElement = page.locator(selector);

      // Check if the element exists before trying to interact
      if ((await sectionElement.count()) > 0) {
        console.log(`Scrolling to section (dark mode): ${selector}`);
        await sectionElement.scrollIntoViewIfNeeded();

        // Optional: Wait a moment for animations or lazy-loaded content
        await page.waitForTimeout(500); // Adjust timing if needed

        // Create a filename from the selector (removing '#' and '/') with dark suffix
        const filename = `screenshot-section-${selector.replace(/[#/]/g, '')}-dark.png`;
        console.log(`Taking screenshot (dark mode): ${filename}`);

        // Take a screenshot of the current viewport
        await page.screenshot({ path: filename });
      } else {
        console.warn(`Section not found (dark mode): ${selector}`);
      }
    }
  });
});
