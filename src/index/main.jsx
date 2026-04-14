import React from 'react'
import ReactDOM from 'react-dom/client'
import '../shared/styles/base.css'
import './catalog.css'

const pages = [
  {
    slug: 'leto2026',
    title: 'Лето 2026 — Предзапись',
    client: 'Школа Сотниковой Ольги',
    description: 'Посадочная страница для летней предзаписи 2026',
    date: 'Апрель 2026',
  },
  {
    slug: 'nachalka',
    title: 'Летние занятия для начальной школы',
    client: 'Школа Сотниковой Ольги',
    description: 'Лендинг для родителей учеников 1–4 классов',
    date: 'Апрель 2026',
  },
  {
    slug: 'partner',
    title: 'Партнёрская программа',
    client: 'Znarnia',
    description: 'B2B лендинг для партнёров образовательной платформы',
    date: 'Апрель 2026',
  },
]

function Catalog() {
  const base = '/znarnia'

  return (
    <div className="catalog">
      <div className="catalog__inner">
        <div className="catalog__header">
          <div className="catalog__badge">Демо-страницы</div>
          <h1 className="catalog__title">Znarnia Studio</h1>
          <p className="catalog__sub">Клиентские лендинги для демонстрации</p>
        </div>

        <div className="catalog__grid">
          {pages.map((p) => (
            <a key={p.slug} href={`${base}/${p.slug}/`} className="catalog__card">
              <div className="catalog__card-top">
                <span className="catalog__card-date">{p.date}</span>
              </div>
              <div className="catalog__card-title">{p.title}</div>
              <div className="catalog__card-client">{p.client}</div>
              <div className="catalog__card-desc">{p.description}</div>
              <div className="catalog__card-link">Открыть →</div>
            </a>
          ))}

          <div className="catalog__card catalog__card--empty">
            <div className="catalog__card-plus">+</div>
            <div className="catalog__card-title">Новая страница</div>
            <div className="catalog__card-desc">Следующий клиент появится здесь</div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>
)
