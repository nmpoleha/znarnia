const IconPeople = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="11" cy="9" r="4" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M3 25c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <circle cx="22" cy="9" r="3" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M19.5 17.3c2.8.7 4.5 3.4 4.5 6.7" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
)

const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M6 5h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M22 9h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M9 11h8M9 15h8M9 19h5" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const IconMonitor = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="26" height="18" rx="2.5" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M13 22v4M19 22v4M10 26h12" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M12 12l4 3-4 3V12z" fill="#6d28d9"/>
    <circle cx="22" cy="23.5" r="1.5" fill="#6d28d9"/>
  </svg>
)

const IconBulb = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4a7 7 0 0 1 4 12.7V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3.3A7 7 0 0 1 16 4z" stroke="#6d28d9" strokeWidth="1.9" strokeLinejoin="round"/>
    <path d="M13 24h6M14 27h4" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M16 9v4M13.5 11.5l2.5 2.5" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const FEATURES = [
  { icon: <IconPeople />, text: 'Маленькие\nгруппы 4–8 детей' },
  { icon: <IconBook />,   text: 'Авторская методика\nОльги Сотниковой' },
  { icon: <IconMonitor />, text: 'Живые занятия\n+ записи уроков' },
  { icon: <IconBulb />,  text: 'Ребёнок начинает\nпонимать математику' },
]

import { useState } from 'react'

export default function GlavnayaPage() {
  const [contactsOpen, setContactsOpen] = useState(false)

  return (
    <div className="gv-page">

      {/* ── TOPBAR ── */}
      <header className="gv-topbar">
        <div className="gv-topbar__inner">
          <div className="gv-topbar__brand">
            <img
              src="https://znarnia.ru/logo.png"
              alt="Школа Сотниковой Ольги"
              className="gv-topbar__logo"
            />
            <span className="gv-topbar__brand-name">Школа Сотниковой Ольги</span>
          </div>
          <nav className="gv-topbar__nav">
            {['О нас','Отзывы','Сообщество','Курсы','Как проходят занятия'].map(link => (
              <a key={link} href="#" className="gv-topbar__link">{link}</a>
            ))}
            <button
              className={`gv-topbar__link gv-topbar__link--contacts${contactsOpen ? ' gv-topbar__link--active' : ''}`}
              onClick={() => setContactsOpen(v => !v)}
            >
              Контакты
            </button>
          </nav>
        </div>
        {contactsOpen && (
          <div className="gv-topbar__contacts-dropdown">
            <a href="mailto:info@znarnia.ru" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://wa.me/79955775318" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="gv-hero">
        <div className="gv-hero__inner">

          {/* LEFT: text content */}
          <div className="gv-hero__content">
            <h1 className="gv-hero__title">
              Онлайн-школа математики,<br/>
              где дети{' '}
              <span className="gv-hero__accent">учатся думать,</span>
              <br/>
              а не зубрить
            </h1>

            <p className="gv-hero__sub">
              Авторские курсы для школьников 1–10 классов:<br/>
              логика, школьная математика, развитие мышления и уверенность в решении задач.
            </p>

            <div className="gv-hero__features-panel">
              <div className="gv-hero__features">
                {FEATURES.map((f, i) => (
                  <div key={i} className="gv-hero__feature">
                    <div className="gv-hero__feature-icon">{f.icon}</div>
                    <p className="gv-hero__feature-text">
                      {f.text.split('\n').map((line, j) => (
                        <span key={j}>{line}{j === 0 && <br/>}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gv-hero__actions">
              <a href="#" className="gv-btn gv-btn--primary">Подобрать курс</a>
            </div>

          </div>

          {/* RIGHT: hero image */}
          <div className="gv-hero__media">
            <img
              src="/znarnia/images/hero-main.png"
              alt="Ученик занимается математикой"
              className="gv-hero__img"
              width="700"
              height="450"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
