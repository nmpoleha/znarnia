import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../letnie-kursy/Page'
import '../../shared/styles/base.css'
import '../letnie-kursy/page.css'
import './hero-override.css'

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconStar = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 20V14M8 20V10M12 20V6M16 20V12M20 20V8" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const IconHeart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 21C12 21 3 15 3 9a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 6-9 12-9 12z" stroke="#16a34a" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

const theses = [
  { icon: <IconShield />, text: 'Безопасная образовательная среда' },
  { icon: <IconStar />,   text: 'Опытные педагоги и авторские методики' },
  { icon: <IconChart />,  text: 'Видимый результат уже за 2–4 недели' },
  { icon: <IconHeart />,  text: 'Поддержка и обратная связь для родителей' },
]

function ThesesBanner() {
  return (
    <div className="lk2-theses">
      <div className="lk2-theses__inner">
        {theses.map((t, i) => (
          <div key={i} className="lk2-theses__item">
            <div className="lk2-theses__icon">{t.icon}</div>
            <p className="lk2-theses__text">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page afterHero={<ThesesBanner />} />
  </React.StrictMode>
)
