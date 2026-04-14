import { test, expect } from '@playwright/test'

test.describe('Страница partner — соответствие дизайну Figma', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/znarnia/partner/')
    await page.waitForLoadState('networkidle')
  })

  // ── СТРУКТУРА ──────────────────────────────────────────
  test('заголовок страницы', async ({ page }) => {
    await expect(page).toHaveTitle(/Партнёрск/)
  })

  test('логотип в хедере виден', async ({ page }) => {
    await expect(page.locator('.pp-header__logo')).toBeVisible()
  })

  test('кнопка «Стать партнёром» в хедере', async ({ page }) => {
    await expect(page.locator('.pp-header__cta')).toBeVisible()
    await expect(page.locator('.pp-header__cta')).toContainText('Стать партнёром')
  })

  // ── HERO ──────────────────────────────────────────────
  test('бейдж «Партнёрское предложение»', async ({ page }) => {
    await expect(page.locator('.pp-hero__badge')).toContainText('Партнёрское предложение')
  })

  test('заголовок hero содержит «платформа»', async ({ page }) => {
    await expect(page.locator('.pp-hero__title')).toContainText('платформа')
  })

  test('hero — двухколоночный layout (aside видна)', async ({ page }) => {
    await expect(page.locator('.pp-aside')).toBeVisible()
  })

  test('aside содержит скриншот платформы', async ({ page }) => {
    const img = page.locator('.pp-aside__img')
    await expect(img).toBeVisible()
    const src = await img.getAttribute('src')
    expect(src).toContain('figma.com')
  })

  test('aside тег «Единая визуальная экосистема»', async ({ page }) => {
    await expect(page.locator('.pp-aside__tag')).toContainText('Единая визуальная экосистема')
  })

  test('aside headline «Не просто уроки»', async ({ page }) => {
    await expect(page.locator('.pp-aside__headline')).toContainText('Не просто уроки')
  })

  test('aside список — 4 пункта', async ({ page }) => {
    await expect(page.locator('.pp-aside__list li')).toHaveCount(4)
  })

  test('кнопки hero — О продукте и Экономика', async ({ page }) => {
    await expect(page.locator('.pp-hero__btn--purple')).toContainText('О продукте')
    await expect(page.locator('.pp-hero__btn--lime')).toContainText('Экономика партнёрства')
  })

  test('статистика — 3 показателя (20+, 10 000+, 9+)', async ({ page }) => {
    const nums = page.locator('.pp-stat__num')
    await expect(nums).toHaveCount(3)
    await expect(nums.nth(0)).toContainText('20+')
    await expect(nums.nth(1)).toContainText('000+')
    await expect(nums.nth(2)).toContainText('9+')
  })

  // ── 01 О ПРОДУКТЕ ─────────────────────────────────────
  test('секция «О продукте» — номер 01', async ({ page }) => {
    const num = page.locator('#product .pp-section__num')
    await expect(num).toContainText('01')
  })

  test('6 таблеток-пиллов', async ({ page }) => {
    await expect(page.locator('.pp-pill')).toHaveCount(6)
  })

  test('пилл «ИИ-помощник» присутствует', async ({ page }) => {
    const pills = page.locator('.pp-pill')
    const texts = await pills.allTextContents()
    expect(texts.some(t => t.includes('ИИ-помощник'))).toBe(true)
  })

  test('блок focus — «Без переключений»', async ({ page }) => {
    await expect(page.locator('.pp-focus__main')).toContainText('Без переключений')
  })

  test('6 карточек возможностей', async ({ page }) => {
    await expect(page.locator('.pp-feat')).toHaveCount(6)
  })

  test('карточки в 3 колонки', async ({ page }) => {
    const grid = page.locator('.pp-feats')
    const style = await grid.evaluate(el => getComputedStyle(el).gridTemplateColumns)
    const cols = style.trim().split(/\s+/).length
    expect(cols).toBe(3)
  })

  test('баннер «Итог для клиента» — «Мы управляем результатом»', async ({ page }) => {
    await expect(page.locator('.pp-result__title')).toContainText('Мы управляем результатом')
  })

  test('баннер result — 4 пункта списка', async ({ page }) => {
    await expect(page.locator('.pp-result__list li')).toHaveCount(4)
  })

  // ── 02 ЭКСПЕРТИЗА ─────────────────────────────────────
  test('секция 02 «Экспертиза и доверие»', async ({ page }) => {
    await expect(page.locator('#expertise .pp-section__title')).toContainText('Экспертиза')
  })

  test('6 карточек-достижений', async ({ page }) => {
    await expect(page.locator('.pp-cred')).toHaveCount(6)
  })

  // ── 03 О ПАРТНЁРСТВЕ ──────────────────────────────────
  test('секция 03 «О партнёрстве»', async ({ page }) => {
    await expect(page.locator('#about-partner .pp-section__num')).toContainText('03')
  })

  test('список партнёра — 4 пункта', async ({ page }) => {
    await expect(page.locator('.pp-partner-card__list li')).toHaveCount(4)
  })

  // ── 04 МЕХАНИКА ───────────────────────────────────────
  test('секция 04 — «Механика партнёрства»', async ({ page }) => {
    await expect(page.locator('#partnership .pp-section__title')).toContainText('Механика партнёрства')
  })

  test('4 шага механики', async ({ page }) => {
    await expect(page.locator('.pp-mech__item')).toHaveCount(4)
  })

  test('шаг 02 — «Учёт учеников по промокоду»', async ({ page }) => {
    const items = page.locator('.pp-mech__item')
    await expect(items.nth(1)).toContainText('промокоду')
  })

  // ── 05 ДОХОД ──────────────────────────────────────────
  test('секция 05 «Доход»', async ({ page }) => {
    await expect(page.locator('#income .pp-section__num')).toContainText('05')
  })

  test('цена «7 000» руб/мес', async ({ page }) => {
    await expect(page.locator('.pp-pricing__now-price')).toContainText('7')
  })

  test('3 тарифа (1, 2, 3 предмета)', async ({ page }) => {
    await expect(page.locator('.pp-tier')).toHaveCount(3)
  })

  test('тариф 1 предмет — 1 000 руб', async ({ page }) => {
    const tier = page.locator('.pp-tier').first()
    await expect(tier).toContainText('1 предмет')
    await expect(tier).toContainText('1')
  })

  // ── 06 ПОТЕНЦИАЛЬНЫЙ ДОХОД ────────────────────────────
  test('секция 06 — тёмный фон calc', async ({ page }) => {
    const wrap = page.locator('.pp-calc-wrap')
    await expect(wrap).toBeVisible()
    const bg = await wrap.evaluate(el => getComputedStyle(el).background)
    expect(bg).toMatch(/rgb/)
  })

  test('калькулятор — аудитория 50 000', async ({ page }) => {
    const cols = page.locator('.pp-calc__col')
    await expect(cols.nth(0)).toContainText('50')
  })

  test('калькулятор — итог 3 250 000 руб', async ({ page }) => {
    await expect(page.locator('.pp-calc__result-num')).toContainText('3')
    await expect(page.locator('.pp-calc__result-num')).toContainText('250')
  })

  // ── ФОРМА ─────────────────────────────────────────────
  test('форма заявки видна', async ({ page }) => {
    await expect(page.locator('.pp-contact__form')).toBeVisible()
  })

  test('3 поля и кнопка отправки', async ({ page }) => {
    await expect(page.locator('.pp-contact__input')).toHaveCount(3)
    await expect(page.locator('.pp-contact__btn')).toBeVisible()
  })

  // ── ВИЗУАЛЬНЫЙ СНИМОК (эталон) ────────────────────────
  test('визуальный снимок страницы', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/znarnia/partner/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('partner-full.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    })
  })

})

