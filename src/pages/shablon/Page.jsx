import { useState } from 'react'

/* ─────────────────────────────────────────────────────────────
   ШАБЛОН РЕКЛАМНОГО ПРЕДЛОЖЕНИЯ
   Меняйте плейсхолдеры (PRODUCT / THESES / цена) под конкретный
   продукт — вся вёрстка и логика остаются прежними.
   ───────────────────────────────────────────────────────────── */

// Название рекламного продукта — меняется под каждое предложение
const PRODUCT = {
  name: 'Название рекламного продукта',
  subtitle: 'Короткий подзаголовок продукта — для кого и о чём',
}

// Тезисно — плюшки от учёбы. 3–4 тезиса, по одному предложению.
const THESES = [
  'Тезис 1 — коротко опишите первую плюшку от учёбы в одном предложении.',
  'Тезис 2 — коротко опишите вторую плюшку от учёбы в одном предложении.',
  'Тезис 3 — коротко опишите третью плюшку от учёбы в одном предложении.',
]

/* ── Форма регистрации ── */
function RegForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(e => ({ ...e, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.email.trim()) e.email = 'Введите email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email'
    if (!form.grade) e.grade = 'Выберите класс'
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
      <div className="sh-form sh-form--success">
        <div className="sh-form__success-icon">✓</div>
        <div className="sh-form__success-title">Вы зарегистрированы!</div>
        <div className="sh-form__success-text">Мы свяжемся с вами для уточнения деталей.</div>
      </div>
    )
  }

  return (
    <form className="sh-form" onSubmit={submit} noValidate>
      <div className="sh-form__head">
        <div className="sh-form__head-title">{PRODUCT.name}</div>
        <div className="sh-form__head-sub">Регистрация на продукт</div>
      </div>

      <div className="sh-form__field">
        <label className="sh-form__label">Ваше имя</label>
        <input className={`sh-form__input${errors.name ? ' sh-form__input--err' : ''}`} type="text" placeholder="Иван Иванов" value={form.name} onChange={e => set('name', e.target.value)} />
        {errors.name && <span className="sh-form__err">{errors.name}</span>}
      </div>

      <div className="sh-form__field">
        <label className="sh-form__label">Телефон</label>
        <input className={`sh-form__input${errors.phone ? ' sh-form__input--err' : ''}`} type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => set('phone', e.target.value)} />
        {errors.phone && <span className="sh-form__err">{errors.phone}</span>}
      </div>

      <div className="sh-form__field">
        <label className="sh-form__label">Email</label>
        <input className={`sh-form__input${errors.email ? ' sh-form__input--err' : ''}`} type="email" placeholder="ivan@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
        {errors.email && <span className="sh-form__err">{errors.email}</span>}
      </div>

      <div className="sh-form__field">
        <label className="sh-form__label">Класс ребёнка</label>
        <select className={`sh-form__input sh-form__select${errors.grade ? ' sh-form__input--err' : ''}`} value={form.grade} onChange={e => set('grade', e.target.value)}>
          <option value="">Выберите класс</option>
          {Array.from({ length: 11 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1} класс</option>)}
        </select>
        {errors.grade && <span className="sh-form__err">{errors.grade}</span>}
      </div>

      <button type="submit" className="sh-form__submit">Зарегистрироваться</button>
      <p className="sh-form__note">Заполнение формы ни к чему не обязывает</p>
    </form>
  )
}

