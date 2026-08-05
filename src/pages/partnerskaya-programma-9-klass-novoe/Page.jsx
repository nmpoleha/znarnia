/* ─────────────────────────────────────────────────────────────
   Партнёрская программа для 9 класса — новое
   Только герой (взят с partnerskaya-programma-9-klass)
   + плашка «Интеллектуальный клуб ОГЭ».
   ───────────────────────────────────────────────────────────── */

/* ── Почему нам доверяют ── */
const TRUST = [
  {
    text: 'Более 23 лет<br />в образовании',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3l1.5 6M15 3l-1.5 6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="5" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M12 12.6l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 14.7l2-.3z" fill="#6d28d9" />
      </svg>
    ),
  },
  {
    text: 'Получатель гранта<br />Правительства<br />Москвы',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="5" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M12 6.7l.7 1.4 1.5.2-1.1 1.05.27 1.5L12 10.15l-1.34.7.26-1.5L9.8 8.3l1.5-.2z" fill="#6d28d9" />
        <path d="M9.5 13.5L8 21l4-2 4 2-1.5-7.5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: 'Собственная<br />образовательная<br />платформа',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M3 19h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10.5 8.3l4 2.2-4 2.2z" fill="#6d28d9" />
      </svg>
    ),
  },
  {
    text: 'Тысячи учеников<br />подготовлены<br />к экзаменам',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8.5" r="2.8" stroke="#6d28d9" strokeWidth="1.8" />
        <circle cx="16.5" cy="9.5" r="2.2" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M3.5 18c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 13.4c2.6.2 5 2.1 5 4.6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Высокие<br />результаты<br />выпускников',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 20V13M12 20V7M19 20V10" stroke="#6d28d9" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
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

const PRICE_INCLUDES = [
  '10 занятий;',
  'небольшие группы;',
  'домашние задания;',
  'проверка работ;',
  'обратная связь преподавателя;',
  'записи всех уроков.',
]

export default function Page() {
  return (
    <div className="pp-page">
      {/* ── HEADER ── */}
      <header className="pp-header">
        <div className="pp-wrap pp-header__inner">
          <div className="pp-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="pp-header__logo" width="80" height="80" />
            <span className="pp-header__brand-name">Знарния</span>
          </div>
          <span className="pp-header__badge">🎓 Для родителей 9 класса</span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-wrap">
          <h1 className="pp-hero__title">
            Готовимся к ОГЭ вместе — <span className="pp-accent">легко,</span> уверенно, эффективно
          </h1>
        </div>
        <div className="pp-wrap pp-hero__inner">
          <div className="pp-hero__left">
            <p className="pp-hero__sub">
              Специальная программа для родителей 9 класса: диагностика знаний, подарки и скидки
              на обучение в сентябре.
            </p>

            {/* ── ПЛАШКА: Интеллектуальный клуб ОГЭ ── */}
            <div className="pp-plashka">
              <span className="pp-plashka__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L2 8.5 12 13l10-4.5L12 4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M6 11v4.2c0 .6.3 1.1.8 1.4 1.4.9 3.2 1.4 5.2 1.4s3.8-.5 5.2-1.4c.5-.3.8-.8.8-1.4V11" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8.5V14" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="pp-plashka__body">
                <div className="pp-plashka__title">Интеллектуальный клуб ОГЭ</div>
                <p className="pp-plashka__text">
                  Не просто занятия раз в неделю.<br />
                  Это пространство, где школьник регулярно занимается, получает поддержку
                  и постепенно выходит на уверенную подготовку к экзамену.
                </p>
              </div>
            </div>

            <div className="pp-hero__actions">
              <button className="pp-btn pp-btn--primary">Узнать подробнее →</button>
              <button className="pp-btn pp-btn--ghost">Хочу участвовать</button>
            </div>
          </div>
          <div className="pp-hero__media">
            <img src="/znarnia/images/oge-hero-scene.webp" alt="Предметы ОГЭ для 9 класса" className="pp-hero__img" width="1000" height="681" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ НАМ ДОВЕРЯЮТ ── */}
      <section className="pp-trust">
        <div className="pp-wrap">
          <h2 className="pp-trust__title">
            <span className="pp-trust__title-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M7 5.5H4.5V7a3 3 0 0 0 3 3M17 5.5h2.5V7a3 3 0 0 1-3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12.5V16M9 20h6M10 16h4l-.5 2h-3z" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Почему нам доверяют?
          </h2>

          <div className="pp-trust__grid">
            {TRUST.map((t, i) => (
              <div key={i} className="pp-trust__item">
                <span className="pp-trust__icon" aria-hidden="true">{t.icon}</span>
                <p className="pp-trust__text" dangerouslySetInnerHTML={{ __html: t.text }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ДИАГНОСТИКА ── */}
      <section className="pp-diag">
        <div className="pp-wrap">
          <div className="pp-diag__head">
            <span className="pp-diag__target" aria-hidden="true">🎯</span>
            <h2 className="pp-diag__title">
              Подготовка к ОГЭ начинается с честной диагностики
            </h2>
          </div>
          <p className="pp-diag__lead">
            Проверьте уровень знаний ребёнка уже сейчас и получите материалы, которые
            помогут подготовиться к экзамену без лишнего стресса.
          </p>

          <div className="pp-diag__why">
            <div className="pp-diag__why-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3.5L2.5 20h19L12 3.5z" stroke="#dd8b1f" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 10v4.5" stroke="#dd8b1f" strokeWidth="1.9" strokeLinecap="round" />
                <circle cx="12" cy="17.3" r="1.1" fill="#dd8b1f" />
              </svg>
            </div>
            <div className="pp-diag__why-body">
              <div className="pp-diag__why-title">Почему это важно?</div>
              <p className="pp-diag__why-text">
                В профильные 10-е классы учеников с тройками не принимают.
                Поэтому важно заранее понять уровень подготовки ребёнка и успеть
                устранить пробелы до экзамена.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ШАГ 1. ДИАГНОСТИКА В ФОРМАТЕ ОГЭ ── */}
      <section className="pp-step">
        <div className="pp-wrap pp-step__inner">
          {/* Левая колонка */}
          <div className="pp-step__left">
            <div className="pp-step__head">
              <span className="pp-step__num">1</span>
              <h2 className="pp-step__title">Шаг 1. Диагностика в формате ОГЭ</h2>
            </div>
            <p className="pp-step__text">
              Вы получите диагностическую работу по формату ФИПИ.<br />
              Она включает <b>первые 19 заданий ОГЭ.</b>
            </p>

            <div className="pp-step__note">
              <span className="pp-step__note-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.6l2.5 5.1 5.6.8-4.05 3.95.96 5.55L12 16.35 6.03 19l.96-5.55L2.94 9.5l5.6-.8z" fill="#7c3aed" />
                </svg>
              </span>
              <p className="pp-step__note-text">
                В начале 9 класса ученик должен уверенно решать <b>17–18 заданий из 19.</b>
              </p>
            </div>

            <div className="pp-step__after">После проверки вы увидите:</div>
            <ul className="pp-step__list">
              {STEP1_RESULTS.map((r, i) => (
                <li key={i} className="pp-step__li">
                  <span className="pp-step__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M6 12.5l4 4 8-9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {r}
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
                <b>Важно.</b> Для получения положительной оценки необходимо решить
                минимум 2 задания по геометрии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ЧТО ПОЛУЧИТЕ ПОСЛЕ ДИАГНОСТИКИ ── */}
      <section className="pp-gifts">
        <div className="pp-wrap">
          <h2 className="pp-gifts__title">
            <span className="pp-gifts__title-ico" aria-hidden="true">🎁</span>
            После прохождения диагностики вы получите
          </h2>

          <div className="pp-gifts__grid">
            {/* Карточка 1 — библиотека */}
            <div className="pp-gcard">
              <div className="pp-gcard__head">
                <span className="pp-gcard__emoji" aria-hidden="true">📚</span>
                <div className="pp-gcard__title">Годовой доступ к библиотеке материалов</div>
              </div>
              <p className="pp-gcard__lead">
                Мы собрали всё необходимое для подготовки к ОГЭ в одном месте.
                В библиотеке будут доступны:
              </p>
              <ul className="pp-gcard__list">
                {LIBRARY.map((x, i) => (
                  <li key={i} className="pp-gcard__li"><span className="pp-gcard__check" aria-hidden="true">✓</span>{x}</li>
                ))}
              </ul>
            </div>

            {/* Карточка 2 — уроки */}
            <div className="pp-gcard">
              <div className="pp-gcard__head">
                <span className="pp-gcard__emoji" aria-hidden="true">💻</span>
                <div className="pp-gcard__title">Два полноценных урока нашей платформы</div>
              </div>
              <ul className="pp-gcard__list">
                {LESSONS.map((x, i) => (
                  <li key={i} className="pp-gcard__li"><span className="pp-gcard__check" aria-hidden="true">✓</span>{x}</li>
                ))}
              </ul>
              <p className="pp-gcard__lead pp-gcard__lead--foot">
                Познакомьтесь с нашей методикой и оцените формат обучения.
              </p>
            </div>

            {/* Карточка 3 — цена */}
            <div className="pp-gcard pp-gcard--price">
              <div className="pp-gcard__head">
                <span className="pp-gcard__emoji" aria-hidden="true">🎓</span>
                <div className="pp-gcard__title">Специальная стоимость обучения</div>
              </div>
              <p className="pp-gcard__lead">
                После прохождения диагностики для вас откроется специальная цена.
              </p>
              <div className="pp-gcard__price">
                <span className="pp-gcard__price-now">4 500 ₽</span>
                <span className="pp-gcard__price-old">6 000 ₽</span>
                <span className="pp-gcard__price-note">за первый месяц обучения</span>
              </div>
              <div className="pp-gcard__includes">В стоимость входят:</div>
              <ul className="pp-gcard__list">
                {PRICE_INCLUDES.map((x, i) => (
                  <li key={i} className="pp-gcard__li"><span className="pp-gcard__check" aria-hidden="true">✓</span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
