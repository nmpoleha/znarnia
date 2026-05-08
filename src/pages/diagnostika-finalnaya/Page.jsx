
import { useState } from 'react'

const SCHEDULE = {
  '1':  [{ id: 's1',  date: '23 мая (сб)', time: '11:30' }],
  '2':  [{ id: 's2',  date: '25 мая (пн)', time: '18:30' }],
  '3':  [{ id: 's3',  date: '26 мая (вт)', time: '18:30' }],
  '4':  [{ id: 's4',  date: '29 мая (пт)', time: '18:30' }],
  '5':  [{ id: 's5',  date: '18 мая (пн)', time: '18:30' }],
  '6':  [{ id: 's6',  date: '19 мая (вт)', time: '18:30' }],
  '7':  [{ id: 's7',  date: '20 мая (ср)', time: '18:30' }],
  '8':  [{ id: 's8',  date: '22 мая (пт)', time: '18:30' }],
  '9':  [],
  '10': [{ id: 's10', date: '30 мая (сб)', time: '11:30' }],
}

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', grade: '', slot: '' })
  const [submitted, setSubmitted] = useState(false)

  const slots = form.grade ? SCHEDULE[form.grade] : null
  const canSubmit = !form.grade || (slots && slots.length === 0) || !!form.slot

  function set(k, v) {
    if (k === 'grade') {
      setForm(f => ({ ...f, grade: v, slot: '' }))
    } else {
      setForm(f => ({ ...f, [k]: v }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="dg-modal-overlay" onClick={onClose}>
      <div className="dg-modal" onClick={e => e.stopPropagation()}>
        <button className="dg-modal__x" onClick={onClose}>×</button>

        {submitted ? (
          <div className="dg-modal__success">
            <div className="dg-modal__success-icon">✓</div>
            <div className="dg-modal__success-title">Заявка принята!</div>
            <div className="dg-modal__success-text">Мы свяжемся с вами в ближайшее время для подтверждения записи</div>
            <button className="dg-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="dg-modal__header">
              <div className="dg-modal__title">Записаться на диагностику</div>
              <div className="dg-modal__price">900&thinsp;₽</div>
            </div>
            <form className="dg-modal__form" onSubmit={handleSubmit}>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Имя</label>
                <input className="dg-modal__input" type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Телефон</label>
                <input className="dg-modal__input" type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Email</label>
                <input className="dg-modal__input" type="email" required placeholder="example@mail.ru" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="dg-modal__group">
                <label className="dg-modal__label">Класс ребёнка</label>
                <select className="dg-modal__select" required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} класс</option>
                  ))}
                </select>
              </div>
              {slots && slots.length > 0 && (
                <div className="dg-modal__group">
                  <label className="dg-modal__label">Дата и время диагностики</label>
                  <div className="dg-modal__slots">
                    {slots.map(s => (
                      <label key={s.id} className={`dg-modal__slot${form.slot === s.id ? ' dg-modal__slot--active' : ''}`}>
                        <input type="radio" name="slot" value={s.id} checked={form.slot === s.id} onChange={() => set('slot', s.id)} />
                        <span className="dg-modal__slot-date">{s.date}</span>
                        <span className="dg-modal__slot-time">{s.time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {slots && slots.length === 0 && (
                <div className="dg-modal__no-slots">
                  Расписание для этого класса уточняется. Оставьте заявку — мы свяжемся с вами и подберём удобное время.
                </div>
              )}
              <button className="dg-modal__submit" type="submit" disabled={!canSubmit}>
                Оплатить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function ContactBar() {
  return (
    <div className="dg-contact-bar">
      <div className="dg-contact-bar__inner">
        <div className="dg-contact-bar__brand">
          <img src="https://znarnia.ru/logo.png" alt="Школа Сотниковой Ольги" className="dg-contact-bar__logo" />
          <span className="dg-contact-bar__name">Школа Сотниковой Ольги</span>
        </div>
        <div className="dg-contact-bar__contacts">
          <a href="mailto:info@znarnia.ru" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>info@znarnia.ru</span>
          </a>
          <a href="https://t.me/sotnikova_oa_school" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
            </svg>
            <span>@sotnikova_oa_school</span>
          </a>
          <a href="https://max.ru/sotnikova_oa_school" className="dg-contact-bar__item">
            <span className="dg-contact-bar__max-icon">M</span>
            <span>написать в Max</span>
          </a>
          <a href="https://wa.me/79955775318" className="dg-contact-bar__item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
            </svg>
            <span>+7 995 577-53-18</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

function Section({ icon, title, items, result, imgSrc }) {
  return (
    <div className="dg-section">
      <div className="dg-section__content">
        <div className="dg-section__head">
          <span className="dg-section__icon">{icon}</span>
          <div className="dg-section__title">{title}</div>
        </div>
        <ul className="dg-section__list">
          {items.map((item, i) => (
            <li key={i}>{nb(item)}</li>
          ))}
        </ul>
        <div className="dg-section__result">{nb(result)}</div>
      </div>
      <div className="dg-section__img-slot">
        {imgSrc && <img src={imgSrc} alt="" className="dg-section__img" />}
      </div>
    </div>
  )
}

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = e => { e.preventDefault(); setModalOpen(true) }

  return (
    <div className="dg-page">
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <ContactBar />
      <div className="dg-page__bg-glow dg-page__bg-glow--1" />
      <div className="dg-page__bg-glow dg-page__bg-glow--2" />

      <div className="dg-wrap">

        {/* HERO */}
        <section className="dg-hero">
          <div className="dg-hero__left">
            <div className="dg-hero__label-tag">Для родителей школьников</div>
            <h1 className="dg-hero__title">
              Онлайн-диагностика<br/><span className="dg-hero__title-accent">обучения ребёнка</span>
            </h1>
            <div className="dg-hero__grade">1–10 класса</div>
            <p className="dg-hero__desc">{nb('За 45 минут определим, что мешает ребёнку учиться: пробелы в знаниях, особенности мышления или трудности в понимании материала.')}</p>

            <div className="dg-hero__benefits">
              {[
                { icon: 'icon-search', title: 'Поймёте реальные причины сложностей', desc: 'Узнаете, что именно мешает ребёнку учиться' },
                { icon: 'icon-chart', title: 'Получите оценку знаний и мышления', desc: 'Проверим ключевые навыки и тип мышления' },
                { icon: 'icon-star', title: nb('Узнаете сильные и слабые стороны ребёнка'), desc: 'На что опираться, а над чем стоит поработать' },
                { icon: 'icon-clipboard', title: 'Получите понятный план действий', desc: 'Рекомендации, которые помогут улучшить результаты' },
              ].map((item, i) => (
                <div key={i} className="dg-hero__benefit">
                  <img src={`/znarnia/images/icons/${item.icon}.png`} className="dg-hero__benefit-icon" alt="" />
                  <div className="dg-hero__benefit-text">
                    <div className="dg-hero__benefit-title">{item.title}</div>
                    <div className="dg-hero__benefit-desc">{nb(item.desc)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dg-hero__cta-row">
              <div className="dg-hero__cta-left">
                <a href="#" className="dg-hero__cta-btn" onClick={openModal}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v3M16 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor"/>
                    <rect x="11" y="13" width="3" height="3" rx="0.5" fill="currentColor"/>
                  </svg>
                  Записаться на онлайн-диагностику
                </a>
                <span className="dg-hero__cta-note">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M2 2 C2 2 2 9 8 9 L8 9 L14 9 M11 6 L14 9 L11 12" stroke="#f97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Всего 1 занятие — польза на месяцы вперёд
                </span>
              </div>
              <div className="dg-hero__cta-price">
                <div className="dg-hero__cta-price-val">900&thinsp;<span className="dg-hero__cta-price-cur">₽</span></div>
                <div className="dg-hero__cta-price-desc">45 минут онлайн + рекомендации</div>
              </div>
            </div>

            <div className="dg-hero__footer-badges">
              {[
                { icon: 'icon-graduation', title: '1–10 класс', desc: 'для школьников' },
                { icon: 'icon-clock', title: '45 минут онлайн', desc: 'удобно из дома' },
                { icon: 'icon-document', title: 'План рекомендаций', desc: 'после занятия' },
              ].map((item, i) => (
                <div key={i} className="dg-hero__footer-badge">
                  <img src={`/znarnia/images/icons/${item.icon}.png`} className="dg-hero__footer-badge-icon" alt="" />
                  <div>
                    <div className="dg-hero__footer-badge-title">{item.title}</div>
                    <div className="dg-hero__footer-badge-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dg-hero__right">
            <div className="dg-hero__card">
              <img
                src="/znarnia/images/who-lesson.png"
                alt="Онлайн-диагностика"
                className="dg-hero__card-photo"
              />
              <div className="dg-hero__card-items-v2">
                {[
                  { title: 'Проверяем мышление', desc: 'Определим особенности мышления и как ребёнок решает задачи' },
                  { title: 'Анализируем знания', desc: 'Выявим пробелы и понимание ключевых тем' },
                  { title: 'Даём рекомендации', desc: 'Вы получите понятный план, что делать дальше' },
                ].map((item, i) => (
                  <div key={i} className="dg-hero__card-item-v2">
                    <svg className="dg-hero__card-item-v2-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="14" fill="#ede9fe"/>
                      <path d="M8 14.5l4.5 4.5 8-9" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <div className="dg-hero__card-item-v2-title">{item.title}</div>
                      <div className="dg-hero__card-item-v2-desc">{nb(item.desc)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <div className="dg-who">
          <div className="dg-who__title">Кому подойдёт диагностика</div>
          <p className="dg-who__desc">{nb('Если вы замечаете у ребёнка сложности в обучении, диагностика поможет понять, где именно причина и что делать дальше.')}</p>
          <div className="dg-who__layout">
            <img src="/znarnia/images/who-center.png" alt="" className="dg-who__bg-image" />
            <div className="dg-who__col">
              {[
                { icon: '?', text: 'не понимает математику' },
                { icon: '!', text: 'боится контрольных' },
                { icon: '×', text: 'делает ошибки в знакомых темах' },
              ].map((item, i) => (
                <div key={i} className="dg-who__card">
                  <div className="dg-who__icon">{item.icon}</div>
                  <div className="dg-who__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
            <div className="dg-who__spacer" />
            <div className="dg-who__col">
              {[
                { icon: '→', text: 'занимается, но результата нет' },
                { icon: '↗', text: 'переходит в новый класс' },
                { icon: '✓', text: 'готовится к ВПР, ОГЭ или ЕГЭ' },
              ].map((item, i) => (
                <div key={i} className="dg-who__card">
                  <div className="dg-who__icon">{item.icon}</div>
                  <div className="dg-who__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PART 1 */}
        <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 1</div>
            <div className="dg-part__title">{nb('Работа с ребёнком')}</div>
          </div>

          <div className="dg-sections">
            <Section
              icon="✦"
              title={nb('Как он думает?')}
              items={[
                'анализируем уровень логического мышления',
                'смотрим, как он выстраивает рассуждение',
                'оцениваем самостоятельность в принятии решений',
              ]}
              result="Вы поймёте, как устроено его мышление: умеет ли он рассуждать или действует наугад"
              imgSrc="/znarnia/images/section-thinking.png"
            />
            <Section
              icon="✦"
              title={nb('Что он на самом деле знает?')}
              items={[
                'выявляем пробелы в ключевых темах',
                'проверяем базу не только за текущий, но и за предыдущие классы',
                'оцениваем глубину понимания',
              ]}
              result='Станет ясно, где именно «проседает фундамент» и что мешает двигаться дальше'
              imgSrc="/znarnia/images/section-knowledge.png"
            />
            <Section
              icon="✦"
              title={nb('Как он учится?')}
              items={[
                'смотрим, как он воспринимает объяснения',
                'проверяем, может ли сразу применять новые знания',
                'оцениваем включённость и скорость',
              ]}
              result="Вы увидите, какой формат обучения ему подходит и почему текущий может не работать"
              imgSrc="/znarnia/images/section-learning.png"
            />
          </div>

          <div className="dg-callout">
            <div className="dg-callout__title">
              <span className="dg-callout__line">{nb('Это не пробный урок,')}</span>
              <span className="dg-callout__line">это глубокая диагностика</span>
            </div>
            <div className="dg-callout__text">
              {nb('Мы смотрим не только на правильные и неправильные ответы.')}<br />
              {nb('Нам важно понять, как ребёнок рассуждает, где теряет уверенность и почему ошибки повторяются.')}
            </div>
          </div>
        </section>

        {/* PART 2 */}
        <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 2</div>
            <div className="dg-part__title">{nb('💡 Разбор с родителями — превращаем диагностику в план')}</div>
          </div>
          <div className="dg-part--2">
            <p className="dg-part__desc">{nb('Сразу после урока вы получаете не общее мнение, а чёткое понимание ситуации и конкретные шаги:')}</p>
            <div className="dg-plan-cards">
              {[
                { icon: '?', text: 'почему у ребёнка снижается мотивация' },
                { icon: '!', text: 'в чём реальные причины сложностей в учёбе' },
                { icon: '↓', text: 'где пробелы и как они влияют на текущие результаты' },
                { icon: '→', text: 'что делать уже сейчас, чтобы улучшить успеваемость' },
              ].map((item, i) => (
                <div key={i} className="dg-plan-card">
                  <div className="dg-plan-card__icon">{item.icon}</div>
                  <div className="dg-plan-card__text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULT */}
        <section className="dg-result">
          <div className="dg-result__title">{nb('Вы уходите не с вопросами, а с готовым планом действий')}</div>
          <p className="dg-result__text">{nb('Один урок поможет понять больше, чем месяцы догадок и тревоги: что мешает ребёнку, с чего начать и как улучшить результат.')}</p>
          <img className="dg-result__image" src="/znarnia/lampochka.png" alt="" />
          <a href="#" className="dg-result__btn" onClick={openModal}>Записаться на диагностический урок</a>
        </section>

        <footer className="dg-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
