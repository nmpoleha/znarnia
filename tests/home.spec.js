import { test, expect } from '@playwright/test'

test.describe('Каталог (root)', () => {
  test('отображает каталог страниц', async ({ page }) => {
    await page.goto('/znarnia/')
    await expect(page.locator('.catalog__title')).toContainText('Znarnia')
    await expect(page.locator('.catalog__card')).toHaveCount(2)
  })
})

test.describe('Страница leto2026', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/znarnia/leto2026/')
  })

  test('отображает логотип и название школы', async ({ page }) => {
    await expect(page.locator('.school-header__logo')).toBeVisible()
    await expect(page.locator('.school-header__name')).toContainText('Школа Сотниковой Ольги')
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
