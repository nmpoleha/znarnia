import { test, expect } from '@playwright/test'

test.describe('Главная страница', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('отображает логотип и название школы', async ({ page }) => {
    await expect(page.locator('.ph__logo')).toBeVisible()
    await expect(page.locator('.ph__name')).toContainText('Школа Сотниковой Ольги')
  })

  test('отображает заголовок Лето 2026', async ({ page }) => {
    await expect(page.locator('.hero__title')).toContainText('Лето')
    await expect(page.locator('.hero__title')).toContainText('2026')
  })

  test('показывает три карточки преимуществ', async ({ page }) => {
    await expect(page.locator('.fcard')).toHaveCount(3)
  })

  test('форма регистрации видна', async ({ page }) => {
    await expect(page.locator('#registration')).toBeVisible()
    await expect(page.locator('.form__submit')).toBeVisible()
  })

  test('валидация формы при пустой отправке', async ({ page }) => {
    await page.click('.form__submit')
    await expect(page.locator('.form__err').first()).toBeVisible()
  })

  test('успешная отправка формы', async ({ page }) => {
    await page.fill('input[name="name"]', 'Иван Иванов')
    await page.fill('input[name="phone"]', '+7 900 123-45-67')
    await page.fill('input[name="email"]', 'ivan@test.com')
    await page.selectOption('select[name="grade"]', '5')
    await page.locator('.form__check').click()
    await page.click('.form__submit')
    await expect(page.locator('.form-success')).toBeVisible()
  })
})
