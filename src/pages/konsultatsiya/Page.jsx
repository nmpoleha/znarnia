import { useState } from 'react'
import { nb } from '../../shared/utils/nb'
import { AuthorCard, ReviewsCarousel, SchoolsCard } from '../../shared/components/SocialProof'

const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

/* ── Блок о платформе ── */
const PLATFORM = [
  { icon: 'video', label: ['Собственная', 'видеосвязь'] },
  { icon: 'board', label: ['Интерактивная', 'доска'] },
  { icon: 'lock',  label: ['Автопроверка'] },
  { icon: 'list',  label: ['Записи с', 'интерактивом'] },
  { icon: 'chart', label: ['Мотивация', 'и баллы'] },
  { icon: 'ai',    label: ['AI помощник /', 'аналитика'] },
]

/* ── Принципы построения занятий ── */
const PRINCIPLES = [
  {
    img: '/znarnia/images/lesson-shield.png',
    title: 'Полная концентрация и безопасная среда',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    img: '/znarnia/images/lesson-chart.png',
    title: 'Педагог видит прогресс каждого, а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    img: '/znarnia/images/lesson-search.png',
    title: 'Для вас — полная прозрачность прогресса',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
    img: '/znarnia/images/lesson-headset.png',
    title: 'Персональная помощь с домашними заданиями',
    text: 'За ребёнком закреплён персональный куратор, к которому можно обратиться, если возникли сложности с домашним заданием. Он поможет найти ошибку, обратит внимание на оформление решения, подскажет, в каком направлении двигаться, и разберёт непонятный момент. Если у ребёнка не получается решить задачу, он может запросить у системы умную подсказку, которая направляет, но не даёт готового ответа. При необходимости доступен пошаговый разбор. Затем ИИ подберёт похожее задание для закрепления темы. Это гарантирует, что пробелы в знаниях будут устранены сразу.',
  },
]

