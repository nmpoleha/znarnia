
import { useState } from 'react'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

const Check = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
    <circle cx="10" cy="10" r="10" fill="#ede9fe"/>
    <polyline points="5.5 10.5 8.5 13.5 14.5 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DiamondIcon = () => (
  <svg viewBox="0 0 20 20" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'relative', top:'5px'}}>
    <path d="M10 17L2 7l2.5-4h11L18 7l-8 10z" stroke="#6d28d9" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M2 7h16M7 7L10 17M13 7L10 17M4.5 3L7 7M15.5 3L13 7" stroke="#6d28d9" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
)

const StatsChart = () => {
  const r = 32, cx = 50, cy = 50
  const circ = 2 * Math.PI * r
  const green = 0.60 * circ
  const blue  = 0.32 * circ
  const red   = 0.08 * circ
  return (
    <div className="pu-stats-widget">
      <svg viewBox="0 0 100 100" width="90" height="90">
        <g transform="rotate(-90 50 50)">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#22c55e" strokeWidth="13"
            strokeDasharray={`${green} ${circ}`} strokeDashoffset="0" strokeLinecap="butt"/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#818cf8" strokeWidth="13"
            strokeDasharray={`${blue} ${circ}`} strokeDashoffset={-green} strokeLinecap="butt"/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f97316" strokeWidth="13"
            strokeDasharray={`${red} ${circ}`} strokeDashoffset={-(green+blue)} strokeLinecap="butt"/>
        </g>
        <text x="50" y="47" textAnchor="middle" fontSize="11" fill="#6b7280">Всего</text>
        <text x="50" y="61" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e1b4b">25</text>
      </svg>
      <div className="pu-stats-legend">
        <div><span style={{background:'#22c55e'}}/>Онлайн</div>
        <div><span style={{background:'#818cf8'}}/>Оффлайн</div>
        <div><span style={{background:'#f97316'}}/>Пропущено</div>
      </div>
    </div>
  )
}

const PeopleIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
    <circle cx="13" cy="8" r="4.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M4 24c0-5 4-8 9-8s9 3 9 8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="26" cy="8" r="3.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M26 16c3 0 6 2.5 6 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
    <rect x="1" y="1" width="34" height="22" rx="4" stroke="#6d28d9" strokeWidth="1.8"/>
    <polygon points="14,7 14,17 23,12" fill="#6d28d9"/>
    <line x1="10" y1="26" x2="26" y2="26" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const Shield = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

function Num({ n }) {
  return <div className="pu-num">{n}</div>
}

