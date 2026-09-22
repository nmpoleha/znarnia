import { useState } from 'react'
import { nb } from '../../shared/utils/nb'

const GRADES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

/* ── Иконки блока «Как может пройти первое занятие?» ── */
const IconPerson = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.6" fill="currentColor" />
    <path d="M4.5 19.5c0-3.6 3.2-6.2 7.5-6.2s7.5 2.6 7.5 6.2" fill="currentColor" />
  </svg>
)
const IconGroup = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8" cy="8.5" r="2.7" fill="currentColor" />
    <circle cx="16" cy="8.5" r="2.7" fill="currentColor" />
    <path d="M2.5 18.5c0-2.8 2.2-4.8 5.5-4.8s5.5 2 5.5 4.8" fill="currentColor" />
    <path d="M12.8 18.5c.3-2.4 2.3-4 5.2-4 2.6 0 4 1.6 4 3.6" fill="currentColor" opacity=".55" />
  </svg>
)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 12.5l3.6 3.6L18 7.6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Списки внутри карточек форматов ── */
const INDIVID_LIST = [
  'как думает — мышление',
  'что знает — база знаний',
  'как воспринимает новое — обучаемость',
]
const GROUP_LIST = [
  'разбор темы с преподавателем',
  'решение заданий и практика',
  'результат сразу на экране',
]

/* ── Карточки преимуществ справа в герое ──
   Декор: максимум 1 основной дудл + 1 мелкий акцент, тонкие лёгкие линии. */
