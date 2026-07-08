import { test, expect } from '@playwright/test'

/**
 * Visual Regression Test suite — one screenshot per page.
 *
 * Baseline workflow:
 *   1. Generate baselines against prod:
 *      BASE_URL=https://vrt-demo-prod.vercel.app npx playwright test --update-snapshots
 *
 *   2. Run against QA to detect diffs:
 *      BASE_URL=https://vrt-demo-qa.vercel.app npx playwright test
 *
 *   3. Open the HTML diff report:
 *      npx playwright show-report
 */

const pages = [
  { name: 'home',    path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'about',   path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'blog',    path: '/blog' },
]

for (const { name, path } of pages) {
  test(`VRT — ${name} page`, async ({ page }) => {
    await page.goto(path)

    // Wait for images and fonts to settle
    await page.waitForLoadState('networkidle')

    // Freeze animations so screenshots are deterministic
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
        }
      `,
    })

    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
    })
  })
}
