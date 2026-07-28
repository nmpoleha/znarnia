import SchoolHeader from '../../shared/components/SchoolHeader'
import RegistrationForm from '../../shared/components/RegistrationForm'

const PROMISES = [
  'Восстановим базовые знания.',
  'Закроем пробелы.',
  'Поможем уверенно начать новый учебный год.',
]

const FORMATS = [
  {
    img: '/znarnia/images/online-lesson.png',
    alt: 'Онлайн-урок с преподавателем: разбор квадратных уравнений на экране ноутбука',
    w: 1472,
    h: 1068,
    title: 'Живые онлайн-уроки с преподавателем',
    desc:
      'Ребёнок не просто слушает объяснение, а активно участвует в занятии: отвечает на вопросы преподавателя, решает задачи во время урока и сразу получает обратную связь. Такой формат помогает быстрее разобраться в сложных темах и уверенно подготовиться к началу учебного года.',
  },
  {
    img: '/znarnia/images/lesson-screen.png',
    alt: 'Интерактивный урок-тренажёр с задачей на логику на экране планшета',
    w: 1536,
    h: 1024,
    title: 'Интерактивные уроки-тренажёры',
    desc:
      'Каждый урок сочетает короткое объяснение темы и сразу практику. Такой формат помогает быстро повторить материал, закрепить знания и восполнить пробелы по ключевым темам предыдущего учебного года.',
  },
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
                  <div className="ag-program__row">
                    <dt>Старт</dt>
                    <dd>{p.start}</dd>
                  </div>
                  <div className="ag-program__row">
                    <dt>Живые онлайн-уроки</dt>
                    <dd><span className="ag-program__num">{p.live}</span></dd>
                  </div>
                  <div className="ag-program__row">
                    <dt>Интерактивные уроки-тренажёры</dt>
                    <dd><span className="ag-program__num">{p.trainers}</span></dd>
                  </div>
                </dl>

                <p className="ag-program__desc">{p.desc}</p>
              </article>
            ))}
          </div>

          <div className="ag-price">
            <div className="ag-price__value">от 240&nbsp;₽</div>
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
                  <h3 className="ag-format__title">{f.title}</h3>
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
          <h2 className="ag-final__title">Начните подготовку уже сегодня</h2>
          <p className="ag-final__text">
            Несколько недель занятий в августе помогут ребёнку легче включиться в учебный
            процесс уже с первых дней сентября.
          </p>
          <p className="ag-final__text">
            Оставьте заявку на консультацию — получите доступ к экспресс-диагностике и узнайте,
            с чего лучше начать подготовку именно вашему ребёнку.
          </p>
        </section>

        <RegistrationForm
          subtitle="Мы перезвоним, откроем доступ к экспресс-диагностике и поможем выбрать программу"
          nameLabel="Фамилия и имя *"
          namePlaceholder="Иванов Иван"
          successText="Мы свяжемся с вами, откроем доступ к экспресс-диагностике и поможем выбрать программу подготовки."
        />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
