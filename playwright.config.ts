import { defineConfig, devices } from '@playwright/test'

/**
 * Base URL is overridable at runtime:
 *   BASE_URL=https://vrt-demo-prod.vercel.app npx playwright test
 *   BASE_URL=https://vrt-demo-qa.vercel.app   npx playwright test
 *
 * Snapshots stored in tests/__snapshots__ are the baseline (prod).
 * Run against QA with a different BASE_URL to detect visual diffs.
 */
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5173'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1, // sequential for stable screenshot order
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: BASE_URL,
    // Full-page screenshots by default
    screenshot: 'only-on-failure',
    // Consistent viewport for deterministic snapshots
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Snapshot comparison options
  expect: {
    toHaveScreenshot: {
      // Allow up to 1% pixel difference (anti-aliasing, font rendering)
      maxDiffPixelRatio: 0.01,
    },
  },
})
