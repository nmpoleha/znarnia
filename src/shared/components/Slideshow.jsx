import { useState, useEffect } from 'react'

export default function Slideshow({ slides }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="slideshow">
      <div className="slideshow__track">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slideshow__slide ${i === current ? 'slideshow__slide--active' : ''}`}
          >
            {s.src
              ? <img src={s.src} alt={s.label || ''} className="slideshow__img" />
              : <span className="slideshow__label">{s.label}</span>
            }
          </div>
        ))}
      </div>
      <div className="slideshow__controls">
        <button className="slideshow__btn" onClick={prev}>‹</button>
        <div className="slideshow__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slideshow__dot ${i === current ? 'slideshow__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button className="slideshow__btn" onClick={next}>›</button>
      </div>
    </div>
  )
}
