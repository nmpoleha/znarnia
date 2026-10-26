import { useEffect, useRef, useState } from 'react'
import { nb } from '../../shared/utils/nb'
import './auth-modal.css'

/* адреса политики, восстановления пароля и Яндекс ID пока не заданы — ссылки-заглушки не прокручивают страницу */
const stub = (e) => { e.preventDefault(); e.stopPropagation() }

const EMPTY = { email: '', phone: '', password: '', password2: '', code: '', pd: false, policy: false, news: false }
const EMAIL_RE = /\S+@\S+\.\S+/

const HELLO = {
  register: { title: <>Добро <span className="gv-reg__welcome-accent">пожаловать!</span></>, sub: 'Создайте аккаунт и начните обучение' },
  login:    { title: <span className="gv-reg__welcome-accent">С&nbsp;возвращением!</span>, sub: 'Войдите, чтобы продолжить обучение' },
}

/* Окно входа и регистрации: слева маскот и приветствие, справа форма.
   view — 'register' | 'login' | null (закрыто); между формами переключаемся ссылками «Вход» / «Создать аккаунт» */
export default function AuthModal({ view, onView, onClose }) {
  const [closing, setClosing] = useState(false)
  const [regMode, setRegMode] = useState('email')      // email | phone
  const [loginMode, setLoginMode] = useState('password') // password | code
  const [codeSent, setCodeSent] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const firstField = useRef(null)
  const open = !!view

  const close = () => setClosing(true)

  useEffect(() => {
    if (!closing) return undefined
    const t = setTimeout(() => {
      setClosing(false)
      setDone(false)
      setCodeSent(false)
      setLoginMode('password')
      setErrors({})
      onClose()
    }, 220)
    return () => clearTimeout(t)
  }, [closing, onClose])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') close() }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  /* фокус в первое поле при открытии и при смене формы/способа */
  useEffect(() => {
    if (open && !done) firstField.current?.focus({ preventScroll: true })
  }, [open, view, regMode, loginMode, codeSent, done])

  if (!open) return null

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const goTo = (v) => (e) => {
    e.preventDefault()
    setErrors({})
    setDone(false)
    setCodeSent(false)
    onView(v)
  }

  const checkEmail = (e) => {
    if (!form.email.trim()) e.email = 'Введите адрес почты'
    else if (!EMAIL_RE.test(form.email)) e.email = 'Проверьте адрес почты'
  }

  const validateRegister = () => {
    const e = {}
    if (regMode === 'email') checkEmail(e)
    else {
      const digits = form.phone.replace(/\D/g, '')
      if (!digits) e.phone = 'Введите номер телефона'
      else if (digits.length < 11) e.phone = 'Проверьте номер телефона'
    }
    if (!form.password) e.password = 'Придумайте пароль'
    else if (form.password.length < 6) e.password = 'Не короче 6 символов'
    if (!form.password2) e.password2 = 'Повторите пароль'
    else if (form.password2 !== form.password) e.password2 = 'Пароли не совпадают'
    if (!form.pd) e.pd = true
    if (!form.policy) e.policy = true
    return e
  }

  const validateLogin = () => {
    const e = {}
    checkEmail(e)
    if (loginMode === 'password' && !form.password) e.password = 'Введите пароль'
    if (loginMode === 'code' && codeSent && !/^\d{4,6}$/.test(form.code.trim())) e.code = 'Введите код из письма'
    return e
  }

  const submit = (e) => {
    e.preventDefault()
    const e2 = view === 'register' ? validateRegister() : validateLogin()
    if (Object.keys(e2).length) { setErrors(e2); return }
    if (view === 'login' && loginMode === 'code' && !codeSent) { setCodeSent(true); return }
    setDone(true)
  }

  const field = (key, label, props, required = true) => (
    <label className="gv-reg__field">
      <span className="gv-reg__label">{label}{required && <> <span className="gv-reg__req">*</span></>}</span>
      <input
        className={`gv-reg__input${errors[key] ? ' gv-reg__input--err' : ''}`}
        value={form[key]}
        onChange={(e) => set(key, e.target.value)}
        aria-invalid={!!errors[key]}
        {...props}
      />
      {errors[key] && <span className="gv-reg__err">{errors[key]}</span>}
    </label>
  )

  const check = (key, children, required) => (
    <label className={`gv-reg__check${errors[key] ? ' gv-reg__check--err' : ''}`}>
      <input type="checkbox" checked={form[key]} onChange={(e) => set(key, e.target.checked)} />
      <span className="gv-reg__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span className="gv-reg__check-text">
        {children}
        {required ? <> <span className="gv-reg__req">*</span></> : null}
      </span>
    </label>
  )

  const tabs = (label, items, value, onChange) => (
    <div className="gv-reg__tabs" role="tablist" aria-label={label}>
      {items.map(([m, t]) => (
        <button
          key={m}
          type="button"
          role="tab"
          aria-selected={value === m}
          className={`gv-reg__tab${value === m ? ' gv-reg__tab--active' : ''}`}
          onClick={() => { setErrors({}); setCodeSent(false); onChange(m) }}
        >
          {t}
        </button>
      ))}
    </div>
  )

  const yandex = (
    <>
      <div className="gv-reg__or"><span>или</span></div>
      <a href="#" className="gv-reg__yandex" onClick={stub}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.7 4h-1.9C8.9 4 7.3 5.6 7.3 7.9c0 2 .9 3.1 2.6 4.3L7 20h2.6l3.2-8.6-.9-.6c-1.5-1-2.2-1.8-2.2-3.1 0-1.4 1-2.3 2.6-2.3h1.4V20h2.3V4h-2.3z" fill="#fc3f1d" />
        </svg>
        Войти с&nbsp;Яндекс&nbsp;ID
      </a>
    </>
  )

  const registerForm = (
    <form className="gv-reg__form" onSubmit={submit} noValidate>
      <div className="gv-reg__head">
        <h2 id="gv-reg-title" className="gv-reg__title">Создать аккаунт</h2>
        <a href="#" className="gv-reg__login" onClick={goTo('login')}>Вход</a>
      </div>
      <p className="gv-reg__hint">Поля, отмеченные <span className="gv-reg__req">*</span>, обязательны.</p>

      {tabs('Способ регистрации', [['email', 'Эл. почта'], ['phone', 'Телефон']], regMode, setRegMode)}

      {regMode === 'email'
        ? field('email', 'Эл. почта', { type: 'email', autoComplete: 'email', placeholder: 'name@mail.ru', ref: firstField })
        : field('phone', 'Телефон', { type: 'tel', autoComplete: 'tel', placeholder: '+7 (___) ___-__-__', inputMode: 'tel', ref: firstField })}
      {field('password', 'Пароль', { type: 'password', autoComplete: 'new-password', placeholder: 'Не короче 6 символов' })}
      {field('password2', 'Повторите пароль', { type: 'password', autoComplete: 'new-password', placeholder: 'Повторите пароль' })}

      <div className="gv-reg__checks">
        {check('pd', nb('Я даю согласие на обработку персональных данных'), true)}
        {check('policy', <>Я&nbsp;принимаю <a href="#" onClick={stub}>{nb('Политику конфиденциальности')}</a></>, true)}
        {check('news', <>{nb('Я даю согласие получать новости и полезные материалы')} <span className="gv-reg__opt">(необязательно)</span></>, false)}
      </div>

      <p className={`gv-reg__note${errors.pd || errors.policy ? ' gv-reg__note--err' : ''}`}>
        {nb('Для создания аккаунта необходимо принять обязательные соглашения, отмеченные')} <span className="gv-reg__req">*</span>.
      </p>

      <button type="submit" className="gv-reg__submit">Создать аккаунт</button>
      {yandex}
    </form>
  )

  const loginForm = (
    <form className="gv-reg__form" onSubmit={submit} noValidate>
      <div className="gv-reg__head">
        <h2 id="gv-reg-title" className="gv-reg__title">Вход</h2>
        <a href="#" className="gv-reg__login" onClick={goTo('register')}>Создать аккаунт</a>
      </div>
      <p className="gv-reg__hint">{nb('Войдите в личный кабинет Знарнии')}</p>

      {tabs('Способ входа', [['password', 'По паролю'], ['code', 'По коду на email']], loginMode, setLoginMode)}

      {field('email', 'Эл. почта', { type: 'email', autoComplete: 'email', placeholder: 'name@mail.ru', ref: codeSent ? undefined : firstField, readOnly: codeSent }, false)}

      {loginMode === 'password' && (
        <>
          {field('password', 'Пароль', { type: 'password', autoComplete: 'current-password', placeholder: 'Ваш пароль' }, false)}
          <a href="#" className="gv-reg__forgot" onClick={stub}>Забыли пароль?</a>
        </>
      )}

      {loginMode === 'code' && codeSent && (
        <>
          <p className="gv-reg__sent">{nb('Мы отправили код на')} <b>{form.email}</b></p>
          {field('code', 'Код из письма', { inputMode: 'numeric', autoComplete: 'one-time-code', placeholder: '000000', maxLength: 6, ref: firstField }, false)}
          <button type="button" className="gv-reg__forgot" onClick={() => { setCodeSent(false); set('code', '') }}>
            Изменить почту или отправить код ещё раз
          </button>
        </>
      )}

      <button type="submit" className="gv-reg__submit">
        {loginMode === 'code' && !codeSent ? 'Получить код' : 'Войти'}
      </button>
      {yandex}
    </form>
  )

  const doneScreen = (
    <div className="gv-reg__done">
      <span className="gv-reg__done-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <h2 id="gv-reg-title" className="gv-reg__title">{view === 'register' ? 'Аккаунт создан' : 'Вы вошли'}</h2>
      <p className="gv-reg__done-text">
        {nb(view === 'register'
          ? 'Добро пожаловать в Знарнию! Теперь можно войти и начать обучение.'
          : 'Рады видеть вас снова! Можно продолжать обучение.')}
      </p>
      <button type="button" className="gv-reg__submit" onClick={close}>Хорошо</button>
    </div>
  )

  return (
    <div className={`gv-reg${closing ? ' gv-reg--closing' : ''}`} onClick={close}>
      <div
        className={`gv-reg__dialog gv-reg__dialog--${view}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gv-reg-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="gv-reg__close" aria-label="Закрыть" onClick={close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="gv-reg__hello">
          <img
            className="gv-reg__mascot"
            src="/znarnia/images/reg-mascot.webp"
            alt="Маскот Знарнии — весёлый робот в шапочке выпускника"
            width="720"
            height="674"
            decoding="async"
          />
          <p className="gv-reg__welcome">{HELLO[view].title}</p>
          <p className="gv-reg__hello-sub">{nb(HELLO[view].sub)}</p>
        </div>

        <div className="gv-reg__body">
          {done ? doneScreen : view === 'register' ? registerForm : loginForm}
        </div>
      </div>
    </div>
  )
}
