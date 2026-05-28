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

const NAV_LINKS = [
  'Курсы',
  'Как проходят занятия',
  'О нас',
  'Отзывы',
  'Блог',
  'Контакты',
]

export default function GlavnayaPage() {
  return (
    <div className="gv-page">

      {/* ── TOPBAR ── */}
      <header className="gv-topbar">
        <div className="gv-topbar__inner">
          <a href="/znarnia/" className="gv-topbar__brand">
            <img
              src="https://znarnia.ru/logo.png"
              alt="Знарния"
              className="gv-topbar__logo"
              width="52"
              height="52"
            />
            <div className="gv-topbar__brand-text">
              <span className="gv-topbar__brand-name">ЗНАРНИЯ</span>
              <span className="gv-topbar__brand-sub">онлайн-школа математики</span>
            </div>
          </a>

          <nav className="gv-topbar__nav" aria-label="Основная навигация">
            {NAV_LINKS.map(link => (
              <a key={link} href="#" className="gv-topbar__link">{link}</a>
            ))}
          </nav>

          <div className="gv-topbar__phone">
            <a href="tel:88006003623" className="gv-topbar__phone-num">8 (800) 600-36-23</a>
            <span className="gv-topbar__phone-hours">ежедневно 9:00–21:00</span>
          </div>

          <button className="gv-topbar__burger" aria-label="Меню">
            <span/><span/><span/>
          </button>
        </div>
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
