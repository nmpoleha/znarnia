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
        <circle cx="18" cy="13" r="5" stroke="#6d28d9" strokeWidth="1.8"/>
        <path d="M8 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Ребёнок начинает учебный год без стресса',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <circle cx="13" cy="13" r="4" stroke="#6d28d9" strokeWidth="1.8"/>
        <circle cx="23" cy="13" r="4" stroke="#6d28d9" strokeWidth="1.8"/>
        <path d="M5 28c0-4.4 3.6-8 8-8h10c4.4 0 8 3.6 8 8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Не нужно искать новую группу в сентябре',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <path d="M12 20l3 3 9-9" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8v4M18 24v4M8 18h4M24 18h4" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    text: 'Сохраняется комфортный темп обучения',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#ede9fe"/>
        <path d="M18 10l2.5 5 5.5.8-4 3.9.95 5.5L18 22.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
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
              Продолжайте обучение<br/>
              в Знарнии этой осенью&nbsp;🍁
            </h1>
            <p className="os-hero__sub">Ваше место в группе уже ждёт вас.</p>

            <div className="os-hero__card">
              <div className="os-hero__card-label">
                Специальная цена<br/>только для действующих учеников
              </div>
              <div className="os-hero__price-row">
                <span className="os-price-old">5 000&thinsp;₽</span>
                <span className="os-price-arrow">→</span>
                <span className="os-price-new os-price-new--big">3 500&thinsp;₽</span>
              </div>

              <ul className="os-checklist">
                {[
                  'Сохраняете привычного преподавателя',
                  'Сохраняете место в группе',
                  'Продолжаете обучение без адаптации в сентябре',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="os-check">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#22c55e"/>
                        <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="os-btn os-btn--primary" onClick={openModal}>
                Сохранить место за 3&thinsp;500&thinsp;₽
              </button>
              <div className="os-hero__card-note">Предложение действует до 31 августа.</div>
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

      {/* ── BENEFITS ── */}
      <section className="os-benefits">
        <div className="os-wrap">
          <h2 className="os-benefits__title">Почему родители бронируют место заранее</h2>
          <div className="os-benefits__grid">
            {BENEFITS.map((b, i) => (
              <div key={i} className="os-benefit">
                <div className="os-benefit__icon">{b.icon}</div>
                <p className="os-benefit__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THANK YOU ── */}
      <section className="os-thanks">
        <div className="os-wrap">
          <div className="os-thanks__inner">
            <div className="os-thanks__left">
              <div className="os-thanks__title">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle',marginRight:8}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#6d28d9" strokeWidth="1.8" fill="#ede9fe"/>
                </svg>
                Спасибо, что вы с нами!&nbsp;
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none" style={{verticalAlign:'middle'}}>
                  <path d="M14 24S4 17.5 4 10a6 6 0 0 1 10-4.5A6 6 0 0 1 24 10c0 7.5-10 14-10 14z" stroke="#6d28d9" strokeWidth="1.8" fill="none"/>
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
          <div className="os-footer__badges">
            {[
              { icon: '🛡', text: 'Качественное образование и забота о каждом ребёнке' },
              { icon: '💜', text: 'Тысячи учеников доверяют Знарнии' },
              { icon: '⭐', text: 'Опытные преподаватели и проверенная методика' },
            ].map((b, i) => (
              <div key={i} className="os-footer__badge">
                <span className="os-footer__badge-icon">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
          <div className="os-footer__copy">© 2026 Школа Сотниковой Ольги</div>
        </div>
      </footer>
    </div>
  )
}
