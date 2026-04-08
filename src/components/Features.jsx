import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Приоритетный доступ',
    description: 'Выбирайте расписание первыми — лучшее время будет вашим',
    color: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.3)',
  },
  {
    icon: '🧮',
    title: 'Математический интенсив',
    description: 'Закрываем пробелы, развиваем логику. Подготовка к сентябрю с нуля',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.3)',
  },
  {
    icon: '🎓',
    title: 'Бесплатные онлайн-уроки',
    description: 'Включены в предзапись. Учитесь откуда угодно, без доплат',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.3)',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <div className="features__tag">Что вы получаете</div>
          <h2 className="features__title">Три причины записаться сейчас</h2>
          <p className="features__lead">
            Предзапись открыта — присоединяйтесь и получите все преимущества первыми
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ '--glow': f.glow, '--color': f.color }}>
              <div className="feature-card__icon-wrap">
                <span className="feature-card__icon">{f.icon}</span>
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.description}</p>
              <div className="feature-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