export default function Page() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', telegram: '', grade: '', agree: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [openCards, setOpenCards] = useState(() => new Set())

  const toggleCard = (i) => {
    setOpenCards((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.email.trim()) e.email = 'Введите email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email'
    if (!form.agree) e.agree = 'Необходимо согласие'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  return (
    <div className="ks-page">
      <header className="so-header">
        <div className="so-wrap so-header__inner">
          <div className="so-header__brand">
            <img src="/znarnia/images/logo.png" alt="Знарния" className="so-header__logo" width="80" height="80" />
            <span className="so-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      <main className="ks-main">
      <div className="ks-wrap">
        <h1 className="ks-title">Запишитесь на бесплатную консультацию</h1>
        <p className="ks-lead">{nb('Расскажем подробнее о занятиях, подберём удобное расписание и ответим на все вопросы')}</p>

        <div className="ks-card">
          <span className="ks-card__accent" aria-hidden="true" />
          {submitted ? (
            <div className="ks-success">
              <div className="ks-success__icon">✓</div>
              <div className="ks-success__title">Заявка принята!</div>
              <div className="ks-success__text">{nb('Мы перезвоним вам в ближайшее время, расскажем о программе и подберём удобное расписание.')}</div>
            </div>
          ) : (
            <>
              <div className="ks-card__head">
                <div className="ks-card__title">Оставьте заявку</div>
                <div className="ks-card__sub">{nb('Мы перезвоним, расскажем о программе и подберём удобное расписание')}</div>
              </div>

              <form className="ks-form" onSubmit={handleSubmit} noValidate>
                <div className="ks-grid">
                  <div className="ks-field">
                    <label className="ks-label">Ваше имя <span className="ks-req">*</span></label>
                    <input className={`ks-input${errors.name ? ' ks-input--err' : ''}`} type="text" placeholder="Иван Иванов" value={form.name} onChange={e => set('name', e.target.value)} />
                    {errors.name && <span className="ks-err">{errors.name}</span>}
                  </div>
                  <div className="ks-field">
                    <label className="ks-label">Телефон <span className="ks-req">*</span></label>
                    <input className={`ks-input${errors.phone ? ' ks-input--err' : ''}`} type="tel" inputMode="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => set('phone', e.target.value)} />
                    {errors.phone && <span className="ks-err">{errors.phone}</span>}
                  </div>
                  <div className="ks-field">
                    <label className="ks-label">Email <span className="ks-req">*</span></label>
                    <input className={`ks-input${errors.email ? ' ks-input--err' : ''}`} type="email" placeholder="ivan@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                    {errors.email && <span className="ks-err">{errors.email}</span>}
                  </div>
                  <div className="ks-field">
                    <label className="ks-label">Ник в Telegram</label>
                    <input className="ks-input" type="text" placeholder="@username" value={form.telegram} onChange={e => set('telegram', e.target.value)} />
                  </div>
                </div>

                <div className="ks-field ks-field--half">
                  <label className="ks-label">Класс ребёнка</label>
                  <select className="ks-input ks-select" value={form.grade} onChange={e => set('grade', e.target.value)}>
                    <option value="">Выберите класс</option>
                    {grades.map(g => <option key={g} value={g}>{g} класс</option>)}
                  </select>
                </div>

                <label className={`ks-check${errors.agree ? ' ks-check--err' : ''}`}>
                  <input type="checkbox" className="ks-check__input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
                  <span className="ks-check__box" aria-hidden="true" />
                  <span className="ks-check__text">
                    Согласен с обработкой персональных данных в соответствии с{' '}
                    <a href="#" className="ks-link" onClick={e => e.preventDefault()}>политикой конфиденциальности</a> <span className="ks-req">*</span>
                  </span>
                </label>
                {errors.agree && <span className="ks-err ks-err--check">{errors.agree}</span>}

                <button type="submit" className="ks-submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Записаться на консультацию
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="ks-topbadge">
        <span className="ks-format__badge">О занятиях в центре</span>
      </div>

      <section className="so-platform" id="platform">
        <div className="so-wrap">
          <h2 className="so-section__title">
            {nb('«Знарния» — образовательная онлайн-среда для комфортного обучения детей')}
          </h2>
          <p className="so-section__lead">
            {nb('Все занятия, домашние задания, аналитика и обратная связь собраны в одном месте — без переключений между сервисами и потери внимания.')}
          </p>
          <div className="so-platform__grid">
            {PLATFORM.map((p) => (
              <div key={p.label.join(' ')} className="so-platform__item">
                <img
                  className="so-platform__icon"
                  src={`/znarnia/images/platform-${p.icon}.png`}
                  alt=""
                  aria-hidden="true"
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                />
                <span className="so-platform__label">
                  {p.label.map((l, i) => (<span key={i}>{l}</span>))}
                </span>
              </div>
            ))}
          </div>

          <div className="so-social">
            <div className="ks-lessons">
              <div className="sh-lessons__head">
                <div className="sh-lessons__head-text">
                  <h2 className="sh-lessons__title">
                    {nb('Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка')}
                  </h2>
                  <p className="sh-lessons__intro">
                    {nb('Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы, на которых строится обучение.')}
                  </p>
                </div>
              </div>

              <div className="sh-lessons__grid">
                {PRINCIPLES.map((p, i) => {
                  const isOpen = openCards.has(i)
                  return (
                    <div key={i} className={`sh-principle gv-principle${isOpen ? ' gv-principle--open' : ''}`}>
                      <div className="sh-principle__media">
                        <div className="sh-principle__icon">
                          <img src={p.img} alt="" aria-hidden="true" className="sh-principle__icon-img" width="320" height="320" loading="lazy" decoding="async" />
                        </div>
                        <span className="sh-principle__num">{i + 1}</span>
                      </div>
                      <h3 className="sh-principle__title">{nb(p.title)}</h3>
                      <button
                        type="button"
                        className="gv-principle__toggle"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? 'Свернуть описание' : 'Показать описание'}
                        onClick={() => toggleCard(i)}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </button>
                      {isOpen && <p className="sh-principle__text">{nb(p.text)}</p>}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="ks-format">
              <div className="ks-format__head">
                <h2 className="ks-format__title">
                  Групповой и индивидуальный <span className="ks-format__title-accent">формат занятий</span>
                </h2>
              </div>
              <div className="ks-format__grid">
                <div className="ks-format__card ks-format__card--violet">
                  <img className="ks-format__icon" src="/znarnia/images/prog-abacus.png" alt="" aria-hidden="true" width="220" height="220" loading="lazy" decoding="async" />
                  <div className="ks-format__body">
                    <h3 className="ks-format__card-title">Математика</h3>
                    <p className="ks-format__card-text">{nb('Системные занятия, понятные объяснения и практика, которые помогают уверенно справляться с любыми задачами.')}</p>
                  </div>
                </div>
                <div className="ks-format__card ks-format__card--green">
                  <img className="ks-format__icon" src="/znarnia/images/library-books-3d.png" alt="" aria-hidden="true" width="220" height="220" loading="lazy" decoding="async" />
                  <div className="ks-format__body">
                    <h3 className="ks-format__card-title">Дополнительные предметы</h3>
                    <p className="ks-format__card-text">{nb('В индивидуальном формате наши репетиторы помогают повысить успеваемость и подготовиться к важным работам по русскому языку, обществознанию, английскому языку и информатике.')}</p>
                  </div>
                </div>
                <div className="ks-format__card ks-format__card--violet ks-format__card--wide">
                  <img className="ks-format__icon" src="/znarnia/images/lesson-shield.png" alt="" aria-hidden="true" width="220" height="220" loading="lazy" decoding="async" />
                  <div className="ks-format__body">
                    <h3 className="ks-format__card-title">Оплата без риска</h3>
                    <p className="ks-format__card-text">{nb('Возврат оплаты в течение 7 дней, если не подошло обучение.')}</p>
                  </div>
                </div>
              </div>
            </div>

            <AuthorCard />
            <ReviewsCarousel />
            <SchoolsCard />
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}
