import SchoolHeader from '../../shared/components/SchoolHeader'
import RegistrationForm from '../../shared/components/RegistrationForm'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

const PROMISES = [
  'Восстановим базовые знания.',
  'Закроем пробелы.',
  'Поможем уверенно начать новый учебный год.',
]

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M9.4 7.5l6.5 3.8a.8.8 0 010 1.4l-6.5 3.8a.8.8 0 01-1.2-.7V8.2a.8.8 0 011.2-.7z"
      fill="currentColor"
    />
  </svg>
)

const IconPuzzle = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
      fill="currentColor"
    />
  </svg>
)

const FORMATS = [
  {
    icon: <IconPlay />,
    img: '/znarnia/images/online-lesson.png',
    alt: 'Онлайн-урок с преподавателем: разбор квадратных уравнений на экране ноутбука',
    w: 1472,
    h: 1068,
    title: 'Живые онлайн-уроки с преподавателем',
    desc:
      'Ребёнок не просто слушает объяснение, а активно участвует в занятии: отвечает на вопросы преподавателя, решает задачи во время урока и сразу получает обратную связь. Такой формат помогает быстрее разобраться в сложных темах и уверенно подготовиться к началу учебного года.',
  },
  {
    icon: <IconPuzzle />,
    img: '/znarnia/images/lesson-screen.png',
    alt: 'Интерактивный урок-тренажёр с задачей на логику на экране планшета',
    w: 1536,
    h: 1024,
    title: 'Интерактивные уроки-тренажёры',
    desc:
      'Каждый урок сочетает короткое объяснение темы и сразу практику. Такой формат помогает быстро повторить материал, закрепить знания и восполнить пробелы по ключевым темам предыдущего учебного года.',
  },
]

const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="8.5" cy="14.5" r="1.1" fill="currentColor" />
    <circle cx="12" cy="14.5" r="1.1" fill="currentColor" />
    <circle cx="15.5" cy="14.5" r="1.1" fill="currentColor" />
  </svg>
)

const IconScreen = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="4" width="19" height="14" rx="4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 21h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M10.6 8.6l4.2 2.4-4.2 2.4V8.6z" fill="currentColor" />
  </svg>
)

const IconDumbbell = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="7.5" width="3.4" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.7" />
    <rect x="15.6" y="7.5" width="3.4" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8.4 12h7.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M2.6 10v4M21.4 10v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const ROWS = [
  { key: 'start', label: 'Старт', icon: <IconCalendar /> },
  { key: 'live', label: 'Живые онлайн-уроки', icon: <IconScreen />, num: true },
  { key: 'trainers', label: 'Интерактивные уроки-тренажёры', icon: <IconDumbbell />, num: true },
]

const PROGRAMS = [
  {
    name: 'Умный август',
    accent: 'violet',
    tag: 'Полная подготовка',
    start: '1 августа',
    live: 8,
    trainers: 12,
    desc:
      'Подойдёт тем, кто хочет спокойно повторить материал, закрыть пробелы и системно подготовиться к новому учебному году.',
  },
  {
    name: 'Экспресс-август',
    accent: 'orange',
    tag: 'Короткий формат',
    start: '20 августа',
    live: 2,
    trainers: 8,
    desc:
      'Подойдёт тем, кто решил подготовиться ближе к 1 сентября и хочет за короткое время повторить самые важные темы.',
  },
]

const STEPS = [
  {
    title: 'Оставьте заявку на консультацию',
    desc: 'Заполните короткую форму — это ни к чему не обязывает.',
  },
  {
    title: 'Пройдите экспресс-диагностику',
    desc: 'Вы получите доступ в личный кабинет — диагностика займёт несколько минут.',
  },
  {
    title: 'Выберите программу подготовки',
    desc: 'Обсудите результаты со специалистом и начните заниматься.',
  },
]

const DIAGNOSTIC = [
  'Определить уровень знаний ребёнка после летних каникул',
  'Выявить темы, которые требуют повторения',
  'Понять, какой объём подготовки необходим именно сейчас',
]

