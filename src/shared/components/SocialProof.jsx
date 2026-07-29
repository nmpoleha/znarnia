import { useState, useEffect } from 'react'
import { nb } from '../utils/nb'
import './SocialProof.css'

/* ─────────────────────────────────────────────────────────────
   Социальные доказательства: преподаватель, отзывы родителей,
   благодарности школ. Вёрстка перенесена со страницы
   shablon-bez-geymifikatsii.
   ───────────────────────────────────────────────────────────── */

/* Сколько карточек помещается в ряд — совпадает с брейкпоинтами CSS */
function useVisible(wide, mid, narrow) {
  const calc = () => {
    if (typeof window === 'undefined') return wide
    if (window.matchMedia('(max-width: 640px)').matches) return narrow
    if (window.matchMedia('(max-width: 1024px)').matches) return mid
    return wide
  }
  const [visible, setVisible] = useState(calc)
  useEffect(() => {
    const onResize = () => setVisible(calc())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return visible
}

function Lightbox({ items, index, setIndex, onClose, altPrefix }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(items.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [items.length, onClose, setIndex])

  return (
    <div className="dg-lightbox" onClick={onClose}>
      <button className="dg-lightbox__close" onClick={onClose} aria-label="Закрыть">×</button>
      <button
        className={`dg-lightbox__prev${index === 0 ? ' dg-lightbox__nav--hidden' : ''}`}
        onClick={(e) => { e.stopPropagation(); setIndex((i) => Math.max(0, i - 1)) }}
        aria-label="Предыдущая"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <img src={items[index].src} alt={`${altPrefix} ${index + 1}`} className="dg-lightbox__img" onClick={(e) => e.stopPropagation()} />
      <button
        className={`dg-lightbox__next${index === items.length - 1 ? ' dg-lightbox__nav--hidden' : ''}`}
        onClick={(e) => { e.stopPropagation(); setIndex((i) => Math.min(items.length - 1, i + 1)) }}
        aria-label="Следующая"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="dg-lightbox__counter">{index + 1} / {items.length}</div>
    </div>
  )
}

/* ── О ПРЕПОДАВАТЕЛЕ ── */

const AUTHOR_ITEMS = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    text: 'Опыт преподавания: более 20 лет',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="11" rx="1.5" stroke="#6d28d9" strokeWidth="1.8"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/><path d="M9 17h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    text: 'Посетила с проверками более 200 школ в качестве эксперта',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><circle cx="16" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/><path d="M2 20c0-3.9 3.1-7 7-7h6c3.9 0 7 3.1 7 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    text: 'Лично провела независимую диагностику у 10 000+ школьников',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M6 11v5a6 6 0 0 0 12 0v-5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    text: 'Обучила даже тех детей, которых школа считала неспособными',
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 21h6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    text: 'Разработала уникальную методику обучения',
  },
]

const AUTHOR_STATS = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><circle cx="22" cy="10" r="4" stroke="#6d28d9" strokeWidth="2"/><path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>,
    val: '10 000+', desc: 'проведённых диагностик',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 7h7l-5.5 4.5 2 7L16 19l-6.5 3.5 2-7L6 11h7z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>,
    val: '95%', desc: 'учеников улучшают свои результаты',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" stroke="#6d28d9" strokeWidth="2"/><circle cx="16" cy="16" r="5" stroke="#6d28d9" strokeWidth="2"/><path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/></svg>,
    val: '20+ лет', desc: 'опыт работы с детьми',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 27S6 21 6 13a6 6 0 0 1 10-4.5A6 6 0 0 1 26 13c0 8-10 14-10 14z" stroke="#6d28d9" strokeWidth="2" strokeLinejoin="round"/></svg>,
    val: '4,9 из 5', desc: 'рейтинг школы по отзывам родителей',
  },
]

