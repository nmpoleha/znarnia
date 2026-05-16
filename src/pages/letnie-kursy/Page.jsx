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
    title: 'Мягкий старт',
    features: [
      { icon: 'clock', text: '~50 уроков' },
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
]

const FORMAT_DETAILS = {
  stelat: {
    color: 'purple',
    label: 'МЯГКИЙ СТАРТ',
    content: (
      <div className="lk-detail__body">
        <div className="lk-detail__stage">Этап 1 (с 1 июня)</div>
        <div className="lk-detail__two-col">
          <div>
            <div className="lk-detail__sub">Начальная школа</div>
            <ul className="lk-detail__list">
              <li>6 уроков на логику и мышление</li>
              <li>6 уроков на текстовые задачи</li>
            </ul>
          </div>
          <div>
            <div className="lk-detail__sub">Средняя школа <span className="lk-detail__count">12 уроков</span></div>
            <ul className="lk-detail__list">
              <li>систематизация знаний</li>
              <li>устранение пробелов</li>
              <li>повышение качества решений</li>
            </ul>
          </div>
        </div>
        <div className="lk-detail__stage">Формат уроков</div>
        <p className="lk-detail__note">
          Уроки-тренажёры разработаны по авторской методике и специально созданы для начальной и средней школы. Построены на цикличном чередовании теории и практики — ребёнку комфортно воспринимать материал.
        </p>
        <div className="lk-detail__flow">
          <span className="lk-detail__flow-step">Теория</span>
          <span className="lk-detail__flow-arrow">→</span>
          <span className="lk-detail__flow-step">Практика</span>
          <span className="lk-detail__flow-arrow">→</span>
          <span className="lk-detail__flow-step">Теория</span>
          <span className="lk-detail__flow-arrow">→</span>
          <span className="lk-detail__flow-step">Практика</span>
        </div>
        <ul className="lk-detail__list">
          <li>Авторские уроки-тренажёры</li>
          <li>Комфортный темп просмотра</li>
          <li>~50 уроков по 30–40 минут</li>
        </ul>
        <div className="lk-detail__stage">Этап 2 — Основная программа (с 22 июня)</div>
        <ul className="lk-detail__list">
          <li>2 онлайн-урока в неделю</li>
          <li>1 самостоятельный урок-тренажёр</li>
        </ul>
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
      <path d="M28 14c0 0 10 4 10 14 0 4-2 7-2 7H20s-2-3-2-7c0-10 10-14 10-14z" fill="#7c3aed"/>
      <ellipse cx="28" cy="35" rx="4" ry="3" fill="#6d28d9"/>
      <path d="M20 35l-3 7h22l-3-7" fill="#7c3aed"/>
      <circle cx="28" cy="26" r="3.5" fill="#fff"/>
      <path d="M16 31l-4 2 2-6" fill="#c4b5fd"/>
      <path d="M40 31l4 2-2-6" fill="#c4b5fd"/>
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
            <span className="lk-topbar__name">Школа<br/>Сотниковой Ольги</span>
          </div>
          <div className="lk-topbar__links">
            <a href="https://t.me/sotnikova_oa_school" className="lk-topbar__link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.686l-1.68 7.92c-.126.56-.452.696-.916.432l-2.532-1.864-1.22 1.176c-.136.134-.25.248-.51.248l.18-2.58 4.702-4.248c.204-.18-.044-.28-.316-.1L7.726 14.61 5.22 13.83c-.55-.17-.562-.548.116-.81l9.69-3.734c.455-.166.856.108.704.4z" fill="currentColor"/>
              </svg>
              @sotnikova_oa_school
            </a>
            <a href="https://wa.me/79955775318" className="lk-topbar__link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              +7 995 577-53-18
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="lk-hero">
        <div className="lk-hero__inner">
          <div className="lk-hero__content">
            <h1 className="lk-hero__title">
              Летняя программа<br/>
              по математике<br/>
              <span className="lk-hero__accent">для 1–10 классов</span>
            </h1>
            <ul className="lk-hero__points">
              <li>Сохраняем уровень знаний летом</li>
              <li>Устраняем пробелы в программе</li>
              <li>Готовим к новому учебному году</li>
            </ul>
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
              <div className="lk-hero__badge lk-hero__badge--star">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316" stroke="#f97316" strokeWidth="0.5"/>
                </svg>
                3 формата обучения
              </div>
            </div>
            <button className="lk-hero__cta" onClick={() => setShowModal(true)}>
              Выбрать формат
            </button>
          </div>
          <div className="lk-hero__image-col">
            <img
              src="/znarnia/images/hero-boy.png"
              alt="Ребёнок занимается математикой онлайн"
              className="lk-hero__img"
              width="420"
              height="440"
            />
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