function CheckList({ items }) {
  return (
    <ul className="pu-checklist">
      {items.map((t, i) => (
        <li key={i}><Check /><span>{typeof t === 'string' ? nb(t) : t}</span></li>
      ))}
    </ul>
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
          <button className="dg-lightbox__close" onClick={() => setLightbox(null)}>×</button>
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
          <button className="dg-lightbox__close" onClick={() => setLightbox(null)}>×</button>
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

const SCHEDULE = [
  { grade: '1 класс',  days: 'Понедельник + Среда',   time: '14:00' },
  { grade: '2 класс',  days: 'Вторник + Четверг',     time: '14:30' },
  { grade: '3 класс',  days: 'Среда + Пятница',       time: '15:00' },
  { grade: '4 класс',  days: 'Понедельник + Пятница', time: '15:30' },
  { grade: '5 класс',  days: 'Понедельник + Среда',   time: '16:00' },
  { grade: '6 класс',  days: 'Вторник + Четверг',     time: '16:30' },
  { grade: '7 класс',  days: 'Среда + Пятница',       time: '17:00' },
  { grade: '8 класс',  days: 'Понедельник + Четверг', time: '17:30' },
  { grade: '9 класс',  days: 'Вторник + Пятница',     time: '18:00' },
  { grade: '10 класс', days: 'Понедельник + Среда',   time: '18:30' },
  { grade: '11 класс', days: 'Вторник + Четверг',     time: '19:00' },
]

function ScheduleModal({ onClose }) {
  return (
    <div className="pu-sched-overlay" onClick={onClose}>
      <div className="pu-sched" onClick={e => e.stopPropagation()}>
        <div className="pu-sched__head">
          <div className="pu-sched__title">Расписание на осень</div>
          <button className="pu-sched__close" onClick={onClose} aria-label="Закрыть">×</button>
        </div>
        <div className="pu-sched__list">
          {SCHEDULE.map((r, i) => (
            <div key={i} className="pu-sched__row">
              <div className="pu-sched__grade">{r.grade}</div>
              <div className="pu-sched__days">{r.days}</div>
              <div className="pu-sched__time">{r.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [scheduleOpen, setScheduleOpen] = useState(false)
  return (
    <div className="pu-page">

      {/* ── TOPBAR ── */}
      <header className="pu-topbar">
        <div className="pu-topbar__inner">
          <div className="pu-topbar__brand">
            <img src="https://znarnia.ru/logo.png" alt="Школа Сотниковой Ольги" className="pu-topbar__logo" />
            <span className="pu-topbar__name">Школа Сотниковой Ольги</span>
          </div>
          <div className="pu-topbar__contacts">
            <a href="mailto:info@znarnia.ru" className="pu-topbar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="pu-topbar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://max.ru/sotnikova_oa_school" className="pu-topbar__item">
              <span className="pu-topbar__max-icon">M</span>
              <span>написать в Max</span>
            </a>
            <a href="https://wa.me/79955775318" className="pu-topbar__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        </div>
      </header>

      <div className="pu-wrap">

        {/* ── HERO ── */}
        <section className="pu-hero">
          <div className="pu-hero__left">
            <h1 className="pu-hero__title">Пробная неделя<br />обучения</h1>
            <div className="pu-hero__sub">{nb('Покажите ребёнку, что учёба может быть интересной и эффективной')}</div>
            <p className="pu-hero__desc">{nb('Ваш ребёнок привык к скучным урокам и непонятным темам? Мы покажем другой формат — где обучение вовлекает, объясняет и даёт результат.')}</p>
            <div className="pu-hero__actions">
              <a href="#" className="pu-btn-orange">Попробуйте за 450 ₽</a>
              <div className="pu-hero__badge"><Shield /><span>Без риска<br />и обязательств</span></div>
            </div>
          </div>
          <div className="pu-hero__right">
            <img src="/znarnia/boy-desk.png" alt="" className="pu-hero__img" />
          </div>
        </section>

        {/* ── THESES BANNER ── */}
        <div className="pu-theses">
          <div className="pu-theses__inner">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Безопасная образовательная среда' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/></svg>, text: 'Опытные педагоги и авторские методики' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 20V14M8 20V10M12 20V6M16 20V12M20 20V8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: 'Видимый результат уже за 2–4 недели' },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 3 15 3 9a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 6-9 12-9 12z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/></svg>, text: 'Поддержка и обратная связь для родителей' },
            ].map((t, i) => (
              <div key={i} className="pu-theses__item">
                <div className="pu-theses__icon">{t.icon}</div>
                <p className="pu-theses__text">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── GIFT BANNER ── */}
        <div className="pu-gift">
          <div className="pu-gift__text">
            <span className="pu-gift__icon" aria-hidden="true">🎁</span>
            <span>{nb('При записи на пробную неделю вы получаете ')}<b>диагностический&nbsp;урок в&nbsp;подарок</b></span>
          </div>
          <a href="/znarnia/diagnostika-podarok/" className="pu-gift__btn">Подробнее</a>
        </div>

        {/* ── ACCESS BLOCK ── */}
        <div className="pu-access">
          <div className="pu-access__title">Что входит в пробную неделю</div>
          <p className="pu-access__sub">{nb('При покупке пробной недели вам открывается доступ к:')}</p>
          <div className="pu-access__items">
            <div className="pu-access__item">
              <span className="pu-access__num">2</span>
              <span className="pu-access__label">урока с&nbsp;учителем<br /><i>в&nbsp;записи</i></span>
            </div>
            <div className="pu-access__item">
              <span className="pu-access__num">1</span>
              <span className="pu-access__label">урок-тренажёр</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 1 (онлайн-урок с учителем) ── */}
        <section className="pu-card pu-card--s1 pu-card--s3">
          <div className="pu-card__head">
            <div>
              <div className="pu-card__title">Интерактивный онлайн-урок с учителем</div>
              <div className="pu-meta" style={{marginTop:'12px'}}>
                <div className="pu-meta__item">⏱ Длительность: 60 минут</div>
                <div className="pu-meta__item">Урок можно проходить в удобное время</div>
              </div>
            </div>
          </div>
          <div className="pu-card__body pu-card__body--row">
            <div className="pu-card__body-left">
              <CheckList items={[
                'ребёнок отвечает на вопросы в процессе урока',
                'сразу видит, правильно или нет',
                'получает баллы за выполнение заданий',
              ]} />
              <div className="pu-callout">
                Важно: ответы видны только самому ребёнку —<br />никакого стресса и страха ошибиться.
              </div>
              <button type="button" className="pu-btn-purple" onClick={() => setScheduleOpen(true)}>Посмотреть расписание</button>
            </div>
            <div className="pu-card__body-right">
              <div className="pu-lesson-preview">
                <img src="/znarnia/images/online-lesson.png" alt="" className="pu-lesson-preview__img" style={{transform:'scale(1.1) translateY(-20px)'}} />
                <div className="pu-lesson-preview__badge pu-lesson-preview__badge--lg"><DiamondIcon />+15 баллов</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 (урок-тренажёр) ── */}
        <section className="pu-card">
          <div className="pu-card__head">
            <div>
              <div className="pu-card__title">Интерактивный урок-тренажёр по школьной математике</div>
              <div className="pu-card__sub">{nb('Системное освоение темы через цикл «теория → практика → закрепление»')}</div>
            </div>
          </div>
          <div className="pu-card__body pu-card__body--row">
            <div className="pu-card__body-left">
              <div className="pu-meta">
                <div className="pu-meta__item">⏱ Длительность: 30–40 минут</div>
                <div className="pu-meta__item">⏰ Урок можно проходить в удобное время</div>
              </div>
              <div className="pu-card__how">
                <div className="pu-card__how-title">Как устроен урок:</div>
                <CheckList items={[
                  'Короткое объяснение ключевой темы',
                  'Сразу — применение на практике',
                  'Мгновенная обратная связь по каждому заданию',
                  'При необходимости — разбор решений',
                  'Переход к следующему элементу темы',
                ]} />
              </div>
            </div>
            <div className="pu-card__body-right">
              <div className="pu-lesson-preview">
                <img src="/znarnia/images/lesson-screen.png" alt="" className="pu-lesson-preview__img" />
                <div className="pu-lesson-preview__badge">⭐ Отлично!<br />+10 баллов</div>
              </div>
            </div>
          </div>
          <div className="pu-callout">
            Каждый урок выстроен как последовательность повторяющихся циклов:<br />
            объяснение → практика → анализ → следующий шаг.<br />
            {nb('Ребёнок не просто знакомится с темой, а последовательно прорабатывает каждый её элемент до понимания.')}
          </div>
        </section>

        {/* ── SECTIONS 4 & 5 ── */}
        <div className="pu-cards-row">
          <section className="pu-card">
            <div className="pu-card__head">
              <div className="pu-card__title">{nb('Не получилось присутствовать онлайн? Не проблема')}</div>
            </div>
            <div className="pu-card__body">
              <p className="pu-card__text">Если ребёнок пропустил онлайн-урок:</p>
              <CheckList items={[
                'он смотрит его в записи',
                'сохраняется вся интерактивность',
                'получает мгновенную обратную связь',
                'статистика также доступна родителям',
              ]} />
              <div className="pu-note pu-note--row"><PlayIcon /><span>По эффективности это<br />тот же полноценный урок.</span></div>
            </div>
          </section>

          <section className="pu-card">
            <div className="pu-card__head">
              <div className="pu-card__title">Полная прозрачность<br />для родителей</div>
            </div>
            <div className="pu-card__body pu-card__body--row" style={{alignItems:'flex-start'}}>
              <div className="pu-card__body-left">
                <p className="pu-card__text">После каждого урока вы получаете подробную статистику:</p>
                <CheckList items={[
                  'сколько заданий решено',
                  'где были ошибки',
                  'сколько попыток понадобилось',
                  <span style={{whiteSpace:'nowrap'}}>какие темы вызвали сложности</span>,
                ]} />
              </div>
              <StatsChart />
            </div>
            <div className="pu-note pu-note--row" style={{marginTop:'16px'}}><PeopleIcon /><span>Вы не гадаете — вы точно понимаете уровень ребёнка.</span></div>
          </section>
        </div>

        {/* ── PLATFORM ── */}
        <section className="pu-platform">
          <div className="pu-platform__header">
            <div className="pu-platform__tag">Платформа</div>
            <h2 className="pu-platform__title">{nb('«Знарния» — образовательная онлайн-среда для комфортного обучения детей')}</h2>
          </div>
          <p className="pu-platform__desc">{nb('Все занятия, домашние задания, аналитика и обратная связь собраны в одном месте — без переключений между сервисами и потери внимания.')}</p>
          <ul className="pu-platform__features">
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Собственная платформа' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 20h9" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Интерактивная онлайн-доска' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Задания и проверка в реальном времени' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Игровая система мотивации' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Аналитика для родителей' },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="#6d28d9" strokeWidth="2"/><path d="M10 9l5 3-5 3V9z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Возможность пересматривать уроки в записи' },
            ].map((f, i) => (
              <li key={i} className="pu-platform__feature">
                <span className="pu-platform__feature-icon">{f.icon}</span>
                <span className="pu-platform__feature-text">{f.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── AUTHOR ── */}
        <section className="pu-author-section">
          <div className="pu-author">
            <div className="pu-author__top">
              <div className="pu-author__left">
                <div className="pu-author__label">Основатель и руководитель<br/>Школы Знарния</div>
                <div className="pu-author__name">Сотникова&nbsp;Ольга&nbsp;Александровна</div>
                <div className="pu-author__items">
                  {[
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, text: 'Опыт преподавания: более 20 лет' },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="11" rx="1.5" stroke="#6d28d9" strokeWidth="1.8"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 17h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: 'Посетила с проверками более 200 школ в качестве эксперта' },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><circle cx="16" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><path d="M2 20c0-3.9 3.1-7 7-7h6c3.9 0 7 3.1 7 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: nb('Лично провела независимую диагностику у 10 000+ школьников') },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M6 11v5a6 6 0 0 0 12 0v-5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: nb('Обучила даже тех детей, которых школа считала неспособными') },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 21h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>, text: 'Разработала уникальную методику обучения' },
                  ].map((item, i) => (
                    <div key={i} className="pu-author__item">
                      <span className="pu-author__icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pu-author__photo-slot">
                <img src="/znarnia/images/author-sotnikova.png" alt="Сотникова Ольга Александровна" className="pu-author__photo" width="290" height="360" loading="lazy" />
              </div>
            </div>
            <div className="pu-author__stats">
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><circle cx="22" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>, val: '10 000+', desc: nb('проведённых диагностик') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 7h7l-5.5 4.5 2 7L16 19l-6.5 3.5 2-7L6 11h7z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>, val: '95%', desc: nb('учеников улучшают свои результаты') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#6d28d9" strokeWidth="2"/><circle cx="16" cy="16" r="5" stroke="#6d28d9" strokeWidth="2"/><path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>, val: '20+ лет', desc: nb('опыт работы с детьми') },
                { icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 27S6 21 6 13a6 6 0 0 1 10-4.5A6 6 0 0 1 26 13c0 8-10 14-10 14z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>, val: '4,9 из 5', desc: nb('рейтинг школы по отзывам родителей') },
              ].map((item, i) => (
                <div key={i} className="pu-author__stat">
                  <div className="pu-author__stat-icon">{item.icon}</div>
                  <div>
                    <div className="pu-author__stat-val">{item.val}</div>
                    <div className="pu-author__stat-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS + SCHOOLS ── */}
        <section className="pu-social-section">
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
              <p className="dg-schools__text">{nb('Опыт сотрудничества со школами — одно из подтверждений качества нашей методики. Мы проводили независимую оценку знаний для учеников из более 50 образовательных учреждений Москвы и получали благодарственные письма от школ и педагогов.')}</p>
              <LettersCarousel />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="pu-cta">
          <div className="pu-cta__left">
            <div className="pu-cta__title">Попробуйте пробную неделю за 450 ₽</div>
            <div className="pu-cta__text">{nb('и оцените формат, который действительно вовлекает в обучение.')}</div>
          </div>
          <div className="pu-cta__right">
            <a href="#" className="pu-btn-orange">Попробовать неделю обучения</a>
            <div className="pu-cta__badge"><Shield /><span>Без риска и обязательств</span></div>
          </div>
        </section>

        <footer className="pu-footer">© 2026 Школа Сотниковой Ольги</footer>
      </div>

      {scheduleOpen && <ScheduleModal onClose={() => setScheduleOpen(false)} />}
    </div>
  )
}
