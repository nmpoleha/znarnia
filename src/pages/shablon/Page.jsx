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
const PRINCIPLES = [
  {
    title: 'Полная концентрация и безопасная среда',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    title: 'Мотивация, которая работает: от игры к реальным достижениям',
    text: 'Заработанные баллы — это не просто цифры. Ребёнок может потратить их на развитие своего виртуального аватара, а самое главное — обменять на реальные подарки (книги, наборы для творчества и т.д.). Это формирует устойчивую внутреннюю мотивацию и учит ставить цели.',
  },
  {
    title: 'Педагог видит прогресс каждого, а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    title: 'Для вас — полная прозрачность прогресса',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
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
        <div className="sh-learn__lead">Это не очередной скучный Zoom!</div>

        <div className="sh-learn__card">
          <div className="sh-learn__card-title">🎮 Урок — это как квест в любимой игре!</div>
          <p className="sh-learn__card-text">
            Забудь про скучные уроки. Здесь они становятся интерактивными и динамичными.
            За каждый правильный ответ — получаешь звёзды и баллы мгновенно! Никто не видит,
            как ответили другие, так что можно не стесняться.
          </p>
        </div>

        <div className="sh-learn__card">
          <div className="sh-learn__card-title">🏆 Копи баллы и получай реальные подарки!</div>
          <p className="sh-learn__card-text">Эти звёзды — не просто циферки. На них можно:</p>
          <ul className="sh-learn__list">
            <li>Прокачать своего крутого аватара — сделать его самым стильным в классе.</li>
            <li>Выбрать и заказать реальный подарок — игрушку, книгу, гаджет — и забрать его из пункта выдачи.</li>
          </ul>
          <p className="sh-learn__card-text sh-learn__card-text--accent">Учишься = получаешь призы. Честно!</p>
        </div>

        {/* Про занятия */}
        <h2 className="sh-lessons__title">
          Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка
        </h2>
        <p className="sh-lessons__intro">
          Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был
          максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы,
          на которых строится обучение.
        </p>

        <div className="sh-lessons__grid">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="sh-principle">
              <div className="sh-principle__num">{i + 1}</div>
              <div className="sh-principle__body">
                <div className="sh-principle__title">{p.title}</div>
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
