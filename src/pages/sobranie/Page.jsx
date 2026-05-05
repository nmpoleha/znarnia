import { useState } from 'react'
import SchoolHeader from '../../shared/components/SchoolHeader'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

const S = { stroke:'#6d28d9', strokeWidth:1.9, fill:'none', strokeLinecap:'round', strokeLinejoin:'round' }
const SF = { ...S, fill:'#6d28d9', stroke:'none' }

const IcSun = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...S}>
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
    <line x1="19.07" y1="4.93" x2="17.66" y2="6.34"/><line x1="6.34" y1="17.66" x2="4.93" y2="19.07"/>
  </svg>
)
const IcTarget = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...S}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    <line x1="22" y1="2" x2="16" y2="8"/><polyline points="16 2 22 2 22 8"/>
  </svg>
)
const IcBook = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...S}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)
const IcPuzzle = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#6d28d9">
    <path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4a2 2 0 0 0-2 2v3.8h1.5a2.5 2.5 0 0 1 0 5H2V20a2 2 0 0 0 2 2h3.8v-1.5a2.5 2.5 0 0 1 5 0V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z" opacity="0.9"/>
  </svg>
)
const IcMonitor = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...S}>
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)
const IcUserCheck = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" {...S}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <polyline points="17 11 19 13 23 9"/>
  </svg>
)
const IcCalendar = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" {...S}>
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    <text x="12" y="19" textAnchor="middle" fontSize="7" fontWeight="800" fill="#6d28d9" stroke="none" fontFamily="Montserrat,sans-serif">16</text>
  </svg>
)
const IcMic = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" {...S}>
    <rect x="9" y="2" width="6" height="11" rx="3"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
)
const IcGift = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" {...S}>
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect x="2" y="7" width="20" height="5"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
)

const topics = [
  { Icon: IcSun,       text: 'Как выстроить летние занятия, чтобы ребёнок не выгорал и не терял интерес' },
  { Icon: IcTarget,    text: 'На чём действительно важно сделать фокус летом' },
  { Icon: IcBook,      text: 'Как устроена система обучения: этапы, логика и результат' },
  { Icon: IcPuzzle,    text: 'Какие механики помогают удерживать внимание и вовлекать' },
  { Icon: IcMonitor,   text: 'Как современная платформа усиливает эффективность занятий' },
  { Icon: IcUserCheck, text: 'Как родителю делегировать процесс и при этом видеть реальный прогресс ребёнка' },
]

