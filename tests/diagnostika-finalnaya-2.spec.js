import { test, expect } from '@playwright/test'

const URL = '/znarnia/diagnostika-finalnaya-2/'

test.describe('diagnostika-finalnaya-2 — mobile list-head color', () => {
  test('мобильный: list-head имеет пурпурный цвет', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(URL)
    const head = page.locator('.dg-hero__v2-list-head')
    await expect(head).toBeVisible()
    const color = await head.evaluate(el => getComputedStyle(el).color)
    expect(color).toBe('rgb(91, 33, 182)')
  })

  test('десктоп: list-head НЕ имеет пурпурного цвета мобильной версии', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto(URL)
    const head = page.locator('.dg-hero__v2-list-head')
    await expect(head).toBeVisible()
    const color = await head.evaluate(el => getComputedStyle(el).color)
    expect(color).not.toBe('rgb(91, 33, 182)')
  })
})

test.describe('diagnostika-finalnaya-2 — mobile title banner', () => {
  test('мобильный: заголовок имеет тёмный фон (плашка)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(URL)

    const title = page.locator('.dg-hero--v2 .dg-hero__title')
    await expect(title).toBeVisible()

    const bg = await title.evaluate(el =>
      getComputedStyle(el).backgroundImage || getComputedStyle(el).backgroundColor
    )
    // gradient должен быть задан
    expect(bg).toContain('gradient')
  })

  test('мобильный: акцентный текст контрастного оранжевого цвета', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(URL)

    const accent = page.locator('.dg-hero--v2 .dg-hero__title-accent')
    await expect(accent).toBeVisible()

    const color = await accent.evaluate(el => getComputedStyle(el).color)
    // rgb(251, 146, 60) = #fb923c
    expect(color).toBe('rgb(251, 146, 60)')
  })

  test('десктоп: заголовок НЕ имеет тёмного фона', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto(URL)

    const title = page.locator('.dg-hero--v2 .dg-hero__title')
    await expect(title).toBeVisible()

    const bg = await title.evaluate(el => getComputedStyle(el).backgroundImage)
    expect(bg).toBe('none')
  })

  test('мобильный: заголовок на всю ширину (нет скруглений)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto(URL)

    const title = page.locator('.dg-hero--v2 .dg-hero__title')
    const radius = await title.evaluate(el => getComputedStyle(el).borderRadius)
    expect(radius).toBe('0px')
  })

  test('планшет 768px: плашка не применяется', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto(URL)

    const title = page.locator('.dg-hero--v2 .dg-hero__title')
    await expect(title).toBeVisible()

    const bg = await title.evaluate(el => getComputedStyle(el).backgroundImage)
    expect(bg).toBe('none')
  })
})
