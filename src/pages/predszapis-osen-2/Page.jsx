import { useState } from 'react'
import heroPhotoImg from './hero-photo.png'
import onlineLessonImg from './online-lesson.png'

function nb(str) {
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w} `)
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
  { grade: '1 класс',  day1: 'Понедельник', day2: 'Среда',     time: '15:00' },
  { grade: '2 класс',  day1: 'Вторник',     day2: 'Четверг',   time: '15:30' },
  { grade: '3 класс',  day1: 'Понедельник', day2: 'Пятница',   time: '16:00' },
  { grade: '4 класс',  day1: 'Среда',       day2: 'Пятница',   time: '16:30' },
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
                  {[1,2,3,4].map(g => <option key={g} value={g}>{g} класс</option>)}
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
          <div className="p2-header-badge">🍁 Для учеников 1–4 классов</div>
        </div>
      </header>

      {/* SCREEN 1 — HERO */}
      <section className="p2-hero">
        <div className="p2-hero__inner os-wrap">
          <div className="p2-hero__left">
            <h1 className="p2-hero__title">
              Математика для учеников<br/>
              <span className="p2-hero__title-grade">1–4 классов</span>
            </h1>

            <div className="p2-hero__badge">🍁 Осенний набор открыт!</div>

            <p className="p2-hero__desc">{nb('Даём прочные знания по математике и развиваем мышление, логику и самостоятельность. Ребёнку становится легче учиться, выполнять домашние задания и справляться со сложными задачами не только в школе, но и в жизни.')}</p>

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
                  alt="Дети занимаются математикой онлайн"
                  width="1280"
                  height="854"
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Мини-группы</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>3 занятия в неделю</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M8 14h2M8 18h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Удобный личный кабинет</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Домашние задания</span>
          </div>
          <div className="p2-hero__icon-item">
            <div className="p2-hero__icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
              </svg>
            </div>
            <span>Записи уроков</span>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="p2-stats">
        <div className="os-wrap">
          <div className="p2-stats__grid">
            <div className="p2-stats__item">
              <div className="p2-stats__icon">🛡️</div>
              <div className="p2-stats__text">
                <div className="p2-stats__val">20+ лет</div>
                <div className="p2-stats__label">опыта работы с детьми</div>
              </div>
            </div>
            <div className="p2-stats__item">
              <div className="p2-stats__icon">👥</div>
              <div className="p2-stats__text">
                <div className="p2-stats__val">10 000+</div>
                <div className="p2-stats__label">проведённых диагностик</div>
              </div>
            </div>
            <div className="p2-stats__item">
              <div className="p2-stats__icon">🎓</div>
              <div className="p2-stats__text">
                <div className="p2-stats__val">Тысячи учеников</div>
                <div className="p2-stats__label">стали увереннее в своих знаниях</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 2 — HOW LESSONS WORK */}
      <section className="p2-how">
        <div className="os-wrap">
          <div className="p2-section-badge p2-section-badge--icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="p2-section-badge__sep"/>
            <span>Формат занятий</span>
          </div>
          <h2 className="p2-section-title">Интерактивный формат, который нравится детям</h2>

          <div className="p2-how__grid">

            <div className="p2-how__card p2-how__card--wide">
              <div className="p2-how__card-content">
                <div className="p2-how__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M8 21h8M12 17v4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="12" cy="10" r="2.5" stroke="#6d28d9" strokeWidth="1.8"/>
                  </svg>
                </div>
                <h3 className="p2-how__card-title">
                  Интерактивные онлайн-занятия в мини-группах<br/>
                  <span className="p2-how__card-title-accent">с преподавателем</span>
                </h3>
                <p className="p2-how__card-text">{nb('На уроке ребёнок не остаётся пассивным слушателем. Он отвечает на вопросы, предлагает свои решения, работает на платформе и участвует в обсуждении вместе с преподавателем и другими учениками.')}</p>
                <span className="p2-how__star-bullet" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--p2-purple)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
                <p className="p2-how__card-text">{nb('Каждое занятие проходит в формате увлекательного сюжета или квеста, поэтому дети не просто учатся, а становятся участниками настоящего приключения. Именно поэтому многие ученики сами напоминают родителям о занятиях и с удовольствием приходят на уроки.')}</p>
              </div>
              <img
                src={onlineLessonImg}
                alt="Онлайн-занятие в мини-группе"
                className="p2-how__card-photo"
                width="760"
                height="760"
              />
            </div>

            <div className="p2-how__card">
              <div className="p2-how__card-body">
                <div className="p2-how__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
                  </svg>
                </div>
                <h3 className="p2-how__card-title">Урок-тренажёр<br/>для развития мышления</h3>
                <p className="p2-how__card-text">{nb('Дополнительный интерактивный урок для самостоятельной работы. Ребёнок проходит его в удобном темпе, учится рассуждать, искать решения и развивать математическое мышление.')}</p>
              </div>
              <div className="p2-how__card-deco" aria-hidden="true">🧠</div>
            </div>

            <div className="p2-how__card">
              <div className="p2-how__card-body">
                <div className="p2-how__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="p2-how__card-title">Домашние задания</h3>
                <p className="p2-how__card-text">{nb('Помогают закрепить изученный материал и сформировать навык самостоятельной работы.')}</p>
              </div>
              <div className="p2-how__card-deco" aria-hidden="true">📓</div>
            </div>

            <div className="p2-how__card">
              <div className="p2-how__card-body">
                <div className="p2-how__card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M8 14h2M8 18h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="p2-how__card-title">Личный кабинет</h3>
                <p className="p2-how__card-text">{nb('В одном месте собраны записи уроков, домашние задания, уроки-тренажёры и все материалы курса.')}</p>
              </div>
              <div className="p2-how__card-deco" aria-hidden="true">📁</div>
            </div>

          </div>
        </div>
      </section>

      {/* SCREEN 4 — WHAT CHILD LEARNS */}
      <section className="p2-learns">
        <div className="os-wrap">
          <div className="p2-section-badge">Чему учится ребёнок</div>
          <h2 className="p2-section-title">Мы учим не только математике</h2>
          <div className="p2-learns__grid">

            <div className="p2-learns__card">
              <div className="p2-learns__card-num">01</div>
              <div className="p2-learns__card-icon">🧱</div>
              <h3 className="p2-learns__card-title">Даём прочную математическую базу</h3>
              <p className="p2-learns__card-text">{nb('Ребёнок начинает понимать предмет, а не просто запоминать правила и алгоритмы.')}</p>
            </div>

            <div className="p2-learns__card">
              <div className="p2-learns__card-num">02</div>
              <div className="p2-learns__card-icon">🧩</div>
              <h3 className="p2-learns__card-title">Учим думать, а не действовать по шаблону</h3>
              <p className="p2-learns__card-text">{nb('На занятиях дети знакомятся не только со школьными, но и с нестандартными задачами, учатся искать разные способы решения и рассуждать самостоятельно.')}</p>
            </div>

            <div className="p2-learns__card">
              <div className="p2-learns__card-num">03</div>
              <div className="p2-learns__card-icon">🚀</div>
              <h3 className="p2-learns__card-title">Развиваем логическое мышление и самостоятельность</h3>
              <p className="p2-learns__card-text">{nb('Постепенно ребёнок начинает увереннее справляться со школьной программой и легче выполнять домашние задания.')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* SCREEN 3b — MISSED LESSON + TRANSPARENCY */}
      <section className="p2-pu-section">
        <div className="os-wrap">
          <div className="lk-cards-row">
            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__title">{nb('Не получилось присутствовать онлайн? Не проблема')}</div>
              </div>
              <div className="lk-pu-card__body">
                <p className="lk-pu-card__text">Если ребёнок пропустил онлайн-урок:</p>
                <ul className="lk-pu-checklist">
                  {['он смотрит его в записи','сохраняется вся интерактивность','получает мгновенную обратную связь','статистика также доступна родителям'].map((t, i) => (
                    <li key={i}><LkCheck /><span>{nb(t)}</span></li>
                  ))}
                </ul>
                <div className="lk-pu-note lk-pu-note--row"><LkPlayIcon /><span>По эффективности это тот же полноценный урок.</span></div>
              </div>
            </div>

            <div className="lk-pu-card">
              <div className="lk-pu-card__head">
                <div className="lk-pu-card__title">Полная прозрачность для родителей</div>
              </div>
              <div className="lk-pu-card__body lk-pu-card__body--row" style={{alignItems:'flex-start'}}>
                <div className="lk-pu-card__body-left">
                  <p className="lk-pu-card__text">После каждого урока вы получаете подробную статистику:</p>
                  <ul className="lk-pu-checklist">
                    {['сколько заданий решено','где были ошибки','сколько попыток понадобилось'].map((t, i) => (
                      <li key={i}><LkCheck /><span>{nb(t)}</span></li>
                    ))}
                    <li><LkCheck /><span style={{whiteSpace:'nowrap'}}>какие темы вызвали сложности</span></li>
                  </ul>
                </div>
                <LkStatsChart />
              </div>
              <div className="lk-pu-note lk-pu-note--row" style={{marginTop:'16px'}}><LkPeopleIcon /><span>{nb('Вы не гадаете — вы точно понимаете уровень ребёнка.')}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="p2-cta">
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
