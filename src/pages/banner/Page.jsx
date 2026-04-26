function Banner({ gradient, btnColor, dark, icon }) {
  const titleColor = dark ? '#6b42c8' : '#ffffff'
  const textColor = dark ? 'rgba(107,66,200,0.7)' : 'rgba(255,255,255,0.85)'
  return (
    <div className="banner" style={{ background: gradient }}>
      {icon && <div className="banner__icon">{icon}</div>}
      <div className="banner__left">
        <div className="banner__title" style={{ color: titleColor }}>Летние занятия в Знарнии</div>
        <div className="banner__text" style={{ color: textColor }}>Посмотрите расписание, этапы обучения и всю важную информацию о летней программе.</div>
      </div>
      <div className="banner__right">
        <a href="https://nmpoleha.github.io/znarnia/info/" className="banner__btn" style={{ color: btnColor }}>Узнать подробнее</a>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="banner-wrap">
      <div className="banner-variant-label">1 — Лимонный</div>
      <Banner gradient="linear-gradient(135deg, #e8ed7a, #f5f9a8)" btnColor="#6b42c8" dark icon="☀️" />

      <div className="banner-variant-label">2 — Сине-бирюзовый</div>
      <Banner gradient="linear-gradient(135deg, #1a6fa8, #0d9e8a)" btnColor="#1a6fa8" icon="🌊" />

      <div className="banner-variant-label">3 — Тёмно-коралловый</div>
      <Banner gradient="linear-gradient(135deg, #b03a5b, #e8694a)" btnColor="#b03a5b" icon="🔥" />

      <div className="banner-variant-label">4 — Мятный</div>
      <Banner gradient="linear-gradient(135deg, #1a9e6e, #34c8a0)" btnColor="#0e6a49" icon="🌿" />

      <div className="banner-variant-label">5 — Персиково-розовый</div>
      <Banner gradient="linear-gradient(135deg, #e8507a, #f0956a)" btnColor="#c03060" icon="🌸" />

      <div className="banner-variant-label">6 — Ночной синий</div>
      <Banner gradient="linear-gradient(135deg, #1a2f6b, #1e6fa8)" btnColor="#1a2f6b" icon="⭐" />
    </div>
  )
}
