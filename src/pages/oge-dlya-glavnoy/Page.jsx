const SUBJECTS = [
  { img: 'subj-book',   title: 'Русский язык',   desc: 'Разбор всех разделов, практика и работа с текстами',              accent: 'purple' },
  { img: 'subj-atom',   title: 'Физика',         desc: 'Понимание теории и решение задач разного уровня',                 accent: 'green' },
  { img: 'subj-laptop', title: 'Информатика',    desc: 'Алгоритмы, логика, практические задания и экзаменационные темы',  accent: 'purple' },
  { img: 'subj-bank',   title: 'Обществознание', desc: 'Разбор тем, понятий и типовых заданий',                           accent: 'orange' },
]

const DopIconTarget = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="12" cy="12" r="1.4" fill="currentColor"/>
  </svg>
)

const DopIconClipboard = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="4.5" width="14" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M9 3.5h6v3H9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.5 12l2.2 2.2 4.3-4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DopIconChart = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M5 14l4-4 3 3 6-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 6.5h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DOP_FEATURES = [
  { icon: <DopIconTarget />,    variant: 'purple', title: 'Системная подготовка',    text: 'План занятий, практика и пробные задания' },
  { icon: <DopIconClipboard />, variant: 'green',  title: 'Опытные преподаватели',   text: 'Эксперты по своим предметам, знают структуру ОГЭ' },
  { icon: <DopIconChart />,     variant: 'orange', title: 'Уверенность на экзамене', text: 'Разбираем сложное простым языком и учим применять знания' },
]

export default function Page() {
  return (
    <div className="gv-page">
      {/* ── ДОПОЛНИТЕЛЬНЫЕ ПРЕДМЕТЫ — ПОДГОТОВКА К ОГЭ ── */}
      <section className="gv-dop">
        <div className="sh-wrap">
          <div className="gv-dop__top">
            <div className="gv-dop__intro">
              <span className="gv-dop__badge">Дополнительные предметы</span>
              <h2 className="gv-dop__title">
                Подготовка к ОГЭ<br/>
                <span className="gv-dop__title-accent">по дополнительным предметам</span>
              </h2>
              <p className="gv-dop__text">
                Помогаем разобраться в сложных темах, системно подготовиться
                к экзамену и уверенно получить высокий результат.
              </p>
            </div>

            <div className="gv-dop__cards">
              {SUBJECTS.map((s) => (
                <article key={s.title} className={`gv-dop__card gv-dop__card--${s.accent}`}>
                  <img className="gv-dop__card-icon" src={`/znarnia/images/${s.img}.png`} alt="" width="200" height="200" loading="lazy" decoding="async" />
                  <h3 className="gv-dop__card-title">{s.title}</h3>
                  <p className="gv-dop__card-desc">{s.desc}</p>
                  <span className="gv-dop__card-pill">ОГЭ</span>
                </article>
              ))}
            </div>
          </div>

          <div className="gv-dop__strip">
            {DOP_FEATURES.map((f) => (
              <div key={f.title} className={`gv-dop__feat gv-dop__feat--${f.variant}`}>
                <span className="gv-dop__feat-icon">{f.icon}</span>
                <div className="gv-dop__feat-body">
                  <div className="gv-dop__feat-title">{f.title}</div>
                  <p className="gv-dop__feat-text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gv-dop__cta">
            <span className="gv-dop__cta-icon" aria-hidden="true">
              <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
                <rect x="10" y="8" width="24" height="32" rx="3" stroke="#6d28d9" strokeWidth="2.2"/>
                <path d="M18 6h8v5h-8z" stroke="#6d28d9" strokeWidth="2.2" strokeLinejoin="round"/>
                <path d="M15 18h14M15 24h14M15 30h9" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M33 30l6-6 3 3-6 6-3.6.6.6-3.6z" fill="#a78bfa" stroke="#6d28d9" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </span>
            <p className="gv-dop__cta-text">
              Выберите предмет и начните подготовку к ОГЭ<br/>
              с понятной программой и поддержкой преподавателя.
            </p>
            <a href="#" className="gv-dop__cta-btn">
              Выбрать предмет
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
