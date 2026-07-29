import { useState } from 'react'
import RegistrationForm from '../../shared/components/RegistrationForm'

/* ─────────────────────────────────────────────────────────────
   ШАБЛОН РЕКЛАМНОГО ПРЕДЛОЖЕНИЯ
   Меняйте плейсхолдеры (PRODUCT / THESES / цена) под конкретный
   продукт — вся вёрстка и логика остаются прежними.
   ───────────────────────────────────────────────────────────── */

function nb(str) {
  const NBSP = String.fromCharCode(160)
  const short = /^([а-яёА-ЯЁ]{1,2}|или|для|что|как|при|под|над|без|про|чем|так|это|уже|обо|изо|ото)$/i
  const parts = str.split(' ')
  let out = ''
  for (let i = 0; i < parts.length; i++) {
    out += parts[i]
    if (i === parts.length - 1) break
    const next = parts[i + 1]
    // тире не должно начинать строку — приклеиваем его к предыдущему слову
    // неразрывным пробелом (по правилам оно может заканчивать строку, но не начинать)
    if (next === '—' || next === '–') out += NBSP
    // короткие предлоги/союзы не оставляем в конце строки — клеим к следующему слову
    else if (short.test(parts[i])) out += NBSP
    else out += ' '
  }
  return out
}

const REVIEWS = [
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-04.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-29-53.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-20.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-07-19.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-45.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-52.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-07-44.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-15.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-07-30.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_20-30-31.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-06-39.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-06-27.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-06-13.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-07-07.jpg' },
  { src: '/znarnia/images/reviews/photo_2026-05-08_13-06-02.jpg' },
]

