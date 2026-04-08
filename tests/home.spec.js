import { test, expect } from '@playwright/test'

test.describe('Главная страница', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('отображает заголовок Лето 2026', async ({ page }) => {
    await expect(page.locator('.hero__title')).toBeVisible()
    await expect(page.locator('.hero__title-line')).toContainText('Лето')
    await expect(page.locator('.hero__title-accent')).toContainText('2026')
  })

  test('показывает три карточки преимуществ', async ({ page }) => {
    const cards = page.locator('.feature-card')
    await expect(cards).toHaveCount(3)
  })

  test('форма регистрации видна', async ({ page }) => {
    await expect(page.locator('#registration')).toBeVisible()
    await expect(page.locator('.reg-submit')).toBeVisible()
  })

  test('кнопка "Записаться" скроллит к форме', async ({ page }) => {
    await page.click('.hero__btn--primary')
    await expect(page.locator('#registration')).toBeInViewport()
  })

  test('валидация формы при пустой отправке', async ({ page }) => {
    await page.click('.reg-submit')
    await expect(page.locator('.reg-error').first()).toBeVisible()
  })

  test('успешная отправка формы', async ({ page }) => {
    await page.fill('input[name="name"]', 'Иван Иванов')
    await page.fill('input[name="phone"]', '+7 900 123-45-67')
    await page.fill('input[name="email"]', 'ivan@test.com')
    await page.selectOption('select[name="grade"]', '5')
    await page.locator('.reg-checkbox-label').click()
    await page.click('.reg-submit')
    await expect(page.locator('.reg-success')).toBeVisible()
  })
})
