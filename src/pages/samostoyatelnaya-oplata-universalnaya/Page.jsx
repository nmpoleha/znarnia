/* ─────────────────────────────────────────────────────────────
   Самостоятельная оплата занятий — осень
   Герой (место под фото справа) + блок выбора программы по математике.
   Шапка — как на partnerskaya-programma-9-klass-novoe.
   ───────────────────────────────────────────────────────────── */
import { useState, useEffect } from 'react'
import RegistrationForm from '../../shared/components/RegistrationForm'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

/* ── Типографика: неразрывные пробелы, чтобы на мобильных не рвались строки ── */
const NBSP_SHORT =
  'без|перед|через|после|около|между|кроме|среди|чтобы|если|когда|чем|во|ко|со|об|из|от|до|по|за|на|под|над|для|при|про|что|как|или|же|ли|бы|то|не|ни|в|к|с|о|у|и|а|но'
function typo(s) {
  if (typeof s !== 'string') return s
  return s
    .replace(new RegExp('(?<=^|[\\s(«„])(' + NBSP_SHORT + ')\\s+', 'gi'), '$1 ')
    .replace(/(\d)\s+(?=[«"А-Яа-яЁёA-Za-z])/g, '$1 ')
    .replace(/\s+—/g, ' —')
    .replace(/([А-Яа-яЁёA-Za-z0-9])-(?=[А-Яа-яЁёA-Za-z])/g, '$1‑')
}

/* ── Пункты мобильного меню ── */
const NAV = [
  { href: '#programs', label: 'Программы' },
  { href: '#how', label: 'Как это работает' },
  { href: '#programs', label: 'Оплатить сентябрь' },
]

/* ── SVG-иконки для карточек программ ── */
/* ── Цены форматов обучения (по умолчанию и для отдельных программ) ── */
const DEFAULT_FMT = {
  m1: { price: '8 200 ₽', note: 'за 12 уроков (≈ 684 ₽ за урок)' },
  m3: { price: '21 600 ₽', note: 'по 7 200 ₽ в месяц (≈ 580 ₽ за урок)', benefit: '3 000 ₽' },
}
const FMT_PROFIL = {
  m1: { price: '10 000 ₽', note: 'за 12 уроков (≈ 834 ₽ за урок)' },
  m3: { price: '27 000 ₽', note: 'по 9 000 ₽ в месяц (≈ 711 ₽ за урок)', benefit: '3 000 ₽' },
}

/* ── Программы по математике ── */
const PROGRAMS = [
  { img: 'prog-abacus',    title: '1–4 классы',            desc: 'Математика + развитие математического мышления', href: '#' },
  { img: 'prog-backpack',  title: '5–8 классы',            desc: 'Сильная школьная база и работа с проблемами',    href: '#' },
  { img: 'prog-pie',       title: '9 класс',               desc: 'Математика + подготовка к ОГЭ',                  href: '#' },
  { img: 'prog-cap',       title: '10 класс',              desc: 'Математика и систематизация знаний. Подготовка к ЕГЭ', href: '#' },
  { img: 'prog-target',    title: '11 класс — ЕГЭ база',   desc: 'Подготовка к базовому ЕГЭ',                      href: '#' },
  { img: 'prog-clipboard', title: '11 класс — ЕГЭ профиль', desc: 'Подготовка к профильному ЕГЭ',                  href: '#', fmt: FMT_PROFIL },
]

/* ── Как проходит запись ── */
const STEPS = [
  { n: '1', title: 'Выберите программу',   text: 'Класс или направление и оплатите сентябрь.', img: 'step-checklist' },
  { n: '2', title: 'Мы свяжемся с вами',   text: 'Менеджер предложит варианты расписания.',   img: 'step-headset' },
  { n: '3', title: 'Выберите удобное время', text: 'Для каждого класса будет несколько групп.', img: 'step-calendar' },
]

/* ── Дополнительные предметы — подготовка к ОГЭ ── */
const SUBJECTS = [
  { img: 'subj-book',   title: 'Русский язык',    schedule: 'Воскресенье, 12:45 МСК' },
  { img: 'subj-atom',   title: 'Физика',          schedule: 'Четверг, 18:00 МСК' },
  { img: 'subj-laptop', title: 'Информатика',     schedule: 'Понедельник, 18:00 МСК' },
  { img: 'subj-bank',   title: 'Обществознание',  schedule: 'Суббота, 12:45 МСК' },
]

/* ── Частые вопросы ── */
const FAQ = [
  { img: 'faq-card',     q: 'Можно ли самостоятельно оплатить?', a: 'Да, выберите программу и оплатите прямо на странице.' },
  { img: 'faq-calclock', q: 'Что именно я оплачиваю сейчас?',            a: 'Вы сами выбираете формат: можно оплатить только октябрь — 10 уроков по выбранной программе, а можно взять пакет сразу на 3 месяца (октябрь, ноябрь и декабрь). Пакет выгоднее по цене за урок, и к нему в подарок — обучение в сентябре и 20 уроков-тренажёров по русскому языку.' },
  { img: 'faq-chat',     q: 'Как узнать расписание по математике?',       a: 'После оплаты с вами свяжется менеджер и предложит варианты расписания для вашего класса.' },
  { img: 'faq-refresh',  q: 'Что если расписание не подойдёт?',           a: 'Мы вернём полную оплату без каких-либо удержаний.' },
  { img: 'faq-shield',   q: 'Что если ребёнок откажется продолжать занятия?', a: 'При расторжении в течение 7 дней с начала занятий полный возврат.' },
  { img: 'faq-person',   q: 'Можно ли заниматься индивидуально?',         a: 'При возможности. Мы оставляем за собой право отказать в связи с расписанием и стоимостью.' },
  { img: 'faq-headset',  q: 'Можно сначала задать вопросы?',              a: 'Конечно! Вы можете написать нам в любой мессенджер или получить консультацию.' },
]

/* ── Блок о платформе ── */
const PLATFORM = [
  { icon: 'video', label: 'Собственная видеосвязь' },
  { icon: 'board', label: 'Интерактивная доска' },
  { icon: 'lock',  label: 'Помощь куратора' },
  { icon: 'list',  label: 'Записи с интерактивом' },
  { icon: 'chart', label: 'Мотивация и баллы' },
  { icon: 'ai',    label: 'AI помощник / аналитика' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [consultOpen, setConsultOpen] = useState(false)
  const [formatOpen, setFormatOpen] = useState(false)
  const [fmt, setFmt] = useState(DEFAULT_FMT)

  const openFormat = (p) => {
    setFmt(p?.fmt || DEFAULT_FMT)
    setFormatOpen(true)
  }

  useEffect(() => {
    if (!consultOpen && !formatOpen) return
    const onKey = (e) => { if (e.key === 'Escape') { setConsultOpen(false); setFormatOpen(false) } }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [consultOpen, formatOpen])

  return (
    <div className="so-page">
      {/* ── HEADER (как на partnerskaya-programma-9-klass-novoe) ── */}
      <header className="so-header">
        <div className="so-wrap so-header__inner">
          <div className="so-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="so-header__logo" width="80" height="80" />
            <span className="so-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
          <span className="so-header__badge">🍂 Запись на осень открыта</span>
          <button
            type="button"
            className="so-header__burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="so-mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`so-burger${menuOpen ? ' so-burger--open' : ''}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
        <nav
          id="so-mobile-nav"
          className={`so-header__nav${menuOpen ? ' so-header__nav--open' : ''}`}
          hidden={!menuOpen}
        >
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="so-header__nav-link" onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="so-hero">
        <div className="so-hero-decor" aria-hidden="true">
          <span className="so-deco so-deco--glow-tr" />
          <span className="so-deco so-deco--glow-bl" />
          <span className="so-deco so-deco--ring" />
          <span className="so-deco so-deco--dots" />
        </div>

        <div className="so-wrap so-hero__inner">
          <div className="so-hero__copy">
            <span className="so-hero__eyebrow">{typo('Самостоятельная оплата занятий')}</span>
            <h1 className="so-hero__title">
              <span className="so-hero__title-line">{typo('Выберите программу')}</span>
              <span className="so-hero__title-line">{typo('и ')}<span className="so-hero__accent">{typo('оплатите занятия')}</span></span>
            </h1>
            <p className="so-hero__sub">
              <span className="so-hero__sub-line">{typo('Выберите подходящую программу для ребёнка и оплатите занятия онлайн.')}</span>{' '}
              {typo('Математика 1–11 классы, ОГЭ, ЕГЭ и дополнительные предметы.')}
            </p>

            <div className="so-hero__price">
              <div className="so-hero__price-left">
                <span className="so-hero__price-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <ellipse cx="9" cy="9" rx="6" ry="2.7" fill="currentColor" opacity=".12" />
                    <path d="M3 9v3.4c0 1.5 2.7 2.6 6 2.6s6-1.1 6-2.6V9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12.4v3.4c0 1.5 2.7 2.6 6 2.6s6-1.1 6-2.6v-3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <ellipse cx="9" cy="9" rx="6" ry="2.7" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M18.6 3.2l.75 2.05 2.05.75-2.05.75-.75 2.05-.75-2.05-2.05-.75 2.05-.75z" fill="currentColor" />
                    <circle cx="20.4" cy="10.8" r=".85" fill="currentColor" opacity=".55" />
                  </svg>
                </span>
                <div className="so-hero__price-text">
                  <span>{typo('Стоимость зависит')}<br />{typo('от выбранной программы.')}</span>
                </div>
              </div>
              <div className="so-hero__price-right">
                <span className="so-hero__price-from">{typo('от')}</span>
                <span className="so-hero__price-val">580&nbsp;₽</span>
                <span className="so-hero__price-unit">/ урок*</span>
              </div>
            </div>

            <div className="so-hero__actions">
              <a href="#programs" className="so-btn so-btn--orange">Выбрать программу →</a>
            </div>

            <p className="so-hero__fine">
              {typo('После оплаты менеджер свяжется с вами и поможет подобрать расписание.')}<br />
              {typo('Если расписание не подойдёт — оформим полный возврат.')}
            </p>
            <p className="so-hero__footnote">
              {typo('* Точная стоимость занятия зависит от программы и выбранного формата обучения.')}
            </p>
          </div>

          {/* Иллюстрация справа */}
          <div className="so-hero__media">
            <img
              className="so-hero__img"
              src="/znarnia/images/math-hero-2.png"
              alt="Математические фигуры и формула"
              width="1396"
              height="924"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── ВЫБОР ПРОГРАММЫ ── */}
      <section className="so-programs" id="programs">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('Выберите программу по математике')}
          </h2>

          <div className="so-cards">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="so-card">
                <div className="so-card__head">
                  <img className="so-card__icon" src={`/znarnia/images/${p.img}.png`} alt="" width="408" height="412" loading="lazy" decoding="async" />
                  <div className="so-card__heading">
                    <h3 className="so-card__title">{typo(p.title)}</h3>
                    <p className="so-card__desc">{typo(p.desc)}</p>
                  </div>
                </div>
                <div className="so-card__actions">
                  <button type="button" className="so-btn so-btn--link" onClick={() => openFormat(p)} aria-expanded={formatOpen} aria-controls="format-select">Выбрать программу →</button>
                </div>
              </article>
            ))}
          </div>

          <div className="so-programs__consult">
            <button type="button" className="so-btn so-btn--primary" onClick={() => setConsultOpen(true)}>
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* ── КАК ПРОХОДИТ ЗАПИСЬ ── */}
      <section className="so-steps" id="how">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('Как проходит запись')}
          </h2>
          <div className="so-steps__grid">
            {STEPS.map((s, i) => (
              <div key={s.n} className="so-step">
                <div className="so-step__top">
                  <span className={`so-step__num so-step__num--${['violet', 'green', 'orange'][i]}`}>{s.n}</span>
                  <img className="so-step__icon" src={`/znarnia/images/${s.img}.png`} alt="" width="200" height="200" loading="lazy" decoding="async" />
                </div>
                <h3 className="so-step__title">{typo(s.title)}</h3>
                <p className="so-step__text">{typo(s.text)}</p>
              </div>
            ))}
          </div>

          <div className="so-guarantee">
            <div className="so-guarantee__head">
              <span className="so-guarantee__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5l7.5 2.7v6c0 4.6-3.1 8.4-7.5 10.3C7.6 19.6 4.5 15.8 4.5 11.2v-6L12 2.5z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.4 12l2.4 2.4 4.6-4.8" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3 className="so-guarantee__title">{typo('Можно оплачивать сейчас — без риска')}</h3>
            </div>
            <div className="so-guarantee__body">
              <p>{typo('Если предложенное расписание не подойдёт или позже изменится — вернём полную стоимость без удержаний.')}</p>
              <p>{typo('7 дней с начала занятий: если ребёнок откажется продолжать обучение, также сделаем полный возврат.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ДОПОЛНИТЕЛЬНЫЕ ПРЕДМЕТЫ ── */}
      <section className="so-extra" id="extra">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('Дополнительные предметы — подготовка к ОГЭ')}
          </h2>

          <div className="so-subjects">
            {SUBJECTS.map((s) => (
              <article key={s.title} className="so-subject">
                <img className="so-subject__icon" src={`/znarnia/images/${s.img}.png`} alt="" width="200" height="200" loading="lazy" decoding="async" />
                <h3 className="so-subject__title">{typo(s.title)}</h3>
                <p className="so-subject__meta">{typo('1 раз в неделю • 90 минут')}</p>
                <p className="so-subject__meta">{typo('Расписание: ' + s.schedule)}</p>
                <p className="so-subject__price">{typo('4 200 ₽ за 4 занятия')}</p>
                <a href="#" className="so-btn so-btn--pay">Оплатить</a>
              </article>
            ))}
          </div>

          <div className="so-format">
            <div className="so-format__info">
              <span className="so-format__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="6" y="10" width="27" height="26" rx="4" stroke="#7c3aed" strokeWidth="2.4"/>
                  <path d="M6 17h27" stroke="#7c3aed" strokeWidth="2.4"/>
                  <path d="M13 6v7M26 6v7" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round"/>
                  <path d="M11 23h3M18 23h3M11 29h3" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round"/>
                  <circle cx="34" cy="33" r="9.5" fill="#fff" stroke="#7c3aed" strokeWidth="2.4"/>
                  <path d="M34 28v5.2l3.2 2" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="so-format__body">
                <div className="so-format__title">{typo('Формат занятий')}</div>
                <div className="so-format__meta">
                  <span>{typo('1 раз в неделю • 90 минут')}</span>
                </div>
              </div>
            </div>
            <div className="so-format__price">
              <span className="so-format__price-label">Стоимость</span>
              <span className="so-format__price-val">4 200 ₽ <span className="so-format__price-suffix">{typo('за 4 занятия')}</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ / КОНСУЛЬТАЦИЯ ── */}
      <section className="so-individual" id="individual">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('Индивидуальные занятия / консультация')}
          </h2>

          <div className="so-individual__panel">
            <div className="so-individual__aside">
              <p className="so-individual__lead">
                {typo('Нужны индивидуальные занятия?')}<br />
                {typo('Математика или другие школьные предметы.')}
              </p>
              <img
                className="so-individual__media"
                src="/znarnia/images/individual-scene.png"
                alt="Онлайн-урок с преподавателем"
                width="1314"
                height="1197"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="so-individual__form">
              <RegistrationForm
                subtitle={typo('После заполнения формы наши консультанты свяжутся с вами')}
                nameLabel="Фамилия и имя *"
                namePlaceholder="Иванов Иван"
                showSubject
                subjectPlaceholder="Например, математика"
                successText={typo('Мы свяжемся с вами для уточнения деталей и подберём формат занятий.')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ЧАСТЫЕ ВОПРОСЫ ── */}
      <section className="so-faq" id="faq">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('Частые вопросы')}
          </h2>
          <p className="so-section__lead">
            {typo('Здесь мы собрали ответы на вопросы, которые нам задают чаще всего.')}
          </p>

          <div className="so-faq__list">
            {FAQ.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={f.q} className={`so-faq__item${open ? ' so-faq__item--open' : ''}`}>
                  <button
                    type="button"
                    className="so-faq__q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className="so-faq__toggle" aria-hidden="true" />
                    <span className="so-faq__qtext">
                      <span className="so-faq__question">{typo(f.q)}</span>
                      <span className="so-faq__answer">{typo('Ответ: ' + f.a)}</span>
                    </span>
                    <img className="so-faq__icon" src={`/znarnia/images/${f.img}.png`} alt="" width="180" height="180" loading="lazy" decoding="async" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── БЛОК О ПЛАТФОРМЕ ── */}
      <section className="so-platform" id="platform">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {typo('«Знарния» — образовательная онлайн-среда для комфортного обучения детей')}
          </h2>
          <p className="so-section__lead">
            {typo('Все занятия, домашние задания, аналитика и обратная связь собраны в одном месте — без переключений между сервисами и потери внимания.')}
          </p>
          <div className="so-platform__grid">
            {PLATFORM.map((p) => (
              <div key={p.label} className="so-platform__item">
                <img
                  className="so-platform__icon"
                  src={`/znarnia/images/platform-${p.icon}.png`}
                  alt=""
                  aria-hidden="true"
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                />
                <span className="so-platform__label">{typo(p.label)}</span>
              </div>
            ))}
          </div>

          <div className="so-social">
            <AuthorCard />
            <ReviewsCarousel />
            <SchoolsCard />
          </div>
        </div>
      </section>

      {/* ── ФИНАЛЬНЫЙ CTA ── */}
      <section className="so-final" id="final">
        <div className="so-wrap">
          <div className="so-final__panel">
            <div className="so-final__body">
              <h2 className="so-final__title">{typo('Готовы записаться на осень?')}</h2>
              <span className="so-final__rule" aria-hidden="true" />
              <p className="so-final__text">
                {typo('После оплаты менеджер поможет подобрать расписание.')}
              </p>
              <div className="so-final__actions">
                <a href="#programs" className="so-btn so-btn--primary">Выбрать программу</a>
                <button type="button" className="so-btn so-btn--outline" onClick={() => setConsultOpen(true)}>Получить консультацию</button>
              </div>
            </div>
            <img
              className="so-final__art"
              src="/znarnia/images/final-calendar.png"
              alt=""
              aria-hidden="true"
              width="456"
              height="440"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <footer className="so-footer">
        <div className="so-wrap">
          <p>© Школа Сотниковой Ольги · Знарния</p>
        </div>
      </footer>

      {consultOpen && (
        <div className="so-modal" onClick={() => setConsultOpen(false)}>
          <div className="so-modal__dialog" role="dialog" aria-modal="true" aria-label="Получить консультацию" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="so-modal__close" aria-label="Закрыть" onClick={() => setConsultOpen(false)}>×</button>
            <h3 className="so-modal__title">{typo('Получить консультацию')}</h3>
            <RegistrationForm
              subtitle={typo('Оставьте заявку — подберём программу и ответим на все вопросы.')}
              nameLabel="Фамилия и имя *"
              namePlaceholder="Иванов Иван"
              showSubject
              subjectPlaceholder="Например, математика"
              successText={typo('Мы свяжемся с вами для уточнения деталей и подберём формат занятий.')}
            />
          </div>
        </div>
      )}

      {formatOpen && (
        <div className="so-modal" onClick={() => setFormatOpen(false)}>
          <div className="so-modal__dialog so-modal__dialog--wide" role="dialog" aria-modal="true" aria-label="Выберите формат обучения" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="so-modal__close" aria-label="Закрыть" onClick={() => setFormatOpen(false)}>×</button>
            <div className="so-fmt">
              <div className="so-fmt__head">
                <h3 className="so-fmt__title">{typo('Выберите формат обучения')}</h3>
                <p className="so-fmt__sub">{typo('Оплатите занятия на удобный период и начните учиться.')}</p>
              </div>

              <div className="so-fmt__grid">
                {/* Вариант 1 — только октябрь */}
                <article className="so-fmt-card">
                  <div className="so-fmt-card__top">
                    <span className="so-fmt-card__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                      <span className="so-fmt-card__leaf" aria-hidden="true">🍁</span>
                    </span>
                    <div className="so-fmt-card__heading">
                      <h4 className="so-fmt-card__title">{typo('Только октябрь')}</h4>
                      <p className="so-fmt-card__desc">{typo('10 уроков по выбранной программе')}</p>
                    </div>
                  </div>
                  <span className="so-fmt-card__rule" aria-hidden="true" />
                  <div className="so-fmt-card__price">
                    <span className="so-fmt-card__price-val">{fmt.m1.price}</span>
                    <span className="so-fmt-card__price-note">{typo(fmt.m1.note)}</span>
                  </div>
                  <div className="so-fmt-card__actions">
                    <a href="#" className="so-btn so-btn--pay">Оплатить октябрь</a>
                  </div>
                </article>

                {/* Вариант 2 — 3 месяца (выгодный) */}
                <article className="so-fmt-card so-fmt-card--best">
                  <span className="so-fmt-card__badge">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.7 5.9 6.3.6-4.7 4.2 1.4 6.3-5.5-3.2-5.5 3.2 1.4-6.3-4.7-4.2 6.3-.6z"/></svg>
                    Выгодный вариант
                  </span>
                  <div className="so-fmt-card__top">
                    <span className="so-fmt-card__months" aria-hidden="true">
                      <span className="so-fmt-month so-fmt-month--v">Окт</span>
                      <span className="so-fmt-month so-fmt-month--g">Ноя</span>
                      <span className="so-fmt-month so-fmt-month--o">Дек</span>
                    </span>
                    <div className="so-fmt-card__heading">
                      <h4 className="so-fmt-card__title">{typo('Октябрь + ноябрь + декабрь')}</h4>
                      <p className="so-fmt-card__desc">{typo('Оплата сразу за 3 месяца')}</p>
                    </div>
                  </div>
                  <span className="so-fmt-card__rule" aria-hidden="true" />
                  <div className="so-fmt-card__price so-fmt-card__price--row">
                    <div className="so-fmt-card__price-main">
                      <span className="so-fmt-card__price-val">{fmt.m3.price}</span>
                      <span className="so-fmt-card__price-note">{typo(fmt.m3.note)}</span>
                    </div>
                    <span className="so-fmt-card__benefit">
                      <span className="so-fmt-card__benefit-label">{typo('Ваша выгода')}</span>
                      <span className="so-fmt-card__benefit-val">{fmt.m3.benefit}</span>
                    </span>
                  </div>
                  <div className="so-fmt-gift">
                    <div className="so-fmt-gift__head">
                      <span className="so-fmt-gift__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M4 11h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M3 7.5h18V11H3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M12 7.5V20" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7.5C9.5 7.5 7.8 4 9.6 3s3 2.5 2.4 4.5C11.4 5.5 12.9 3 14.6 4s-.1 3.5-2.6 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
                      </span>
                      <span className="so-fmt-gift__title">{typo('В подарок:')}</span>
                    </div>
                    <ul className="so-fmt-gift__list">
                        <li><span className="so-fmt-gift__check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.6 3.6L18 7.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>{typo('обучение в сентябре — ')}<b>бесплатно</b></span></li>
                        <li><span className="so-fmt-gift__check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.6 3.6L18 7.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>{typo('20 уроков-тренажёров по русскому языку — ')}<b>бесплатно</b></span></li>
                      </ul>
                  </div>
                  <div className="so-fmt-card__actions">
                    <a href="#" className="so-btn so-btn--pay">Оплатить 3 месяца</a>
                  </div>
                </article>
              </div>

              <div className="so-fmt__note">
                <span className="so-fmt__note-icon" aria-hidden="true">i</span>
                <p>
                  {typo('Количество уроков в месяц и расписание зависит от выбранной программы.')}<br />
                  {typo('После оплаты менеджер свяжется с вами и поможет подобрать удобное расписание. Если расписание не подойдёт — оформим полный возврат.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