function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const visible = 5
  const total = REVIEWS.length
  const canPrev = index > 0
  const canNext = index + visible < total
  return (
    <>
      <div className="dg-reviews">
        <div className="dg-reviews__head">
          <div className="dg-reviews__title">{nb('Родители о нас')}</div>
          <div className="dg-reviews__nav">
            <button className={`dg-reviews__arrow${!canPrev ? ' dg-reviews__arrow--disabled' : ''}`} onClick={() => canPrev && setIndex(i => i - 1)} aria-label="Назад">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className={`dg-reviews__arrow${!canNext ? ' dg-reviews__arrow--disabled' : ''}`} onClick={() => canNext && setIndex(i => i + 1)} aria-label="Вперёд">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="dg-reviews__track-wrap">
          <div className="dg-reviews__track" style={{ transform: `translateX(calc(-${index} * (100% / ${visible} + 10px / ${visible})))` }}>
            {REVIEWS.map((r, i) => (
              <div key={i} className="dg-reviews__thumb" onClick={() => setLightbox(i)}>
                <img src={r.src} alt={`Отзыв ${i + 1}`} className="dg-reviews__thumb-img" />
                <div className="dg-reviews__thumb-overlay">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dg-reviews__dots">
          {Array.from({ length: total - visible + 1 }).map((_, i) => (
            <button key={i} className={`dg-reviews__dot${index === i ? ' dg-reviews__dot--active' : ''}`} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="dg-lightbox" onClick={() => setLightbox(null)}>
          <button className="dg-lightbox__close" onClick={() => setLightbox(null)} aria-label="Закрыть">×</button>
          <button className={`dg-lightbox__prev${lightbox === 0 ? ' dg-lightbox__nav--hidden' : ''}`} onClick={e => { e.stopPropagation(); setLightbox(i => Math.max(0, i - 1)) }} aria-label="Предыдущая">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img src={REVIEWS[lightbox].src} alt={`Отзыв ${lightbox + 1}`} className="dg-lightbox__img" onClick={e => e.stopPropagation()} />
          <button className={`dg-lightbox__next${lightbox === total - 1 ? ' dg-lightbox__nav--hidden' : ''}`} onClick={e => { e.stopPropagation(); setLightbox(i => Math.min(total - 1, i + 1)) }} aria-label="Следующая">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="dg-lightbox__counter">{lightbox + 1} / {total}</div>
        </div>
      )}
    </>
  )
}

const LETTERS = [
  { src: '/znarnia/images/letters/letter-01.jpg' },
  { src: '/znarnia/images/letters/letter-02.jpg' },
  { src: '/znarnia/images/letters/letter-03.jpg' },
  { src: '/znarnia/images/letters/letter-04.jpg' },
  { src: '/znarnia/images/letters/letter-05.jpg' },
  { src: '/znarnia/images/letters/letter-06.jpg' },
  { src: '/znarnia/images/letters/letter-07.jpg' },
  { src: '/znarnia/images/letters/letter-08.jpg' },
]

function LettersCarousel() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const visible = 4
  const total = LETTERS.length
  const canPrev = index > 0
  const canNext = index + visible < total
  return (
    <>
      <div className="dg-letters">
        <div className="dg-letters__track-wrap">
          <div className="dg-letters__track" style={{ transform: `translateX(calc(-${index} * (100% / ${visible} + 10px / ${visible})))` }}>
            {LETTERS.map((l, i) => (
              <div key={i} className="dg-letters__thumb" onClick={() => setLightbox(i)}>
                <img src={l.src} alt={`Благодарность ${i + 1}`} className="dg-letters__thumb-img" />
                <div className="dg-letters__thumb-overlay">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {(canPrev || canNext) && (
          <div className="dg-letters__nav">
            <button className={`dg-letters__arrow${!canPrev ? ' dg-letters__arrow--disabled' : ''}`} onClick={() => canPrev && setIndex(i => i - 1)} aria-label="Назад">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className={`dg-letters__arrow${!canNext ? ' dg-letters__arrow--disabled' : ''}`} onClick={() => canNext && setIndex(i => i + 1)} aria-label="Вперёд">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}
      </div>
      {lightbox !== null && (
        <div className="dg-lightbox" onClick={() => setLightbox(null)}>
          <button className="dg-lightbox__close" onClick={() => setLightbox(null)} aria-label="Закрыть">×</button>
          <button className={`dg-lightbox__prev${lightbox === 0 ? ' dg-lightbox__nav--hidden' : ''}`} onClick={e => { e.stopPropagation(); setLightbox(i => Math.max(0, i - 1)) }} aria-label="Предыдущая">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <img src={LETTERS[lightbox].src} alt={`Благодарность ${lightbox + 1}`} className="dg-lightbox__img" onClick={e => e.stopPropagation()} />
          <button className={`dg-lightbox__next${lightbox === total - 1 ? ' dg-lightbox__nav--hidden' : ''}`} onClick={e => { e.stopPropagation(); setLightbox(i => Math.min(total - 1, i + 1)) }} aria-label="Следующая">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="dg-lightbox__counter">{lightbox + 1} / {total}</div>
        </div>
      )}
    </>
  )
}

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

/* ── Форма получения подарка ── */
const IconGift = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3.5 11h17v8.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5V11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="2.5" y="7" width="19" height="4" rx="1.3" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 7v14" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M12 7S10.8 3 8.6 3a2.3 2.3 0 0 0 0 4.6H12zm0 0s1.2-4 3.4-4a2.3 2.3 0 0 1 0 4.6H12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

const IconShield = () => (
  <svg width="15" height="16" viewBox="0 0 24 26" fill="none" aria-hidden="true">
    <path d="M12 2l9 3.4v7C21 19.5 16.7 22.9 12 24.4 7.3 22.9 3 19.5 3 12.4v-7L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.4 12.8l2.7 2.7 4.5-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function RegForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', telegram: '', grade: '', agree: false })
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
      <div className="sh-form sh-form--success">
        <div className="sh-form__success-icon"><IconGift size={30} /></div>
        <div className="sh-form__success-title">Подарок закреплён за вами!</div>
        <div className="sh-form__success-text">{nb('Мы свяжемся с вами, передадим подарок и расскажем, как им воспользоваться.')}</div>
      </div>
    )
  }

  return (
    <form className="sh-form" onSubmit={submit} noValidate>
      <div className="sh-form__head">
        <span className="sh-form__head-icon" aria-hidden="true"><IconGift size={24} /></span>
        <div>
          <div className="sh-form__head-title">Получить подарок</div>
          <div className="sh-form__head-sub">{nb('Заполните форму — и мы отправим вам полезный материал для обучения.')}</div>
        </div>
      </div>

      <div className="sh-form__grid">
        <div className="sh-form__field">
          <label className="sh-form__label">Фамилия и имя <span className="sh-form__req">*</span></label>
          <input className={`sh-form__input${errors.name ? ' sh-form__input--err' : ''}`} type="text" placeholder="Иванов Иван" value={form.name} onChange={e => set('name', e.target.value)} />
          {errors.name && <span className="sh-form__err">{errors.name}</span>}
        </div>

        <div className="sh-form__field">
          <label className="sh-form__label">Телефон <span className="sh-form__req">*</span></label>
          <input className={`sh-form__input${errors.phone ? ' sh-form__input--err' : ''}`} type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => set('phone', e.target.value)} />
          {errors.phone && <span className="sh-form__err">{errors.phone}</span>}
        </div>

        <div className="sh-form__field">
          <label className="sh-form__label">Email <span className="sh-form__req">*</span></label>
          <input className={`sh-form__input${errors.email ? ' sh-form__input--err' : ''}`} type="email" placeholder="ivan@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
          {errors.email && <span className="sh-form__err">{errors.email}</span>}
        </div>

        <div className="sh-form__field">
          <label className="sh-form__label">Ник в Telegram</label>
          <input className="sh-form__input" type="text" placeholder="@username" value={form.telegram} onChange={e => set('telegram', e.target.value)} />
        </div>
      </div>

      <div className="sh-form__field sh-form__field--half">
        <label className="sh-form__label">Класс ребёнка</label>
        <select className={`sh-form__input sh-form__select${errors.grade ? ' sh-form__input--err' : ''}`} value={form.grade} onChange={e => set('grade', e.target.value)}>
          <option value="">Выберите класс</option>
          {Array.from({ length: 11 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1} класс</option>)}
        </select>
        {errors.grade && <span className="sh-form__err">{errors.grade}</span>}
      </div>

      <label className={`sh-form__check${errors.agree ? ' sh-form__check--err' : ''}`}>
        <input type="checkbox" className="sh-form__check-input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
        <span className="sh-form__check-box" aria-hidden="true" />
        <span className="sh-form__check-text">
          {nb('Согласен с обработкой персональных данных в соответствии с')}{' '}
          <a href="#" className="sh-form__link" onClick={e => e.preventDefault()}>политикой конфиденциальности</a> <span className="sh-form__req">*</span>
        </span>
      </label>

      <button type="submit" className="sh-form__submit">
        <IconGift />
        Получить подарок
      </button>

      <p className="sh-form__secure">
        <span className="sh-form__secure-icon" aria-hidden="true"><IconShield /></span>
        {nb('Мы не передаём ваши данные третьим лицам')}
      </p>
    </form>
  )
}

/* ── Образовательная среда: что входит в платформу ── */
const ENV_ITEMS = [
  {
    text: 'Собственная платформа',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M9.6 20.5v-5.4a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1v5.4" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Интерактивная онлайн-доска',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 20l1-4.2L15.6 5.2a1.8 1.8 0 0 1 2.6 0l.6.6a1.8 1.8 0 0 1 0 2.6L8.2 19 4 20z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M14.4 6.6l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: 'Задания и проверка в реальном времени',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13.2 2.6L5 13.4h5.6L9.8 21.4 18.6 10h-6l.6-7.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Игровая система мотивации',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3.4l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.8l6.1-.8L12 3.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Аналитика для родителей',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 20v-6M12 20V6M18 20v-9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: 'Возможность пересматривать уроки в записи',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3.2" y="4.6" width="17.6" height="14.8" rx="4" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M10.4 9.4l4.8 2.6-4.8 2.6V9.4z" fill="currentColor"/>
      </svg>
    ),
  },
]

/* ── Полоса доверия перед блоком о преподавателе ── */
const TRUST_ITEMS = [
  {
    text: 'Качественное образование и забота о каждом ребёнке',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2.8l7.6 2.9v6.1c0 5.4-3.4 8.7-7.6 9.9-4.2-1.2-7.6-4.5-7.6-9.9V5.7L12 2.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8.8 11.9l2.3 2.3 4-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Тысячи учеников доверяют Знарнии',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21.4c4-4.2 6-7.3 6-10a6 6 0 1 0-12 0c0 2.7 2 5.8 6 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="12" cy="11.2" r="2.4" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    text: 'Опытные преподаватели и проверенная методика',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3.4l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.8l6.1-.8L12 3.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Безопасная образовательная среда',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="10.5" rx="2.4" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M7.8 10V7.4a4.2 4.2 0 0 1 8.4 0V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="12" cy="15.2" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    text: 'Видимый результат уже за 1–2 месяца',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 20v-6M12 20V6M18 20v-9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: 'Поддержка и обратная связь для родителей',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 20.6S3.8 15.7 3.8 10.2a4.7 4.7 0 0 1 8.2-3.1 4.7 4.7 0 0 1 8.2 3.1c0 5.5-8.2 10.4-8.2 10.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

/* ── Принципы работы занятий ── */
const PRINCIPLES = [
  {
    img: '/znarnia/images/lesson-shield.png',
    title: 'Полная концентрация и безопасная среда',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    img: '/znarnia/images/lesson-chart.png',
    title: 'Педагог видит прогресс каждого, а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    img: '/znarnia/images/lesson-search.png',
    title: 'Для вас — полная прозрачность прогресса',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
    img: '/znarnia/images/lesson-headset.png',
    title: 'Домашняя работа с интеллектуальной поддержкой',
    text: 'Если у ребёнка не получается решить задачу, он может запросить у системы умную подсказку, которая направляет, но не даёт готового ответа. При необходимости доступен пошаговый разбор. Затем ИИ подберёт похожее задание для закрепления темы. Это гарантирует, что пробелы в знаниях будут устранены сразу.',
  },
  {
    img: '/znarnia/images/lesson-trophy.png',
    title: 'Наши результаты',
    text: 'Уже через 2 месяца занятий у учеников заметно повышается интерес к учёбе и мотивация, а школьная оценка вырастает в среднем на 1 балл.',
  },
]

/* ── Подробный блок (обучение + занятия) ── */
function Details() {
  return (
    <section className="sh-reveal">
      <div className="sh-wrap sh-reveal__body">

        {/* Про занятия */}
        <div className="sh-lessons__head">
          <div className="sh-lessons__head-text">
            <h2 className="sh-lessons__title">
              {nb('Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка')}
            </h2>
            <p className="sh-lessons__intro">
              {nb('Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы, на которых строится обучение.')}
            </p>
          </div>
        </div>

        <div className="sh-lessons__grid">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="sh-principle">
              <div className="sh-principle__media">
                <div className="sh-principle__icon">
                  <img src={p.img} alt="" aria-hidden="true" className="sh-principle__icon-img" width="320" height="320" loading="lazy" decoding="async" />
                </div>
                <span className="sh-principle__num">{i + 1}</span>
              </div>
              <h3 className="sh-principle__title">{nb(p.title)}</h3>
              <p className="sh-principle__text">{nb(p.text)}</p>
            </div>
          ))}
        </div>

        {/* Плашка гарантии */}
        <div className="sh-guarantee">
          <div className="sh-guarantee__head">
            <div className="sh-guarantee__icon" aria-hidden="true">
              <svg width="30" height="32" viewBox="0 0 34 36" fill="none">
                <path d="M17 3l12 4.5v9C29 26 22 32 17 34 12 32 5 26 5 16.5v-9L17 3z" fill="#fff" fillOpacity="0.18" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M11.5 17.5l4 4 7-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="sh-guarantee__title">Безопасность решения</div>
          </div>
          <p className="sh-guarantee__text">
            {nb('Мы уверены в результате, поэтому даём гарантию возврата средств: если в течение 7 дней после начала занятий вам что-то не понравится — вернём деньги в полном объёме.')}
          </p>
        </div>

        <div className="sh-result">
          <span className="sh-result__dots" aria-hidden="true" />
          <span className="sh-result__ring" aria-hidden="true" />

          <div className="sh-result__icon">
            <svg className="sh-result__hex" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <path d="M100 8l73 42v100l-73 42-73-42V50z" stroke="#fff" strokeOpacity="0.16" strokeWidth="2"/>
              <path d="M100 26l58 33v82l-58 33-58-33V59z" stroke="#fff" strokeOpacity="0.10" strokeWidth="2"/>
            </svg>
            <img src="/znarnia/images/lesson-target.png" alt="" aria-hidden="true" className="sh-result__icon-img" width="440" height="440" loading="lazy" decoding="async" />
          </div>

          <h2 className="sh-result__title">Главный результат:<br className="sh-br-desktop" /> персонализированное обучение</h2>
          <p className="sh-result__text">
            {nb('Вся аналитика — по каждому ученику и классу в целом — позволяет нам точно видеть слабые места и понимать, какие темы требуют больше внимания. Мы не идём строго по программе, а постоянно адаптируем и улучшаем уроки, основываясь на реальных данных. Мы учим осознанно, делая процесс эффективным для вашего ребёнка.')}
          </p>
        </div>

      </div>
    </section>
  )
}

export default function Page() {
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
            <h1 className="sh-hero__title">{nb(PRODUCT.name)}</h1>
            <p className="sh-hero__sub">{nb(PRODUCT.subtitle)}</p>

            <ul className="sh-hero__theses">
              {THESES.map((t, i) => (
                <li key={i} className="sh-hero__thesis">
                  <span className="sh-hero__thesis-check" aria-hidden="true">✓</span>
                  <span>{nb(t)}</span>
                </li>
              ))}
            </ul>

            <div className="sh-hero__gift-wrap">
              <div className="sh-hero__gift-note">
                <span className="sh-hero__gift-title">Ваш подарок</span>
                <span className="sh-hero__gift-text">{nb('Материал сразу после заполнения формы')}</span>
                <svg className="sh-hero__gift-arrow" viewBox="0 0 110 34" fill="none" aria-hidden="true">
                  <path d="M4 5c22 17 54 22 97 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M101 18l-12-4m12 4l-9 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* декор — блок полностью читается и без него */}
              <img
                className="sh-hero__gift"
                src="/znarnia/images/gift-box.png"
                alt=""
                aria-hidden="true"
                width="460"
                height="500"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="sh-hero__right">
            <RegForm />
          </div>
        </div>
      </section>

      {/* ── ОБРАЗОВАТЕЛЬНАЯ СРЕДА ── */}
      <section className="sh-env">
        <div className="sh-wrap">
          <h2 className="sh-env__title">
            {nb('«Знарния» — образовательная онлайн-среда для комфортного обучения детей')}
          </h2>
          <p className="sh-env__lead">
            {nb('Все занятия, домашние задания, аналитика и обратная связь собраны в одном месте — без переключений между сервисами и потери внимания.')}
          </p>

          <ul className="sh-env__grid">
            {ENV_ITEMS.map((item, i) => (
              <li key={i} className="sh-env__item">
                <span className="sh-env__icon" aria-hidden="true">{item.icon}</span>
                <span className="sh-env__text">{nb(item.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ПОДРОБНЫЙ БЛОК ── */}
      <Details />

      {/* ── ПОЛОСА ДОВЕРИЯ ── */}
      <section className="sh-trust">
        <div className="sh-wrap">
          <ul className="sh-trust__grid">
            {TRUST_ITEMS.map((item, i) => (
              <li key={i} className="sh-trust__item">
                <span className="sh-trust__icon" aria-hidden="true">{item.icon}</span>
                <span className="sh-trust__text">{nb(item.text)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA К ФОРМЕ КОНСУЛЬТАЦИИ ── */}
      <section className="sh-cta">
        <div className="sh-wrap">
          <a href="#consult" className="sh-cta__btn">
            {nb('Получить консультацию по обучению в Знарнии')}
          </a>
          <p className="sh-cta__note">{nb('Бесплатно и ни к чему не обязывает')}</p>
        </div>
      </section>

      {/* ── О ПРЕПОДАВАТЕЛЕ ── */}
      <section className="lk-author-section">
        <div className="sh-wrap">
          <div className="dg-author">
            <div className="dg-author__top">
              <div className="dg-author__left">
                <div className="dg-author__label">{nb('Основатель и руководитель Школы Знарния')}</div>
                <div className="dg-author__name">Сотникова Ольга Александровна</div>
                <div className="dg-author__items">
                  {[
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Опыт преподавания: более 20 лет' },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="11" rx="1.5" stroke="#6d28d9" strokeWidth="1.8"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 17h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: 'Посетила с проверками более 200 школ в качестве эксперта' },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><circle cx="16" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><path d="M2 20c0-3.9 3.1-7 7-7h6c3.9 0 7 3.1 7 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: nb('Лично провела независимую диагностику у 10 000+ школьников') },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M6 11v5a6 6 0 0 0 12 0v-5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: nb('Обучила даже тех детей, которых школа считала неспособными') },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 21h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: 'Разработала уникальную методику обучения' },
                  ].map((item, i) => (
                    <div key={i} className="dg-author__item">
                      <span className="dg-author__icon">{item.icon}</span>
                      <span>{nb(item.text)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dg-author__photo-slot">
                <img src="/znarnia/images/author-sotnikova.png" alt="Сотникова Ольга Александровна" className="dg-author__photo" width="290" height="360" loading="lazy" />
              </div>
            </div>
            <div className="dg-author__stats">
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><circle cx="22" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>, val: '10 000+', desc: nb('проведённых диагностик') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 7h7l-5.5 4.5 2 7L16 19l-6.5 3.5 2-7L6 11h7z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>, val: '95%', desc: nb('учеников улучшают свои результаты') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#6d28d9" strokeWidth="2"/><circle cx="16" cy="16" r="5" stroke="#6d28d9" strokeWidth="2"/><path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>, val: '20+ лет', desc: nb('опыт работы с детьми') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 27S6 21 6 13a6 6 0 0 1 10-4.5A6 6 0 0 1 26 13c0 8-10 14-10 14z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>, val: '4,9 из 5', desc: nb('рейтинг школы по отзывам родителей') },
              ].map((item, i) => (
                <div key={i} className="dg-author__stat">
                  <div className="dg-author__stat-icon">{item.icon}</div>
                  <div>
                    <div className="dg-author__stat-val">{item.val}</div>
                    <div className="dg-author__stat-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ РОДИТЕЛЕЙ + ГРАМОТЫ ── */}
      <section className="lk-social-section">
        <div className="sh-wrap">
          <ReviewsCarousel />
          <div className="dg-schools">
            <div className="dg-schools__icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3L3 9l11 6 11-6-11-6z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M3 9v8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M7 11.5v5.5a7 7 0 0 0 14 0v-5.5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="dg-schools__body">
              <div className="dg-schools__title">{nb('Сотрудничество со школами')}</div>
              <p className="dg-schools__text">{nb('Мы проводили независимую оценку знаний для учеников из более 50 образовательных учреждений Москвы и получали благодарственные письма от школ и педагогов.')}</p>
              <LettersCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── ФОРМА КОНСУЛЬТАЦИИ ── */}
      <section className="sh-consult" id="consult">
        <div className="sh-wrap">
          <h2 className="sh-consult__title">{nb('Запишитесь на консультацию')}</h2>
          <p className="sh-consult__lead">
            {nb('Подберём программу под цели ребёнка, покажем платформу и ответим на все вопросы.')}
          </p>
          <RegistrationForm
            subtitle={nb('После заполнения формы наши консультанты свяжутся с вами')}
            nameLabel={nb('Фамилия и имя *')}
            namePlaceholder="Иванов Иван"
            successText={nb('После заполнения формы наши консультанты свяжутся с вами и ответят на все вопросы.')}
          />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="sh-footer">
        <div className="sh-wrap">
          <div className="sh-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
