import './Hero.css'

export default function Hero() {
  const handleScrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__bg-glow hero__bg-glow--3" />

      <div className="hero__container">
        <div className="hero__badge">Открыта предзапись</div>

        <h1 className="hero__title">
          <span className="hero__title-line">Лето</span>
          <span className="hero__title-accent">2026</span>
        </h1>

        <p className="hero__subtitle">
          Маленькая жизнь — успешный старт в сентябре
        </p>

        <p className="hero__description">
          Запишитесь первыми и получите приоритетный выбор расписания,
          математический интенсив и бесплатные онлайн-уроки
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={handleScrollToForm}>
            Записаться сейчас
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={handleScrollToForm}>
            Узнать подробнее
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">1–10</span>
            <span className="hero__stat-label">классы</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">3</span>
            <span className="hero__stat-label">бонуса при записи</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">0 ₽</span>
            <span className="hero__stat-label">за онлайн-уроки</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-icon" />
      </div>
    </section>
  )
}
