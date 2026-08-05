/* ─────────────────────────────────────────────────────────────
   Партнёрская программа для 9 класса — новое
   Только герой (взят с partnerskaya-programma-9-klass)
   + плашка «Интеллектуальный клуб ОГЭ».
   ───────────────────────────────────────────────────────────── */

/* ── Почему нам доверяют ── */
const TRUST = [
  {
    text: 'Более 23 лет<br />в образовании',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3l1.5 6M15 3l-1.5 6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="5" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M12 12.6l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 14.7l2-.3z" fill="#6d28d9" />
      </svg>
    ),
  },
  {
    text: 'Получатель гранта<br />Правительства<br />Москвы',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="5" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M12 6.7l.7 1.4 1.5.2-1.1 1.05.27 1.5L12 10.15l-1.34.7.26-1.5L9.8 8.3l1.5-.2z" fill="#6d28d9" />
        <path d="M9.5 13.5L8 21l4-2 4 2-1.5-7.5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: 'Собственная<br />образовательная<br />платформа',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M3 19h18" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10.5 8.3l4 2.2-4 2.2z" fill="#6d28d9" />
      </svg>
    ),
  },
  {
    text: 'Тысячи учеников<br />подготовлены<br />к экзаменам',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8.5" r="2.8" stroke="#6d28d9" strokeWidth="1.8" />
        <circle cx="16.5" cy="9.5" r="2.2" stroke="#6d28d9" strokeWidth="1.8" />
        <path d="M3.5 18c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 13.4c2.6.2 5 2.1 5 4.6" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Высокие<br />результаты<br />выпускников',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 20V13M12 20V7M19 20V10" stroke="#6d28d9" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Page() {
  return (
    <div className="pp-page">
      {/* ── HEADER ── */}
      <header className="pp-header">
        <div className="pp-wrap pp-header__inner">
          <div className="pp-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="pp-header__logo" width="80" height="80" />
            <span className="pp-header__brand-name">Знарния</span>
          </div>
          <span className="pp-header__badge">🎓 Для родителей 9 класса</span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-wrap">
          <h1 className="pp-hero__title">
            Готовимся к ОГЭ вместе — <span className="pp-accent">легко,</span> уверенно, эффективно
          </h1>
        </div>
        <div className="pp-wrap pp-hero__inner">
          <div className="pp-hero__left">
            <p className="pp-hero__sub">
              Специальная программа для родителей 9 класса: диагностика знаний, подарки и скидки
              на обучение в сентябре.
            </p>

            {/* ── ПЛАШКА: Интеллектуальный клуб ОГЭ ── */}
            <div className="pp-plashka">
              <span className="pp-plashka__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L2 8.5 12 13l10-4.5L12 4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M6 11v4.2c0 .6.3 1.1.8 1.4 1.4.9 3.2 1.4 5.2 1.4s3.8-.5 5.2-1.4c.5-.3.8-.8.8-1.4V11" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8.5V14" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <div className="pp-plashka__body">
                <div className="pp-plashka__title">Интеллектуальный клуб ОГЭ</div>
                <p className="pp-plashka__text">
                  Не просто занятия раз в неделю.<br />
                  Это пространство, где школьник регулярно занимается, получает поддержку
                  и постепенно выходит на уверенную подготовку к экзамену.
                </p>
              </div>
            </div>

            <div className="pp-hero__actions">
              <button className="pp-btn pp-btn--primary">Узнать подробнее →</button>
              <button className="pp-btn pp-btn--ghost">Хочу участвовать</button>
            </div>
          </div>
          <div className="pp-hero__media">
            <img src="/znarnia/images/oge-hero-scene.webp" alt="Предметы ОГЭ для 9 класса" className="pp-hero__img" width="1000" height="681" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ НАМ ДОВЕРЯЮТ ── */}
      <section className="pp-trust">
        <div className="pp-wrap">
          <h2 className="pp-trust__title">
            <span className="pp-trust__title-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M7 5.5H4.5V7a3 3 0 0 0 3 3M17 5.5h2.5V7a3 3 0 0 1-3 3" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12.5V16M9 20h6M10 16h4l-.5 2h-3z" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Почему нам доверяют?
          </h2>

          <div className="pp-trust__grid">
            {TRUST.map((t, i) => (
              <div key={i} className="pp-trust__item">
                <span className="pp-trust__icon" aria-hidden="true">{t.icon}</span>
                <p className="pp-trust__text" dangerouslySetInnerHTML={{ __html: t.text }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
