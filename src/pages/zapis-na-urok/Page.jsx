import { useState } from 'react'
import { nb } from '../../shared/utils/nb'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

/* ── Иконки плашек в hero ── */
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.9" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19c0-2.4-1.3-4.2-3.2-4.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)
const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4.5" width="18" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.9" />
    <path d="M9 20h6M12 16.5V20" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
)
const IconCap = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4.5 22 9l-10 4.5L2 9l10-4.5Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    <path d="M6 11v4.2c0 1.2 2.7 2.8 6 2.8s6-1.6 6-2.8V11" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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
const IconPerson = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="3.6" fill="currentColor" />
    <path d="M4.5 19.5c0-3.6 3.2-6.2 7.5-6.2s7.5 2.6 7.5 6.2" fill="currentColor" />
  </svg>
)
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 12.5l3.6 3.6L18 7.6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Карточки форматов ── */
const GROUP_LIST = [
  'разбор темы и практика',
  'живое общение с преподавателем',
  'ребёнок решает задания и сразу видит результат',
  'знакомство с форматом обучения',
]
const INDIVID_LIST = [
  'как ребёнок думает · мышление',
  'что уже знает · база знаний',
  'как воспринимает новое · обучаемость',
  'результаты и рекомендации для родителей',
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

  const scrollToForm = () => {
    document.getElementById('zu-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="zu-page">
      <header className="zu-header">
        <div className="zu-wrap zu-header__inner">
          <a className="zu-header__brand" href="/znarnia/">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="zu-header__logo" width="80" height="80" />
            <span className="zu-header__brand-name">Школа Сотниковой Ольги</span>
          </a>
          <span className="zu-header__badge">Онлайн&nbsp;· 1–11&nbsp;класс</span>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="zu-hero">
          <div className="zu-wrap zu-hero__inner">
            <div className="zu-hero__content">
              <span className="zu-eyebrow">Первое занятие с учителем</span>
              <h1 className="zu-hero__title">
                Онлайн-урок по математике<br />
                с учителем
              </h1>
              <p className="zu-hero__lead">{nb('Начните с занятия, которое подходит именно вашему ребёнку.')}</p>

              <ul className="zu-tags">
                <li className="zu-tag"><span className="zu-tag__ic"><IconUsers /></span>1–11 класс</li>
                <li className="zu-tag"><span className="zu-tag__ic"><IconMonitor /></span>Онлайн</li>
                <li className="zu-tag"><span className="zu-tag__ic"><IconCap /></span>Интерактивная платформа</li>
              </ul>

              <button type="button" className="zu-cta zu-cta--orange" onClick={scrollToForm}>
                Записаться на занятие
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p className="zu-hero__note">
                Не знаете, какой формат нужен?<br />
                {nb('Оставьте заявку — поможем определить.')}
              </p>
            </div>

            <div className="zu-hero__media">
              <img
                className="zu-hero__girl"
                src="/znarnia/images/zapis-na-urok-girl-v2.png"
                alt="Девочка с ручкой и книгами думает над задачей по математике"
                width="1350"
                height="1165"
                decoding="async"
                fetchpriority="high"
              />
              <span className="zu-hero__quote" aria-hidden="true">
                Большие результаты начинаются с первого шага
              </span>
            </div>
          </div>
        </section>

        {/* ── С ЧЕГО ЛУЧШЕ НАЧАТЬ ── */}
        <section className="zu-start">
          <div className="zu-wrap">
            <div className="zu-start__head">
              <h2 className="zu-h2">С чего лучше начать?</h2>
              <p className="zu-start__sub">{nb('Два формата первого занятия — в зависимости от задачи семьи.')}</p>
            </div>

            <div className="zu-cards">
              {/* Вариант 1 */}
              <article className="zu-card zu-card--violet">
                <div className="zu-card__top">
                  <span className="zu-card__icon"><IconGroup /></span>
                  <span className="zu-card__badge">Вариант 1 · Попробовать формат</span>
                </div>
                <h3 className="zu-card__title">Групповой урок</h3>
                <p className="zu-card__text">{nb('Живое занятие по математике с учителем на интерактивной платформе.')}</p>
                <ul className="zu-list">
                  {GROUP_LIST.map((t) => (
                    <li key={t} className="zu-list__item">
                      <span className="zu-list__check"><IconCheck /></span>
                      <span>{nb(t)}</span>
                    </li>
                  ))}
                </ul>
                <div className="zu-card__foot">{nb('Подойдёт, если хочется попробовать занятия.')}</div>
              </article>

              {/* Вариант 2 */}
              <article className="zu-card zu-card--peach">
                <div className="zu-card__top">
                  <span className="zu-card__icon"><IconPerson /></span>
                  <span className="zu-card__badge">Вариант 2 · Разобраться глубже</span>
                </div>
                <h3 className="zu-card__title">{nb('Индивидуальный диагностический урок')}</h3>
                <p className="zu-card__text">{nb('Занятие один на один с учителем, чтобы понять текущую ситуацию ребёнка.')}</p>
                <ul className="zu-list">
                  {INDIVID_LIST.map((t) => (
                    <li key={t} className="zu-list__item">
                      <span className="zu-list__check"><IconCheck /></span>
                      <span>{nb(t)}</span>
                    </li>
                  ))}
                </ul>
                <div className="zu-card__foot">{nb('Подойдёт, если есть сложности и важно понять, с чего начать.')}</div>
              </article>
            </div>
          </div>
        </section>

        {/* ── ПРЕПОДАВАТЕЛЬ · ОТЗЫВЫ · РЕГАЛИИ ── */}
        <section className="zu-social">
          <div className="zu-wrap">
            <div className="zu-social__head">
              <h2 className="zu-h2">Почему нам доверяют</h2>
              <p className="zu-start__sub">{nb('Опытный преподаватель, реальные отзывы родителей и сотрудничество со школами.')}</p>
            </div>
            <div className="zu-social__inner">
              <AuthorCard />
              <ReviewsCarousel />
              <SchoolsCard />
            </div>
          </div>
        </section>

        {/* ── ФИНАЛЬНЫЙ CTA ── */}
        <section className="zu-final">
          <div className="zu-wrap">
            <div className="zu-final__box" id="zu-form">
              <span className="zu-final__accent" aria-hidden="true" />
              {submitted ? (
                <div className="zu-success">
                  <div className="zu-success__icon">✓</div>
                  <div className="zu-success__title">Заявка принята!</div>
                  <div className="zu-success__text">{nb('Мы свяжемся с вами, уточним детали и подберём подходящий формат первого занятия.')}</div>
                </div>
              ) : (
                <>
                  <div className="zu-final__head">
                    <h2 className="zu-final__title">{nb('Одна заявка — дальше формат подбирает менеджер')}</h2>
                    <p className="zu-final__sub">{nb('Оставьте заявку — менеджер перезвонит, уточнит детали и подберёт подходящий формат.')}</p>
                  </div>

                  <form className="zu-form" onSubmit={handleSubmit} noValidate>
                    <div className="zu-form__grid">
                      <div className="zu-field">
                        <label className="zu-label">Ваше имя <span className="zu-req">*</span></label>
                        <input
                          className={`zu-input${errors.name ? ' zu-input--err' : ''}`}
                          type="text"
                          placeholder="Иван Иванов"
                          value={form.name}
                          onChange={e => set('name', e.target.value)}
                        />
                        {errors.name && <span className="zu-err">{errors.name}</span>}
                      </div>
                      <div className="zu-field">
                        <label className="zu-label">Телефон <span className="zu-req">*</span></label>
                        <input
                          className={`zu-input${errors.phone ? ' zu-input--err' : ''}`}
                          type="tel"
                          inputMode="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={form.phone}
                          onChange={e => set('phone', e.target.value)}
                        />
                        {errors.phone && <span className="zu-err">{errors.phone}</span>}
                      </div>
                      <div className="zu-field">
                        <label className="zu-label">Email <span className="zu-req">*</span></label>
                        <input
                          className={`zu-input${errors.email ? ' zu-input--err' : ''}`}
                          type="email"
                          placeholder="ivan@example.com"
                          value={form.email}
                          onChange={e => set('email', e.target.value)}
                        />
                        {errors.email && <span className="zu-err">{errors.email}</span>}
                      </div>
                      <div className="zu-field">
                        <label className="zu-label">Ник в Telegram</label>
                        <input
                          className="zu-input"
                          type="text"
                          placeholder="@username"
                          value={form.telegram}
                          onChange={e => set('telegram', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="zu-field zu-field--half">
                      <label className="zu-label">Класс ребёнка <span className="zu-req">*</span></label>
                      <select
                        className={`zu-input zu-select${errors.grade ? ' zu-input--err' : ''}`}
                        value={form.grade}
                        onChange={e => set('grade', e.target.value)}
                      >
                        <option value="">Выберите класс</option>
                        {grades.map(g => <option key={g} value={g}>{g} класс</option>)}
                      </select>
                      {errors.grade && <span className="zu-err">{errors.grade}</span>}
                    </div>

                    <label className={`zu-check${errors.agree ? ' zu-check--err' : ''}`}>
                      <input type="checkbox" className="zu-check__input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
                      <span className="zu-check__box" aria-hidden="true" />
                      <span className="zu-check__text">
                        Согласен с обработкой персональных данных в соответствии с{' '}
                        <a href="#" className="zu-link" onClick={e => e.preventDefault()}>политикой конфиденциальности</a> <span className="zu-req">*</span>
                      </span>
                    </label>
                    {errors.agree && <span className="zu-err zu-err--check">{errors.agree}</span>}

                    <button type="submit" className="zu-cta zu-cta--violet zu-form__submit">
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
      </main>
    </div>
  )
}