const IcChat = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="#6d28d9" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)
const IcAlert = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="#6d28d9" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)
const IcQuestion = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="#6d28d9" strokeWidth={1.8} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const webinarItems = [
  { Icon: IcChat,     text: 'Разберём частые ошибки родителей' },
  { Icon: IcAlert,    text: 'Поговорим, почему дети теряют уровень и как этого избежать' },
  { Icon: IcQuestion, text: 'Отвечу на ваши вопросы' },
]

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', prev: '' })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = '/znarnia/sobranie-thanks/'
  }

  return (
    <div className="rs-modal-overlay" onClick={onClose}>
      <div className="rs-modal" onClick={e => e.stopPropagation()}>
        <button className="rs-modal__close" onClick={onClose}>✕</button>
        <>
            <div className="rs-modal__title">Записаться на собрание</div>
            <div className="rs-modal__sub">16 мая в 12:30 (онлайн)</div>
            <form className="rs-form" onSubmit={handleSubmit}>
              <div className="rs-form__group">
                <label className="rs-form__label">Ваше имя</label>
                <input className="rs-form__input" type="text" placeholder="Елена" required value={form.name} onChange={set('name')} />
              </div>
              <div className="rs-form__group">
                <label className="rs-form__label">Телефон</label>
                <input className="rs-form__input" type="tel" placeholder="+7 (___) ___-__-__" required value={form.phone} onChange={set('phone')} />
              </div>
              <div className="rs-form__group">
                <label className="rs-form__label">Класс ребёнка</label>
                <select className="rs-form__select" required value={form.grade} onChange={set('grade')}>
                  <option value="">Выберите класс</option>
                  {[1,2,3,4,5,6,7,8,9,10,11].map(g => (
                    <option key={g} value={g}>{g} класс</option>
                  ))}
                </select>
              </div>
              <div className="rs-form__group">
                <label className="rs-form__label">Обучались ранее на наших курсах?</label>
                <div className="rs-form__radios">
                  <label className="rs-form__radio">
                    <input type="radio" name="prev" value="yes" required checked={form.prev === 'yes'} onChange={set('prev')} />
                    <span>Да</span>
                  </label>
                  <label className="rs-form__radio">
                    <input type="radio" name="prev" value="no" checked={form.prev === 'no'} onChange={set('prev')} />
                    <span>Нет</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="rs-form__submit">Записаться <span className="rs-btn-arrow">→</span></button>
            </form>
          </>
      </div>
    </div>
  )
}

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e) => { e.preventDefault(); setModalOpen(true) }

  return (
    <div className="rs-page">
      <div className="rs-page__bg-glow rs-page__bg-glow--1" />
      <div className="rs-page__bg-glow rs-page__bg-glow--2" />

      <div className="rs-wrap">
        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="rs-hero">
          <div className="rs-hero__left">
            <h1 className="rs-hero__title">
              🌿 Лето: пауза<br />
              или <span className="rs-hero__title-accent">точка роста?</span>
            </h1>
            <p className="rs-hero__desc">
              {nb('Каждое лето дети либо теряют до 30% знаний, либо делают рывок, который определяет весь следующий год.')}
            </p>
            <div className="rs-hero__callout">
              👉 {nb('Как сделать так, чтобы ваш ребёнок оказался во второй категории?')}
            </div>
            <div className="rs-hero__img-mobile">
              <img src="/znarnia/boy-desk.png" alt="" className="rs-hero__img-mobile-pic" />
            </div>
            <div className="rs-hero__event-card">
              <div className="rs-hero__event-icon"><IcCalendar /></div>
              <div className="rs-hero__event-info">
                <div className="rs-hero__event-label">Бесплатное родительское собрание</div>
                <div className="rs-hero__event-date">16 мая в 12:30 (онлайн)</div>
              </div>
            </div>
            <p className="rs-hero__note">{nb('Для родителей, которые хотят, чтобы лето прошло с пользой — без давления и «надо».')}</p>
            <a href="#" className="rs-hero__btn" onClick={openModal}>Записаться <span className="rs-btn-arrow">→</span></a>
          </div>
          <div className="rs-hero__right">
            <div className="rs-hero__img-wrap">
              <img className="rs-hero__img" src="/znarnia/boy-desk.png" alt="" />
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="rs-topics">
          <div className="rs-section-head">
            <span className="rs-section-head__line" />
            <div className="rs-section-title">💡 О чём поговорим</div>
            <span className="rs-section-head__line" />
          </div>
          <div className="rs-topics__grid">
            {topics.map(({ Icon, text }, i) => (
              <div key={i} className="rs-topic-card">
                <div className="rs-topic-card__icon"><Icon /></div>
                <div className="rs-topic-card__text">{nb(text)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WEBINAR */}
        <section className="rs-webinar">
          <div className="rs-webinar__left">
            <div className="rs-webinar__mic">
              <img src="/znarnia/images/mic-3d.png" alt="" className="rs-webinar__mic-img" />
            </div>
            <div className="rs-webinar__title rs-webinar__title--mob">На вебинаре</div>
          </div>
          <div className="rs-webinar__right">
            <div className="rs-webinar__title rs-webinar__title--desk">На вебинаре</div>
            <div className="rs-webinar__items">
              {webinarItems.map(({ Icon, text }, i) => (
                <div key={i} className="rs-webinar__item">
                  <div className="rs-webinar__item-icon"><Icon /></div>
                  <div className="rs-webinar__item-text">{nb(text)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BONUS */}
        <div className="rs-bonus">
          <div className="rs-bonus__img">
            <img src="/znarnia/images/gift-3d.png" alt="" className="rs-bonus__gift-img" />
          </div>
          <div className="rs-bonus__content">
            <div className="rs-bonus__title">🎁 Бонус</div>
            <div className="rs-bonus__text">{nb('Для участников — полезный сюрприз 🎁')}</div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="rs-cta">
          <div className="rs-cta__left">
            <div className="rs-cta__icon"><IcCalendar /></div>
            <div className="rs-cta__info">
              <div className="rs-cta__label">👉 Присоединиться</div>
              <div className="rs-cta__date">16 мая в 12:30 (онлайн)</div>
            </div>
          </div>
          <a href="#" className="rs-cta__btn" onClick={openModal}>Записаться <span className="rs-btn-arrow">→</span></a>
        </section>

        <footer className="rs-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>
      </div>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  )
}
