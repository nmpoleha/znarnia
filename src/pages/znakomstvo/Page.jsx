import { nb } from '../../shared/utils/nb'

/* ── Карточки преимуществ справа в герое ──
   Декор: максимум 1 основной дудл + 1 мелкий акцент, тонкие лёгкие линии. */
const FEATS = [
  {
    theme: 'violet',
    img: '/znarnia/images/feat-cap.png',
    title: ['Интерес', 'к знаниям'],
    text: 'Ребёнок учится с удовольствием и хочет узнавать больше.',
    doodle: (
      <span className="zn-feat__note" aria-hidden="true">
        Больше<br />чем&nbsp;учёба
        <svg className="zn-feat__accent" width="20" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 20.5S3.5 15.5 3.5 9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 8.5 2c0 5.9-8.5 10.9-8.5 10.9z" stroke="#b7a1f2" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </span>
    ),
  },
  {
    theme: 'green',
    img: '/znarnia/images/feat-chart.png',
    title: ['Уверенность', 'в себе'],
    text: 'Ребёнок понимает, как он думает, что знает и на что способен.',
    doodle: (
      <svg className="zn-feat__doodle" width="52" height="40" viewBox="0 0 52 40" fill="none" aria-hidden="true">
        <path d="M4 34c7-3 5-12-1-11s-4 10 5 10 17-8 21-27" stroke="#94ce7a" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M24 5l7-1M31 4l1 7" stroke="#94ce7a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    theme: 'orange',
    img: '/znarnia/images/feat-target.png',
    title: ['Реальные', 'результаты'],
    text: 'Знания применяются на практике и видны в школе и в жизни.',
    doodle: (
      <svg className="zn-feat__doodle" width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 5l3.7 8.3L31 14l-6.8 5.6L26 29l-8-4.7L10 29l1.8-9.4L5 14l9.3-.7L18 5z" stroke="#f9b27f" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Page() {
  return (
    <div className="zn-page">
      <header className="so-header">
        <div className="so-wrap so-header__inner">
          <div className="so-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="so-header__logo" width="80" height="80" />
            <span className="so-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      <main className="zn-main">
        <section className="zn-hero">
          {/* декоративные завитки фона */}
          <svg className="zn-hero__squiggle zn-hero__squiggle--bl" width="90" height="60" viewBox="0 0 90 60" fill="none" aria-hidden="true">
            <path d="M6 50c10-16 26-16 36 0M50 34c8-12 22-12 32 0" stroke="#35b978" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          </svg>

          <div className="zn-hero__inner">
            <div className="zn-hero__main">
              <span className="zn-hero__eyebrow">Знарния</span>
              <h1 className="zn-hero__title">
                Современная образовательная платформа,{' '}
                <span className="zn-hero__title-accent">которая меняет отношение к&nbsp;учёбе</span>
              </h1>
              <p className="zn-hero__lead">
                {nb('Мы хотим, чтобы ребёнок не просто запоминал правила, а учился думать, понимать и верить в свои силы.')}
              </p>

              <div className="zn-hero__actions">
                <a href="#znakomstvo" className="zn-btn zn-btn--primary">
                  Давайте познакомимся
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#how" className="zn-btn zn-btn--ghost">
                  <span className="zn-btn__play" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M8 5.5v13l11-6.5-11-6.5z" fill="#6d28d9" /></svg>
                  </span>
                  Как это работает?
                </a>
              </div>
            </div>

            <ul className="zn-feats">
              {FEATS.map((f, i) => (
                <li key={i} className={`zn-feat zn-feat--${f.theme}`}>
                  <img className="zn-feat__icon" src={f.img} alt="" aria-hidden="true" width="360" height="360" loading="lazy" decoding="async" />
                  <div className="zn-feat__body">
                    <h3 className="zn-feat__title">{f.title[0]}<br />{f.title[1]}</h3>
                    <p className="zn-feat__text">{nb(f.text)}</p>
                  </div>
                  <span className="zn-feat__deco" aria-hidden="true">
                    {f.doodle}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="zn-hero__note">
            <span className="zn-hero__note-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 0 4 21.5V5.5z" stroke="#7c3aed" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M4 5.5V19" stroke="#7c3aed" strokeWidth="1.7" />
              </svg>
            </span>
            <div className="zn-hero__note-body">
              <p className="zn-hero__note-text">
                {nb('Приглашаем ребёнка на живое онлайн-занятие с учителем. Вы увидите наш подход к обучению, а главное — сможете лучше понять ребёнка: как он думает, что знает, как воспринимает новое и что у него получается.')}
              </p>
              <p className="zn-hero__note-text">
                А ещё мы создали <strong>бесплатный Интеллектуальный клуб</strong> — {nb('интерактивные уроки, тренажёры и новые материалы каждую неделю.')}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
