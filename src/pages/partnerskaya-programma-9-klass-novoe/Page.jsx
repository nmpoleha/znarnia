/* ─────────────────────────────────────────────────────────────
   Партнёрская программа для 9 класса — новое
   Только герой (взят с partnerskaya-programma-9-klass)
   + плашка «Интеллектуальный клуб ОГЭ».
   ───────────────────────────────────────────────────────────── */
import { useState } from 'react'
import RegistrationForm from '../../shared/components/RegistrationForm'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

/* ── Типографика: неразрывные пробелы, чтобы на мобильных не рвались строки
   на предлогах, союзах, тире и дефисах ── */
const NBSP_SHORT =
  'без|перед|через|после|около|между|кроме|среди|чтобы|если|когда|чем|во|ко|со|об|из|от|до|по|за|на|под|над|для|при|про|что|как|или|же|ли|бы|то|не|ни|в|к|с|о|у|и|а|но'
function typo(s) {
  if (typeof s !== 'string') return s
  return s
    // короткое слово (предлог/союз/частица) прилипает к следующему слову
    .replace(new RegExp('(?<=^|[\\s(«„])(' + NBSP_SHORT + ')\\s+', 'gi'), '$1 ')
    // число не отрывается от следующего слова
    .replace(/(\d)\s+(?=[«"А-Яа-яЁёA-Za-z])/g, '$1 ')
    // тире не переносится в начало строки
    .replace(/\s+—/g, ' —')
    // дефис внутри слова — неразрывный
    .replace(/([А-Яа-яЁёA-Za-z0-9])-(?=[А-Яа-яЁёA-Za-z])/g, '$1‑')
}

/* ── Пункты мобильного меню ── */
const NAV = [
  { href: '#diag', label: 'Диагностика' },
  { href: '#gifts', label: 'Что вы получите' },
  { href: '#access', label: 'Как получить доступ' },
  { href: '#registration', label: 'Оставить заявку' },
]

/* ── Почему нам доверяют ── */
const TRUST = [
  { img: 'trust-medal',   alt: 'Медаль',        strong: 'Более 23 лет',       rest: 'в образовании' },
  { img: 'trust-rosette', alt: 'Награда',       strong: 'Получатель гранта',  rest: 'Правительства<br />Москвы' },
  { img: 'trust-laptop',  alt: 'Онлайн-платформа', strong: 'Собственная',     rest: 'образовательная<br />платформа' },
  { img: 'trust-people',  alt: 'Ученики',       strong: 'Тысячи учеников',    rest: 'подготовлены<br />к экзаменам' },
  { img: 'trust-chart',   alt: 'Результаты',    strong: 'Высокие',            rest: 'результаты<br />выпускников' },
]

/* ── Шаг 1: что увидите после проверки ── */
const STEP1_RESULTS = [
  'текущий уровень подготовки;',
  'основные пробелы;',
  'рекомендации по дальнейшей подготовке.',
]

/* ── Шкала оценивания ── */
const SCALE = [
  { range: '0–7',   grade: '2', mark: '✗', cls: 'red' },
  { range: '8–14',  grade: '3', mark: '★', cls: 'amber' },
  { range: '15–21', grade: '4', mark: '⬆', cls: 'green' },
  { range: '22–31', grade: '5', mark: '★', cls: 'violet' },
]

/* ── Что получите после диагностики ── */
const LIBRARY = [
  'официальные работы СтатГрад;',
  'тренировочные варианты ОГЭ;',
  'еженедельные материалы по подготовке;',
  'разборы сложных заданий и рекомендации экспертов;',
  'подборки материалов по ключевым темам;',
  'гайд «Как подготовиться к ОГЭ без лишнего стресса».',
]

const LESSONS = [
  'Онлайн-урок с преподавателем.',
  'Интерактивный урок-тренажёр с автоматической проверкой.',
]

/* ── Специальные материалы для родителей 9 класса ── */
const PARENTS = [
  {
    cls: 'violet',
    title: 'Поступление в колледж после 9 класса',
    text: 'Что действительно влияет на зачисление и как повысить шансы на поступление.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3L2 8h20L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M4 8v9M9 8v9M15 8v9M20 8v9M2.5 17h19M2 20.5h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
  },
  {
    cls: 'green',
    title: 'Средний балл аттестата',
    text: 'Как он рассчитывается, какие оценки влияют на него больше всего и можно ли его улучшить.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 20V11M9.3 20V5M14.7 20v-8M20 20V8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    ),
  },
  {
    cls: 'orange',
    title: 'ОГЭ без путаницы',
    text: 'Самые важные ответы на вопросы родителей: как готовиться эффективнее, что действительно влияет на результат и какие ошибки чаще всего допускают выпускники.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H9l-4 3.5V16H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.1 2.3c-.75.28-1.2.85-1.2 1.5v.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="11.5" cy="15.2" r="0.95" fill="currentColor"/></svg>
    ),
  },
]

/* ── Как получить доступ ── */
const ACCESS = [
  { cls: 'violet', img: 'access-form', text: 'Заполните короткую форму.' },
  { cls: 'green',  img: 'access-diag', text: 'Пройдите диагностику.' },
  { cls: 'orange', img: 'access-gift', text: 'Получите доступ ко всем подаркам и специальной стоимости обучения.' },
]

/* ── Декоративный слой для цветных секций (как в герое) ── */
function SectionDecor() {
  return (
    <div className="pp-sdecor" aria-hidden="true">
      <span className="pp-deco pp-sdecor--glow-tr" />
      <span className="pp-deco pp-sdecor--glow-bl" />
      <span className="pp-deco pp-sdecor--ring" />
      <span className="pp-deco pp-sdecor--dots" />

      <svg className="pp-deco pp-sdecor--cross" viewBox="0 0 16 16" fill="none">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#a78bfa" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <svg className="pp-deco pp-sdecor--arc" viewBox="0 0 80 80" fill="none">
        <path d="M6 74A68 68 0 0 1 74 6" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg className="pp-deco pp-sdecor--star pp-sdecor--star-1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2c.6 4.8 4.6 8.8 9.4 9.4-4.8.6-8.8 4.6-9.4 9.4-.6-4.8-4.6-8.8-9.4-9.4C7.4 10.8 11.4 6.8 12 2z" fill="#FFC857" />
      </svg>
      <svg className="pp-deco pp-sdecor--star pp-sdecor--star-2" viewBox="0 0 24 24" fill="none">
        <path d="M12 2c.6 4.8 4.6 8.8 9.4 9.4-4.8.6-8.8 4.6-9.4 9.4-.6-4.8-4.6-8.8-9.4-9.4C7.4 10.8 11.4 6.8 12 2z" fill="#c4b5fd" />
      </svg>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="pp-page">
      {/* ── HEADER ── */}
      <header className="pp-header">
        <div className="pp-wrap pp-header__inner">
          <div className="pp-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="pp-header__logo" width="80" height="80" />
            <span className="pp-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
          <span className="pp-header__badge">🎓 Для родителей 9 класса</span>
          <button
            type="button"
            className="pp-header__burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="pp-mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`pp-burger${menuOpen ? ' pp-burger--open' : ''}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
        <nav
          id="pp-mobile-nav"
          className={`pp-header__nav${menuOpen ? ' pp-header__nav--open' : ''}`}
          hidden={!menuOpen}
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="pp-header__nav-link" onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="pp-hero">
        {/* Декоративный слой (не влияет на контент) */}
        <div className="pp-hero-decor" aria-hidden="true">
          <span className="pp-deco pp-deco--glow-tr" />
          <span className="pp-deco pp-deco--glow-bl" />
          <span className="pp-deco pp-deco--circle-tr" />
          <span className="pp-deco pp-deco--dots-left" />
          <span className="pp-deco pp-deco--ring" />

          {/* сиреневый крестик */}
          <svg className="pp-deco pp-deco--cross" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="#a78bfa" strokeWidth="2.4" strokeLinecap="round" />
          </svg>

          {/* жёлтая дуга снизу справа */}
          <svg className="pp-deco pp-deco--arc" viewBox="0 0 80 80" fill="none">
            <path d="M6 74A68 68 0 0 1 74 6" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
          </svg>

          {/* маленькие звёздочки */}
          <svg className="pp-deco pp-deco--star pp-deco--star-1" viewBox="0 0 24 24" fill="none">
            <path d="M12 2c.6 4.8 4.6 8.8 9.4 9.4-4.8.6-8.8 4.6-9.4 9.4-.6-4.8-4.6-8.8-9.4-9.4C7.4 10.8 11.4 6.8 12 2z" fill="#FFC857" />
          </svg>
          <svg className="pp-deco pp-deco--star pp-deco--star-2" viewBox="0 0 24 24" fill="none">
            <path d="M12 2c.6 4.8 4.6 8.8 9.4 9.4-4.8.6-8.8 4.6-9.4 9.4-.6-4.8-4.6-8.8-9.4-9.4C7.4 10.8 11.4 6.8 12 2z" fill="#c4b5fd" />
          </svg>

          {/* пунктирная соединяющая линия */}
          <svg className="pp-deco pp-deco--link" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
            <path d="M0 10H200" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 8" />
          </svg>
        </div>

        <div className="pp-wrap">
          <span className="pp-hero__eyebrow">{typo('🎓 Для родителей 9 класса')}</span>
          <h1 className="pp-hero__title">
            {typo('Готовимся к ОГЭ вместе — ')}<span className="pp-accent">легко,</span>{typo(' уверенно, эффективно')}
          </h1>
        </div>
        <div className="pp-wrap pp-hero__inner">
          <div className="pp-hero__copy">
            <p className="pp-hero__sub">
              {typo('Специальная программа для родителей 9 класса: ')}
              <b className="pp-hero__sub-hl">{typo('диагностика знаний, подарки и скидки на обучение в сентябре.')}</b>
            </p>

            {/* ── ПЛАШКА: Интеллектуальный клуб ОГЭ ── */}
            <div className="pp-plashka">
              <img className="pp-plashka__icon" src="/znarnia/images/plashka-cap-3d.png" alt="" width="903" height="922" loading="lazy" decoding="async" />
              <div className="pp-plashka__head">
                <span className="pp-plashka__badge">Для учеников 9 класса</span>
                <div className="pp-plashka__title">Интеллектуальный клуб ОГЭ</div>
              </div>
              <p className="pp-plashka__text">
                {typo('Не просто занятия.')}<br />
                {typo('Это пространство, где школьник регулярно занимается, получает поддержку и постепенно выходит на уверенную подготовку к экзамену.')}
              </p>
            </div>
          </div>

          <div className="pp-hero__media">
            <img src="/znarnia/images/oge-hero-scene.webp" alt="Предметы ОГЭ для 9 класса" className="pp-hero__img" width="1000" height="681" loading="eager" decoding="async" />
          </div>

          <div className="pp-hero__actions">
            <a href="#step1" className="pp-btn pp-btn--primary">Узнать подробнее →</a>
            <a href="#registration" className="pp-btn pp-btn--ghost">Хочу участвовать</a>
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ НАМ ДОВЕРЯЮТ ── */}
      <section className="pp-trust">
        <div className="pp-wrap">
          <div className="pp-trust__panel">
            {/* декоративный слой */}
            <div className="pp-trust-decor" aria-hidden="true">
              <span className="pp-tdeco pp-tdeco--glow-tr" />
              <span className="pp-tdeco pp-tdeco--circle-tr" />
              <span className="pp-tdeco pp-tdeco--circle-bl" />
              <span className="pp-tdeco pp-tdeco--dot pp-tdeco--dot-1" />
              <span className="pp-tdeco pp-tdeco--dot pp-tdeco--dot-2" />
              <span className="pp-tdeco pp-tdeco--dots" />
              <svg className="pp-tdeco pp-tdeco--arc" viewBox="0 0 80 80" fill="none">
                <path d="M6 74A68 68 0 0 1 74 6" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="pp-trust__title">
              <span className="pp-trust__title-ico" aria-hidden="true">
                <svg className="pp-trust__cup" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M7 5.5H4.5V7a3 3 0 0 0 3 3M17 5.5h2.5V7a3 3 0 0 1-3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 12.5V16M9 20h6M10 16h4l-.5 2h-3z" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="pp-trust__title-spark" viewBox="0 0 20 20" fill="none">
                  <path d="M6 9L3 12M11 6L10 2M13 11L17 9" stroke="#FFC857" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="pp-trust__title-text">Почему нам доверяют?</span>
              <svg className="pp-trust__title-line" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 6H198" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 9" />
              </svg>
            </h2>

            {/* Пунктирная линия с точкой и дугой — под заголовком (моб.) */}
            <div className="pp-trust__rule" aria-hidden="true">
              <span className="pp-trust__rule-line" />
              <span className="pp-trust__rule-dot" />
              <svg className="pp-trust__rule-arc" viewBox="0 0 40 40" fill="none">
                <path d="M5 35A30 30 0 0 1 35 5" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="pp-trust__grid">
              {TRUST.map((t, i) => (
                <div key={i} className="pp-trust__card">
                  <span className="pp-trust__icon" aria-hidden="true">
                    <img src={`/znarnia/images/${t.img}.webp`} alt="" width="256" height="256" loading="lazy" decoding="async" />
                  </span>
                  <p className="pp-trust__text">
                    <b className="pp-trust__strong">{t.strong}</b>
                    <span className="pp-trust__rest" dangerouslySetInnerHTML={{ __html: typo(t.rest) }} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ДИАГНОСТИКА ── */}
      <section className="pp-diag" id="diag">
        <SectionDecor />
        <div className="pp-wrap">
          <div className="pp-diag__head">
            <span className="pp-diag__target" aria-hidden="true">
              <img src="/znarnia/images/lesson-target.png" alt="" width="440" height="440" loading="lazy" decoding="async" />
            </span>
            <div className="pp-diag__head-body">
              <h2 className="pp-diag__title">
                {typo('Подготовка к ОГЭ начинается с ')}<span className="pp-accent">честной диагностики</span>
              </h2>
              <p className="pp-diag__lead">
                {typo('Проверьте уровень знаний ребёнка ')}<span className="pp-accent">уже&nbsp;сейчас</span>{typo(' и получите материалы, которые помогут подготовиться к экзамену ')}<span className="pp-accent">без&nbsp;лишнего&nbsp;стресса</span>.
              </p>
            </div>
          </div>

          <div className="pp-diag__why">
            <div className="pp-diag__why-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3.5L2.5 20h19L12 3.5z" stroke="#dd8b1f" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 10v4.5" stroke="#dd8b1f" strokeWidth="1.9" strokeLinecap="round" />
                <circle cx="12" cy="17.3" r="1.1" fill="#dd8b1f" />
              </svg>
            </div>
            <div className="pp-diag__why-body">
              <div className="pp-diag__why-title">{typo('Почему это важно?')}</div>
              <p className="pp-diag__why-text">
                {typo('В профильные 10-е классы учеников с тройками не принимают. Поэтому важно заранее понять уровень подготовки ребёнка и успеть устранить пробелы до экзамена.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ШАГ 1. ДИАГНОСТИКА В ФОРМАТЕ ОГЭ ── */}
      <section className="pp-step" id="step1">
        <div className="pp-wrap pp-step__inner">
          {/* Левая колонка */}
          <div className="pp-step__left">
            <div className="pp-step__head">
              <span className="pp-step__num">1</span>
              <h2 className="pp-step__title">{typo('Шаг 1. Диагностика в формате ОГЭ')}</h2>
            </div>
            <p className="pp-step__text">
              {typo('Вы получите диагностическую работу по формату ФИПИ.')}<br />
              {typo('Она включает ')}<b>{typo('первые 19 заданий ОГЭ.')}</b>
            </p>

            <div className="pp-step__note">
              <span className="pp-step__note-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.6l2.5 5.1 5.6.8-4.05 3.95.96 5.55L12 16.35 6.03 19l.96-5.55L2.94 9.5l5.6-.8z" fill="#7c3aed" />
                </svg>
              </span>
              <p className="pp-step__note-text">
                {typo('В начале 9 класса ученик должен уверенно решать ')}<b>{typo('17–18 заданий из 19.')}</b>
              </p>
            </div>

            <div className="pp-step__after">После проверки вы увидите:</div>
            <ul className="pp-step__list">
              {STEP1_RESULTS.map((r, i) => (
                <li key={i} className="pp-step__li">
                  <span className="pp-step__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M6 12.5l4 4 8-9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {typo(r)}
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка — шкала */}
          <div className="pp-scale">
            <div className="pp-scale__title">Шкала оценивания</div>
            <div className="pp-scale__table">
              <div className="pp-scale__row pp-scale__row--head">
                <span>Первичные баллы</span>
                <span>Оценка</span>
              </div>
              {SCALE.map((s, i) => (
                <div key={i} className="pp-scale__row">
                  <span className="pp-scale__range">{s.range}</span>
                  <span className={`pp-scale__grade pp-scale__grade--${s.cls}`}>
                    <span className="pp-scale__mark" aria-hidden="true">{s.mark}</span>
                    {s.grade}
                  </span>
                </div>
              ))}
            </div>
            <div className="pp-scale__important">
              <span className="pp-scale__imp-ico" aria-hidden="true">!</span>
              <p className="pp-scale__imp-text">
                <b>Важно.</b>{typo(' Для получения положительной оценки необходимо решить')}
                <b>{typo(' минимум 2 задания')}</b>{typo(' по геометрии.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ЧТО ПОЛУЧИТЕ ПОСЛЕ ДИАГНОСТИКИ ── */}
      <section className="pp-gifts" id="gifts">
        <SectionDecor />
        <div className="pp-wrap">
          <h2 className="pp-gifts__title">
            После прохождения диагностики вы получите
          </h2>

          <div className="pp-gifts__grid">
            {/* Карточка 1 — библиотека */}
            <div className="pp-gcard">
              <div className="pp-gcard__head">
                <img className="pp-gcard__ico" src="/znarnia/images/library-books-3d.png" alt="" width="1004" height="929" loading="lazy" decoding="async" />
                <div className="pp-gcard__title">{typo('Годовой доступ к библиотеке материалов')}</div>
              </div>
              <p className="pp-gcard__subhead">
                {typo('Мы собрали всё необходимое для подготовки к ОГЭ в одном месте. В библиотеке будут доступны:')}
              </p>
              <ul className="pp-gcard__list">
                {LIBRARY.map((x, i) => (
                  <li key={i} className="pp-gcard__li"><span className="pp-gcard__check" aria-hidden="true">✓</span>{typo(x)}</li>
                ))}
              </ul>
            </div>

            {/* Карточка 2 — уроки */}
            <div className="pp-gcard">
              <div className="pp-gcard__head">
                <img className="pp-gcard__ico" src="/znarnia/images/library-laptop-3d.png" alt="" width="1174" height="979" loading="lazy" decoding="async" />
                <div className="pp-gcard__title">{typo('Два полноценных урока нашей платформы')}</div>
              </div>
              <ul className="pp-gcard__list">
                {LESSONS.map((x, i) => (
                  <li key={i} className="pp-gcard__li"><span className="pp-gcard__check" aria-hidden="true">✓</span>{typo(x)}</li>
                ))}
              </ul>
              <p className="pp-gcard__note">
                <span className="pp-gcard__note-ico" aria-hidden="true">🎓</span>
                {typo('Познакомьтесь с нашей методикой и оцените формат обучения.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── МАТЕРИАЛЫ ДЛЯ РОДИТЕЛЕЙ 9 КЛАССА ── */}
      <section className="pp-parents">
        <div className="pp-wrap">
          {/* Шапка на всю ширину */}
          <div className="pp-parents__head">
            <span className="pp-parents__badge">
              <span className="pp-parents__badge-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L2 8.5 12 13l10-4.5L12 4z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/><path d="M6 11v4c0 .6.3 1.1.8 1.4 1.4.9 3.2 1.4 5.2 1.4s3.8-.5 5.2-1.4c.5-.3.8-.8.8-1.4v-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              {typo('Специально для родителей 9 класса')}
            </span>
            <h2 className="pp-parents__title">
              {typo('Полезные материалы для ')}<span className="pp-accent">родителей</span> выпускников
            </h2>
            <p className="pp-parents__sub">
              {typo('Помимо диагностики и уроков вы получите материалы, которые помогут принять верные решения и поддержать ребёнка.')}
            </p>
          </div>

          <div className="pp-parents__inner">
            {/* Левая колонка — карточки */}
            <div className="pp-parents__cards">
              {PARENTS.map((p, i) => (
                <div key={i} className={`pp-pcard pp-pcard--${p.cls}`}>
                  <span className="pp-pcard__icon" aria-hidden="true">{p.icon}</span>
                  <div className="pp-pcard__body">
                    <div className="pp-pcard__title">{typo(p.title)}</div>
                    <p className="pp-pcard__text">{typo(p.text)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Правая колонка — иллюстрация */}
            <div className="pp-parents__media">
              <img src="/znarnia/images/parents-materials-3d-cut.webp" alt="Папка с материалами: ОГЭ, колледж после 9 класса, средний балл аттестата" className="pp-parents__img" width="1016" height="1085" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Нижняя плашка */}
          <div className="pp-parents__foot">
            <span className="pp-parents__foot-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 2.5v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V5.5L12 3z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="pp-parents__foot-text">
              {typo('Все материалы подготовлены экспертами и основаны на актуальных требованиях и реальном опыте подготовки к ОГЭ.')}
            </span>
          </div>
        </div>
      </section>

      {/* ── КАК ПОЛУЧИТЬ ДОСТУП ── */}
      <section className="pp-access" id="access">
        {/* декоративный слой */}
        <div className="pp-access-decor" aria-hidden="true">
          <span className="pp-adeco pp-adeco--dots-tl" />
          <span className="pp-adeco pp-adeco--dots-tr" />
          <span className="pp-adeco pp-adeco--circle" />
          <svg className="pp-adeco pp-adeco--star pp-adeco--star-1" viewBox="0 0 24 24"><path d="M12 2c.5 4.6 4.8 8.9 9.4 9.4-4.6.5-8.9 4.8-9.4 9.4-.5-4.6-4.8-8.9-9.4-9.4C7.2 10.9 11.5 6.6 12 2z" fill="#39C97A"/></svg>
          <svg className="pp-adeco pp-adeco--star pp-adeco--star-2" viewBox="0 0 24 24"><path d="M12 2c.5 4.6 4.8 8.9 9.4 9.4-4.6.5-8.9 4.8-9.4 9.4-.5-4.6-4.8-8.9-9.4-9.4C7.2 10.9 11.5 6.6 12 2z" fill="#FF9F43"/></svg>
          <svg className="pp-adeco pp-adeco--wave" viewBox="0 0 900 40" fill="none" preserveAspectRatio="none">
            <path d="M4 20C120 4 200 36 320 20s200-16 300 0 180 12 276 0" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 12"/>
          </svg>
        </div>

        <div className="pp-wrap">
          <h2 className="pp-access__title">Как получить доступ?</h2>
          <div className="pp-access__steps">
            {ACCESS.map((a, i) => (
              <div key={i} className={`pp-astep pp-astep--${a.cls}`}>
                <span className="pp-astep__num">{i + 1}</span>
                <div className="pp-astep__media">
                  <img src={`/znarnia/images/${a.img}.webp`} alt="" loading="lazy" decoding="async" />
                </div>
                <p className="pp-astep__text">{typo(a.text)}</p>
                <div className="pp-astep__bar" aria-hidden="true">
                  {[0, 1, 2].map((s) => (
                    <span key={s} className={s === i ? 'is-active' : ''} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="pp-access__lead">
            {typo('Начните подготовку к ОГЭ с понимания реального уровня знаний ребёнка.')}
          </p>
          <div className="pp-access__cta">
            <a href="#registration" className="pp-btn pp-btn--ghost">Оставить заявку</a>
          </div>
        </div>
      </section>

      {/* ── О ПРЕПОДАВАТЕЛЕ ── */}
      <section className="pp-social">
        <div className="pp-wrap">
          <AuthorCard />
        </div>
      </section>

      {/* ── ОТЗЫВЫ + ГРАМОТЫ ── */}
      <section className="pp-social pp-social--alt">
        <SectionDecor />
        <div className="pp-wrap pp-social__stack">
          <ReviewsCarousel />
          <SchoolsCard />
        </div>
      </section>

      {/* ── ФОРМА ── */}
      <section className="pp-form" id="registration">
        <div className="pp-wrap">
          <h2 className="pp-form__title">{typo('Оставьте заявку на участие')}</h2>
          <p className="pp-form__lead">
            {typo('Заполните короткую форму — мы откроем доступ к диагностике, подаркам и специальной стоимости обучения.')}
          </p>
          <RegistrationForm
            subtitle={typo('После заполнения формы мы свяжемся с вами и откроем доступ к диагностике.')}
            gradeLabel="Класс ребёнка *"
            successText={typo('Мы свяжемся с вами, чтобы открыть доступ к диагностике, подаркам и специальной стоимости обучения.')}
          />
        </div>
      </section>
    </div>
  )
}