/* ── Принципы работы занятий ── */
const ICON = {
  shield: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-3z" stroke="#6d28d9" strokeWidth="1.7" strokeLinejoin="round"/>
      <rect x="9" y="11" width="6" height="5" rx="1" stroke="#6d28d9" strokeWidth="1.6"/>
      <path d="M10 11V9.5a2 2 0 0 1 4 0V11" stroke="#6d28d9" strokeWidth="1.6"/>
    </svg>
  ),
  trophy: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" stroke="#6d28d9" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M7 6H4.5a2.5 2.5 0 0 0 3 2.4M17 6h2.5a2.5 2.5 0 0 1-3 2.4" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M12 13v3M9 20h6M10 20l.5-4h3l.5 4" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chart: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V5" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round"/>
      <rect x="7" y="12" width="3" height="6" rx="1" stroke="#6d28d9" strokeWidth="1.6"/>
      <rect x="12" y="8" width="3" height="10" rx="1" stroke="#6d28d9" strokeWidth="1.6"/>
      <rect x="17" y="5" width="3" height="13" rx="1" stroke="#6d28d9" strokeWidth="1.6"/>
    </svg>
  ),
  search: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="#6d28d9" strokeWidth="1.7"/>
      <path d="M11 7.5v3.5l2.5 1.5" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 16.5L21 21" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  headset: (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" stroke="#6d28d9" strokeWidth="1.7" strokeLinecap="round"/>
      <rect x="3" y="12" width="4" height="6" rx="2" stroke="#6d28d9" strokeWidth="1.6"/>
      <rect x="17" y="12" width="4" height="6" rx="2" stroke="#6d28d9" strokeWidth="1.6"/>
      <path d="M19 18v1a3 3 0 0 1-3 3h-3" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
}

const PRINCIPLES = [
  {
    icon: ICON.shield,
    title: 'Полная концентрация и безопасная среда',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    icon: ICON.trophy,
    title: 'Мотивация, которая работает: от игры к реальным достижениям',
    text: 'Заработанные баллы — это не просто цифры. Ребёнок может потратить их на развитие своего виртуального аватара, а самое главное — обменять на реальные подарки (книги, наборы для творчества и т.д.). Это формирует устойчивую внутреннюю мотивацию и учит ставить цели.',
  },
  {
    icon: ICON.chart,
    title: 'Педагог видит прогресс каждого, а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    icon: ICON.search,
    title: 'Для вас — полная прозрачность прогресса',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
    icon: ICON.headset,
    title: 'Домашняя работа с интеллектуальной поддержкой',
    text: 'Если у ребёнка не получается решить задачу, он может запросить у системы умную подсказку, которая направляет, но не даёт готового ответа. При необходимости доступен пошаговый разбор. Затем ИИ подберёт похожее задание для закрепления темы. Это гарантирует, что пробелы в знаниях будут устранены сразу.',
  },
]

