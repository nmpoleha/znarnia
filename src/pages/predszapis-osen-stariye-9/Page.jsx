import { useState } from 'react'
import heroPhotoImg from './hero-photo.png'
import howIllustrationImg from './how-illustration.png'
import resultsPhotoImg from './results-photo.png'
import whyIllustrationImg from './why-illustration.png'

function nb(str) {
  // Не оставляем короткие предлоги/союзы в конце строки — приклеиваем их к
  // следующему слову неразрывным пробелом. Токенами (без lookbehind), чтобы
  // работало в старых браузерах и склеивало идущие подряд слова («и с радостью»).
  const short = /^([а-яёА-ЯЁ]{1,2}|или|для|что|как|при|под|над|без|про|чем|так)$/i
  const parts = str.split(' ')
  let out = ''
  for (let i = 0; i < parts.length; i++) {
    out += parts[i]
    if (i < parts.length - 1) out += short.test(parts[i]) ? '\u00A0' : ' '
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
          <div className="dg-reviews__title">Родители о нас</div>
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

const LkCheck = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
    <circle cx="10" cy="10" r="10" fill="#ede9fe"/>
    <polyline points="5.5 10.5 8.5 13.5 14.5 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LkStatsChart = () => {
  const r = 32, cx = 50, cy = 50
  const circ = 2 * Math.PI * r
  const green = 0.60 * circ, blue = 0.32 * circ, red = 0.08 * circ
  return (
    <div className="lk-stats-widget">
      <svg viewBox="0 0 100 100" width="90" height="90">
        <g transform="rotate(-90 50 50)">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#22c55e" strokeWidth="13" strokeDasharray={`${green} ${circ}`} strokeDashoffset="0"/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#818cf8" strokeWidth="13" strokeDasharray={`${blue} ${circ}`} strokeDashoffset={-green}/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f97316" strokeWidth="13" strokeDasharray={`${red} ${circ}`} strokeDashoffset={-(green+blue)}/>
        </g>
        <text x="50" y="47" textAnchor="middle" fontSize="11" fill="#6b7280">Всего</text>
        <text x="50" y="61" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e1b4b">25</text>
      </svg>
      <div className="lk-stats-legend">
        <div><span style={{background:'#22c55e'}}/>Онлайн</div>
        <div><span style={{background:'#818cf8'}}/>Оффлайн</div>
        <div><span style={{background:'#f97316'}}/>Пропущено</div>
      </div>
    </div>
  )
}

const LkPeopleIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" style={{flexShrink:0}}>
    <circle cx="13" cy="8" r="4.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M4 24c0-5 4-8 9-8s9 3 9 8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="26" cy="8" r="3.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M26 16c3 0 6 2.5 6 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const LkPlayIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" style={{flexShrink:0}}>
    <rect x="1" y="1" width="34" height="22" rx="4" stroke="#6d28d9" strokeWidth="1.8"/>
    <polygon points="14,7 14,17 23,12" fill="#6d28d9"/>
    <line x1="10" y1="26" x2="26" y2="26" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const SCHEDULE = [
  { grade: '9 класс · группа 1', day1: 'Понедельник', day2: 'Четверг',  time: '17:00' },
  { grade: '9 класс · группа 2', day1: 'Вторник',     day2: 'Пятница',  time: '18:00' },
  { grade: '9 класс · группа 3', day1: 'Среда',       day2: 'Суббота',  time: '12:00' },
]

function ScheduleModal({ onClose }) {
  return (
    <div className="os-overlay" onClick={onClose}>
      <div className="os-modal os-modal--schedule" onClick={e => e.stopPropagation()}>
        <button className="os-modal__x" onClick={onClose}>×</button>
        <div className="os-modal__title">Расписание на осень</div>
        <div className="os-schedule">
          {SCHEDULE.map((row, i) => (
            <div key={i} className="os-schedule__row">
              <div className="os-schedule__grade">{row.grade}</div>
              <div className="os-schedule__days">
                <span className="os-schedule__day">{row.day1}</span>
                <span className="os-schedule__sep">+</span>
                <span className="os-schedule__day">{row.day2}</span>
              </div>
              <div className="os-schedule__time">{row.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PayModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '' })
  const [submitted, setSubmitted] = useState(false)
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }
  return (
    <div className="os-overlay" onClick={onClose}>
      <div className="os-modal" onClick={e => e.stopPropagation()}>
        <button className="os-modal__x" onClick={onClose}>×</button>
        {submitted ? (
          <div className="os-modal__success">
            <div className="os-modal__success-icon">✓</div>
            <div className="os-modal__success-title">Заявка принята!</div>
            <div className="os-modal__success-text">Мы свяжемся с вами в ближайшее время</div>
            <button className="os-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="os-modal__title">Оплатить место</div>
            <div className="os-modal__price-line">
              <span className="os-price-old">6&thinsp;000&thinsp;₽</span>
              <span className="os-price-new">4&thinsp;500&thinsp;₽</span>
            </div>
            <form className="os-modal__form" onSubmit={handleSubmit}>
              <div className="os-modal__group">
                <label>Имя</label>
                <input type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="os-modal__group">
                <label>Телефон</label>
                <input type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="os-modal__group">
                <label>Почта</label>
                <input type="email" required placeholder="example@mail.ru" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="os-modal__group">
                <label>Класс ребёнка</label>
                <select required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {[9].map(g => <option key={g} value={g}>{g} класс</option>)}
                </select>
              </div>
              <button className="os-modal__submit" type="submit">Оплатить место</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [payOpen, setPayOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const openPay = e => { e.preventDefault(); setPayOpen(true) }
  const openSchedule = e => { e.preventDefault(); setScheduleOpen(true) }

  return (
    <div className="os-page p2">
      {payOpen && <PayModal onClose={() => setPayOpen(false)} />}
      {scheduleOpen && <ScheduleModal onClose={() => setScheduleOpen(false)} />}

      {/* HEADER */}
      <header className="os-header">
        <div className="os-header__inner p2-header__inner">
          <div className="os-header__brand">
            <img src="/znarnia/images/logo.png" alt="Школа Сотниковой Ольги" className="os-header__logo" width="80" height="80" />
            <span className="os-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
          <div className="p2-header-badge">🍁 Подготовка к ОГЭ · 9 класс</div>
        </div>
      </header>

      {/* SCREEN 1 — HERO */}
      <section className="p2-hero">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--4" aria-hidden="true">🍂</span>
        <div className="p2-hero__inner os-wrap">
          <div className="p2-hero__left">
            <h1 className="p2-hero__title">
              Подготовка к ОГЭ<br/>
              <span className="p2-hero__title-grade">по математике 2027</span>
            </h1>

            <div className="p2-hero__badge">🍁 Осенний набор открыт</div>

            <p className="p2-hero__desc">{nb('Готовим к ОГЭ по математике 2027 года так, чтобы на экзамене ребёнок уверенно знал, как решать каждое задание.')}</p>

            <div className="p2-hero__price-block">
              <div className="p2-hero__price-top">
                <span className="p2-hero__price-label">🍁 Спеццена до старта занятий</span>
                <span className="p2-hero__price-save">−25%</span>
              </div>
              <div className="p2-hero__price-row">
                <span className="p2-hero__price-main">4&thinsp;500&thinsp;₽</span>
                <div className="p2-hero__price-aside">
                  <span className="p2-hero__price-old">6&thinsp;000&thinsp;₽</span>
                  <span className="p2-hero__price-unit">за 10 занятий</span>
                </div>
              </div>
              <div className="p2-hero__price-per">450&thinsp;₽ за одно занятие</div>
              <div className="p2-hero__price-btns">
                <button className="p2-btn p2-btn--cta" onClick={openPay}>Записаться по спеццене →</button>
                <button className="p2-btn p2-btn--secondary" onClick={openSchedule}>Посмотреть расписание</button>
              </div>
            </div>
          </div>

          <div className="p2-hero__right">
            <div className="p2-hero__photo-wrap">
              <div className="p2-hero__photo">
                <img
                  src={heroPhotoImg}
                  alt="Мальчик и девочка занимаются математикой онлайн за ноутбуком"
                  width="1280"
                  height="853"
                />
              </div>
              <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
              <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
              <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>
            </div>
          </div>
        </div>

        <div className="p2-hero__icons os-wrap">
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Подготовка по актуальному формату ОГЭ 2027</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="4.5" stroke="#6d28d9" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="1" fill="#6d28d9"/>
              </svg>
            </div>
            <span>Проработка всех типов экзаменационных заданий</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Устранение пробелов в знаниях по темам ОГЭ</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M9 13l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Пробные экзамены и контроль прогресса</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
              </svg>
            </div>
            <span>Записи уроков в личном кабинете</span>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="p2-stats">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍂</span>
        <div className="os-wrap">
          <div className="p2-stats__grid">
            <div className="p2-stats__item">
              <span className="p2-stats__val">20+ лет</span>
              <span className="p2-stats__label">опыта работы с детьми</span>
            </div>
            <div className="p2-stats__item">
              <span className="p2-stats__val">10{' '}000+</span>
              <span className="p2-stats__label">проведённых диагностик</span>
            </div>
            <div className="p2-stats__item">
              <span className="p2-stats__val">Тысячи учеников</span>
              <span className="p2-stats__label">довольны результатом</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 2 — HOW LESSONS WORK */}
      <section className="p2-how">
        <span className="p2-how__bg-leaf p2-how__bg-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--2" aria-hidden="true">🍂</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--3" aria-hidden="true">🍁</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--4" aria-hidden="true">🍂</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--5" aria-hidden="true">🍁</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--6" aria-hidden="true">🍂</span>
        <span className="p2-how__bg-leaf p2-how__bg-leaf--7" aria-hidden="true">🍁</span>
        <div className="os-wrap">
          <div className="p2-section-badge p2-section-badge--icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="p2-section-badge__sep"/>
            <span>Формат занятий</span>
          </div>
          <h2 className="p2-section-title p2-section-title--tight">Как проходят занятия</h2>
          <p className="p2-section-sub">Подготовка, ориентированная на результат</p>

          <div className="p2-how__grid">

            <div className="p2-how__col">
            <div className="p2-how__card p2-how__card--wide p2-how__card--lilac">
              <div className="p2-how__card-body">
                <div className="p2-how__card-body__header">
                <div className="p2-how__card-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#fff" strokeWidth="2"/>
                    <path d="M8 21h8M12 17v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="10" r="2.5" stroke="#fff" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="p2-how__card-title">
                  Интерактивные онлайн-занятия <span className="p2-how__card-title-accent">с{' '}преподавателем</span>
                </h3>
                </div>
                <p className="p2-how__card-text">{nb('Ребёнок не остаётся пассивным слушателем. Во время урока он решает задания на платформе, вводит ответы, получает мгновенную обратную связь и активно вовлекается в учебный процесс.')}</p>
              </div>
            </div>

            <div className="p2-how__card p2-how__card--amber">
              <div className="p2-how__card-body">
                <div className="p2-how__card-body__header">
                  <div className="p2-how__card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="2" width="14" height="20" rx="2" stroke="#fff" strokeWidth="2"/>
                      <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="p2-how__card-title">Домашние задания</h3>
                </div>
                <p className="p2-how__card-text">{nb('Помогают закрепить материал и отработать навыки решения экзаменационных задач.')}</p>
              </div>
            </div>
            </div>

            <div className="p2-how__photo-slot p2-how__photo-slot--filled">
              <img src={howIllustrationImg} alt="Ученица решает линейные уравнения на интерактивной образовательной платформе" width="853" height="1280" loading="lazy" />
            </div>

            <div className="p2-how__col">
            <div className="p2-how__card p2-how__card--purple">
              <div className="p2-how__card-body">
                <div className="p2-how__card-body__header">
                  <div className="p2-how__card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"/>
                      <path d="M10 8l6 4-6 4V8z" fill="#fff"/>
                    </svg>
                  </div>
                  <h3 className="p2-how__card-title">Урок-тренажёр для подготовки к ОГЭ</h3>
                </div>
                <p className="p2-how__card-text">{nb('Дополнительный интерактивный урок для самостоятельной работы и проработки наиболее сложных экзаменационных заданий.')}</p>
              </div>
            </div>

            <div className="p2-how__card p2-how__card--mint">
              <div className="p2-how__card-body">
                <div className="p2-how__card-body__header">
                  <div className="p2-how__card-icon">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="17" rx="2" stroke="#fff" strokeWidth="2"/>
                      <path d="M8 2v4M16 2v4M3 9h18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 14h2M8 18h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="p2-how__card-title">Личный кабинет</h3>
                </div>
                <p className="p2-how__card-text">{nb('В одном месте собраны записи уроков, домашние задания, уроки-тренажёры, статистика и все материалы подготовки.')}</p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA after "Как проходят занятия" */}
      <div className="p2-mid-cta">
        <button className="p2-btn p2-btn--cta p2-btn--lg" onClick={openPay}>Записаться по спеццене →</button>
      </div>

      {/* SCREEN 4 — WHAT THE PREP INCLUDES */}
      <section className="p2-more">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
        <div className="os-wrap">
          <div className="p2-section-badge">Что входит в подготовку к ОГЭ</div>
          <h2 className="p2-section-title">{nb('Готовим именно к экзамену, а не просто занимаемся математикой')}</h2>
          <div className="p2-more__card">
            <div className="p2-more__content">
              <div className="p2-more__features">
                {[
                  { title: 'Прорабатываем все темы, которые будут на ОГЭ 2027', text: 'Выявляем и устраняем пробелы именно в тех разделах математики, которые проверяются на экзамене и влияют на итоговый результат.' },
                  { title: 'Разбираем все типы заданий ОГЭ 2027', text: 'Последовательно проходим задания экзамена от первой до второй части, чтобы на экзамене не осталось незнакомых форматов и неожиданных вопросов.' },
                  { title: 'Формируем уверенность и экзаменационные навыки', text: 'Ребёнок учится быстро ориентироваться в заданиях, правильно оформлять решения и спокойно чувствовать себя на экзамене.' },
                ].map((f, i) => (
                  <div className="p2-more__feature" key={i}>
                    <div className="p2-more__feature-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                    <div className="p2-more__feature-body">
                      <h3 className="p2-more__feature-title">{nb(f.title)}</h3>
                      <p className="p2-more__feature-text">{nb(f.text)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p2-more__media">
              <img src={whyIllustrationImg} alt="Дети занимаются онлайн на видеоуроке" width="1536" height="1024" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 3b — MISSED LESSON + TRANSPARENCY */}
      <section className="p2-pu-section">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>
        <div className="os-wrap">
          <div className="lk-cards-row">
            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__eyebrow">Все уроки доступны в записи</div>
                <div className="lk-pu-card__title">Ни один урок не потеряется</div>
              </div>
              <div className="lk-pu-card__body">
                <p className="lk-pu-card__text">Каждый урок сохраняется в личном кабинете.</p>
                <p className="lk-pu-card__text">{nb('Даже при просмотре записи ребёнок остаётся активным участником занятия:')}</p>
                <ul className="lk-pu-checklist">
                  {['выполняет задания','вводит ответы','получает звёзды за правильные решения','проходит урок в интерактивном формате'].map((t, i) => (
                    <li key={i}><LkCheck /><span>{nb(t)}</span></li>
                  ))}
                </ul>
                <div className="lk-pu-note lk-pu-note--row"><LkPlayIcon /><span>{nb('При этом запись сохраняет весь функционал урока, поэтому ребёнок получает практически тот же учебный опыт, что и на занятии в режиме реального времени.')}</span></div>
              </div>
            </div>

            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__eyebrow">Контроль прогресса ребёнка</div>
                <div className="lk-pu-card__title">Родители всегда видят прогресс подготовки</div>
              </div>
              <div className="lk-pu-card__body lk-pu-card__body--row" style={{alignItems:'flex-start'}}>
                <div className="lk-pu-card__body-left">
                  <p className="lk-pu-card__text">{nb('В личном кабинете доступна подробная статистика обучения, которая помогает отслеживать вовлечённость ребёнка и его результаты.')}</p>
                  <p className="lk-pu-card__text">Родители в любой момент могут посмотреть:</p>
                  <ul className="lk-pu-checklist">
                    {['сколько заданий выполнил ребёнок','сколько заданий решил правильно','сколько попыток понадобилось для решения','какие темы вызывают затруднения','как меняются результаты от занятия к занятию'].map((t, i) => (
                      <li key={i}><LkCheck /><span>{nb(t)}</span></li>
                    ))}
                  </ul>
                </div>
                <LkStatsChart />
              </div>
              <div className="lk-pu-note lk-pu-note--row" style={{marginTop:'16px'}}><LkPeopleIcon /><span><strong>Всё обучение прозрачно.</strong> {nb('Вы видите не только посещаемость занятий, но и то, насколько успешно ребёнок осваивает экзаменационные темы и продвигается к своей цели.')}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 6 + 7 — WHY (two cards side by side) */}
      <section className="p2-more">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
        <div className="os-wrap">
          <div className="lk-cards-row p2-why-row">
            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__title">{nb('Почему одной школьной программы недостаточно')}</div>
              </div>
              <div className="lk-pu-card__body">
                <p className="lk-pu-card__text">Высокая оценка в школе ещё не гарантирует высокий результат на ОГЭ.</p>
                <p className="lk-pu-card__text">{nb('У экзамена свой формат, свои типы заданий и свои требования к оформлению решений.')}</p>
                <p className="lk-pu-card__text">{nb('Поэтому даже ученики с хорошими школьными оценками часто испытывают трудности при написании пробников.')}</p>
                <p className="p2-more__goal p2-why-row__goal p2-why-row__goal--feature"><span className="p2-why-row__goal-text">{nb('На занятиях мы целенаправленно готовим ребёнка именно к формату ОГЭ 2027 года, чтобы на экзамене не осталось незнакомых заданий и неожиданных ситуаций.')}</span></p>
              </div>
            </div>

            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__title">Почему наши ученики уверенно сдают ОГЭ</div>
              </div>
              <div className="lk-pu-card__body">
                <p className="lk-pu-card__text">{nb('Многие школьники изучают математику в школе, но не готовы к формату экзамена.')}</p>
                <p className="p2-more__accent">Поэтому наша программа строится иначе.</p>
                <ul className="lk-pu-checklist">
                  {[
                    'Прорабатываем все темы, которые будут на ОГЭ 2027',
                    'Разбираем каждый тип экзаменационных заданий',
                    'Регулярно проводим пробные экзамены',
                    'Выявляем и устраняем пробелы в знаниях',
                    'Формируем уверенность и экзаменационные навыки',
                  ].map((t, i) => (
                    <li key={i}><LkCheck /><span>{nb(t)}</span></li>
                  ))}
                </ul>
                <p className="p2-more__goal p2-why-row__goal">{nb('В результате ребёнок приходит на экзамен подготовленным и ')}<span className="p2-more__goal-accent">{nb('понимает, как решать каждое задание')}</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 6 — RESULTS PARENTS NOTICE */}
      <section className="p2-results">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>
        <div className="os-wrap">
          <div className="p2-section-badge">Результаты</div>
          <h2 className="p2-section-title">Результаты, которые замечают родители</h2>
          <div className="p2-results__card">
            <div className="p2-results__content">
            <p className="p2-results__lead">Уже через несколько месяцев подготовки:</p>
            <ul className="p2-results__list">
              {[
                'ребёнок увереннее решает экзаменационные задания',
                'улучшаются результаты пробных экзаменов',
                'снижается тревожность перед ОГЭ',
                'появляется понимание структуры экзамена',
                'ребёнок начинает верить в свои силы и свой результат',
              ].map((t, i) => (
                <li key={i}><span className="p2-results__star" aria-hidden="true">⭐</span><span>{nb(t)}</span></li>
              ))}
            </ul>
            <div className="p2-results__highlight">
              <div className="p2-results__highlight-num">95%</div>
              <div className="p2-results__highlight-text">
                <div className="p2-results__highlight-main">{nb('учеников сдают ОГЭ на уверенные 4 и 5')}</div>
                <div className="p2-results__highlight-label">Наши результаты</div>
              </div>
            </div>
            </div>
            <div className="p2-results__photo-slot p2-results__photo-slot--filled">
              <img src={resultsPhotoImg} alt="Улыбающийся школьник показывает работу с оценкой 5" width="1280" height="853" loading="lazy" />
            </div>
          </div>
          {/* CTA inside "Результаты" */}
          <div className="p2-mid-cta p2-mid-cta--in-section">
            <button className="p2-btn p2-btn--cta p2-btn--lg" onClick={openPay}>Записаться по спеццене →</button>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="lk-author-section">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>
        <div className="os-wrap">
          <div className="dg-author">
            <div className="dg-author__top">
              <div className="dg-author__left">
                <div className="dg-author__label">Основатель и руководитель Школы Знарния</div>
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
                      <span>{item.text}</span>
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

      {/* REVIEWS + LETTERS */}
      <section className="lk-social-section">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍂</span>
        <div className="os-wrap">
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
              <div className="dg-schools__title">Сотрудничество со школами</div>
              <p className="dg-schools__text">{nb('Мы проводили независимую оценку знаний для учеников из более 50 образовательных учреждений Москвы и получали благодарственные письма от школ и педагогов.')}</p>
              <LettersCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="p2-cta">
        <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍂</span>
        <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍁</span>
        <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍂</span>
        <div className="os-wrap">
          <div className="p2-cta__inner">
            <div className="p2-cta__left">
              <h2 className="p2-cta__title">Готовы занять место в осеннем наборе?</h2>
              <div className="p2-cta__price">
                <span className="p2-cta__price-old">6&thinsp;000&thinsp;₽</span>
                <span className="p2-cta__price-main">4&thinsp;500&thinsp;₽</span>
                <span className="p2-cta__price-sub">за 10 занятий</span>
              </div>
            </div>
            <div className="p2-cta__right">
              <button className="p2-btn p2-btn--cta p2-btn--lg" onClick={openPay}>Оплатить место →</button>
              <button className="p2-btn p2-btn--ghost p2-btn--lg" onClick={openSchedule}>Посмотреть расписание</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="os-footer">
        <div className="os-wrap">
          <div className="os-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
