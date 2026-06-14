import { useState } from 'react'

function nb(str) {
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w} `)
}

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

            <div className="p2-hero__icons">
              <div className="p2-hero__icon-item">
                <div className="p2-hero__icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Мини-группы<br/>до 8 человек</span>
              </div>
              <div className="p2-hero__icon-item">
                <div className="p2-hero__icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M8 2v4M16 2v4M3 9h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>2 занятия<br/>в неделю</span>
              </div>
              <div className="p2-hero__icon-item">
                <div className="p2-hero__icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                    <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
                  </svg>
                </div>
                <span>Запись каждого<br/>урока</span>
              </div>
            </div>

            <ul className="p2-hero__features">
              {[
                'Урок-тренажёр',
                'Домашние задания',
                'Записи уроков',
                'Личный кабинет',
              ].map((f, i) => (
                <li key={i}><span className="p2-hero__check">✓</span>{f}</li>
              ))}
            </ul>

            <div className="p2-hero__btns">
              <button className="p2-btn p2-btn--cta" onClick={openPay}>Оплатить место →</button>
              <button className="p2-btn p2-btn--secondary" onClick={openSchedule}>Посмотреть расписание</button>
            </div>
          </div>

          <div className="p2-hero__right">
            <div className="p2-hero__photo-wrap">
              <div className="p2-hero__photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#9ca3af" strokeWidth="1.5"/>
                  <circle cx="17" cy="8" r="1" fill="#9ca3af"/>
                </svg>
                <span>Фото</span>
              </div>
              <span className="p2-leaf p2-leaf--1" aria-hidden="true">🍁</span>
              <span className="p2-leaf p2-leaf--2" aria-hidden="true">🍂</span>
              <span className="p2-leaf p2-leaf--3" aria-hidden="true">🍁</span>

              <div className="p2-hero__price-block">
                <div className="p2-hero__price-label">Специальная цена до начала занятий</div>
                <div className="p2-hero__price-row">
                  <span className="p2-hero__price-old">6&thinsp;000&thinsp;₽</span>
                  <span className="p2-hero__price-main">4&thinsp;500&thinsp;₽</span>
                  <span className="p2-hero__price-unit">за 10 занятий</span>
                </div>
                <div className="p2-hero__price-pill">450&thinsp;₽ за урок</div>
              </div>
            </div>
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
          <div className="p2-section-badge">Формат занятий</div>
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
                <h3 className="p2-how__card-title">Интерактивные онлайн-занятия в мини-группах с преподавателем</h3>
                <p className="p2-how__card-text">{nb('На уроке ребёнок не остаётся пассивным слушателем. Он отвечает на вопросы, предлагает свои решения, работает на платформе и участвует в обсуждении вместе с преподавателем и другими учениками.')}</p>
                <p className="p2-how__card-text">{nb('Каждое занятие проходит в формате увлекательного сюжета или квеста, поэтому дети не просто учатся, а становятся участниками настоящего приключения. Именно поэтому многие ученики сами напоминают родителям о занятиях и с удовольствием приходят на уроки.')}</p>
              </div>
              <div className="p2-how__card-photo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#9ca3af" strokeWidth="1.5"/>
                  <circle cx="17" cy="8" r="1" fill="#9ca3af"/>
                </svg>
                <span>Фото</span>
              </div>
            </div>

            <div className="p2-how__card">
              <div className="p2-how__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
                </svg>
              </div>
              <h3 className="p2-how__card-title">Урок-тренажёр для развития мышления</h3>
              <p className="p2-how__card-text">{nb('Дополнительный интерактивный урок для самостоятельной работы. Ребёнок проходит его в удобном темпе, учится рассуждать, искать решения и развивать математическое мышление.')}</p>
            </div>

            <div className="p2-how__card">
              <div className="p2-how__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M9 2v2h6V2M9 10h6M9 14h4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="p2-how__card-title">Домашние задания</h3>
              <p className="p2-how__card-text">{nb('Помогают закрепить изученный материал и сформировать навык самостоятельной работы.')}</p>
            </div>

            <div className="p2-how__card">
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

          </div>
        </div>
      </section>

      {/* SCREEN 3 — RECORDINGS */}
      <section className="p2-records">
        <div className="os-wrap">
          <div className="p2-records__inner">
            <div className="p2-records__left">
              <div className="p2-section-badge">Записи уроков</div>
              <h2 className="p2-section-title">Ни один урок не потеряется</h2>
              <p className="p2-records__desc">{nb('Каждый урок сохраняется в личном кабинете. Даже при просмотре записи ребёнок остаётся активным участником занятия:')}</p>
              <ul className="p2-records__list">
                {['выполняет задания', 'вводит ответы', 'получает звёзды за правильные решения', 'проходит урок в интерактивном формате'].map((item, i) => (
                  <li key={i}><span className="p2-records__check">✓</span>{item}</li>
                ))}
              </ul>
              <p className="p2-records__note">{nb('При этом запись сохраняет весь функционал урока, поэтому ребёнок получает практически тот же учебный опыт, что и на занятии в режиме реального времени.')}</p>
            </div>
            <div className="p2-records__right">
              <div className="p2-records__visual">
                <div className="p2-records__play">▶</div>
                <div className="p2-records__stars">
                  {[1,2,3].map(i => <span key={i} className="p2-records__star">⭐</span>)}
                </div>
                <div className="p2-records__label">Запись урока доступна</div>
                <div className="p2-records__sublabel">Интерактивный режим сохранён</div>
              </div>
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

      {/* SCREEN 5 — PROGRESS */}
      <section className="p2-progress">
        <div className="os-wrap">
          <div className="p2-progress__inner">
            <div className="p2-progress__left">
              <div className="p2-section-badge">Контроль прогресса</div>
              <h2 className="p2-section-title">Родители всегда видят прогресс ребёнка</h2>
              <p className="p2-progress__desc">{nb('В личном кабинете доступна подробная статистика обучения, которая помогает отслеживать вовлечённость ребёнка и его результаты.')}</p>
              <p className="p2-progress__subdesc">Родители в любой момент могут посмотреть:</p>
              <ul className="p2-progress__list">
                {[
                  'сколько заданий выполнил ребёнок',
                  'сколько заданий решил правильно',
                  'сколько попыток понадобилось для решения',
                  'какие темы вызывают затруднения',
                  'как меняются результаты от занятия к занятию',
                ].map((item, i) => (
                  <li key={i}><span className="p2-progress__star">⭐</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p2-progress__right">
              <div className="p2-progress__card">
                <div className="p2-progress__card-title">Статистика за неделю</div>
                <div className="p2-progress__stats">
                  <div className="p2-progress__stat">
                    <div className="p2-progress__stat-val">24</div>
                    <div className="p2-progress__stat-label">задания выполнено</div>
                  </div>
                  <div className="p2-progress__stat">
                    <div className="p2-progress__stat-val">92%</div>
                    <div className="p2-progress__stat-label">верных ответов</div>
                  </div>
                  <div className="p2-progress__stat">
                    <div className="p2-progress__stat-val">⭐ 18</div>
                    <div className="p2-progress__stat-label">звёзд заработано</div>
                  </div>
                </div>
                <div className="p2-progress__bar-wrap">
                  <div className="p2-progress__bar-label">Прогресс курса</div>
                  <div className="p2-progress__bar"><div className="p2-progress__bar-fill" style={{width:'62%'}} /></div>
                  <div className="p2-progress__bar-pct">62%</div>
                </div>
              </div>
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