const FEATS = [
  {
    theme: 'violet',
    img: '/znarnia/images/feat-cap.png',
    title: ['Интерес', 'к знаниям'],
    text: 'Ребёнок учится с удовольствием и хочет узнавать больше.',
    doodle: (
      <span className="zn-feat__note" aria-hidden="true">
        Больше<br />чем&nbsp;учёба
        <svg className="zn-feat__accent" width="20" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 20.5S3.5 15.5 3.5 9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 8.5 2c0 5.9-8.5 10.9-8.5 10.9z" stroke="#b7a1f2" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </span>
    ),
  },
  {
    theme: 'green',
    img: '/znarnia/images/feat-chart.png',
    title: ['Уверенность', 'в себе'],
    text: 'Ребёнок понимает, как он думает, что знает и на что способен.',
    doodle: (
      <svg className="zn-feat__doodle" width="52" height="40" viewBox="0 0 52 40" fill="none" aria-hidden="true">
        <path d="M4 34c7-3 5-12-1-11s-4 10 5 10 17-8 21-27" stroke="#94ce7a" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M24 5l7-1M31 4l1 7" stroke="#94ce7a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    theme: 'orange',
    img: '/znarnia/images/feat-target.png',
    title: ['Реальные', 'результаты'],
    text: 'Знания применяются на практике и видны в школе и в жизни.',
    doodle: (
      <svg className="zn-feat__doodle" width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 5l3.7 8.3L31 14l-6.8 5.6L26 29l-8-4.7L10 29l1.8-9.4L5 14l9.3-.7L18 5z" stroke="#f9b27f" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Page() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', telegram: '', grade: '', agree: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.email.trim()) e.email = 'Введите email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email'
    if (!form.grade) e.grade = 'Выберите класс'
    if (!form.agree) e.agree = 'Необходимо согласие'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  return (
    <div className="zn-page">
      <header className="so-header">
        <div className="so-wrap so-header__inner">
          <div className="so-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="so-header__logo" width="80" height="80" />
            <span className="so-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      <main className="zn-main">
        <section className="zn-hero">
          {/* декоративные завитки фона */}
          <svg className="zn-hero__squiggle zn-hero__squiggle--bl" width="90" height="60" viewBox="0 0 90 60" fill="none" aria-hidden="true">
            <path d="M6 50c10-16 26-16 36 0M50 34c8-12 22-12 32 0" stroke="#35b978" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          </svg>

          <div className="zn-hero__inner">
            <div className="zn-hero__main">
              <span className="zn-hero__eyebrow">Знарния</span>
              <h1 className="zn-hero__title">
                Современная образовательная платформа,{' '}
                <span className="zn-hero__title-accent">которая меняет отношение к&nbsp;учёбе</span>
              </h1>
              <p className="zn-hero__lead">
                {nb('Мы хотим, чтобы ребёнок не просто запоминал правила, а учился думать, понимать и верить в свои силы.')}
              </p>

              <div className="zn-hero__actions">
                <a href="#znakomstvo" className="zn-btn zn-btn--primary">
                  Давайте познакомимся
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#how" className="zn-btn zn-btn--ghost">
                  <span className="zn-btn__play" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M8 5.5v13l11-6.5-11-6.5z" fill="#6d28d9" /></svg>
                  </span>
                  Как это работает?
                </a>
              </div>
            </div>

            <ul className="zn-feats">
              {FEATS.map((f, i) => (
                <li key={i} className={`zn-feat zn-feat--${f.theme}`}>
                  <img className="zn-feat__icon" src={f.img} alt="" aria-hidden="true" width="360" height="360" loading="lazy" decoding="async" />
                  <div className="zn-feat__body">
                    <h3 className="zn-feat__title">{f.title[0]}<br />{f.title[1]}</h3>
                    <p className="zn-feat__text">{nb(f.text)}</p>
                  </div>
                  <span className="zn-feat__deco" aria-hidden="true">
                    {f.doodle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── КАК МОЖЕТ ПРОЙТИ ПЕРВОЕ ЗАНЯТИЕ ── */}
        <section className="zn-start">
          <div className="zn-start__wrap">
            <div className="zn-start__head">
              <h2 className="zn-start__h2">Как может пройти первое занятие?</h2>
              <p className="zn-start__sub">{nb('Два формата — в зависимости от того, что сейчас важно вашему ребёнку.')}</p>
            </div>

            <div className="zn-cards">
              {/* Вариант 1 — узнать ребёнка лучше */}
              <article className="zn-card zn-card--peach">
                <div className="zn-card__top">
                  <span className="zn-card__icon"><IconPerson /></span>
                  <span className="zn-card__badge">
                    <span className="zn-card__badge-num">1</span>
                    <span className="zn-card__badge-sep" aria-hidden="true"> · </span>
                    <span className="zn-card__badge-label">Узнать ребёнка лучше</span>
                  </span>
                </div>
                <h3 className="zn-card__title">{nb('Индивидуальное исследование с учителем')}</h3>
                <p className="zn-card__text">{nb('Занятие один на один, чтобы увидеть не только ошибки, но и понять, как ребёнок учится.')}</p>
                <ul className="zn-list">
                  {INDIVID_LIST.map((t) => (
                    <li key={t} className="zn-list__item">
                      <span className="zn-list__check"><IconCheck /></span>
                      <span>{nb(t)}</span>
                    </li>
                  ))}
                </ul>
                <div className="zn-card__foot">{nb('Если есть сложности и хочется понять причины и с чего начать.')}</div>
              </article>

              {/* Вариант 2 — попробовать обучение */}
              <article className="zn-card zn-card--violet">
                <div className="zn-card__top">
                  <span className="zn-card__icon"><IconGroup /></span>
                  <span className="zn-card__badge">
                    <span className="zn-card__badge-num">2</span>
                    <span className="zn-card__badge-sep" aria-hidden="true"> · </span>
                    <span className="zn-card__badge-label">Попробовать обучение</span>
                  </span>
                </div>
                <h3 className="zn-card__title">{nb('Живой групповой онлайн-урок')}</h3>
                <p className="zn-card__text">{nb('Занятие с учителем, где ребёнок активно работает, а не просто слушает.')}</p>
                <ul className="zn-list">
                  {GROUP_LIST.map((t) => (
                    <li key={t} className="zn-list__item">
                      <span className="zn-list__check"><IconCheck /></span>
                      <span>{nb(t)}</span>
                    </li>
                  ))}
                </ul>
                <div className="zn-card__foot">{nb('Если хочется познакомиться с форматом занятий «Знарнии».')}</div>
              </article>
            </div>
          </div>
        </section>

        {/* ── ФОРМА ЗАЯВКИ ── */}
        <section className="zn-final">
          <div className="zn-final__wrap">
            <div className="zn-final__box" id="znakomstvo">
              <span className="zn-final__accent" aria-hidden="true" />
              {submitted ? (
                <div className="zn-success">
                  <div className="zn-success__icon">✓</div>
                  <div className="zn-success__title">Заявка принята!</div>
                  <div className="zn-success__text">{nb('Мы свяжемся с вами, зададим несколько вопросов и поможем определиться с форматом.')}</div>
                </div>
              ) : (
                <>
                  <div className="zn-final__head">
                    <h2 className="zn-final__title">Не знаете, какой вариант подойдёт?</h2>
                    <p className="zn-final__sub">{nb('Оставьте заявку — зададим несколько вопросов и поможем определиться.')}</p>
                  </div>

                  <form className="zn-form" onSubmit={handleSubmit} noValidate>
                    <div className="zn-form__grid">
                      <div className="zn-field">
                        <label className="zn-label">Ваше имя <span className="zn-req">*</span></label>
                        <input
                          className={`zn-input${errors.name ? ' zn-input--err' : ''}`}
                          type="text"
                          placeholder="Иван Иванов"
                          value={form.name}
                          onChange={e => set('name', e.target.value)}
                        />
                        {errors.name && <span className="zn-err">{errors.name}</span>}
                      </div>
                      <div className="zn-field">
                        <label className="zn-label">Телефон <span className="zn-req">*</span></label>
                        <input
                          className={`zn-input${errors.phone ? ' zn-input--err' : ''}`}
                          type="tel"
                          inputMode="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={form.phone}
                          onChange={e => set('phone', e.target.value)}
                        />
                        {errors.phone && <span className="zn-err">{errors.phone}</span>}
                      </div>
                      <div className="zn-field">
                        <label className="zn-label">Email <span className="zn-req">*</span></label>
                        <input
                          className={`zn-input${errors.email ? ' zn-input--err' : ''}`}
                          type="email"
                          placeholder="ivan@example.com"
                          value={form.email}
                          onChange={e => set('email', e.target.value)}
                        />
                        {errors.email && <span className="zn-err">{errors.email}</span>}
                      </div>
                      <div className="zn-field">
                        <label className="zn-label">Ник в Telegram</label>
                        <input
                          className="zn-input"
                          type="text"
                          placeholder="@username"
                          value={form.telegram}
                          onChange={e => set('telegram', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="zn-field zn-field--half">
                      <label className="zn-label">Класс ребёнка <span className="zn-req">*</span></label>
                      <select
                        className={`zn-input zn-select${errors.grade ? ' zn-input--err' : ''}`}
                        value={form.grade}
                        onChange={e => set('grade', e.target.value)}
                      >
                        <option value="">Выберите класс</option>
                        {GRADES.map(g => <option key={g} value={g}>{g} класс</option>)}
                      </select>
                      {errors.grade && <span className="zn-err">{errors.grade}</span>}
                    </div>

                    <label className={`zn-check${errors.agree ? ' zn-check--err' : ''}`}>
                      <input type="checkbox" className="zn-check__input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
                      <span className="zn-check__box" aria-hidden="true" />
                      <span className="zn-check__text">
                        Согласен с обработкой персональных данных в соответствии с{' '}
                        <a href="#" className="zn-link" onClick={e => e.preventDefault()}>политикой конфиденциальности</a> <span className="zn-req">*</span>
                      </span>
                    </label>
                    {errors.agree && <span className="zn-err zn-err--check">{errors.agree}</span>}

                    <button type="submit" className="zn-submit">
                      Оставить заявку
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── ПРИГЛАШЕНИЕ · ИНТЕЛЛЕКТУАЛЬНЫЙ КЛУБ ── */}
        <section className="zn-note">
          <div className="zn-note__inner">
            <span className="zn-note__icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 21.5V5.5z" stroke="#7c3aed" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M4 5.5V19" stroke="#7c3aed" strokeWidth="1.7" />
              </svg>
            </span>
            <div className="zn-note__body">
              <p className="zn-note__text">
                {nb('Приглашаем ребёнка на живое онлайн-занятие с учителем. Вы увидите наш подход к обучению, а главное — сможете лучше понять ребёнка: как он думает, что знает, как воспринимает новое и что у него получается.')}
              </p>
              <p className="zn-note__text">
                А ещё мы создали <strong>бесплатный Интеллектуальный клуб</strong> — {nb('интерактивные уроки, тренажёры и новые материалы каждую неделю.')}
              </p>
            </div>
          </div>
        </section>

        {/* ── БАННЕР · ИНТЕЛЛЕКТУАЛЬНЫЙ КЛУБ ── */}
        <section className="zn-club">
          <div className="zn-club__card">
            <svg className="zn-club__dash zn-club__dash--1" width="46" height="30" viewBox="0 0 46 30" fill="none" aria-hidden="true">
              <path d="M4 22l7-8M20 6l5 6M34 20l9-6" stroke="#8b5cf6" strokeWidth="3.4" strokeLinecap="round" />
            </svg>
            <svg className="zn-club__dash zn-club__dash--2" width="40" height="34" viewBox="0 0 40 34" fill="none" aria-hidden="true">
              <path d="M6 10l8 5M4 26l10-2M28 6l6 8" stroke="#f5b301" strokeWidth="3.4" strokeLinecap="round" />
            </svg>

            <div className="zn-club__content">
              <p className="zn-club__eyebrow">Хотите сначала познакомиться с нами самостоятельно?</p>
              <h2 className="zn-club__title">
                Интеллектуальный клуб «Знарнии» —{' '}
                <span className="zn-club__title-accent">бесплатно</span>
              </h2>
              <p className="zn-club__text">
                {nb('Интерактивные уроки, тренажёры и полезные материалы, которые помогают ребёнку развивать математическое и критическое мышление.')}
              </p>
              <p className="zn-club__perk">
                <span className="zn-club__gift" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="8.5" width="18" height="12.5" rx="2" fill="currentColor" opacity="0.16" />
                    <path d="M3 10.5A1.5 1.5 0 0 1 4.5 9h15A1.5 1.5 0 0 1 21 10.5v1A1.5 1.5 0 0 1 19.5 13h-15A1.5 1.5 0 0 1 3 11.5v-1z" fill="currentColor" />
                    <rect x="10.4" y="9" width="3.2" height="12" fill="currentColor" />
                    <path d="M12 9c-1.4-.2-4.2-1-4-3 .2-1.7 3-1 4 3zm0 0c1.4-.2 4.2-1 4-3-.2-1.7-3-1-4 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                Новые материалы каждую неделю.
              </p>
              <a href="/znarnia/intellektualnyy-klub-1-8-klass/" className="zn-club__btn">
                Перейти в Интеллектуальный клуб
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="zn-club__media">
              <img
                className="zn-club__img"
                src="/znarnia/images/klub-cta-illustration.png"
                alt="Стопка книг «Идеи», «Логика», «Развитие» с лампочкой, карандашами и пазлом"
                width="1374"
                height="1145"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
