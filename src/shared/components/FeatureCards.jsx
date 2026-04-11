import './FeatureCards.css'

export default function FeatureCards({ features }) {
  return (
    <div className="fcards">
      {features.map((f, i) => (
        <div key={i} className="fcard" style={{ '--c': f.color }}>
          <span className="fcard__icon">{f.icon}</span>
          <div className="fcard__title">{f.title}</div>
          <div className="fcard__desc">{f.desc}</div>
        </div>
      ))}
    </div>
  )
}
