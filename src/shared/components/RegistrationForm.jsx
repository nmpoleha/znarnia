import { useState } from 'react'
import './RegistrationForm.css'

const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function RegistrationForm({ successText = 'Мы свяжемся с вами для уточнения деталей. До встречи этим летом!' }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', telegram: '', grade: '', agree: false })
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

  return (
    <section className="form-section" id="registration">
      {submitted ? (
        <div className="form-success">
          <div className="form-success__icon">✓</div>
          <div className="form-success__title">Заявка принята!</div>
          <div className="form-success__text">{successText}</div>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__grid">
            <div className="form__field">
              <label className="form__label">Ваше имя *</label>
              <input className={`form__input${errors.name ? ' err' : ''}`} name="name" type="text" placeholder="Иван Иванов" value={form.name} onChange={handleChange} />
              {errors.name && <span className="form__err">{errors.name}</span>}
            </div>
            <div className="form__field">
              <label className="form__label">Телефон *</label>
              <input className={`form__input${errors.phone ? ' err' : ''}`} name="phone" type="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className="form__err">{errors.phone}</span>}
            </div>
            <div className="form__field">
              <label className="form__label">Email *</label>
              <input className={`form__input${errors.email ? ' err' : ''}`} name="email" type="email" placeholder="ivan@example.com" value={form.email} onChange={handleChange} />
              {errors.email && <span className="form__err">{errors.email}</span>}
            </div>
            <div className="form__field">
              <label className="form__label">Ник в Telegram</label>
              <input className="form__input" name="telegram" type="text" placeholder="@username" value={form.telegram} onChange={handleChange} />
            </div>
          </div>

          <div className="form__field form__field--half">
            <label className="form__label">Класс ребёнка (который оканчивает сейчас) *</label>
            <select className={`form__input form__select${errors.grade ? ' err' : ''}`} name="grade" value={form.grade} onChange={handleChange}>
              <option value="">Выберите класс</option>
              {grades.map(g => <option key={g} value={g}>{g} класс</option>)}
            </select>
            {errors.grade && <span className="form__err">{errors.grade}</span>}
          </div>

          <label className="form__check">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="form__check-input" />
            <span className="form__check-box" />
            <span className="form__check-text">Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности</span>
          </label>
          {errors.agree && <span className="form__err">{errors.agree}</span>}

          <button type="submit" className="form__submit">Оставить заявку</button>

          <p className="form__note">* заполнение формы ни к чему не обязывает, вы можете отказаться от записи на курс в любой момент</p>
        </form>
      )}
    </section>
  )
}
