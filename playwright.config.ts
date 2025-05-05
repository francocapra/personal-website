import { defineConfig } from '@playwright/test'

// Playwright configuration for cross-browser, responsive and accessibility testing
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  workers: 1,

  // Spin up a static web-server before running the tests
  webServer: {
    // Serve the project root as a static site on port 5000
    command: 'npx serve -s . -l 5000 --single',
    port: 5000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL: 'http://localhost:5000',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        launchOptions: { args: ['--remote-debugging-port=9222'] },
      },
    },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
})