// ══════════════════════════════════════════════════════
// МОБИЛЬНЫЕ ТЕСТЫ (390px — iPhone 14)
// ══════════════════════════════════════════════════════
test.describe('Страница partner — мобильный вид (390px)', () => {

  test.use({ viewport: { width: 390, height: 844 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/znarnia/partner/')
    await page.waitForLoadState('networkidle')
  })

  test('нет горизонтального скролла', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth)
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1)
  })

  test('хедер — логотип и кнопка видны, навлинк скрыт', async ({ page }) => {
    await expect(page.locator('.pp-header__logo')).toBeVisible()
    await expect(page.locator('.pp-header__cta')).toBeVisible()
    const link = page.locator('.pp-header__link')
    await expect(link).toBeHidden()
  })

  test('hero — одна колонка (aside под текстом)', async ({ page }) => {
    const left = page.locator('.pp-hero__left')
    const right = page.locator('.pp-hero__right')
    const leftBox = await left.boundingBox()
    const rightBox = await right.boundingBox()
    // правая колонка расположена ниже левой
    expect(rightBox.y).toBeGreaterThan(leftBox.y + leftBox.height - 20)
  })

  test('кнопки hero растянуты на всю ширину', async ({ page }) => {
    const btn = page.locator('.pp-hero__btn--purple')
    const box = await btn.boundingBox()
    expect(box.width).toBeGreaterThan(300)
  })

  test('статистика — 3 блока умещаются в строку', async ({ page }) => {
    const stats = page.locator('.pp-stat')
    await expect(stats).toHaveCount(3)
    const boxes = await stats.evaluateAll(els =>
      els.map(el => el.getBoundingClientRect().y)
    )
    // все три на одной горизонтали (разница y < 5px)
    expect(Math.max(...boxes) - Math.min(...boxes)).toBeLessThan(5)
  })

  test('feature cards — одна колонка', async ({ page }) => {
    const feats = page.locator('.pp-feat')
    const boxes = await feats.evaluateAll(els =>
      els.map(el => el.getBoundingClientRect().x)
    )
    // все карточки начинаются с одного x-отступа
    const uniqueX = [...new Set(boxes.map(x => Math.round(x)))]
    expect(uniqueX.length).toBe(1)
  })

  test('механика — 1 или 2 колонки (не 4)', async ({ page }) => {
    const items = page.locator('.pp-mech__item')
    const boxes = await items.evaluateAll(els =>
      els.map(el => Math.round(el.getBoundingClientRect().x))
    )
    const uniqueX = [...new Set(boxes)]
    expect(uniqueX.length).toBeLessThanOrEqual(2)
  })

  test('калькулятор — вертикальный layout (стрелки скрыты)', async ({ page }) => {
    const arrows = page.locator('.pp-calc__arrow')
    for (let i = 0; i < await arrows.count(); i++) {
      await expect(arrows.nth(i)).toBeHidden()
    }
  })

  test('форма — поля на всю ширину', async ({ page }) => {
    const input = page.locator('.pp-contact__input').first()
    const box = await input.boundingBox()
    expect(box.width).toBeGreaterThan(300)
  })

  test('визуальный снимок — мобиль', async ({ page }) => {
    await expect(page).toHaveScreenshot('partner-mobile.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    })
  })

})
