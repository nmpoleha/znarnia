/* ─────────────────────────────────────────────────────────────
   Самостоятельная оплата занятий — осень
   Герой (место под фото справа) + блок выбора программы по математике.
   Шапка — как на partnerskaya-programma-9-klass-novoe.
   ───────────────────────────────────────────────────────────── */
import { useState } from 'react'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

/* ── Типографика: неразрывные пробелы, чтобы на мобильных не рвались строки ── */
const NBSP_SHORT =
  'без|перед|через|после|около|между|кроме|среди|чтобы|если|когда|чем|во|ко|со|об|из|от|до|по|за|на|под|над|для|при|про|что|как|или|же|ли|бы|то|не|ни|в|к|с|о|у|и|а|но'
function typo(s) {
  if (typeof s !== 'string') return s
  return s
    .replace(new RegExp('(?<=^|[\\s(«„])(' + NBSP_SHORT + ')\\s+', 'gi'), '$1 ')
    .replace(/(\d)\s+(?=[«"А-Яа-яЁёA-Za-z])/g, '$1 ')
    .replace(/\s+—/g, ' —')
    .replace(/([А-Яа-яЁёA-Za-z0-9])-(?=[А-Яа-яЁёA-Za-z])/g, '$1‑')
}

/* ── Пункты мобильного меню ── */
const NAV = [
  { href: '#programs', label: 'Программы' },
  { href: '#how', label: 'Как это работает' },
  { href: '#programs', label: 'Оплатить сентябрь' },
]

/* ── SVG-иконки для карточек программ ── */
/* ── Программы по математике ── */
const PROGRAMS = [
  { img: 'prog-abacus',    title: '1–4 классы',            desc: 'Математика + развитие математического мышления', href: '#' },
  { img: 'prog-backpack',  title: '5–8 классы',            desc: 'Сильная школьная база и работа с проблемами',    href: '#' },
  { img: 'prog-pie',       title: '9 класс',               desc: 'Математика + подготовка к ОГЭ',                  href: '#' },
  { img: 'prog-cap',       title: '10 класс',              desc: 'Математика и систематизация знаний',             href: '#' },
  { img: 'prog-target',    title: '11 класс — ЕГЭ база',   desc: 'Подготовка к базовому ЕГЭ',                      href: '#' },
  { img: 'prog-clipboard', title: '11 класс — ЕГЭ профиль', desc: 'Подготовка к профильному ЕГЭ',                  href: '#' },
]

/* ── Как проходит запись ── */
const STEPS = [
  { n: '1', title: 'Выберите программу',   text: 'Класс или направление и оплатите сентябрь.', img: 'step-checklist' },
  { n: '2', title: 'Мы свяжемся с вами',   text: 'Менеджер предложит варианты расписания.',   img: 'step-headset' },
  { n: '3', title: 'Выберите удобное время', text: 'Для каждого класса будет несколько групп.', img: 'step-calendar' },
]

/* ── Дополнительные предметы — подготовка к ОГЭ ── */
const SUBJECTS = [
  { img: 'subj-book',   title: 'Русский язык' },
  { img: 'subj-atom',   title: 'Физика' },
  { img: 'subj-laptop', title: 'Информатика' },
  { img: 'subj-bank',   title: 'Обществознание' },
]

/* ── Частые вопросы ── */
const FAQ = [
  { img: 'faq-card',     q: 'Можно ли самостоятельно оплатить сентябрь?', a: 'Да, выберите программу и оплатите прямо на странице.' },
  { img: 'faq-calclock', q: 'Что именно я оплачиваю сейчас?',            a: 'При оплате в сентябре вы оплачиваете 10 уроков за 4 500 ₽. По дополнительным предметам ОГЭ — 2 сентябрьских занятия.' },
  { img: 'faq-chat',     q: 'Как узнать расписание по математике?',       a: 'После оплаты с вами свяжется менеджер и предложит варианты расписания для вашего класса.' },
  { img: 'faq-refresh',  q: 'Что если расписание не подойдёт?',           a: 'Мы вернём полную оплату без каких-либо удержаний.' },
  { img: 'faq-shield',   q: 'Что если ребёнок откажется продолжать занятия?', a: 'При расторжении в течение 7 дней с начала занятий полный возврат.' },
  { img: 'faq-person',   q: 'Можно ли заниматься индивидуально?',         a: 'При возможности. Мы оставляем за собой право отказать в связи с расписанием и стоимостью.' },
  { img: 'faq-headset',  q: 'Можно сначала задать вопросы?',              a: 'Конечно! Вы можете написать нам в любой мессенджер или получить консультацию.' },
]

/* ── Блок о платформе ── */
const PLATFORM_ICONS = {
  video: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M10 9l4 3-4 3V9z" fill="currentColor"/><path d="M7 20h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  ),
  board: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v10H9l-4 3.5V15H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="9" cy="10" r="1.1" fill="currentColor"/><circle cx="12.5" cy="10" r="1.1" fill="currentColor"/><circle cx="16" cy="10" r="1.1" fill="currentColor"/></svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="15" r="1.4" fill="currentColor"/></svg>
  ),
  list: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="5" cy="7" r="1.4" fill="currentColor"/><circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="5" cy="17" r="1.4" fill="currentColor"/><path d="M9.5 7h10M9.5 12h10M9.5 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 20V13M12 20V6M19 20v-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/></svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M18.5 3l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6L16.3 5l1.6-.6.6-1.4z" fill="currentColor"/></svg>
  ),
}
const PLATFORM = [
  { icon: 'video', label: ['Собственная', 'видеосвязь'] },
  { icon: 'board', label: ['Интерактивная', 'доска'] },
  { icon: 'lock',  label: ['Автопроверка'] },
  { icon: 'list',  label: ['Записи с', 'интерактивом'] },
  { icon: 'chart', label: ['Мотивация', 'и баллы'] },
  { icon: 'ai',    label: ['AI помощник /', 'аналитика'] },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
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
              {typo('Запись на ')}<span className="so-hero__accent">{typo('осень')}</span>{typo(' открыта')}
            </h1>
            <p className="so-hero__sub">
              <span className="so-hero__sub-line">{typo('Выберите программу для ребёнка и оплатите сентябрь онлайн.')}</span>{' '}
              {typo('Математика 1–11 классы, ОГЭ, ЕГЭ и дополнительные предметы.')}
            </p>

            <div className="so-hero__note">
              <span className="so-hero__note-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </span>
              <div className="so-hero__note-text">
                <b>{typo('Математика в сентябре: 10 уроков — 4 500 ₽')}</b>
                <span>{typo('Сейчас оплачивается только сентябрь.')}</span>
              </div>
            </div>

            <div className="so-hero__actions">
              <a href="#programs" className="so-btn so-btn--orange">Выбрать программу →</a>
            </div>

            <p className="so-hero__fine">
              {typo('После оплаты менеджер продолжит расписание.')}<br />
              {typo('Если оно не подойдёт — полный возврат без удержаний.')}
            </p>
          </div>

          {/* Иллюстрация справа */}
          <div className="so-hero__media">
            <img
              className="so-hero__img"
              src="/znarnia/images/math-hero-scene.png"
              alt="Математические фигуры и формула"
              width="1515"
              height="1038"
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
            <span className="so-section__num">1.</span> {typo('Выберите программу по математике')}
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
                <p className="so-card__price">{typo('Сентябрь: 10 уроков / 4 500 ₽')}</p>
                <div className="so-card__actions">
                  <a href={p.href} className="so-btn so-btn--pay">Оплатить сентябрь</a>
                  <a href={p.href} className="so-btn so-btn--link">Подробнее о программе →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── КАК ПРОХОДИТ ЗАПИСЬ ── */}
      <section className="so-steps" id="how">
        <div className="so-wrap">
          <h2 className="so-section__title">
            <span className="so-section__num">2.</span> {typo('Как проходит запись')}
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
            <span className="so-section__num">3.</span> {typo('Дополнительные предметы — подготовка к ОГЭ')}
          </h2>

          <div className="so-subjects">
            {SUBJECTS.map((s) => (
              <article key={s.title} className="so-subject">
                <img className="so-subject__icon" src={`/znarnia/images/${s.img}.png`} alt="" width="200" height="200" loading="lazy" decoding="async" />
                <h3 className="so-subject__title">{typo(s.title)}</h3>
                <p className="so-subject__meta">{typo('1 раз в неделю • 50 минут')}</p>
                <p className="so-subject__meta">{typo('Расписание: [день / время]')}</p>
                <p className="so-subject__price">{typo('Сентябрь: 2 100 ₽')}</p>
                <a href="#" className="so-btn so-btn--pay">Оплатить</a>
              </article>
            ))}
          </div>

          <p className="so-extra__note">
            {typo('Формат: 1 раз в неделю, 50 минут. Обычная стоимость — 4 200 ₽ за 4 занятия. В сентябре только 2 занятия, поэтому оплата за сентябрь — 2 100 ₽.')}
          </p>
        </div>
      </section>

      {/* ── ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ / КОНСУЛЬТАЦИЯ ── */}
      <section className="so-individual" id="individual">
        <div className="so-wrap">
          <h2 className="so-section__title">
            <span className="so-section__num">4.</span> {typo('Индивидуальные занятия / консультация')}
          </h2>

          <div className="so-individual__panel">
            <div className="so-individual__aside">
              <p className="so-individual__lead">
                {typo('Нужны индивидуальные занятия?')}<br />
                {typo('Материалы или другие школьные предметы.')}
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

            <form className="so-form" onSubmit={(e) => e.preventDefault()}>
              <label className="so-form__row">
                <span className="so-form__label">ФИО родителя</span>
                <input className="so-form__input" type="text" name="name" placeholder="Ваше имя" autoComplete="name" />
              </label>
              <label className="so-form__row">
                <span className="so-form__label">Телефон</span>
                <input className="so-form__input" type="tel" name="phone" placeholder="+7 (___) ___-__-__" autoComplete="tel" />
              </label>
              <label className="so-form__row">
                <span className="so-form__label">Класс ребёнка</span>
                <input className="so-form__input" type="text" name="grade" placeholder="Например, 9 класс" />
              </label>
              <label className="so-form__row">
                <span className="so-form__label">Предмет</span>
                <input className="so-form__input" type="text" name="subject" placeholder="Например, физика" />
              </label>
              <label className="so-form__row">
                <span className="so-form__label">Комментарий</span>
                <textarea className="so-form__input so-form__textarea" name="comment" rows="3" placeholder="Ваш комментарий (необязательно)" />
              </label>
              <button type="submit" className="so-btn so-btn--primary so-form__submit">Оставить заявку</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── ЧАСТЫЕ ВОПРОСЫ ── */}
      <section className="so-faq" id="faq">
        <div className="so-wrap">
          <h2 className="so-section__title">
            <span className="so-section__num">5.</span> {typo('Частые вопросы')}
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
            <span className="so-section__num">6.</span> {typo('Блок о платформе')}
          </h2>
          <div className="so-platform__grid">
            {PLATFORM.map((p) => (
              <div key={p.label.join(' ')} className="so-platform__item">
                <span className="so-platform__icon" aria-hidden="true">{PLATFORM_ICONS[p.icon]}</span>
                <span className="so-platform__label">
                  {p.label.map((l, i) => (<span key={i}>{l}</span>))}
                </span>
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
            <div className="so-final__decor" aria-hidden="true">
              <span className="so-final__dots" />
            </div>
            <div className="so-final__body">
              <h2 className="so-final__title">{typo('Готовы записаться на осень?')}</h2>
              <p className="so-final__text">
                {typo('Математика — 4 500 ₽ / 10 уроков в сентябре.')}<br />
                {typo('После оплаты менеджер поможет подобрать расписание.')}
              </p>
              <div className="so-final__actions">
                <a href="#programs" className="so-btn so-btn--primary">Выбрать программу</a>
                <a href="#individual" className="so-btn so-btn--outline">Получить консультацию</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="so-footer">
        <div className="so-wrap">
          <p>© Школа Сотниковой Ольги · Знарния</p>
        </div>
      </footer>
    </div>
  )
}
