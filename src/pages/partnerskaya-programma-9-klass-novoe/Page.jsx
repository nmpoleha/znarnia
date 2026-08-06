/* ─────────────────────────────────────────────────────────────
   Партнёрская программа для 9 класса — новое
   Только герой (взят с partnerskaya-programma-9-klass)
   + плашка «Интеллектуальный клуб ОГЭ».
   ───────────────────────────────────────────────────────────── */
import RegistrationForm from '../../shared/components/RegistrationForm'

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

const PRICE_INCLUDES = [
  '10 занятий;',
  'небольшие группы;',
  'домашние задания;',
  'проверка работ;',
  'обратная связь преподавателя;',
  'записи всех уроков.',
]

/* ── Специальные материалы для родителей 9 класса ── */
const PARENTS = [
  {
    title: 'Поступление в колледж после 9 класса',
    text: 'Что действительно влияет на зачисление и как повысить шансы на поступление.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3L2 8h20L12 3z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M4 8v9M9 8v9M15 8v9M20 8v9M2.5 17h19M2 20.5h20" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Средний балл аттестата',
    text: 'Как он рассчитывается, какие оценки влияют на него больше всего и можно ли его улучшить.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3h9l3 3v15H6z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 11h6M9 14.5h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/><circle cx="15.5" cy="18" r="2.4" stroke="#6d28d9" strokeWidth="1.6"/><path d="M14 20l-.6 2 2.1-1 2.1 1-.6-2" stroke="#6d28d9" strokeWidth="1.4" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: 'ОГЭ без путаницы',
    text: 'Самые важные ответы на вопросы родителей: как готовиться эффективнее, что действительно влияет на результат и какие ошибки чаще всего допускают выпускники.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H9l-4 3.5V16H4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9.6 9.2a2.4 2.4 0 1 1 3.1 2.3c-.75.28-1.2.85-1.2 1.5v.2" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round"/><circle cx="11.5" cy="15.2" r="0.95" fill="#6d28d9"/></svg>
    ),
  },
]

/* ── Как получить доступ ── */
const ACCESS = [
  'Заполните короткую форму.',
  'Пройдите диагностику.',
  'Получите доступ ко всем подаркам и специальной стоимости обучения.',
]

export default function Page() {
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
        </div>
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

          {/* жёлтые лучики сверху слева */}
          <svg className="pp-deco pp-deco--rays" viewBox="0 0 40 40" fill="none">
            <path d="M6 22L2 30" stroke="#FFC857" strokeWidth="3" strokeLinecap="round" />
            <path d="M14 16L12 6" stroke="#FFC857" strokeWidth="3" strokeLinecap="round" />
            <path d="M22 20L30 14" stroke="#FFC857" strokeWidth="3" strokeLinecap="round" />
          </svg>

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
                  Не просто занятия.<br />
                  Это пространство, где школьник регулярно занимается, получает поддержку
                  и постепенно выходит на уверенную подготовку к экзамену.
                </p>
              </div>
            </div>

            <div className="pp-hero__actions">
              <a href="#step1" className="pp-btn pp-btn--primary">Узнать подробнее →</a>
              <a href="#registration" className="pp-btn pp-btn--ghost">Хочу участвовать</a>
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

            <div className="pp-trust__grid">
              {TRUST.map((t, i) => (
                <div key={i} className="pp-trust__card">
                  <span className="pp-trust__icon" aria-hidden="true">
                    <img src={`/znarnia/images/${t.img}.webp`} alt="" width="256" height="256" loading="lazy" decoding="async" />
                  </span>
                  <p className="pp-trust__text">
                    <b className="pp-trust__strong">{t.strong}</b>
                    <span className="pp-trust__rest" dangerouslySetInnerHTML={{ __html: t.rest }} />
                  </p>
                </div>
              ))}
            </div>
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
      <section className="pp-step" id="step1">
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

      {/* ── МАТЕРИАЛЫ ДЛЯ РОДИТЕЛЕЙ 9 КЛАССА ── */}
      <section className="pp-parents">
        <div className="pp-wrap">
          <div className="pp-parents__inner">
            {/* Левая колонка */}
            <div className="pp-parents__left">
              <span className="pp-parents__badge">
                <span className="pp-parents__badge-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L2 8.5 12 13l10-4.5L12 4z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/><path d="M6 11v4c0 .6.3 1.1.8 1.4 1.4.9 3.2 1.4 5.2 1.4s3.8-.5 5.2-1.4c.5-.3.8-.8.8-1.4v-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                Специально для родителей 9 класса
              </span>
              <h2 className="pp-parents__title">
                Полезные материалы<br />для родителей выпускников
              </h2>
              <p className="pp-parents__sub">
                Помимо диагностики и уроков вы получите материалы, которые помогут
                принять верные решения и поддержать ребёнка.
              </p>

              <div className="pp-parents__cards">
                {PARENTS.map((p, i) => (
                  <div key={i} className="pp-pcard">
                    <span className="pp-pcard__icon" aria-hidden="true">{p.icon}</span>
                    <div className="pp-pcard__body">
                      <div className="pp-pcard__title">{p.title}</div>
                      <p className="pp-pcard__text">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка — иллюстрация */}
            <div className="pp-parents__media">
              <img src="/znarnia/images/parents-materials-3d.png" alt="Папка с материалами: ОГЭ, колледж после 9 класса, средний балл аттестата" className="pp-parents__img" width="1413" height="1113" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Нижняя плашка */}
          <div className="pp-parents__foot">
            <span className="pp-parents__foot-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l7 2.5v5.5c0 4.4-3 8.2-7 9.5-4-1.3-7-5.1-7-9.5V5.5L12 3z" stroke="#7c3aed" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4.5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Все материалы подготовлены экспертами и основаны на актуальных требованиях
            и реальном опыте подготовки к ОГЭ.
          </div>
        </div>
      </section>

      {/* ── КАК ПОЛУЧИТЬ ДОСТУП ── */}
      <section className="pp-access">
        <div className="pp-wrap">
          <h2 className="pp-access__title">Как получить доступ?</h2>
          <div className="pp-access__steps">
            {ACCESS.map((s, i) => (
              <div key={i} className="pp-astep">
                <span className="pp-astep__num">{i + 1}</span>
                <p className="pp-astep__text">{s}</p>
              </div>
            ))}
          </div>
          <p className="pp-access__lead">
            Начните подготовку к ОГЭ с понимания реального уровня знаний ребёнка.
          </p>
        </div>
      </section>

      {/* ── ФОРМА ── */}
      <section className="pp-form" id="registration">
        <div className="pp-wrap">
          <h2 className="pp-form__title">Оставьте заявку на участие</h2>
          <p className="pp-form__lead">
            Заполните короткую форму — мы откроем доступ к диагностике, подаркам
            и специальной стоимости обучения.
          </p>
          <RegistrationForm
            subtitle="После заполнения формы мы свяжемся с вами и откроем доступ к диагностике."
            gradeLabel="Класс ребёнка *"
            successText="Мы свяжемся с вами, чтобы открыть доступ к диагностике, подаркам и специальной стоимости обучения."
          />
        </div>
      </section>
    </div>
  )
}