export function AuthorCard() {
  return (
    <div className="dg-author">
      <div className="dg-author__top">
        <div className="dg-author__left">
          <div className="dg-author__label">{nb('Основатель и руководитель Школы Знарния')}</div>
          <div className="dg-author__name">Сотникова Ольга Александровна</div>
          <div className="dg-author__items">
            {AUTHOR_ITEMS.map((item, i) => (
              <div key={i} className="dg-author__item">
                <span className="dg-author__icon">{item.icon}</span>
                <span>{nb(item.text)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dg-author__photo-slot">
          <img
            src="/znarnia/images/author-sotnikova.png"
            alt="Сотникова Ольга Александровна"
            className="dg-author__photo"
            width="290"
            height="360"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dg-author__stats">
        {AUTHOR_STATS.map((item, i) => (
          <div key={i} className="dg-author__stat">
            <div className="dg-author__stat-icon">{item.icon}</div>
            <div>
              <div className="dg-author__stat-val">{item.val}</div>
              <div className="dg-author__stat-desc">{nb(item.desc)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── РОДИТЕЛИ О НАС ── */

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

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const visible = useVisible(5, 3, 2)
  const total = REVIEWS.length
  const maxIndex = Math.max(0, total - visible)
  const safeIndex = Math.min(index, maxIndex)
  const canPrev = safeIndex > 0
  const canNext = safeIndex < maxIndex

  return (
    <>
      <div className="dg-reviews">
        <div className="dg-reviews__head">
          <div className="dg-reviews__title">{nb('Родители о нас')}</div>
          <div className="dg-reviews__nav">
            <button className={`dg-reviews__arrow${!canPrev ? ' dg-reviews__arrow--disabled' : ''}`} onClick={() => canPrev && setIndex(safeIndex - 1)} aria-label="Назад">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className={`dg-reviews__arrow${!canNext ? ' dg-reviews__arrow--disabled' : ''}`} onClick={() => canNext && setIndex(safeIndex + 1)} aria-label="Вперёд">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="dg-reviews__track-wrap">
          <div
            className="dg-reviews__track"
            style={{ transform: `translateX(calc(-${safeIndex} * (100% / ${visible} + 10px / ${visible})))` }}
          >
            {REVIEWS.map((r, i) => (
              <div key={i} className="dg-reviews__thumb" onClick={() => setLightbox(i)}>
                <img src={r.src} alt={`Отзыв ${i + 1}`} className="dg-reviews__thumb-img" loading="lazy" />
                <div className="dg-reviews__thumb-overlay">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dg-reviews__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} className={`dg-reviews__dot${safeIndex === i ? ' dg-reviews__dot--active' : ''}`} onClick={() => setIndex(i)} aria-label={`Отзывы ${i + 1}`} />
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <Lightbox items={REVIEWS} index={lightbox} setIndex={setLightbox} onClose={() => setLightbox(null)} altPrefix="Отзыв" />
      )}
    </>
  )
}

/* ── НАГРАДЫ И БЛАГОДАРНОСТИ ── */

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
  const visible = useVisible(4, 3, 2)
  const total = LETTERS.length
  const maxIndex = Math.max(0, total - visible)
  const safeIndex = Math.min(index, maxIndex)
  const canPrev = safeIndex > 0
  const canNext = safeIndex < maxIndex

  return (
    <>
      <div className="dg-letters">
        <div className="dg-letters__track-wrap">
          <div
            className="dg-letters__track"
            style={{ transform: `translateX(calc(-${safeIndex} * (100% / ${visible} + 10px / ${visible})))` }}
          >
            {LETTERS.map((l, i) => (
              <div key={i} className="dg-letters__thumb" onClick={() => setLightbox(i)}>
                <img src={l.src} alt={`Благодарность ${i + 1}`} className="dg-letters__thumb-img" loading="lazy" />
                <div className="dg-letters__thumb-overlay">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5"/><path d="M7 11h8M11 7v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {(canPrev || canNext) && (
          <div className="dg-letters__nav">
            <button className={`dg-letters__arrow${!canPrev ? ' dg-letters__arrow--disabled' : ''}`} onClick={() => canPrev && setIndex(safeIndex - 1)} aria-label="Назад">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className={`dg-letters__arrow${!canNext ? ' dg-letters__arrow--disabled' : ''}`} onClick={() => canNext && setIndex(safeIndex + 1)} aria-label="Вперёд">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}
      </div>
      {lightbox !== null && (
        <Lightbox items={LETTERS} index={lightbox} setIndex={setLightbox} onClose={() => setLightbox(null)} altPrefix="Благодарность" />
      )}
    </>
  )
}

export function SchoolsCard() {
  return (
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
        <p className="dg-schools__text">
          {nb('Мы проводили независимую оценку знаний для учеников из более 50 образовательных учреждений Москвы и получали благодарственные письма от школ и педагогов.')}
        </p>
        <LettersCarousel />
      </div>
    </div>
  )
}
