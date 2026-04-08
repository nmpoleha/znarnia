import { useState } from 'react'
import './RegistrationForm.css'

const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    telegram: '',
    grade: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.email.trim()) e.email = 'Введите email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email'
    if (!form.grade) e.grade = 'Выберите класс'
    if (!form.agree) e.agree = 'Необходимо согласие'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="reg-section" id="registration">
        <div className="reg-success">
          <div className="reg-success__icon">✓</div>
          <h3 className="reg-success__title">Заявка принята!</h3>
          <p className="reg-success__text">
            Мы свяжемся с вами для уточнения деталей. До встречи этим летом!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="reg-section" id="registration">
      <div className="reg-bg-glow" />
      <div className="reg-container">
        <div className="reg-header">
          <div className="reg-tag">Предзапись открыта</div>
          <h2 className="reg-title">Оставить заявку</h2>
          <p className="reg-lead">Запись ни к чему не обязывает — вы можете отказаться в любой момент</p>
        </div>

        <form className="reg-form" onSubmit={handleSubmit} noValidate>
          <div className="reg-row">
            <div className="reg-field">
              <label className="reg-label">Ваше имя *</label>
              <input
                className={`reg-input${errors.name ? ' reg-input--error' : ''}`}
                name="name"
                type="text"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="reg-error">{errors.name}</span>}
            </div>

            <div className="reg-field">
              <label className="reg-label">Телефон *</label>
              <input
                className={`reg-input${errors.phone ? ' reg-input--error' : ''}`}
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="reg-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="reg-row">
            <div className="reg-field">
              <label className="reg-label">Email *</label>
              <input
                className={`reg-input${errors.email ? ' reg-input--error' : ''}`}
                name="email"
                type="email"
                placeholder="ivan@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="reg-error">{errors.email}</span>}
            </div>

            <div className="reg-field">
              <label className="reg-label">Ник в Telegram</label>
              <input
                className="reg-input"
                name="telegram"
                type="text"
                placeholder="@username"
                value={form.telegram}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reg-field reg-field--half">
            <label className="reg-label">Класс *</label>
            <select
              className={`reg-input reg-select${errors.grade ? ' reg-input--error' : ''}`}
              name="grade"
              value={form.grade}
              onChange={handleChange}
            >
              <option value="">Выберите класс</option>
              {grades.map(g => (
                <option key={g} value={g}>{g} класс</option>
              ))}
            </select>
            {errors.grade && <span className="reg-error">{errors.grade}</span>}
          </div>

          <div className="reg-checkbox-wrap">
            <label className="reg-checkbox-label">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="reg-checkbox-input"
              />
              <span className="reg-checkbox-box" />
              <span className="reg-checkbox-text">
                Согласен(а) на обработку персональных данных
              </span>
            </label>
            {errors.agree && <span className="reg-error">{errors.agree}</span>}
          </div>

          <button type="submit" className="reg-submit">
            Оставить заявку
          </button>
        </form>
      </div>
    </section>
  )
}