export default function Page() {
  return (
    <div className="page">
      <div className="page__inner page__inner--head">
        <SchoolHeader
          logoUrl="/znarnia/images/logo.png"
          name="Школа Сотниковой Ольги"
        />
      </div>

      {/* ── ГЕРОЙ ── */}
      <section className="ag-hero">
        <div className="ag-hero__panel">
          {/* декор — блок полностью читается и без него */}
          <span className="ag-hero__blob ag-hero__blob--tr" aria-hidden="true" />
          <span className="ag-hero__blob ag-hero__blob--bl" aria-hidden="true" />
          <span className="ag-hero__dots" aria-hidden="true" />
          <span className="ag-hero__star" aria-hidden="true" />
          <img
            className="ag-hero__deco ag-hero__deco--books"
            src="/znarnia/images/avgust-books.png"
            alt=""
            aria-hidden="true"
            width="470"
            height="420"
          />
          <img
            className="ag-hero__deco ag-hero__deco--bag"
            src="/znarnia/images/avgust-backpack.png"
            alt=""
            aria-hidden="true"
            width="269"
            height="330"
          />

          <div className="ag-hero__content">
            <div className="ag-hero__pill">Август · 1–11 классы</div>
            <h1 className="ag-hero__title">Подготовка к школе</h1>
            <p className="ag-hero__lead">Начните новый учебный год уверенно</p>
            <p className="ag-hero__sub">
              Август — хорошее время, чтобы спокойно повторить материал прошлого года,
              восстановить знания после летних каникул и вернуть ребёнка в&nbsp;учебный ритм.
            </p>

            <ul className="ag-hero__promises">
              {PROMISES.map((t, i) => <li key={i}>{t}</li>)}
            </ul>

            <a href="#registration" className="ag-hero__cta">Оставить заявку на консультацию</a>
          </div>
        </div>
      </section>

      <div className="page__inner">

        {/* ── СРАВНЕНИЕ ПРОГРАММ ── */}
        <section className="ag-section">
          <h2 className="ag-h2">Выберите программу подготовки</h2>
          <p className="ag-section__lead">
            Качество обучения и формат занятий одинаковы. Отличается только объём подготовки
            и&nbsp;дата начала обучения.
          </p>

          <div className="ag-programs">
            {PROGRAMS.map((p, i) => (
              <article className={`ag-program ag-program--${p.accent}`} key={i}>
                <div className="ag-program__head">
                  <h3 className="ag-program__name">{p.name}</h3>
                  <span className="ag-program__tag">{p.tag}</span>
                </div>

                <dl className="ag-program__rows">
                  {ROWS.map((row) => (
                    <div className="ag-program__row" key={row.key}>
                      <dt>
                        <span className="ag-program__icon">{row.icon}</span>
                        {row.label}
                      </dt>
                      <dd>
                        {row.num
                          ? <span className="ag-program__num">{p[row.key]}</span>
                          : p[row.key]}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="ag-program__desc">{p.desc}</p>
              </article>
            ))}
          </div>

          <div className="ag-price">
            <img
              className="ag-price__img"
              src="/znarnia/images/avgust-price-tag.png"
              alt="от 240 ₽"
              width="340"
              height="134"
              loading="lazy"
              decoding="async"
            />
            <div className="ag-price__text">
              <span className="ag-price__title">Стоимость одного урока</span>
              <span className="ag-price__note">
                Итоговая цена зависит от выбранной программы — расскажем на консультации
              </span>
            </div>
          </div>
        </section>

        {/* ── ФОРМАТЫ ── */}
        <section className="ag-section">
          <h2 className="ag-h2">Как проходят занятия</h2>

          <div className="ag-formats">
            {FORMATS.map((f, i) => (
              <article className="ag-format" key={i}>
                <img
                  className="ag-format__img"
                  src={f.img}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  loading="lazy"
                  decoding="async"
                />
                <div className="ag-format__body">
                  <div className="ag-format__head">
                    <span className="ag-format__icon">{f.icon}</span>
                    <h3 className="ag-format__title">{f.title}</h3>
                  </div>
                  <p className="ag-format__desc">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── ДИАГНОСТИКА ── */}
        <section className="ag-diag">
          <div className="ag-diag__badge">Экспресс-диагностика</div>
          <h2 className="ag-diag__title">
            Не знаете, какая программа подойдёт вашему ребёнку?
          </h2>
          <p className="ag-diag__lead">
            Начните с экспресс-диагностики — всего <strong>5 заданий</strong> помогут:
          </p>

          <ul className="ag-list">
            {DIAGNOSTIC.map((t, i) => <li key={i}>{t}</li>)}
          </ul>

          <p className="ag-diag__note">
            После прохождения диагностики наш специалист свяжется с вами, поможет разобраться
            с результатами и порекомендует программу, которая лучше всего подойдёт вашему ребёнку.
          </p>
        </section>

        {/* ── КАК НАЧАТЬ ── */}
        <section className="ag-section">
          <h2 className="ag-h2">Как начать обучение?</h2>

          <ol className="ag-steps">
            {STEPS.map((s, i) => (
              <li className="ag-step" key={i}>
                <div className="ag-step__num">{i + 1}</div>
                <div>
                  <div className="ag-step__title">{s.title}</div>
                  <p className="ag-step__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── ФИНАЛЬНЫЙ CTA ── */}
        <section className="ag-final">
          {/* декор — блок полностью читается и без него */}
          <svg className="ag-final__star" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2.6l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.7l-5.7 3.5 1.5-6.5-5-4.4 6.6-.6L12 2.6z"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
          </svg>

          <img
            className="ag-final__img"
            src="/znarnia/images/avgust-calendar.png"
            alt=""
            aria-hidden="true"
            width="420"
            height="379"
            loading="lazy"
            decoding="async"
          />

          <div className="ag-final__body">
            <h2 className="ag-final__title">Начните подготовку уже сегодня</h2>
            <p className="ag-final__text">
              Несколько недель занятий в августе помогут ребёнку легче включиться в учебный
              процесс уже с первых дней сентября.
            </p>
            <p className="ag-final__text">
              Оставьте заявку на консультацию — получите доступ к экспресс-диагностике и узнайте,
              с чего лучше начать подготовку именно вашему ребёнку.
            </p>
          </div>
        </section>

        <RegistrationForm
          subtitle="Мы перезвоним, откроем доступ к экспресс-диагностике и поможем выбрать программу"
          nameLabel="Фамилия и имя *"
          namePlaceholder="Иванов Иван"
          successText="Мы свяжемся с вами, откроем доступ к экспресс-диагностике и поможем выбрать программу подготовки."
        />

        {/* ── О ПРЕПОДАВАТЕЛЕ ── */}
        <section className="ag-section ag-section--after-form">
          <h2 className="ag-h2">О преподавателе</h2>
          <AuthorCard />
        </section>

        {/* ── ОТЗЫВЫ РОДИТЕЛЕЙ ── */}
        <section className="ag-section">
          <ReviewsCarousel />
        </section>

        {/* ── НАГРАДЫ И БЛАГОДАРНОСТИ ── */}
        <section className="ag-section">
          <h2 className="ag-h2">Награды и благодарности</h2>
          <SchoolsCard />
        </section>

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
