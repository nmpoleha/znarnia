
import { useState } from 'react'

const SCHEDULE = {
  '1':  [{ id: 's1',  date: '23 мая (сб)', time: '11:30' }],
  '2':  [{ id: 's2',  date: '25 мая (пн)', time: '18:30' }],
  '3':  [{ id: 's3',  date: '26 мая (вт)', time: '18:30' }],
  '4':  [{ id: 's4',  date: '29 мая (пт)', time: '18:30' }],
  '5':  [{ id: 's5',  date: '18 мая (пн)', time: '18:30' }],
  '6':  [{ id: 's6',  date: '19 мая (вт)', time: '18:30' }],
  '7':  [{ id: 's7',  date: '20 мая (ср)', time: '18:30' }],
  '8':  [{ id: 's8',  date: '22 мая (пт)', time: '18:30' }],
  '9':  [],
  '10': [{ id: 's10', date: '30 мая (сб)', time: '11:30' }],
}

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '', slot: '' })
  const [submitted, setSubmitted] = useState(false)

  const slots = form.grade ? SCHEDULE[form.grade] : null
  const canSubmit = !form.grade || (slots && slots.length === 0) || !!form.slot

  function set(k, v) {
    if (k === 'grade') {
      setForm(f => ({ ...f, grade: v, slot: '' }))
    } else {
      setForm(f => ({ ...f, [k]: v }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="dg-modal-overlay" onClick={onClose}>
      <div className="dg-modal" onClick={e => e.stopPropagation()}>
        <button className="dg-modal__x" onClick={onClose}>×</button>

        {submitted ? (
          <div className="dg-modal__success">
            <div className="dg-modal__success-icon">✓</div>
            <div className="dg-modal__success-title">Заявка принята!</div>
            <div className="dg-modal__success-text">Мы свяжемся с вами в ближайшее время для подтверждения записи</div>
            <button className="dg-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="dg-modal__header">
              <div className="dg-modal__title">Записаться на диагностику</div>
              <div className="dg-modal__price">590&thinsp;₽</div>
            </div>
            <form className="dg-modal__form" onSubmit={handleSubmit}>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Имя</label>
                <input className="dg-modal__input" type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Телефон</label>
                <input className="dg-modal__input" type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Email</label>
                <input className="dg-modal__input" type="email" required placeholder="example@mail.ru" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Класс ребёнка</label>
                <select className="dg-modal__select" required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} класс</option>
                  ))}
                </select>
              </div>
              {slots && slots.length > 0 && (
                <div className="dg-modal__group">
                  <label className="dg-modal__label">Дата и время диагностики</label>
                  <div className="dg-modal__slots">
                    {slots.map(s => (
                      <label key={s.id} className={`dg-modal__slot${form.slot === s.id ? ' dg-modal__slot--active' : ''}`}>
                        <input type="radio" name="slot" value={s.id} checked={form.slot === s.id} onChange={() => set('slot', s.id)} />
                        <span className="dg-modal__slot-date">{s.date}</span>
                        <span className="dg-modal__slot-time">{s.time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {slots && slots.length === 0 && (
                <div className="dg-modal__no-slots">
                  Расписание для этого класса уточняется. Оставьте заявку — мы свяжемся с вами и подберём удобное время.
                </div>
              )}
              <button className="dg-modal__submit" type="submit" disabled={!canSubmit}>
                Оплатить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function ContactBar() {
  return (
    <div className="dg-contact-bar">
      <div className="dg-contact-bar__inner">
        <div className="dg-contact-bar__brand">
          <img src="https://znarnia.ru/logo.png" alt="Школа Сотниковой Ольги" className="dg-contact-bar__logo" />
          <span className="dg-contact-bar__name">Школа Сотниковой Ольги</span>
        </div>
        <div className="dg-contact-bar__contacts">
          <a href="mailto:info@znarnia.ru" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>info@znarnia.ru</span>
          </a>
          <a href="https://t.me/sotnikova_oa_school" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
            </svg>
            <span>@sotnikova_oa_school</span>
          </a>
          <a href="https://max.ru/sotnikova_oa_school" className="dg-contact-bar__item">
            <span className="dg-contact-bar__max-icon">M</span>
            <span>написать в Max</span>
          </a>
          <a href="https://wa.me/79955775318" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
            </svg>
            <span>+7 995 577-53-18</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

function Section({ icon, title, items, result, imgSrc }) {
  return (
    <div className={`dg-section${!imgSrc ? ' dg-section--no-img' : ''}`}>
      <div className="dg-section__content">
        <div className="dg-section__head">
          <span className="dg-section__icon">{icon}</span>
          <div className="dg-section__title">{title}</div>
        </div>
        <ul className="dg-section__list">
          {items.map((item, i) => (
            <li key={i}>{nb(item)}</li>
          ))}
        </ul>
        <div className="dg-section__result">{nb(result)}</div>
      </div>
      <div className="dg-section__img-slot">
        {imgSrc && <img src={imgSrc} alt="" className="dg-section__img" />}
      </div>
    </div>
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

  function openLightbox(i) { setLightbox(i) }
  function closeLightbox() { setLightbox(null) }
  function lbPrev() { setLightbox(i => Math.max(0, i - 1)) }
  function lbNext() { setLightbox(i => Math.min(total - 1, i + 1)) }

  return (
    <>
      <div className="dg-letters">
        <div className="dg-letters__track-wrap">
          <div
            className="dg-letters__track"
            style={{ transform: `translateX(calc(-${index} * (100% / ${visible} + 10px / ${visible})))` }}
          >
            {LETTERS.map((l, i) => (
              <div key={i} className="dg-letters__thumb" onClick={() => openLightbox(i)}>
                <img src={l.src} alt={`Благодарность ${i + 1}`} className="dg-letters__thumb-img" />
                <div className="dg-letters__thumb-overlay">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/>
                    <path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {(canPrev || canNext) && (
          <div className="dg-letters__nav">
            <button
              className={`dg-letters__arrow${!canPrev ? ' dg-letters__arrow--disabled' : ''}`}
              onClick={() => canPrev && setIndex(i => i - 1)}
              aria-label="Назад"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={`dg-letters__arrow${!canNext ? ' dg-letters__arrow--disabled' : ''}`}
              onClick={() => canNext && setIndex(i => i + 1)}
              aria-label="Вперёд"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div className="dg-lightbox" onClick={closeLightbox}>
          <button className="dg-lightbox__close" onClick={closeLightbox} aria-label="Закрыть">×</button>
          <button
            className={`dg-lightbox__prev${lightbox === 0 ? ' dg-lightbox__nav--hidden' : ''}`}
            onClick={e => { e.stopPropagation(); lbPrev() }}
            aria-label="Предыдущая"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <img
            src={LETTERS[lightbox].src}
            alt={`Благодарность ${lightbox + 1}`}
            className="dg-lightbox__img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className={`dg-lightbox__next${lightbox === total - 1 ? ' dg-lightbox__nav--hidden' : ''}`}
            onClick={e => { e.stopPropagation(); lbNext() }}
            aria-label="Следующая"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="dg-lightbox__counter">{lightbox + 1} / {total}</div>
        </div>
      )}
    </>
  )
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
          <div className="dg-reviews__title">Родители о нас</div>
          <div className="dg-reviews__nav">
            <button
              className={`dg-reviews__arrow${!canPrev ? ' dg-reviews__arrow--disabled' : ''}`}
              onClick={() => canPrev && setIndex(i => i - 1)}
              aria-label="Назад"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={`dg-reviews__arrow${!canNext ? ' dg-reviews__arrow--disabled' : ''}`}
              onClick={() => canNext && setIndex(i => i + 1)}
              aria-label="Вперёд"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="dg-reviews__track-wrap">
          <div
            className="dg-reviews__track"
            style={{ transform: `translateX(calc(-${index} * (100% / ${visible} + 10px / ${visible})))` }}
          >
            {REVIEWS.map((r, i) => (
              <div key={i} className="dg-reviews__thumb" onClick={() => setLightbox(i)}>
                <img src={r.src} alt={`Отзыв ${i + 1}`} className="dg-reviews__thumb-img" />
                <div className="dg-reviews__thumb-overlay">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/>
                    <path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dg-reviews__dots">
          {Array.from({ length: total - visible + 1 }).map((_, i) => (
            <button
              key={i}
              className={`dg-reviews__dot${index === i ? ' dg-reviews__dot--active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="dg-lightbox" onClick={() => setLightbox(null)}>
          <button className="dg-lightbox__close" onClick={() => setLightbox(null)} aria-label="Закрыть">×</button>
          <button
            className={`dg-lightbox__prev${lightbox === 0 ? ' dg-lightbox__nav--hidden' : ''}`}
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.max(0, i - 1)) }}
            aria-label="Предыдущая"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <img
            src={REVIEWS[lightbox].src}
            alt={`Отзыв ${lightbox + 1}`}
            className="dg-lightbox__img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className={`dg-lightbox__next${lightbox === total - 1 ? ' dg-lightbox__nav--hidden' : ''}`}
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.min(total - 1, i + 1)) }}
            aria-label="Следующая"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="dg-lightbox__counter">{lightbox + 1} / {total}</div>
        </div>
      )}
    </>
  )
}

const SCHEDULE_ITEMS = [
  { date: '18 мая (пн)', time: '18:30', grade: '5 класс' },
  { date: '19 мая (вт)', time: '18:30', grade: '6 класс' },
  { date: '20 мая (ср)', time: '18:30', grade: '7 класс' },
  { date: '22 мая (пт)', time: '18:30', grade: '8 класс' },
  { date: '23 мая (сб)', time: '11:30', grade: '1 класс' },
  { date: '25 мая (пн)', time: '18:30', grade: '2 класс' },
  { date: '26 мая (вт)', time: '18:30', grade: '3 класс' },
  { date: '29 мая (пт)', time: '18:30', grade: '4 класс' },
  { date: '30 мая (сб)', time: '11:30', grade: '10 класс' },
]

export default function Page({ heroTitle, hideHeroRight, hideHeroDesc, heroVariant, heroV2Image, hideHero } = {}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const openModal = e => { e.preventDefault(); setModalOpen(true) }

  return (
    <div className={`dg-page${heroVariant === 'v2' ? ' dg-page--white' : ''}`}>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <ContactBar />
      {heroVariant !== 'v2' && <div className="dg-page__bg-glow dg-page__bg-glow--1" />}
      {heroVariant !== 'v2' && <div className="dg-page__bg-glow dg-page__bg-glow--2" />}

      <div className={`dg-wrap${heroVariant === 'v2' ? ' dg-wrap--v2' : ''}`}>

        {/* HERO */}
        {!hideHero && (heroVariant === 'v2' ? (
          <section className="dg-hero dg-hero--v2">
            {heroV2Image && (
              <>
                <img src={heroV2Image} alt="" className="dg-hero__v2-img" />
              </>
            )}
            <div className="dg-hero__v2-content">
              <div className="dg-hero__v2-left">
                <h1 className="dg-hero__title">{heroTitle}</h1>
                <div className="dg-hero__v2-list-head">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>
                  Всего за 1 занятие вы узнаете:
                </div>
                <ul className="dg-hero__v2-list">
                  <li>почему ребёнку сложно или легко даётся учёба</li>
                  <li>как он воспринимает и обрабатывает информацию</li>
                  <li>где скрыты реальные причины ошибок и трудностей</li>
                  <li>что поможет ему учиться уверенее и быстрее</li>
                </ul>
              </div>
              <div className="dg-hero__v2-cards">
                {[
                  { icon: 'brain_icon', title: 'Как он думает?', desc: 'Оценим логику, уверенность в себе и то, как он рассуждает.' },
                  { icon: 'book_icon', title: 'Что он знает?', desc: 'Выявим пробелы в основах и поймём, какие ошибки критичны, а какие — просто от невнимательности.' },
                  { icon: 'rocket_icon', title: 'Как он учится?', desc: 'Проверим, насколько легко он воспринимает объяснения и может ли использовать новое правило сразу.' },
                ].map((c, i) => (
                  <div key={i} className="dg-hero__v2-card">
                    <div className="dg-hero__v2-card-head">
                      <div className="dg-hero__v2-card-icon"><img src={`/znarnia/images/icons/${c.icon}.png`} alt="" /></div>
                      <div className="dg-hero__v2-card-title">{c.title}</div>
                    </div>
                    <div className="dg-hero__v2-card-desc">{c.desc}</div>
                  </div>
                ))}
              </div>
              <div className="dg-hero__v2-bottom">
                <a href="#" className="dg-hero__cta-btn" onClick={openModal}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Записаться на диагностику
                </a>
                <div className="dg-hero__v2-price">
                  590&thinsp;<span className="dg-hero__v2-price-cur">₽</span>
                </div>
              </div>
            </div>
          </section>
        ) : (
        <section className="dg-hero">
          <div className="dg-hero__left">
            <div className="dg-hero__label-tag">Для родителей школьников</div>
            <h1 className="dg-hero__title">
              {heroTitle ?? <>Онлайн-диагностика<br/><span className="dg-hero__title-accent">обучения ребёнка</span></>}
            </h1>
            <div className="dg-hero__grade">1–10 класса</div>
            {!hideHeroDesc && <p className="dg-hero__desc">{nb('За 45 минут определим, что мешает ребёнку учиться: пробелы в знаниях, особенности мышления или трудности в понимании материала.')}</p>}

            <div className="dg-hero__benefits">
              {[
                { icon: 'icon-search', title: 'Поймёте реальные причины сложностей', desc: 'Узнаете, что именно мешает ребёнку учиться' },
                { icon: 'icon-chart', title: 'Получите оценку знаний и мышления', desc: 'Проверим ключевые навыки и тип мышления' },
                { icon: 'icon-star', title: nb('Узнаете сильные и слабые стороны ребёнка'), desc: 'На что опираться, а над чем стоит поработать' },
                { icon: 'icon-clipboard', title: 'Получите понятный план действий', desc: 'Рекомендации, которые помогут улучшить результаты' },
              ].map((item, i) => (
                <div key={i} className="dg-hero__benefit">
                  <img src={`/znarnia/images/icons/${item.icon}.png`} className="dg-hero__benefit-icon" alt="" />
                  <div className="dg-hero__benefit-text">
                    <div className="dg-hero__benefit-title">{item.title}</div>
                    <div className="dg-hero__benefit-desc">{nb(item.desc)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dg-hero__cta-row">
              <div className="dg-hero__cta-left">
                <a href="#" className="dg-hero__cta-btn" onClick={openModal}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor"/>
                    <rect x="11" y="13" width="3" height="3" rx="0.5" fill="currentColor"/>
                  </svg>
                  Записаться на онлайн-диагностику
                </a>
                <span className="dg-hero__cta-note">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M2 2 C2 2 2 9 8 9 L8 9 L14 9 M11 6 L14 9 L11 12" stroke="#f97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Всего 1 занятие — польза на месяцы вперёд
                </span>
              </div>
              <div className="dg-hero__cta-price">
                <div className="dg-hero__cta-price-val">590&thinsp;<span className="dg-hero__cta-price-cur">₽</span></div>
                <div className="dg-hero__cta-price-desc">45 минут онлайн + рекомендации</div>
              </div>
            </div>

            <div className="dg-hero__footer-badges">
              {[
                { icon: 'icon-graduation', title: '1–10 класс', desc: 'для школьников' },
                { icon: 'icon-clock', title: '45 минут онлайн', desc: 'удобно из дома' },
                { icon: 'icon-document', title: 'План рекомендаций', desc: 'после занятия' },
              ].map((item, i) => (
                <div key={i} className="dg-hero__footer-badge">
                  <img src={`/znarnia/images/icons/${item.icon}.png`} className="dg-hero__footer-badge-icon" alt="" />
                  <div>
                    <div className="dg-hero__footer-badge-title">{item.title}</div>
                    <div className="dg-hero__footer-badge-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!hideHeroRight && <div className="dg-hero__right">
            <div className="dg-hero__card">
              <img
                src="/znarnia/images/who-lesson.png"
                alt="Онлайн-диагностика"
                className="dg-hero__card-photo"
              />
              <div className="dg-hero__card-items-v2">
                {[
                  { title: 'Проверяем мышление', desc: 'Определим особенности мышления и как ребёнок решает задачи' },
                  { title: 'Анализируем знания', desc: 'Выявим пробелы и понимание ключевых тем' },
                  { title: 'Даём рекомендации', desc: 'Вы получите понятный план, что делать дальше' },
                ].map((item, i) => (
                  <div key={i} className="dg-hero__card-item-v2">
                    <svg className="dg-hero__card-item-v2-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="14" fill="#ede9fe"/>
                      <path d="M8 14.5l4.5 4.5 8-9" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <div className="dg-hero__card-item-v2-title">{item.title}</div>
                      <div className="dg-hero__card-item-v2-desc">{nb(item.desc)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>}
        </section>
        ))}

        {/* HOW IT WORKS — only v2 */}
        {heroVariant === 'v2' && (
          <section className="dg-how">

            {/* ── TOP ── */}
            <div className="dg-how__header">
              <div className="dg-how__header-left">
                <h2 className="dg-how__title">Как проходит <span className="dg-how__title-accent">диагностика</span></h2>
                <div className="dg-how__subtitle">Диагностика проходит онлайн в два этапа</div>
              </div>
            </div>

            {/* ── BODY: two columns ── */}
            <div className="dg-how__body">
              <div className="dg-how__main">

                {/* Stage 1 */}
                <div className="dg-how__stage dg-how__stage--1">
                  <div className="dg-how__stage-head">
                    <div className="dg-how__stage-pill">1 ЭТАП</div>
                    <div className="dg-how__stage-label">С РЕБЁНКОМ</div>
                  </div>
                  <div className="dg-how__stage1-body">
                    <div className="dg-how__stage1-left">
                      <p className="dg-how__stage-intro">В онлайн-формате мы оцениваем три ключевых показателя:</p>
                      <div className="dg-how__items">
                        {[
                          { icon: 'brain_icon', title: 'КАК ОН ДУМАЕТ?', desc: 'Логика, мышление, умение рассуждать' },
                          { icon: 'book_icon', title: 'ЧТО ОН ЗНАЕТ?', desc: 'Уровень знаний, пробелы в основах, понимание тем' },
                          { icon: 'rocket_icon', title: 'КАК ОН УЧИТСЯ?', desc: 'Скорость восприятия, умение применять новые правила и решать задачи' },
                        ].map((item, i) => (
                          <div key={i} className="dg-how__item">
                            <div className="dg-how__item-icon"><img src={`/znarnia/images/icons/${item.icon}.png`} alt="" /></div>
                            <div className="dg-how__item-body">
                              <div className="dg-how__item-title">{item.title}</div>
                              <div className="dg-how__item-desc">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="dg-how__stage-callout">
                        ✏️ Ребёнок проходит <strong>авторскую диагностику</strong>, разработанную специально для школьников.
                      </div>
                      <p className="dg-how__stage-intro" style={{marginTop:'12px'}}>{nb('Диагностика проходит онлайн в реальном времени в назначенное время. Ребёнок последовательно решает специально подготовленные задания, а все его ответы фиксируются и анализируются.')}</p>
                    </div>
                    <img src="/znarnia/images/girl-thinking.png" alt="" className="dg-how__stage1-img" />
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="dg-how__stage dg-how__stage--2">
                  <div className="dg-how__stage-head">
                    <div className="dg-how__stage-pill">2 ЭТАП</div>
                    <div className="dg-how__stage-label">С РОДИТЕЛЕМ</div>
                  </div>
                  <div className="dg-how__stage2-body">
                    <img src="/znarnia/images/mom-child-laptop.png" alt="" className="dg-how__stage2-img" />
                    <div className="dg-how__stage2-text">
                      <p className="dg-how__stage-intro">{nb('К подключению приглашаются родители. Вы получите подробный разбор результатов диагностики и сможете:')}</p>
                      <ul className="dg-how__checklist">
                        {[
                          'увидеть сильные и слабые стороны ребёнка',
                          'понять причины трудностей в учёбе',
                          'получить рекомендации по развитию и обучению',
                          'задать вопросы и получить ответы эксперта',
                        ].map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                      <div className="dg-how__stage-callout" style={{marginTop:'14px'}}>
                        {nb('Сразу после диагностики подключается родитель. Мы вместе подробно разбираем результаты: какие задания вызвали сложности, о чём это говорит, какие есть пробелы и как дальше выстраивать обучение.')}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar: stats */}
            </div>

            {/* ── RECORDING ── */}
            <div className="dg-how__record-cta">
              <button className="dg-who__schedule-btn" onClick={() => setScheduleOpen(v => !v)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Посмотреть расписание
                <svg className={`dg-who__schedule-chevron${scheduleOpen ? ' dg-who__schedule-chevron--open' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {scheduleOpen && (
                <div className="dg-schedule">
                  <div className="dg-schedule__title">Ближайшие диагностики</div>
                  <div className="dg-schedule__list">
                    {SCHEDULE_ITEMS.map((s, i) => (
                      <div key={i} className="dg-schedule__row">
                        <span className="dg-schedule__grade">{s.grade}</span>
                        <span className="dg-schedule__date">{s.date}</span>
                        <span className="dg-schedule__time">{s.time}</span>
                        <a href="#" className="dg-schedule__book" onClick={openModal}>Записаться</a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="dg-how__record">
              <div className="dg-how__record-head">
                <div className="dg-how__record-play">▶</div>
                <div className="dg-how__record-title">
                  Если не получится присутствовать онлайн — диагностику можно пройти <span className="dg-how__record-accent">в записи</span>
                </div>
              </div>
              <div className="dg-how__steps">
                {[
                  'Ребёнок выполняет диагностику в удобное время в записи.',
                  'Система фиксирует результаты: количество верных ответов и ошибки по каждому заданию.',
                  'Вы можете посмотреть все задания и разбор: что означает каждое из них и как оно влияет на успеваемость в школе.',
                  'При этом сохраняется вся функциональность и глубина анализа.',
                ].map((t, i) => (
                  <div key={i} className="dg-how__step-wrap">
                    <div className="dg-how__step">
                      <div className="dg-how__step-icon">
                        <img src={`/znarnia/images/icons/${['icon-clipboard','icon-chart','icon-document','icon-star'][i]}.png`} alt="" />
                      </div>
                      <div className="dg-how__step-text">{t}</div>
                    </div>
                    {i < 3 && <div className="dg-how__step-arrow">→</div>}
                  </div>
                ))}
              </div>
              <div className="dg-how__record-callout">
                ⭐ <strong>Вы получите ту же точную картину</strong>, что и при онлайн-диагностике: удобно, информативно и максимально полезно.
              </div>
            </div>

          </section>
        )}

        {/* WHO IS IT FOR */}
        {heroVariant !== 'v2' && <div className="dg-who">
          <div className="dg-who__title">Кому подойдёт диагностика</div>
          <p className="dg-who__desc">{nb('Если вы замечаете у ребёнка сложности в обучении, диагностика поможет понять, где именно причина и что делать дальше.')}</p>
          <div className="dg-who__layout">
            <img src="/znarnia/images/who-center.png" alt="" className="dg-who__bg-image" />
            <div className="dg-who__col">
              {[
                { icon: '?', text: 'не понимает математику' },
                { icon: '!', text: 'боится контрольных' },
                { icon: '×', text: 'делает ошибки в знакомых темах' },
              ].map((item, i) => (
                <div key={i} className="dg-who__card">
                  <div className="dg-who__icon">{item.icon}</div>
                  <div className="dg-who__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
            <div className="dg-who__spacer" />
            <div className="dg-who__col">
              {[
                { icon: '→', text: 'занимается, но результата нет' },
                { icon: '↗', text: 'переходит в новый класс' },
                { icon: '✓', text: 'готовится к ВПР, ОГЭ или ЕГЭ' },
              ].map((item, i) => (
                <div key={i} className="dg-who__card">
                  <div className="dg-who__icon">{item.icon}</div>
                  <div className="dg-who__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="dg-who__schedule-wrap">
            <button className="dg-who__schedule-btn" onClick={() => setScheduleOpen(v => !v)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Посмотреть расписание
              <svg className={`dg-who__schedule-chevron${scheduleOpen ? ' dg-who__schedule-chevron--open' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {scheduleOpen && (
              <div className="dg-schedule">
                <div className="dg-schedule__title">Ближайшие диагностики</div>
                <div className="dg-schedule__list">
                  {SCHEDULE_ITEMS.map((s, i) => (
                    <div key={i} className="dg-schedule__row">
                      <span className="dg-schedule__grade">{s.grade}</span>
                      <span className="dg-schedule__date">{s.date}</span>
                      <span className="dg-schedule__time">{s.time}</span>
                      <a href="#" className="dg-schedule__book" onClick={openModal}>Записаться</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>}

        {/* PART 1 */}
        {heroVariant !== 'v2' && <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 1</div>
            <div className="dg-part__title">{nb('Работа с ребёнком')}</div>
          </div>

          <div className="dg-sections">
            <Section
              icon="✦"
              title={nb('Как он думает?')}
              items={[
                'анализируем уровень логического мышления',
                'смотрим, как он выстраивает рассуждение',
                'оцениваем самостоятельность в принятии решений',
              ]}
              result="Вы поймёте, как устроено его мышление: умеет ли он рассуждать или действует наугад"
              imgSrc="/znarnia/images/section-thinking.png"
            />
            <Section
              icon="✦"
              title={nb('Что он на самом деле знает?')}
              items={[
                'выявляем пробелы в ключевых темах',
                'проверяем базу не только за текущий, но и за предыдущие классы',
                'оцениваем глубину понимания',
              ]}
              result='Станет ясно, где именно «проседает фундамент» и что мешает двигаться дальше'
            />
            <Section
              icon="✦"
              title={nb('Как он учится?')}
              items={[
                'смотрим, как он воспринимает объяснения',
                'проверяем, может ли сразу применять новые знания',
                'оцениваем включённость и скорость',
              ]}
              result="Вы увидите, какой формат обучения ему подходит и почему текущий может не работать"
            />
          </div>

        </section>}

        {/* PART 2 */}
        {heroVariant !== 'v2' && <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 2</div>
            <div className="dg-part__title">{nb('💡 Разбор с родителями — превращаем диагностику в план')}</div>
          </div>
          <div className="dg-part--2">
            <p className="dg-part__desc">{nb('Сразу после урока вы получаете не общее мнение, а чёткое понимание ситуации и конкретные шаги:')}</p>
            <div className="dg-plan-cards">
              {[
                { icon: '?', text: 'почему у ребёнка снижается мотивация' },
                { icon: '!', text: 'в чём реальные причины сложностей в учёбе' },
                { icon: '↓', text: 'где пробелы и как они влияют на текущие результаты' },
                { icon: '→', text: 'что делать уже сейчас, чтобы улучшить успеваемость' },
              ].map((item, i) => (
                <div key={i} className="dg-plan-card">
                  <div className="dg-plan-card__icon">{item.icon}</div>
                  <div className="dg-plan-card__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {/* AUTHOR + STATS */}
        <div className="dg-author">
          <div className="dg-author__top">
            <div className="dg-author__left">
              <div className="dg-author__label">Основатель и руководитель<br/>Школы Знарния</div>
              <div className="dg-author__name">Сотникова&nbsp;Ольга&nbsp;Александровна</div>
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
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="dg-author__photo-slot">
              <img src="/znarnia/images/author-sotnikova.png" alt="Сотникова Ольга Александровна" className="dg-author__photo" />
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

        {/* REVIEWS */}
        <ReviewsCarousel />

        {/* SCHOOLS */}
        <div className="dg-schools">
          <div className="dg-schools__icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3L3 9l11 6 11-6-11-6z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M3 9v8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M7 11.5v5.5a7 7 0 0 0 14 0v-5.5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="dg-schools__body">
            <div className="dg-schools__title">Сотрудничество со школами</div>
            <p className="dg-schools__text">{nb('Опыт сотрудничества со школами — одно из подтверждений качества нашей диагностики. Мы проводили независимую оценку знаний для учеников из более 50 образовательных учреждений Москвы и получали благодарственные письма от школ и педагогов.')}</p>
            <LettersCarousel />
          </div>
        </div>

        {/* RESULT */}
        <section className="dg-result">
          <div className="dg-result__title">{nb('Вы уходите не с вопросами, а с готовым планом действий')}</div>
          <p className="dg-result__text">{nb('Один урок поможет понять больше, чем месяцы догадок и тревоги: что мешает ребёнку, с чего начать и как улучшить результат.')}</p>
          <img className="dg-result__image" src="/znarnia/lampochka.png" alt="" />
          <a href="#" className="dg-result__btn" onClick={openModal}>Записаться на диагностический урок</a>
        </section>

        <footer className="dg-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <div className="dg-footer__contacts">
            <a href="mailto:info@znarnia.ru" className="dg-contact-bar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="dg-contact-bar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://max.ru/sotnikova_oa_school" className="dg-contact-bar__item">
              <span className="dg-contact-bar__max-icon">M</span>
              <span>написать в Max</span>
            </a>
            <a href="https://wa.me/79955775318" className="dg-contact-bar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        </footer>

      </div>
    </div>
  )
}
