import { useState } from 'react'

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', grade: '' })
  const [submitted, setSubmitted] = useState(false)

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="lk-modal-overlay" onClick={onClose}>
      <div className="lk-modal" onClick={e => e.stopPropagation()}>
        <button className="lk-modal__x" onClick={onClose}>×</button>
        {submitted ? (
          <div className="lk-modal__success">
            <div className="lk-modal__success-icon">✓</div>
            <div className="lk-modal__success-title">Заявка принята!</div>
            <div className="lk-modal__success-text">Мы свяжемся с вами в ближайшее время</div>
            <button className="lk-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="lk-modal__header">
              <div className="lk-modal__title">Записаться на летний курс</div>
              <div className="lk-modal__subtitle">Выберем подходящий формат вместе</div>
            </div>
            <form className="lk-modal__form" onSubmit={handleSubmit}>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Имя</label>
                <input className="lk-modal__input" type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Телефон</label>
                <input className="lk-modal__input" type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Класс ребёнка</label>
                <select className="lk-modal__select" required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} класс</option>
                  ))}
                </select>
              </div>
              <button className="lk-modal__submit" type="submit">Записаться</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const FORMATS = [
  {
    id: 'stelat',
    badge: 'С 1 июня',
    color: 'purple',
    title: 'Полный курс',
    features: [
      { icon: 'clock', text: '40 уроков' },
      { icon: 'check', text: '2 этапа обучения' },
    ],
    desc: 'Плавное включение в учебный ритм и системная подготовка',
    price: '21 600',
  },
  {
    id: 'main',
    badge: 'С 22 июня',
    color: 'green',
    title: 'Основной поток',
    features: [
      { icon: 'check', text: '28 уроков' },
      { icon: 'check', text: 'Онлайн + тренажёры' },
    ],
    desc: 'Для детей, готовых сразу включиться в основной учебный ритм',
    price: '17 600',
  },
  {
    id: 'august',
    badge: 'Август',
    color: 'orange',
    title: 'Август-интенсив',
    features: [
      { icon: 'check', text: '20+ уроков' },
      { icon: 'check', text: 'Устранение пробелов' },
    ],
    desc: 'Подготовка к новому учебному году и закрытие пробелов',
    price: '10 800',
  },
  {
    id: 'zapis',
    badge: 'В любое время',
    color: 'blue',
    title: 'Занятия в записи',
    features: [
      { icon: 'check', text: 'Доступ к урокам 24/7' },
      { icon: 'check', text: 'Без фиксированного расписания' },
    ],
    desc: 'Смотрите уроки в удобное время — без привязки к расписанию',
    price: '15 000',
  },
]

