import { useState } from 'react'

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', grade: '' })
  const [submitted, setSubmitted] = useState(false)
  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="os-overlay" onClick={onClose}>
      <div className="os-modal" onClick={e => e.stopPropagation()}>
        <button className="os-modal__x" onClick={onClose}>×</button>
        {submitted ? (
          <div className="os-modal__success">
            <div className="os-modal__success-icon">✓</div>
            <div className="os-modal__success-title">Заявка принята!</div>
            <div className="os-modal__success-text">Мы свяжемся с вами в ближайшее время для подтверждения места</div>
            <button className="os-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="os-modal__title">Сохранить место на осень</div>
            <div className="os-modal__price-line">
              <span className="os-price-old">5 000&thinsp;₽</span>
              <span className="os-price-new">3 500&thinsp;₽</span>
            </div>
            <form className="os-modal__form" onSubmit={handleSubmit}>
              <div className="os-modal__group">
                <label>Имя</label>
                <input type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="os-modal__group">
                <label>Телефон</label>
                <input type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="os-modal__group">
                <label>Класс ребёнка</label>
                <select required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i+1} value={i+1}>{i+1} класс</option>
                  ))}
                </select>
              </div>
              <button className="os-modal__submit" type="submit">Сохранить место за 3&thinsp;500&thinsp;₽</button>
              <div className="os-modal__note">Предложение действует до 31 августа</div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const BENEFITS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <circle cx="18" cy="13" r="5" stroke="#c2440e" strokeWidth="1.8"/>
        <path d="M8 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#c2440e" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Ребёнок начинает учебный год без стресса',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <circle cx="13" cy="13" r="4" stroke="#c2440e" strokeWidth="1.8"/>
        <circle cx="23" cy="13" r="4" stroke="#c2440e" strokeWidth="1.8"/>
        <path d="M5 28c0-4.4 3.6-8 8-8h10c4.4 0 8 3.6 8 8" stroke="#c2440e" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Не нужно искать новую группу в сентябре',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <path d="M12 20l3 3 9-9" stroke="#c2440e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8v4M18 24v4M8 18h4M24 18h4" stroke="#c2440e" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Сохраняется комфортный темп обучения',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <path d="M18 10l2.5 5 5.5.8-4 3.9.95 5.5L18 22.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8z" stroke="#c2440e" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    text: 'Гарантировано место у любимого преподавателя',
  },
]

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = e => { e.preventDefault(); setModalOpen(true) }

  return (
    <div className="os-page">
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}

      {/* ── HEADER ── */}
      <header className="os-header">
        <div className="os-header__inner">
          <div className="os-header__brand">
            <img
              src="https://znarnia.ru/logo.png"
              alt="Школа Сотниковой Ольги"
              className="os-header__logo"
              width="80"
              height="80"
            />
            <span className="os-header__brand-name">Школа Сотниковой Ольги</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="os-hero">
        <div className="os-hero__inner">

          {/* LEFT: text */}
          <div className="os-hero__content">
            <h1 className="os-hero__title">
              Продолжайте обучение в Знарнии<br/>
              этой осенью&nbsp;🍁
            </h1>
            <div className="os-hero__price-badge">
              <div className="os-hero__price-badge-left">
                <p className="os-hero__sub">Ваше место в группе уже ждёт вас.&nbsp;🍁</p>
                <div className="os-hero__card-label">
                  Специальная цена<br/>только для действующих учеников
                </div>
              </div>
              <div className="os-hero__price-row">
                <span className="os-price-old">5 000&thinsp;₽</span>
                <span className="os-price-arrow">→</span>
                <span className="os-price-new os-price-new--big">3 500&thinsp;₽</span>
              </div>
            </div>

            <div className="os-hero__card">
              <div className="os-checklist">
                <div className="os-checklist__item">
                  <div className="os-checklist__icon">
                    {/* Trophy */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 21h8M12 17v4" stroke="#c2440e" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M5 3h14v8a7 7 0 0 1-14 0V3z" stroke="#c2440e" strokeWidth="1.8" strokeLinejoin="round"/>
                      <path d="M5 6H2.5a1.5 1.5 0 0 0 0 3H5M19 6h2.5a1.5 1.5 0 0 1 0 3H19" stroke="#c2440e" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M9 17h6" stroke="#c2440e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Сохраняете привычного преподавателя</span>
                </div>
                <div className="os-checklist__item">
                  <div className="os-checklist__icon">
                    {/* Pin */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11z" stroke="#c2440e" strokeWidth="1.8" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="2.5" stroke="#c2440e" strokeWidth="1.8"/>
                    </svg>
                  </div>
                  <span>Сохраняете место в группе</span>
                </div>
                <div className="os-checklist__item">
                  <div className="os-checklist__icon">
                    {/* Rocket */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8 6 7 10 7 14l2.5 2.5L12 22l2.5-5.5L17 14c0-4-1-8-5-12z" stroke="#c2440e" strokeWidth="1.8" strokeLinejoin="round"/>
                      <circle cx="12" cy="11" r="2" stroke="#c2440e" strokeWidth="1.6"/>
                      <path d="M7 14c-2 1-3 3-2.5 4.5L9.5 14M17 14c2 1 3 3 2.5 4.5L14.5 14" stroke="#c2440e" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Продолжаете обучение без адаптации в сентябре</span>
                </div>
              </div>

              <button className="os-btn os-btn--primary" onClick={openModal}>
                Сохранить место за 3&thinsp;500&thinsp;₽
              </button>
              <div className="os-hero__card-note">Предложение действует до 31 августа.</div>
            </div>

            <div className="os-platform-banner">
              <div className="os-platform-banner__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M8 21h8M12 17v4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M9 9l2 2 4-4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="os-platform-banner__text">
                <span className="os-platform-banner__label">Новинка осенью</span>
                С сентября занятия проходят на <strong>новой платформе Знарния</strong> — удобнее, быстрее, современнее
              </div>
              <a href="https://znarnia.ru" target="_blank" rel="noopener noreferrer" className="os-platform-banner__btn">
                Знарния →
              </a>
            </div>

          </div>

          {/* RIGHT: photo with quote — grid-cell overlap per img-layout §2.1 */}
          <div className="os-hero__photo-wrap">
            <img
              src="/znarnia/images/sotnikova-osen.png"
              alt="Ольга Сотникова — основатель Школы Знарния"
              className="os-hero__photo"
              width="1148"
              height="1370"
            />
            <div className="os-hero__quote">
              <p className="os-hero__quote-text">
                Я очень рада видеть наших учеников в новом учебном году. До встречи на занятиях!&nbsp;💜
              </p>
              <div className="os-hero__quote-author">
                <strong>Ольга Сотникова</strong>
                <span>основатель Знарнии</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ── SCHOOL LEVELS ── */}
      <section className="os-levels">
        <div className="os-wrap">
          <h2 className="os-levels__title">Что ждёт вашего ребёнка осенью</h2>
          <div className="os-levels__common">
            {[
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M6 11v5a6 6 0 0 0 12 0v-5" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>), text: 'Авторская методика Ольги Сотниковой' },
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M8 21h8M12 17v4" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="2" fill="#6d28d9"/>
                </svg>), text: 'Живые онлайн-занятия в группе 4–8 человек' },
              { icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#6d28d9" strokeWidth="1.8"/>
                  <path d="M10 8l6 4-6 4V8z" fill="#6d28d9"/>
                </svg>), text: 'Записи всех уроков в личном кабинете' },
            ].map((item, i) => (
              <div key={i} className="os-levels__common-item">
                <div className="os-levels__common-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="os-levels__grid">

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">🎒</span>
                <span className="os-levels__col-label">Начальная школа</span>
                <span className="os-levels__col-grade">1–4 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Выходим за рамки школьной программы — даём <strong>глубокое понимание</strong></li>
                <li>Развиваем <strong>логическое мышление</strong> и навык рассуждения</li>
                <li>Работаем с <strong>нестандартными задачами</strong>, а не шаблонами</li>
                <li>Формируем умение анализировать и искать разные решения</li>
                <li>Даём уверенность: ребёнок <strong>понимает</strong>, а не заучивает</li>
              </ul>
            </div>

            <div className="os-levels__col">
              <div className="os-levels__col-head">
                <span className="os-levels__col-icon">📖</span>
                <span className="os-levels__col-label">Средняя школа</span>
                <span className="os-levels__col-grade">5–10 класс</span>
              </div>
              <ul className="os-levels__list">
                <li>Разбираем <strong>основополагающие темы</strong> за текущий класс</li>
                <li>Акцент на <strong>сложных разделах</strong>: текстовые задачи, геометрия, нестандартные задания</li>
                <li>Учим <strong>рассуждать и логически мыслить</strong></li>
                <li>Не бросать задачу, а строить <strong>математическую модель</strong> через рассуждения</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ── */}
      <div className="os-trust-banner">
        <div className="os-wrap">
          <div className="os-trust-banner__inner">
            {[
              { icon: '🛡', text: 'Качественное образование и забота о каждом ребёнке' },
              { icon: '💜', text: 'Тысячи учеников доверяют Знарнии' },
              { icon: '⭐', text: 'Опытные преподаватели и проверенная методика' },
            ].map((b, i) => (
              <div key={i} className="os-trust-banner__item">
                <span className="os-trust-banner__icon">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THANK YOU ── */}
      <section className="os-thanks">
        <div className="os-wrap">
          <div className="os-thanks__inner">
            <div className="os-thanks__left">
              <div className="os-thanks__title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle',marginRight:8}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#c2440e" strokeWidth="1.8" fill="#ede9fe"/>
                </svg>
                Спасибо, что вы с нами!&nbsp;
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle'}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#c2440e" strokeWidth="1.8" fill="none"/>
                </svg>
              </div>
              <p className="os-thanks__desc">
                Мы будем рады продолжить путь вашего ребёнка в Знарнии и в новом учебном году.
              </p>
              <div className="os-thanks__price-label">Стоимость для действующих учеников:</div>
              <div className="os-thanks__price">3 500&thinsp;₽</div>
            </div>
            <div className="os-thanks__right">
              <button className="os-btn os-btn--primary os-btn--lg" onClick={openModal}>
                Сохранить место
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="os-footer">
        <div className="os-wrap">
          <div className="os-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
