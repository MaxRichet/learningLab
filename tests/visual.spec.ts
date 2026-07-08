import { test, expect } from '@playwright/test'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'
import type { Page, TestInfo } from '@playwright/test'

const PROD_URL = 'https://learning-lab-prod.vercel.app'
const QA_URL = 'https://learning-lab-tan.vercel.app'

// Max % of pixels allowed to differ before the test fails (0 = strict)
const MAX_DIFF_PERCENT = 0.1

const PAGES = [
  { name: 'home',    path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'about',   path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'blog',    path: '/blog' },
]

async function capture(page: Page, url: string): Promise<Buffer> {
  await page.goto(url, { waitUntil: 'networkidle' })
  // Freeze animations for deterministic screenshots
  await page.addStyleTag({
    content: '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }',
  })
  return page.screenshot({ fullPage: true })
}

// If pages have different heights, pad the shorter one with white at the bottom
function normalize(a: PNG, b: PNG): [PNG, PNG] {
  const width  = Math.max(a.width,  b.width)
  const height = Math.max(a.height, b.height)

  function pad(src: PNG): PNG {
    if (src.width === width && src.height === height) return src
    const out = new PNG({ width, height })
    out.data.fill(255) // white background
    for (let y = 0; y < src.height; y++) {
      for (let x = 0; x < src.width; x++) {
        const si = (y * src.width  + x) * 4
        const di = (y * width      + x) * 4
        out.data[di]     = src.data[si]
        out.data[di + 1] = src.data[si + 1]
        out.data[di + 2] = src.data[si + 2]
        out.data[di + 3] = src.data[si + 3]
      }
    }
    return out
  }

  return [pad(a), pad(b)]
}

async function compareAndAttach(
  prodBuffer: Buffer,
  qaBuffer: Buffer,
  testInfo: TestInfo
): Promise<number> {
  let prodPng = PNG.sync.read(prodBuffer)
  let qaPng   = PNG.sync.read(qaBuffer)

  const [prod, qa] = normalize(prodPng, qaPng)
  const { width, height } = prod

  const diff = new PNG({ width, height })
  const mismatchedPixels = pixelmatch(prod.data, qa.data, diff.data, width, height, {
    threshold: 0.1,  // per-pixel sensitivity (0–1), 0.1 ignores anti-aliasing
    includeAA: false,
  })

  await testInfo.attach('prod',  { body: PNG.sync.write(prod),  contentType: 'image/png' })
  await testInfo.attach('qa',    { body: PNG.sync.write(qa),    contentType: 'image/png' })
  await testInfo.attach('diff',  { body: PNG.sync.write(diff),  contentType: 'image/png' })

  return (mismatchedPixels / (width * height)) * 100
}

for (const { name, path } of PAGES) {
  test(`VRT — ${name}`, async ({ page, context }, testInfo) => {
    const prodPage = await context.newPage()
    const [prodBuffer, qaBuffer] = await Promise.all([
      capture(prodPage, PROD_URL + path),
      capture(page, QA_URL + path),
    ])
    await prodPage.close()

    const diffPercent = await compareAndAttach(prodBuffer, qaBuffer, testInfo)

    expect(
      diffPercent,
      `${diffPercent.toFixed(3)}% of pixels differ between Prod and QA`
    ).toBeLessThanOrEqual(MAX_DIFF_PERCENT)
  })
}
