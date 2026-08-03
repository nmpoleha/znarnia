import { useState } from 'react'

/* Иконки предметов — inline SVG, наследуют размер от .oge-ico */
const IconPhysics = () => (
  <svg className="oge-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="2.1" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
  </svg>
)
const IconInformatics = () => (
  <svg className="oge-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.6" y="4" width="18.8" height="13" rx="2.6" stroke="currentColor" strokeWidth="1.8" />
    <rect x="5.8" y="7.2" width="12.4" height="6.6" rx="1.2" fill="currentColor" opacity="0.32" />
    <path d="M12 17v2.4M8 20.4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)
const IconRussian = () => (
  <svg className="oge-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <text
      x="12" y="17.6" textAnchor="middle" fill="currentColor"
      fontFamily="Montserrat, sans-serif" fontSize="15" fontWeight="800" letterSpacing="-0.4"
    >Aa</text>
  </svg>
)
const IconSociety = () => (
  <svg className="oge-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8.6" cy="8.4" r="3.5" fill="currentColor" />
    <circle cx="16.6" cy="9.4" r="2.7" fill="currentColor" opacity="0.62" />
    <path d="M2.4 19.2c0-3.4 2.8-5.6 6.2-5.6s6.2 2.2 6.2 5.6a.9.9 0 0 1-.9.9H3.3a.9.9 0 0 1-.9-.9z" fill="currentColor" />
    <path d="M16.4 13.9c3 .1 5.2 2.1 5.2 5.1a1 1 0 0 1-1 1h-3.4c.1-2.3-.5-4.3-1.8-5.7l1-.4z" fill="currentColor" opacity="0.62" />
  </svg>
)

const SUBJECTS = [
  { Icon: IconPhysics, name: 'Физика', day: 'Четверг', time: '18:00 МСК' },
  { Icon: IconInformatics, name: 'Информатика', day: 'Понедельник', time: '18:00 МСК' },
  { Icon: IconRussian, name: 'Русский язык', day: 'Воскресенье', time: '12:45 МСК' },
  { Icon: IconSociety, name: 'Обществознание', day: 'Суббота', time: '12:45 МСК' },
]

const FORMAT = '1 раз в неделю по 90 минут в групповом формате'
const PRICE_MAIN = '5 800 ₽'
const PRICE_SUB = '4 урока в месяц'

const INCLUDES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Только задания ОГЭ 2026',
    text: 'Разбираем только те задания, которые будут на ОГЭ 2026 — без лишнего.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="12" rx="2" stroke="#6d28d9" strokeWidth="1.8"/><path d="M10 9.5l3 2.5-3 2.5v-5z" fill="#6d28d9"/><path d="M8 20h8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
    title: 'Записи всех занятий',
    text: 'Пропустил урок или хочешь повторить — доступна запись каждого занятия.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 4h11l3 3v13H5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8.5 12.5l2 2 4-4.5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Домашние задания с проверкой',
    text: 'После каждого урока — домашняя работа, которую проверяет преподаватель.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 5h16v11H8l-4 4V5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 9h8M8 12h5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
    title: 'Обратная связь от куратора',
    text: 'Куратор на связи: подскажет, поддержит и ответит на вопросы по учёбе.',
  },
]

const GRADES = ['5', '6', '7', '8', '9']

function RegForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '', subjects: [], agree: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }))
  }
  const toggleSubject = (s) => {
    setForm(f => ({ ...f, subjects: f.subjects.includes(s) ? f.subjects.filter(x => x !== s) : [...f.subjects, s] }))
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

  const submit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="oge-form oge-form--success">
        <div className="oge-form__success-icon">✓</div>
        <div className="oge-form__success-title">Заявка принята!</div>
        <div className="oge-form__success-text">Мы перезвоним, ответим на вопросы и подберём удобное расписание.</div>
      </div>
    )
  }

  return (
    <form className="oge-form" onSubmit={submit} noValidate>
      <div className="oge-form__head">
        <div className="oge-form__head-title">Записаться на занятия</div>
        <div className="oge-form__head-sub">Оставьте заявку — мы перезвоним и всё расскажем</div>
      </div>

      <div className="oge-form__grid">
        <div className="oge-form__field">
          <label className="oge-form__label">Фамилия и имя <span className="oge-form__req">*</span></label>
          <input className={`oge-form__input${errors.name ? ' oge-form__input--err' : ''}`} type="text" placeholder="Иванов Иван" value={form.name} onChange={e => set('name', e.target.value)} />
          {errors.name && <span className="oge-form__err">{errors.name}</span>}
        </div>
        <div className="oge-form__field">
          <label className="oge-form__label">Телефон <span className="oge-form__req">*</span></label>
          <input className={`oge-form__input${errors.phone ? ' oge-form__input--err' : ''}`} type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => set('phone', e.target.value)} />
          {errors.phone && <span className="oge-form__err">{errors.phone}</span>}
        </div>
        <div className="oge-form__field">
          <label className="oge-form__label">Email <span className="oge-form__req">*</span></label>
          <input className={`oge-form__input${errors.email ? ' oge-form__input--err' : ''}`} type="email" placeholder="ivan@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
          {errors.email && <span className="oge-form__err">{errors.email}</span>}
        </div>
        <div className="oge-form__field">
          <label className="oge-form__label">Класс ребёнка <span className="oge-form__req">*</span></label>
          <select className={`oge-form__input oge-form__select${errors.grade ? ' oge-form__input--err' : ''}`} value={form.grade} onChange={e => set('grade', e.target.value)}>
            <option value="">Выберите класс</option>
            {GRADES.map(g => <option key={g} value={g}>{g} класс</option>)}
          </select>
          {errors.grade && <span className="oge-form__err">{errors.grade}</span>}
        </div>
      </div>

      <div className="oge-form__field">
        <label className="oge-form__label">Предметы</label>
        <div className="oge-form__chips">
          {SUBJECTS.map(s => (
            <button
              type="button"
              key={s.name}
              className={`oge-form__chip${form.subjects.includes(s.name) ? ' oge-form__chip--on' : ''}`}
              onClick={() => toggleSubject(s.name)}
            >
              <span className="oge-form__chip-ico"><s.Icon /></span> {s.name}
            </button>
          ))}
        </div>
      </div>

      <label className={`oge-form__check${errors.agree ? ' oge-form__check--err' : ''}`}>
        <input type="checkbox" className="oge-form__check-input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
        <span className="oge-form__check-box" aria-hidden="true" />
        <span className="oge-form__check-text">
          Согласен с обработкой персональных данных в соответствии <a href="#" className="oge-form__link" onClick={e => e.preventDefault()}>с&nbsp;политикой конфиденциальности</a>&nbsp;<span className="oge-form__req">*</span>
        </span>
      </label>

      <button type="submit" className="oge-form__submit">Оставить заявку</button>
      <p className="oge-form__note">Заполнение формы ни к чему не обязывает</p>
    </form>
  )
}

