import { useState } from 'react'

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="opl-page">
      <div className="opl-page__glow opl-page__glow--1" />
      <div className="opl-page__glow opl-page__glow--2" />

      <div className="opl-wrap">

        <header className="opl-header">
          <img className="opl-header__logo" src="https://znarnia.ru/logo.png" alt="Znarnia" />
          <div className="opl-header__school">Школа Сотниковой Ольги</div>
        </header>

        <section className="opl-hero">
          <div className="opl-hero__tag">Летние занятия 2025/26</div>
          <h1 className="opl-hero__title">Оплата программы</h1>
          <p className="opl-hero__sub">После оплаты на указанную почту придёт доступ к платформе</p>
        </section>

        <div className="opl-card">

          <div className="opl-price-block">
            <div className="opl-price__label">Стоимость программы</div>
            <div className="opl-price__amount">24 600 <span>₽</span></div>
            <div className="opl-price__note">за всю программу · включая все уроки и ДЗ</div>
          </div>

          {submitted ? (
            <div className="opl-success">
              <div className="opl-success__icon">✓</div>
              <div className="opl-success__title">Спасибо!</div>
              <p className="opl-success__text">Мы свяжемся с вами для подтверждения оплаты и&nbsp;пришлём доступ к&nbsp;платформе.</p>
            </div>
          ) : (
            <form className="opl-form" onSubmit={handleSubmit}>
              <div className="opl-form__group">
                <label className="opl-form__label">ФИО ребёнка</label>
                <input
                  className="opl-form__input"
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>

              <div className="opl-form__group">
                <label className="opl-form__label">Класс</label>
                <select className="opl-form__input opl-form__select" required>
                  <option value="">Выберите класс</option>
                  {[1,2,3,4,5,6,7,8,9,10,11].map(n => (
                    <option key={n} value={n}>{n} класс</option>
                  ))}
                </select>
              </div>

              <div className="opl-form__group">
                <label className="opl-form__label">Имя родителя</label>
                <input
                  className="opl-form__input"
                  type="text"
                  placeholder="Иванова Мария"
                  required
                />
              </div>

              <div className="opl-form__group">
                <label className="opl-form__label">Email</label>
                <input
                  className="opl-form__input"
                  type="email"
                  placeholder="example@mail.ru"
                  required
                />
                <div className="opl-form__hint">На эту почту придёт доступ к платформе</div>
              </div>

              <button className="opl-form__btn" type="submit">Оплатить — 24 600 ₽</button>
            </form>
          )}
        </div>

        <footer className="opl-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
