import { useState } from 'react'

function nb(str) {
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w} `)
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

const SCHEDULE = [
  { grade: '1 класс',  day1: 'Понедельник', day2: 'Среда',     time: '15:00' },
  { grade: '2 класс',  day1: 'Вторник',     day2: 'Четверг',   time: '15:30' },
  { grade: '3 класс',  day1: 'Понедельник', day2: 'Пятница',   time: '16:00' },
  { grade: '4 класс',  day1: 'Среда',       day2: 'Пятница',   time: '16:30' },
  { grade: '5 класс',  day1: 'Вторник',     day2: 'Четверг',   time: '17:00' },
  { grade: '6 класс',  day1: 'Понедельник', day2: 'Среда',     time: '17:30' },
  { grade: '7 класс',  day1: 'Вторник',     day2: 'Пятница',   time: '18:00' },
  { grade: '8 класс',  day1: 'Среда',       day2: 'Пятница',   time: '18:30' },
  { grade: '9 класс',  day1: 'Понедельник', day2: 'Четверг',   time: '19:00' },
  { grade: '10 класс', day1: 'Вторник',     day2: 'Пятница',   time: '19:30' },
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

const SUBJECTS = ['Физика', 'Информатика', 'Русский язык', 'Обществознание', 'Иностранный язык']

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '' })
  const [subjects, setSubjects] = useState([])
  const [submitted, setSubmitted] = useState(false)
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }
  function toggleSubject(s) { setSubjects(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="os-overlay" onClick={onClose}>
      <div className="os-modal" onClick={e => e.stopPropagation()}>
        <button className="os-modal__x" onClick={onClose}>×</button>
        {submitted ? (
          <div className="os-modal__success">
            <div className="os-modal__success-icon">✓</div>
            <div className="os-modal__success-title">Заявка принята!</div>
            <div className="os-modal__success-text">Мы свяжемся с вами в ближайшее время для подтверждения места</div>
            <button className="os-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="os-modal__title">Математика</div>
            <div className="os-modal__subtitle">Запись на осень 2026</div>
            <div className="os-modal__price-line">
              <span className="os-price-old">6 000&thinsp;₽</span>
              <span className="os-price-new">4 500&thinsp;₽</span>
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
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i+1} value={i+1}>{i+1} класс</option>
                  ))}
                </select>
              </div>
              <div className="os-modal__group">
                <label>Предметы</label>
                <p className="os-modal__subjects-note">Вы также можете записаться на курсы по другим предметам — выберите интересующие вас:</p>
                <div className="os-modal__subjects">
                  {SUBJECTS.map(s => (
                    <label key={s} className={`os-modal__subject${subjects.includes(s) ? ' os-modal__subject--on' : ''}`}>
                      <input type="checkbox" checked={subjects.includes(s)} onChange={() => toggleSubject(s)} />
                      {subjects.includes(s) && <span className="os-modal__subject-check">✓</span>}
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <button className="os-modal__submit" type="submit">Подать заявку</button>
              <p className="os-hv2__cta-note">После заполнения заявки с вами свяжется наш менеджер</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)
  const openModal = e => { e.preventDefault(); setModalOpen(true) }
  const openSchedule = e => { e.preventDefault(); setScheduleOpen(true) }

  return (
    <div className="os-page">
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      {scheduleOpen && <ScheduleModal onClose={() => setScheduleOpen(false)} />}

      {/* ── HEADER ── */}
      <header className="os-header">
        <div className="os-header__inner">
          <div className="os-header__brand">
            <img
              src="/znarnia/images/logo.png"
              alt="Школа Сотниковой Ольги"
              className="os-header__logo"
              width="80"
              height="80"
            />
            <span className="os-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      {/* ── HERO V2 ── */}
      <section className="os-hv2 os-hv2--noborder">
        <div className="os-hv2__inner">

          {/* INTRO: badge, title, subtitle — grid row 1, left column */}
          <div className="os-hv2__intro">
            <div className="os-hv2__badge">🍁 Осенний набор 2026</div>
            <h1 className="os-hv2__title">
              Анкета предзаписи
              <span className="os-hv2__title-accent">Осенний набор</span>
            </h1>
            <p className="os-hv2__sub">Для учеников 1–11 классов</p>
          </div>

          {/* LEFT: steps, buttons — grid row 2, left column */}
          <div className="os-hv2__left">

          <div className="os-hv2__steps">
            <div className="os-hv2__step">
              <div className="os-hv2__step-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="os-hv2__step-text">Вы оставляете заявку.<br/><span className="os-hv2__step-note">Это не оплата</span></div>
            </div>
            <div className="os-hv2__step">
              <div className="os-hv2__step-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L4 7v5c0 5 3.6 9.3 8 10 4.4-.7 8-5 8-10V7l-8-4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="os-hv2__step-text">Бронируете место на осень по специальной цене</div>
            </div>
            <div className="os-hv2__step">
              <div className="os-hv2__step-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M12 7v5l3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="os-hv2__step-text">Решение о начале занятий принимаете позже</div>
            </div>
          </div>

          <div className="os-hv2__info-pair">
            <div className="os-hv2__price">
              <div className="os-hv2__price-label">Специальная цена при ранней записи</div>
              <div className="os-hv2__price-row">
                <span className="os-hv2__price-old">6 000&thinsp;₽</span>
                <span className="os-hv2__price-main">4 500&thinsp;₽</span>
                <span className="os-hv2__price-per"><strong>450&thinsp;₽</strong> стоимость<br/>1 урока</span>
              </div>
              <div className="os-hv2__price-tag">за 10 уроков</div>
            </div>

            <div className="os-hv2__nopay">
              <span className="os-hv2__nopay-icon">⭐</span>
              <div className="os-hv2__nopay-text">
                <strong>Сейчас ничего оплачивать не нужно!</strong>
                Вы просто оставляете заявку и получаете подарки.
              </div>
            </div>
          </div>

          <button className="os-hv2__cta-primary" onClick={openModal}>
            Оставить анкету
          </button>
          <p className="os-hv2__cta-note">После заполнения заявки с вами свяжется наш менеджер</p>

          </div>{/* end os-hv2__left */}

          {/* RIGHT: gifts only */}
          <div className="os-hv2__right">

          <div className="os-hv2__giftbox">
            <div className="os-hv2__giftbox-title">
              <span className="os-hv2__giftbox-title-emoji">🎁</span>
              <span className="os-hv2__giftbox-title-text">Три подарка за заполнение анкеты</span>
            </div>
            <div className="os-hv2__giftbox-body">
              <div className="os-hv2__giftbox-item">
                <div className="os-hv2__giftbox-num">1</div>
                <div>
                  <div className="os-hv2__giftbox-name">Экспресс-диагностика</div>
                  <div className="os-hv2__giftbox-desc">5 заданий, которые помогут оценить готовность к новому учебному году.</div>
                </div>
              </div>
              <div className="os-hv2__giftbox-divider" />
              <div className="os-hv2__giftbox-item">
                <div className="os-hv2__giftbox-num">2</div>
                <div>
                  <div className="os-hv2__giftbox-name">Урок-тренажёр</div>
                  <div className="os-hv2__giftbox-desc">Интерактивное занятие по теме вашего класса.</div>
                </div>
              </div>
              <div className="os-hv2__giftbox-divider" />
              <div className="os-hv2__giftbox-item">
                <div className="os-hv2__giftbox-num">3</div>
                <div>
                  <div className="os-hv2__giftbox-name">Доступ к онлайн-уроку в записи</div>
                  <div className="os-hv2__giftbox-desc">Для знакомства с платформой и форматом занятий.</div>
                </div>
              </div>
            </div>
          </div>

          </div>{/* end os-hv2__right */}

        </div>
      </section>

      {/* ── SCHOOL LEVELS ── */}
      <section className="os-levels os-levels--novye2">
        <div className="os-wrap">
          <div className="os-levels__common os-levels__common--accent">
            {[
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.5 5.1 5.6.8-4.05 3.95.96 5.55L12 14.77l-4.97 2.63.96-5.55L3.9 7.9l5.6-.8z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
                </svg>), text: 'Учёба становится спокойнее для всей семьи' },
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="8" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/>
                  <circle cx="16" cy="8" r="3" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M1 20c0-3.3 3.1-6 7-6h8c3.9 0 7 2.7 7 6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>), text: 'Получаете гарантированное место в группе до начала набора' },
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#6d28d9" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="6" stroke="#6d28d9" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="2.5" fill="#6d28d9"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>), text: 'Улучшаем школьные оценки и понимание предмета' },
            ].map((item, i) => (
              <div key={i} className="os-levels__common-item">
                <div className="os-levels__common-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="os-levels__grid">

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">🎒</span>
                <span className="os-levels__col-label">Начальная школа</span>
                <span className="os-levels__col-grade">1–4 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Даём прочную математическую базу</li>
                <li>Учим думать, а не действовать по шаблону</li>
                <li>Развиваем логическое мышление и самостоятельность</li>
              </ul>
            </div>

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">📖</span>
                <span className="os-levels__col-label">Средняя школа</span>
                <span className="os-levels__col-grade">5–8 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Укрепляем математическую базу и закрываем пробелы</li>
                <li>Разбираем сложные темы текущего класса</li>
                <li>Учим рассуждать и находить решения самостоятельно</li>
              </ul>
            </div>

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">📝</span>
                <span className="os-levels__col-label">Подготовка к ОГЭ</span>
                <span className="os-levels__col-grade">9 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Закрываем пробелы и систематизируем знания</li>
                <li>Разбираем задания, которые будут на ОГЭ</li>
                <li>Помогаем выйти на уверенный результат независимо от стартового уровня</li>
              </ul>
            </div>

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">🎯</span>
                <span className="os-levels__col-label">Подготовка к ЕГЭ</span>
                <span className="os-levels__col-grade">10–11 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Закрываем пробелы по всем темам ЕГЭ</li>
                <li>Разбираем задания, которые будут на ЕГЭ</li>
                <li>Помогаем выйти на высокий результат и уверенно сдать экзамен</li>
              </ul>
            </div>

          </div>

          <div className="os-levels__cta">
            <button className="os-btn os-btn--primary os-levels__cta-btn" onClick={openModal}>
              Записаться на осень
            </button>
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <div className="os-trust-banner">
        <div className="os-wrap">
          <div className="os-trust-banner__inner">
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v5c0 5 3.6 9.3 8 10 4.4-.7 8-5 8-10V7l-8-4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                text: 'Качественное образование и забота о каждом ребёнке'
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21S4 16 4 10a8 8 0 0 1 16 0c0 6-8 11-8 11z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="#6d28d9" strokeWidth="1.8"/></svg>,
                text: 'Тысячи учеников доверяют Знарнии'
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 14.5l-4.95 2.7.95-5.5L4 7.8l5.5-.8z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
                text: 'Опытные преподаватели и проверенная методика'
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="11" rx="1.5" stroke="#6d28d9" strokeWidth="1.8"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="15" r="1.5" fill="#6d28d9"/></svg>,
                text: 'Безопасная образовательная среда'
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 20V14M8 20V10M12 20V6M16 20V12M20 20V8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/></svg>,
                text: 'Видимый результат уже за 1–2 месяца'
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21S4 16.5 4 10a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6.5-8 11-8 11z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
                text: 'Поддержка и обратная связь для родителей'
              },
            ].map((b, i) => (
              <div key={i} className="os-trust-banner__item">
                <span className="os-trust-banner__icon">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AUTHOR ── */}
      <section className="lk-author-section">
        <div className="os-wrap">
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

      {/* ── REVIEWS + AWARDS ── */}
      <section className="lk-social-section">
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

      {/* ── THANK YOU ── */}
      <section className="os-thanks">
        <div className="os-wrap">
          <div className="os-thanks__inner">
            <div className="os-thanks__left">
              <div className="os-thanks__title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle',marginRight:8}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#c2440e" strokeWidth="1.8" fill="#ede9fe"/>
                </svg>
                Добро пожаловать в Знарнию!&nbsp;
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle'}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#c2440e" strokeWidth="1.8" fill="none"/>
                </svg>
              </div>
              <p className="os-thanks__desc">
                Мы будем рады помочь вашему ребёнку обрести уверенность в математике в новом учебном году.
              </p>
              <div className="os-thanks__price-label">Стоимость при ранней записи:</div>
              <div className="os-thanks__price">4 500&thinsp;₽</div>
            </div>
            <div className="os-thanks__right">
              <button className="os-btn os-btn--primary os-btn--lg" onClick={openModal}>
                Записаться
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="os-footer">
        <div className="os-wrap">
          <div className="os-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
