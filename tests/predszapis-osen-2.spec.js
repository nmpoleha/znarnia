import { test, expect } from '@playwright/test'

const URL = '/znarnia/predszapis-osen-2/'

const VIEWPORTS = [
  { name: 'mobile-320',  width: 320,  height: 812 },
  { name: 'mobile-390',  width: 390,  height: 844 },
  { name: 'tablet-768',  width: 768,  height: 1024 },
  { name: 'tablet-960',  width: 960,  height: 700 },
  { name: 'desktop-1280', width: 1280, height: 900 },
  { name: 'desktop-1440', width: 1440, height: 900 },
]

for (const vp of VIEWPORTS) {
  test(`layout ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height })
    await page.goto(URL)
    await page.waitForLoadState('networkidle')

    // No horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth, `horizontal overflow at ${vp.name}`).toBeLessThanOrEqual(vp.width + 2)

    // Hero is visible
    await expect(page.locator('.p2-hero')).toBeVisible()

    // Photo placeholder visible
    await expect(page.locator('.p2-hero__photo')).toBeVisible()

    // Photo placeholder has height > 0
    const photoEl = page.locator('.p2-hero__photo')
    const photoBox = await photoEl.boundingBox()
    expect(photoBox.height, 'photo placeholder height').toBeGreaterThan(0)

    // No element wider than viewport
    const overflow = await page.evaluate(() => {
      const vw = window.innerWidth
      return Array.from(document.querySelectorAll('*')).some(el => {
        const r = el.getBoundingClientRect()
        return r.right > vw + 2
      })
    })
    expect(overflow, `element overflows viewport at ${vp.name}`).toBe(false)

    await page.screenshot({ path: `tests/screenshots/p2-${vp.name}.png`, fullPage: true })
  })
}

test('photo is in flow (not absolute)', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto(URL)
  await page.waitForLoadState('networkidle')

  const pos = await page.evaluate(() => {
    const el = document.querySelector('.p2-hero__photo-wrap')
    return window.getComputedStyle(el).position
  })
  expect(pos, 'photo wrap must not be absolute').not.toBe('absolute')
})

test('hero grid gap is generous (≥ 48px) on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto(URL)
  await page.waitForLoadState('networkidle')

  const gap = await page.evaluate(() => {
    const inner = document.querySelector('.p2-hero__inner')
    return parseInt(window.getComputedStyle(inner).columnGap)
  })
  expect(gap, 'hero grid gap').toBeGreaterThanOrEqual(48)
})

test('section padding is generous (≥ 64px) on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto(URL)
  await page.waitForLoadState('networkidle')

  const pt = await page.evaluate(() => {
    const el = document.querySelector('.p2-how')
    return parseInt(window.getComputedStyle(el).paddingTop)
  })
  expect(pt, 'section padding-top').toBeGreaterThanOrEqual(64)
})