const FORMAT_DETAILS = {
  stelat: {
    color: 'purple',
    label: 'ПОЛНЫЙ КУРС',
    content: (
      <div className="lk-detail__body">

        {/* Этап 1 */}
        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">1 Этап</span>
          <span className="lk-detail__stage-desc">Мягкий старт — закрываем пробелы и выстраиваем базу</span>
          <span className="lk-detail__stage-date">с 1 по 21 июня</span>
        </div>
        {/* Формат — flow */}
        <div className="lk-s1__flow">
          <div className="lk-s1__flow-step">📖 Объяснение</div>
          <div className="lk-s1__flow-arrow">→</div>
          <div className="lk-s1__flow-step">✏️ Практика</div>
          <div className="lk-s1__flow-arrow">→</div>
          <div className="lk-s1__flow-step">🏆 Результат</div>
        </div>

        {/* Уроки */}
        <div className="lk-s1__counts">
          <div className="lk-s1__school-block">
            <div className="lk-s1__school-label">Начальная школа</div>
            <div className="lk-s1__count-row lk-s1__count-row--col">
              <div className="lk-s1__count-card"><b>6</b><span>базовых&nbsp;урока · 30&nbsp;мин</span></div>
              <div className="lk-s1__count-card"><b>6</b><span>уроков продвинутого&nbsp;уровня</span></div>
            </div>
          </div>
          <div className="lk-s1__school-block">
            <div className="lk-s1__school-label">Средняя школа</div>
            <div className="lk-s1__count-row">
              <div className="lk-s1__count-card lk-s1__count-card--wide lk-s1__count-card--tall">
                <div className="lk-s1__count-num-col">
                  <b>12</b>
                  <small>тренажёров<br/>по 30&nbsp;мин</small>
                </div>
                <ul className="lk-s1__card-list">
                  <li>систематизация знаний</li>
                  <li>устранение пробелов</li>
                  <li>повышение качества решений</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit">🕐 <span>Смотрим <b>в удобное время</b></span></div>
          <div className="lk-s1__benefit">💡 <span>Сохраняем знания</span></div>
          <div className="lk-s1__benefit">🔍 <span><b>Восполняем пробелы</b> и разминка для ума</span></div>
          <div className="lk-s1__benefit">⚡ <span>Теория + сразу практика — <b>удобный и эффективный формат</b></span></div>
        </div>

        {/* Этап 2 */}
        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">2 Этап</span>
          <span className="lk-detail__stage-desc">Основной этап — уверенность и результат</span>
          <span className="lk-detail__stage-date">с 22 июня</span>
        </div>
        {/* Уроки 2 этапа */}
        <div className="lk-s1__counts" style={{marginTop:'14px'}}>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>2</b><span>онлайн-урока в неделю · 60&nbsp;мин</span>
          </div>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>1</b><span>урок-тренажёр в неделю</span>
          </div>
        </div>

        {/* Преимущества */}
        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit">🚀 <span>Выходим за рамки школьной программы — даём <b>глубокое понимание</b></span></div>
          <div className="lk-s1__benefit">🧠 <span>Развиваем <b>логическое мышление</b> и навык рассуждения</span></div>
          <div className="lk-s1__benefit">🔑 <span>Работаем с <b>нестандартными задачами</b>, а не шаблонами</span></div>
          <div className="lk-s1__benefit">🔍 <span>Формируем умение анализировать и искать разные решения</span></div>
          <div className="lk-s1__benefit">💪 <span>Даём уверенность: ребёнок <b>понимает</b>, а не заучивает</span></div>
        </div>

        {/* Результат */}
        <div className="lk-detail__result-label" style={{marginTop:'16px'}}>Результат</div>
        <div className="lk-s1__benefits" style={{background:'#f0fdf4'}}>
          <div className="lk-s1__benefit">✅ <span>Находим и закрываем <b>конкретные пробелы</b> в знаниях</span></div>
          <div className="lk-s1__benefit">✅ <span>С 1 сентября ребёнок опирается на <b>прочную базу</b> и включается в урок</span></div>
          <div className="lk-s1__benefit">✅ <span>Уходит сопротивление учёбе — появляется <b>уверенность и мотивация</b></span></div>
        </div>

      </div>
    ),
  },
  main: {
    color: 'green',
    label: 'ОСНОВНОЙ ПОТОК',
    labelCount: '28 уроков',
    content: (
      <div className="lk-detail__body">
        <div className="lk-detail__two-col">
          <div>
            <ul className="lk-detail__list">
              <li>2 онлайн-урока в неделю</li>
              <li>1 самостоятельный урок-тренажёр</li>
              <li>Регулярная практика</li>
              <li>Системное повторение</li>
            </ul>
          </div>
          <div>
            <div className="lk-detail__result-label">Результат</div>
            <ul className="lk-detail__list lk-detail__list--star">
              <li>Поддержание уровня летом</li>
              <li>Усиление навыков</li>
              <li>Подготовка к учебному году</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  august: {
    color: 'orange',
    label: 'АВГУСТ-ИНТЕНСИВ',
    content: (
      <div className="lk-detail__body">
        <div className="lk-detail__two-col">
          <div>
            <ul className="lk-detail__list">
              <li>12 уроков-тренажёров</li>
              <li>8–9 онлайн-уроков</li>
              <li>Подбор тем по результатам тестирования</li>
            </ul>
          </div>
          <div>
            <div className="lk-detail__result-label">Результат</div>
            <ul className="lk-detail__list lk-detail__list--star">
              <li>Устранение пробелов</li>
              <li>Повторение ключевых тем</li>
              <li>Уверенный старт сентября</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  zapis: {
    color: 'blue',
    label: 'ЗАНЯТИЯ В ЗАПИСИ',
    content: (
      <div className="lk-detail__body">
        <ul className="lk-detail__list">
          <li>Доступ к записям уроков в любое время</li>
          <li>Без фиксированного расписания</li>
          <li>Авторские уроки-тренажёры по математике</li>
          <li>Подходит для самостоятельного изучения</li>
        </ul>
      </div>
    ),
  },
}

const COMPARISON = [
  { param: 'Старт',                   stelat: '1 июня',    main: '22 июня',   august: 'Август'    },
  { param: 'Онлайн-уроки',            stelat: '✓',         main: '✓',         august: '✓'         },
  { param: 'Тренажёры',               stelat: '✓',         main: '✓',         august: '✓'         },
  { param: 'Плавная адаптация',       stelat: '✓',         main: '—',         august: '—'         },
  { param: 'Индивидуальные пробелы',  stelat: '✓',         main: 'частично',  august: '✓'         },
  { param: 'Количество уроков',       stelat: '~50',       main: '28',        august: '20+'       },
  { param: 'Стоимость',               stelat: '21 600 ₽', main: '17 600 ₽', august: '10 800 ₽', highlight: true },
]

const WHO_FOR = [
  'Ребёнок быстро забывает материал летом',
  'Есть пробелы в базовых темах',
  'Сложности с текстовыми задачами',
  'Нужна спокойная системная практика',
  'Хотите уверенно начать новый учебный год',
]

const FAQ = [
  { q: 'Сколько длится урок?',     a: 'Урок длится 30–40 минут — оптимальный формат для концентрации и усвоения.' },
  { q: 'Можно ли смотреть записи?', a: 'Да, записи всех уроков сохраняются и доступны в любое время.' },
  { q: 'Как проходят тренажёры?',  a: 'Тренажёры — самостоятельные задания по инструкции, которые ребёнок выполняет в удобное время.' },
  { q: 'Чем отличаются форматы?',  a: 'Форматы отличаются объёмом уроков, темпом и датой старта. Мягкий старт — самый постепенный, август-интенсив — самый сжатый.' },
  { q: 'Есть ли домашние задания?', a: 'Нет, домашние задания не задаются. Тренажёры встроены в учебный план и заменяют ДЗ.' },
]

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconRocket() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#ede9fe"/>
      {/* body */}
      <path d="M28 12 C28 12 20 18 20 28 L20 36 L36 36 L36 28 C36 18 28 12 28 12Z" fill="#7c3aed"/>
      {/* nose cone */}
      <path d="M24 16 Q28 10 32 16Z" fill="#5b21b6"/>
      {/* window */}
      <circle cx="28" cy="26" r="4" fill="#fff" opacity="0.9"/>
      <circle cx="28" cy="26" r="2.2" fill="#c4b5fd"/>
      {/* fins left */}
      <path d="M20 32 L14 38 L20 36Z" fill="#6d28d9"/>
      {/* fins right */}
      <path d="M36 32 L42 38 L36 36Z" fill="#6d28d9"/>
      {/* flame */}
      <ellipse cx="28" cy="38" rx="4" ry="2.5" fill="#f97316" opacity="0.9"/>
      <ellipse cx="28" cy="40" rx="2.5" ry="3.5" fill="#fbbf24"/>
      <ellipse cx="28" cy="42" rx="1.5" ry="2" fill="#fff" opacity="0.7"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#dcfce7"/>
      <rect x="14" y="18" width="28" height="22" rx="3" fill="#16a34a"/>
      <rect x="14" y="18" width="28" height="9" rx="3" fill="#15803d"/>
      <path d="M21 15v6M35 15v6" stroke="#15803d" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21 31l4 4 10-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#fff7ed"/>
      <circle cx="28" cy="28" r="16" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="28" cy="28" r="10" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="28" cy="28" r="4.5" fill="#f97316"/>
      <path d="M37 15l2-2 3 3-2 2z" fill="#fb923c"/>
      <path d="M38.5 19l1.5-9" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function IconPlay() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#dbeafe"/>
      <rect x="13" y="17" width="30" height="20" rx="4" fill="#2563eb"/>
      <polygon points="24,22 24,34 36,28" fill="#fff"/>
      <rect x="18" y="40" width="20" height="2.5" rx="1.25" fill="#2563eb" opacity="0.5"/>
      <rect x="22" y="38" width="12" height="2.5" rx="1.25" fill="#2563eb" opacity="0.3"/>
    </svg>
  )
}

export default function Page() {
  const [openFormat, setOpenFormat] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [showModal, setShowModal] = useState(false)

  function toggleFormat(id) {
    setOpenFormat(prev => prev === id ? null : id)
  }

  const openDetail = openFormat ? FORMAT_DETAILS[openFormat] : null

  return (
    <div className="lk-page">

      {/* Contact bar */}
      <div className="lk-topbar">
        <div className="lk-topbar__inner">
          <div className="lk-topbar__brand">
            <img src="https://znarnia.ru/logo.png" alt="Школа Сотниковой Ольги" className="lk-topbar__logo" />
            <span className="lk-topbar__name">Школа Сотниковой Ольги</span>
          </div>
          <div className="lk-topbar__contacts">
            <a href="mailto:info@znarnia.ru" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://max.ru/sotnikova_oa_school" className="lk-topbar__item">
              <span className="lk-topbar__max-icon">M</span>
              <span>написать в Max</span>
            </a>
            <a href="https://wa.me/79955775318" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="lk-hero">
        <div className="lk-hero__inner">
          <div className="lk-hero__content">
            <h1 className="lk-hero__title">
              Летняя программа<br/>по математике<br/>
              <span className="lk-hero__accent">для 1–10 классов</span>
            </h1>
            <ul className="lk-hero__points">
              <li>Сохраняем уровень знаний летом</li>
              <li>Устраняем пробелы в программе</li>
              <li>Готовим к новому учебному году</li>
            </ul>
            <div className="lk-hero__actions">
              <button className="lk-hero__cta" onClick={() => setShowModal(true)}>
                Выбрать формат
              </button>
              <div className="lk-hero__badges">
                <div className="lk-hero__badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6d28d9" strokeWidth="2"/>
                    <path d="M8 21h8M12 17v4" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Онлайн-уроки
                </div>
                <div className="lk-hero__badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6d28d9" strokeWidth="2"/>
                    <path d="M7 8h10M7 12h6M7 16h8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Тренажёры
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="lk-formats" id="formats">
        <div className="lk-wrap">
          <h2 className="lk-heading">Выберите формат обучения</h2>
          <div className="lk-formats__grid">
            {FORMATS.map(f => (
              <article key={f.id} className={`lk-card lk-card--${f.color}${openFormat === f.id ? ' lk-card--active' : ''}`}>
                <span className="lk-card__badge">{f.badge}</span>
                <div className="lk-card__top">
                  <h3 className="lk-card__title">{f.title}</h3>
                  <div className="lk-card__icon" aria-hidden="true">
                    {f.id === 'stelat' && <IconRocket />}
                    {f.id === 'main'   && <IconCalendar />}
                    {f.id === 'august' && <IconTarget />}
                    {f.id === 'zapis'  && <IconPlay />}
                  </div>
                </div>
                <ul className="lk-card__feats">
                  {f.features.map((feat, i) => (
                    <li key={i}>
                      <span className="lk-card__feat-icon">
                        {feat.icon === 'clock' ? <IconClock /> : <IconCheck />}
                      </span>
                      {feat.text}
                    </li>
                  ))}
                </ul>
                <p className="lk-card__desc">{f.desc}</p>
                <div className="lk-card__price">{f.price}&thinsp;₽</div>
                <button className="lk-card__more" onClick={() => toggleFormat(f.id)}>
                  Подробнее&nbsp;{openFormat === f.id ? '▲' : '▼'}
                </button>
              </article>
            ))}
          </div>

          {openDetail && (
            <div className={`lk-detail lk-detail--${openDetail.color}`}>
              <div className="lk-detail__label">
                {openDetail.label}
                {openDetail.labelCount && <span className="lk-detail__label-count">{openDetail.labelCount}</span>}
              </div>
              {openDetail.content}
              <div className="lk-detail__btns">
                <button className={`lk-detail__btn lk-detail__btn--${openDetail.color}`} onClick={() => setShowModal(true)}>Забронировать место</button>
                <button className={`lk-detail__btn lk-detail__btn--outline lk-detail__btn--outline-${openDetail.color}`} onClick={() => setShowModal(true)}>Купить курс</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="lk-how">
        <div className="lk-wrap">
          <h2 className="lk-heading">Как проходит обучение</h2>
          <div className="lk-how__grid">
            <div className="lk-how__item">
              <div className="lk-how__icon lk-how__icon--blue">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="12" stroke="#3b82f6" strokeWidth="2.2"/>
                  <path d="M15 8v7l5 3" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="lk-how__title">Уроки по 30–40 минут</div>
              <div className="lk-how__desc">Оптимальный формат для концентрации и усвоения</div>
            </div>
            <div className="lk-how__item">
              <div className="lk-how__icon lk-how__icon--purple">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15C5 9.477 9.477 5 15 5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M25 15C25 20.523 20.523 25 15 25" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="15" cy="15" r="4" fill="#7c3aed"/>
                  <path d="M8 8l-3-3M22 22l3 3" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="lk-how__title">Теория + практика</div>
              <div className="lk-how__desc">Ребёнок сразу закрепляет материал на практике</div>
            </div>
            <div className="lk-how__item">
              <div className="lk-how__icon lk-how__icon--blue">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect x="3" y="5" width="24" height="16" rx="2.5" stroke="#3b82f6" strokeWidth="2.2"/>
                  <path d="M10 27h10M15 21v6" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M10 13l3.5 3.5 6.5-6.5" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="lk-how__title">Онлайн + тренажёры</div>
              <div className="lk-how__desc">Комфортный темп и гибкий график в летний период</div>
            </div>
            <div className="lk-how__item">
              <div className="lk-how__icon lk-how__icon--orange">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect x="3" y="19" width="5" height="8" rx="1.5" fill="#f97316"/>
                  <rect x="12" y="14" width="5" height="13" rx="1.5" fill="#f97316"/>
                  <rect x="21" y="9" width="5" height="18" rx="1.5" fill="#f97316"/>
                  <path d="M5 18l7-7 5 5 7-9" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="lk-how__title">Постепенное усложнение</div>
              <div className="lk-how__desc">Без перегруза и стресса</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table — own section */}
      <section className="lk-comparison-section">
        <div className="lk-wrap">
          <h2 className="lk-heading lk-heading--left">Сравнение форматов</h2>
          <div className="lk-table-wrap">
            <table className="lk-table">
              <thead>
                <tr>
                  <th className="lk-table__h--param">ПАРАМЕТРЫ</th>
                  <th className="lk-table__h--purple">МЯГКИЙ<br/>СТАРТ</th>
                  <th className="lk-table__h--green">ОСНОВНОЙ<br/>ПОТОК</th>
                  <th className="lk-table__h--orange">АВГУСТ</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'lk-table__row--hl' : ''}>
                    <td className="lk-table__param">{row.param}</td>
                    <td className="lk-table__v--purple">{row.stelat}</td>
                    <td className="lk-table__v--green">{row.main}</td>
                    <td className="lk-table__v--orange">{row.august}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who + FAQ */}
      <section className="lk-mid">
        <div className="lk-wrap">
          <div className="lk-mid__grid">

            <div className="lk-who">
              <h2 className="lk-heading lk-heading--left">Кому подойдёт программа</h2>
              <ul className="lk-who__list">
                {WHO_FOR.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="lk-faq">
              <h2 className="lk-heading lk-heading--left">Частые вопросы</h2>
              <div className="lk-faq__list">
                {FAQ.map((item, i) => (
                  <div key={i} className={`lk-faq__item${openFaq === i ? ' lk-faq__item--open' : ''}`}>
                    <button className="lk-faq__q" onClick={() => setOpenFaq(prev => prev === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className="lk-faq__icon">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && <div className="lk-faq__a">{item.a}</div>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="lk-cta">
        <div className="lk-cta__inner">
          <div className="lk-cta__content">
            <h2 className="lk-cta__title">Выберите подходящий формат летнего обучения</h2>
            <p className="lk-cta__desc">Поможем ребёнку учиться с удовольствием и результатом</p>
            <div className="lk-cta__btns">
              <button className="lk-cta__btn lk-cta__btn--primary" onClick={() => setShowModal(true)}>Записаться</button>
              <button className="lk-cta__btn lk-cta__btn--outline" onClick={() => setShowModal(true)}>Получить консультацию</button>
            </div>
          </div>
        </div>
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  )
}