export default function Page() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToForm = scrollTo('reg')
  const scrollToSubjects = scrollTo('subjects')

  return (
    <div className="oge-page">
      {/* ── HEADER ── */}
      <header className="oge-header">
        <div className="oge-wrap oge-header__inner">
          <div className="oge-header__brand">
            <img src="/znarnia/images/logo.png" alt="Школа Сотниковой Ольги" className="oge-header__logo" width="80" height="80" />
            <span className="oge-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="oge-hero">
        <div className="oge-wrap oge-hero__inner">
          <div className="oge-hero__left">
            <div className="oge-hero__badge">🎓 ОГЭ 2025–2026</div>
            <h1 className="oge-hero__title">
              Подготовка к ОГЭ
              <span className="oge-hero__title-sub">на 5 — уверенно и без стресса</span>
            </h1>
            <p className="oge-hero__sub">
              Физика, информатика, русский язык и обществознание. Системная подготовка,
              поддержка преподавателей и практика, которая даёт результат.
            </p>
            <div className="oge-hero__actions">
              <button className="oge-btn oge-btn--primary" onClick={scrollToForm}>Записаться на курс →</button>
              <button className="oge-btn oge-btn--ghost" onClick={scrollToSubjects}>Узнать программу</button>
            </div>
          </div>
          <div className="oge-hero__media">
            <img src="/znarnia/images/oge-hero-scene.webp" alt="Предметы ОГЭ: физика, информатика, русский язык, математика" className="oge-hero__img" width="1000" height="681" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── SUBJECTS ── */}
      <section className="oge-section" id="subjects">
        <div className="oge-wrap">
          <h2 className="oge-section__title">Предметы и расписание</h2>
          <p className="oge-section__sub">Занятия проходят {FORMAT.toLowerCase()}.</p>

          <div className="oge-subjects">
            {SUBJECTS.map(s => (
              <div key={s.name} className="oge-subject">
                <div className="oge-subject__head">
                  <div className="oge-subject__name">{s.name}</div>
                  <div className="oge-subject__icon"><s.Icon /></div>
                </div>
                <div className="oge-subject__row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="#6d28d9" strokeWidth="1.7"/><path d="M4 9h16M8 3v4M16 3v4" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round"/></svg>
                  <span>{s.day}, {s.time}</span>
                </div>
                <div className="oge-subject__row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#6d28d9" strokeWidth="1.7"/><path d="M12 8v4l2.5 2" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>90 минут, группа</span>
                </div>
                <div className="oge-subject__price">
                  <span className="oge-subject__price-main">{PRICE_MAIN}</span>
                  <span className="oge-subject__price-sub">/ {PRICE_SUB}</span>
                </div>
                <button className="oge-btn oge-btn--ghost oge-subject__btn" onClick={scrollToForm}>Записаться</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDES ── */}
      <section className="oge-section oge-section--soft">
        <div className="oge-wrap">
          <h2 className="oge-section__title">Что входит в обучение</h2>
          <div className="oge-includes">
            {INCLUDES.map((it, i) => (
              <div key={i} className="oge-include">
                <div className="oge-include__icon">{it.icon}</div>
                <div>
                  <div className="oge-include__title">{it.title}</div>
                  <p className="oge-include__text">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHER ── */}
      <section className="oge-section">
        <div className="oge-wrap">
          <div className="oge-teacher">
            <img src="/znarnia/images/author-sotnikova.png" alt="Сотникова Ольга Александровна" className="oge-teacher__photo" width="290" height="360" loading="lazy" />
            <div className="oge-teacher__body">
              <div className="oge-teacher__label">Основатель и руководитель школы</div>
              <div className="oge-teacher__name">Сотникова Ольга Александровна</div>
              <ul className="oge-teacher__list">
                <li>Опыт преподавания — более 20 лет</li>
                <li>Посетила с проверками более 200 школ в качестве эксперта</li>
                <li>Лично провела независимую диагностику у 10&nbsp;000+ школьников</li>
                <li>Разработала уникальную методику обучения</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="oge-section oge-section--soft" id="reg">
        <div className="oge-wrap oge-form-wrap">
          <RegForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="oge-footer">
        <div className="oge-wrap">
          <div className="oge-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