/* ── Раскрывающийся подробный блок (обучение + занятия) ── */
function Details() {
  return (
    <section className="sh-reveal">
      <div className="sh-wrap sh-reveal__body">

        {/* Про обучение */}
        <div className="sh-learn">
          <div className="sh-learn__head">
            <span className="sh-learn__mark" aria-hidden="true">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none"><path d="M4 22L12 4M14 22L22 4M24 22L32 4" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
            <h2 className="sh-learn__lead">Это не очередной скучный Zoom!</h2>
            <span className="sh-learn__mark" aria-hidden="true">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none"><path d="M4 22L12 4M14 22L22 4M24 22L32 4" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </div>
          <div className="sh-learn__accent" aria-hidden="true" />

          <div className="sh-learn__card">
            <div className="sh-learn__icon">
              <img src="/znarnia/images/learn-gamepad.png" alt="" aria-hidden="true" className="sh-learn__icon-img" width="1536" height="1024" loading="lazy" decoding="async" />
            </div>
            <div className="sh-learn__body">
              <h3 className="sh-learn__card-title">Урок — это как квест в любимой игре!</h3>
              <p className="sh-learn__text">
                Забудь про скучные уроки. Здесь они становятся интерактивными и динамичными.
                За каждый правильный ответ — получаешь звёзды и баллы мгновенно! Никто не видит,
                как ответили другие, так что можно не стесняться.
              </p>
            </div>
            <img src="/znarnia/images/learn-star.png" alt="" aria-hidden="true" className="sh-learn__deco sh-learn__deco--star" width="617" height="623" loading="lazy" decoding="async" />
          </div>

          <div className="sh-learn__card">
            <div className="sh-learn__icon">
              <img src="/znarnia/images/learn-trophy.png" alt="" aria-hidden="true" className="sh-learn__icon-img" width="1536" height="1024" loading="lazy" decoding="async" />
            </div>
            <div className="sh-learn__body">
              <h3 className="sh-learn__card-title">Копи баллы и получай реальные подарки!</h3>
              <p className="sh-learn__text">Эти звёзды — не просто циферки. На них можно:</p>
              <ul className="sh-learn__list">
                <li>Прокачать своего крутого аватара — сделать его самым стильным в классе.</li>
                <li>Выбрать и заказать реальный подарок — игрушку, книгу, гаджет — и забрать его из пункта выдачи.</li>
              </ul>
              <p className="sh-learn__win">Учишься = получаешь призы. Честно!</p>
            </div>
            <img src="/znarnia/images/learn-gift.png" alt="" aria-hidden="true" className="sh-learn__deco sh-learn__deco--present" width="1024" height="1057" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Про занятия */}
        <div className="sh-lessons__head">
          <div className="sh-lessons__head-text">
            <h2 className="sh-lessons__title">
              Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка
            </h2>
            <p className="sh-lessons__intro">
              Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был
              максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы,
              на которых строится обучение.
            </p>
          </div>
          <div className="sh-lessons__shield" aria-hidden="true">
            <span className="sh-lessons__shield-star">★</span>
            <svg width="88" height="96" viewBox="0 0 88 96" fill="none">
              <path d="M44 6l30 11v24c0 20-13 33-30 42C27 74 14 61 14 41V17L44 6z" fill="#7c3aed"/>
              <path d="M44 6l30 11v24c0 20-13 33-30 42V6z" fill="#6d28d9"/>
              <path d="M32 47l9 9 17-19" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="sh-lessons__grid">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="sh-principle">
              <div className="sh-principle__icon">{p.icon}</div>
              <div className="sh-principle__num">{i + 1}</div>
              <div className="sh-principle__body">
                <h3 className="sh-principle__title">{p.title}</h3>
                <p className="sh-principle__text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sh-result">
          <div className="sh-result__title">Главный результат: персонализированное обучение</div>
          <p className="sh-result__text">
            Вся аналитика — по каждому ученику и классу в целом — позволяет нам точно видеть
            слабые места и понимать, какие темы требуют больше внимания. Мы не идём строго по
            программе, а постоянно адаптируем и улучшаем уроки, основываясь на реальных данных.
            Мы учим осознанно, делая процесс эффективным для вашего ребёнка.
          </p>
        </div>

      </div>
    </section>
  )
}

export default function Page() {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <div className="sh-page">
      {/* ── HEADER ── */}
      <header className="sh-header">
        <div className="sh-header__inner">
          <div className="sh-header__brand">
            <img
              src="/znarnia/images/logo.png"
              alt="Школа Сотниковой Ольги"
              className="sh-header__logo"
              width="80"
              height="80"
            />
            <span className="sh-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="sh-hero">
        <div className="sh-wrap sh-hero__inner">
          <div className="sh-hero__left">
            <h1 className="sh-hero__title">{PRODUCT.name}</h1>
            <p className="sh-hero__sub">{PRODUCT.subtitle}</p>

            <ul className="sh-hero__theses">
              {THESES.map((t, i) => (
                <li key={i} className="sh-hero__thesis">
                  <span className="sh-hero__thesis-check" aria-hidden="true">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`sh-reveal__btn sh-hero__more${detailsOpen ? ' sh-reveal__btn--open' : ''}`}
              onClick={() => setDetailsOpen(o => !o)}
              aria-expanded={detailsOpen}
            >
              <span>Узнать подробнее</span>
              <span className="sh-reveal__chevron" aria-hidden="true">▾</span>
            </button>
          </div>

          <div className="sh-hero__right">
            <RegForm />
          </div>
        </div>
      </section>

      {/* ── РАСКРЫВАЮЩИЙСЯ ПОДРОБНЫЙ БЛОК ── */}
      {detailsOpen && <Details />}

      {/* ── FOOTER ── */}
      <footer className="sh-footer">
        <div className="sh-wrap">
          <div className="sh-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
