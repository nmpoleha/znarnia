import { useState } from 'react'

function Modal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', grade: '' })
  const [submitted, setSubmitted] = useState(false)

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="lk-modal-overlay" onClick={onClose}>
      <div className="lk-modal" onClick={e => e.stopPropagation()}>
        <button className="lk-modal__x" onClick={onClose}>×</button>
        {submitted ? (
          <div className="lk-modal__success">
            <div className="lk-modal__success-icon">✓</div>
            <div className="lk-modal__success-title">Заявка принята!</div>
            <div className="lk-modal__success-text">Мы свяжемся с вами в ближайшее время</div>
            <button className="lk-modal__close-btn" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div className="lk-modal__header">
              <div className="lk-modal__title">Записаться на летний курс</div>
              <div className="lk-modal__subtitle">Выберем подходящий формат вместе</div>
            </div>
            <form className="lk-modal__form" onSubmit={handleSubmit}>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Имя</label>
                <input className="lk-modal__input" type="text" required placeholder="Ваше имя" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Телефон</label>
                <input className="lk-modal__input" type="tel" required placeholder="+7 000 000-00-00" value={form.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div className="lk-modal__group">
                <label className="lk-modal__label">Класс ребёнка</label>
                <select className="lk-modal__select" required value={form.grade} onChange={e => set('grade', e.target.value)}>
                  <option value="">Выберите класс</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} класс</option>
                  ))}
                </select>
              </div>
              <button className="lk-modal__submit" type="submit">Записаться</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const FORMATS = [
  {
    id: 'stelat',
    badge: 'С 1 июня',
    color: 'purple',
    title: 'Полный курс',
    features: [
      { icon: 'clock', text: '40 уроков' },
      { icon: 'check', text: '2 этапа обучения' },
    ],
    desc: 'Плавное включение в учебный ритм и системная подготовка',
    price: '21 600',
  },
  {
    id: 'main',
    badge: 'С 22 июня',
    color: 'green',
    title: 'Основной поток',
    features: [
      { icon: 'check', text: '28 уроков' },
      { icon: 'check', text: '1 этап обучения' },
    ],
    desc: 'Для детей, готовых сразу включиться в основной учебный ритм',
    price: '17 600',
  },
  {
    id: 'august',
    badge: 'Август',
    color: 'orange',
    title: 'Умный август',
    features: [
      { icon: 'check', text: '20 уроков' },
    ],
    desc: 'Подготовка к новому учебному году и закрытие пробелов',
    price: '10 800',
  },
  {
    id: 'zapis',
    badge: 'В любое время',
    color: 'blue',
    title: 'Занятия в записи',
    features: [
      { icon: 'check', text: 'Без фиксированного расписания' },
    ],
    desc: 'Смотрите уроки в удобное время — без привязки к расписанию',
    price: '15 000',
  },
]

const FORMAT_DETAILS = {
  stelat: {
    color: 'purple',
    label: 'ПОЛНЫЙ КУРС',
    content: (
      <div className="lk-detail__body">
        <p className="lk-detail__intro">Полная программа подготовки к учебному году: от восстановления базы до развития логики и уверенного мышления. Чтобы ребёнок вошёл в сентябрь спокойно, собранно и с ощущением «я справлюсь».</p>

        {/* Этап 1 */}
        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">1 Этап</span>
          <span className="lk-detail__stage-desc">Мягкий старт — закрываем пробелы и выстраиваем базу</span>
          <span className="lk-detail__stage-date">с 1 по 21 июня</span>
        </div>
        {/* Формат — flow */}
        <div className="lk-s1__flow">
          <div className="lk-s1__flow-step">📖 Объяснение</div>
          <div className="lk-s1__flow-arrow">→</div>
          <div className="lk-s1__flow-step">✏️ Практика</div>
          <div className="lk-s1__flow-arrow">→</div>
          <div className="lk-s1__flow-step">🏆 Результат</div>
        </div>

        {/* Уроки */}
        <div className="lk-s1__counts">
          <div className="lk-s1__school-block">
            <div className="lk-s1__school-label">Начальная школа</div>
            <div className="lk-s1__count-row lk-s1__count-row--col">
              <div className="lk-s1__count-card"><b>6</b><span>базовых&nbsp;урока · 30&nbsp;мин</span></div>
              <div className="lk-s1__count-card"><b>6</b><span>уроков продвинутого&nbsp;уровня</span></div>
            </div>
          </div>
          <div className="lk-s1__school-block">
            <div className="lk-s1__school-label">Средняя школа</div>
            <div className="lk-s1__count-row">
              <div className="lk-s1__count-card lk-s1__count-card--wide lk-s1__count-card--tall">
                <div className="lk-s1__count-num-col">
                  <b>12</b>
                  <small>тренажёров<br/>по 30&nbsp;мин</small>
                </div>
                <ul className="lk-s1__card-list">
                  <li>систематизация знаний</li>
                  <li>устранение пробелов</li>
                  <li>повышение качества решений</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#7c3aed" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Смотрим <b>в удобное время</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16l-7-4-7 4V4z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Сохраняем знания</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#7c3aed" strokeWidth="2"/><path d="M16.5 16.5l4 4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></span><span><b>Восполняем пробелы</b> и разминка для ума</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Теория + сразу практика — <b>удобный и эффективный формат</b></span></div>
        </div>

        {/* Этап 2 */}
        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">2 Этап</span>
          <span className="lk-detail__stage-desc">Основной этап — уверенность и результат</span>
          <span className="lk-detail__stage-date">с 22 июня</span>
        </div>
        {/* Уроки 2 этапа */}
        <div className="lk-s1__counts" style={{marginTop:'14px'}}>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>2</b><span>онлайн-урока в неделю · 60&nbsp;мин</span>
          </div>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>1</b><span>урок-тренажёр в неделю</span>
          </div>
        </div>

        {/* Преимущества */}
        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Выходим за рамки школьной программы — даём <b>глубокое понимание</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Развиваем <b>логическое мышление</b> и навык рассуждения</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="5" stroke="#7c3aed" strokeWidth="2"/><path d="M13 13l7 7M17 17l-2 2" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Работаем с <b>нестандартными задачами</b>, а не шаблонами</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#7c3aed" strokeWidth="2"/><path d="M16.5 16.5l4 4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Формируем умение анализировать и искать разные решения</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Даём уверенность: ребёнок <b>понимает</b>, а не заучивает</span></div>
        </div>

        {/* Результат */}
        <div className="lk-detail__result-label" style={{marginTop:'16px'}}>Результат</div>
        <div className="lk-s1__benefits" style={{background:'#f0fdf4'}}>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Находим и закрываем <b>конкретные пробелы</b> в знаниях</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>С 1 сентября ребёнок опирается на <b>прочную базу</b> и включается в урок</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Уходит сопротивление учёбе — появляется <b>уверенность и мотивация</b></span></div>
        </div>

        <div className="lk-russian-promo">
          <div className="lk-russian-promo__header">
            <div className="lk-russian-promo__label">Также доступно</div>
            <div className="lk-russian-promo__title">Летний русский язык</div>
            <div className="lk-russian-promo__meta">1–10 класс · 20 уроков по 30–40 мин · с 15 июня</div>
          </div>
          <div className="lk-russian-promo__body">
            <div className="lk-russian-promo__flow">
              <div className="lk-russian-promo__step"><b>Краткая теория (3–4 мин)</b> — только суть, без перегрузки</div>
              <div className="lk-russian-promo__step"><b>Практика сразу после объяснения</b> — правило закрепляется, а не забывается</div>
              <div className="lk-russian-promo__step"><b>Разбор ошибок</b> — ребёнок понимает, а не заучивает</div>
              <div className="lk-russian-promo__step"><b>Переход к новой теме</b> — без пробелов и потери материала</div>
            </div>
          </div>
          <div className="lk-russian-promo__footer">
            <div className="lk-russian-promo__summary">Каждый урок = понимание + закрепление + уверенность</div>
            <div className="lk-russian-promo__prices">
              <div className="lk-russian-promo__price-row">
                <span>Только математика</span><b>21&thinsp;600&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row">
                <span>Только русский</span><b>12&thinsp;000&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row lk-russian-promo__price-row--accent">
                <span>Математика + русский</span><b>36&thinsp;600&thinsp;₽</b>
              </div>
            </div>
          </div>
        </div>

      </div>
    ),
  },
  main: {
    color: 'green',
    label: 'ОСНОВНОЙ ПОТОК',
    labelCount: '28 уроков',
    content: (
      <div className="lk-detail__body">
        <p className="lk-detail__intro">Регулярные занятия помогают сохранить знания летом, развить логическое мышление и уверенно войти в учебный год. Ребёнок начинает понимать материал глубже и спокойнее справляется с задачами.</p>
        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">Уверенность и результат</span>
          <span className="lk-detail__stage-date">с 22 июня</span>
        </div>

        <div className="lk-s1__counts" style={{marginTop:'14px'}}>
          <div className="lk-s1__count-card lk-s1__count-card--green" style={{flex:'0 0 auto'}}>
            <b>2</b><span>онлайн-урока в неделю · 60&nbsp;мин</span>
          </div>
          <div className="lk-s1__count-card lk-s1__count-card--green" style={{flex:'0 0 auto'}}>
            <b>1</b><span>урок-тренажёр в неделю</span>
          </div>
        </div>

        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7v10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Выходим за рамки школьной программы — даём <b>глубокое понимание</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Развиваем <b>логическое мышление</b> и навык рассуждения</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="5" stroke="#16a34a" strokeWidth="2"/><path d="M13 13l7 7M17 17l-2 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Работаем с <b>нестандартными задачами</b>, а не шаблонами</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#16a34a" strokeWidth="2"/><path d="M16.5 16.5l4 4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Формируем умение анализировать и искать разные решения</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Даём уверенность: ребёнок <b>понимает</b>, а не заучивает</span></div>
        </div>

        <div className="lk-detail__result-label" style={{marginTop:'16px'}}>Результат</div>
        <div className="lk-s1__benefits" style={{background:'#f0fdf4'}}>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Поддерживаем уровень знаний — <b>без летнего провала</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>С 1 сентября ребёнок опирается на <b>прочную базу</b> и включается в урок</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Уходит сопротивление учёбе — появляется <b>уверенность и мотивация</b></span></div>
        </div>

        <div className="lk-russian-promo">
          <div className="lk-russian-promo__header">
            <div className="lk-russian-promo__label">Также доступно</div>
            <div className="lk-russian-promo__title">Летний русский язык</div>
            <div className="lk-russian-promo__meta">1–10 класс · 20 уроков по 30–40 мин · с 15 июня</div>
          </div>
          <div className="lk-russian-promo__body">
            <div className="lk-russian-promo__flow">
              <div className="lk-russian-promo__step"><b>Краткая теория (3–4 мин)</b> — только суть, без перегрузки</div>
              <div className="lk-russian-promo__step"><b>Практика сразу после объяснения</b> — правило закрепляется, а не забывается</div>
              <div className="lk-russian-promo__step"><b>Разбор ошибок</b> — ребёнок понимает, а не заучивает</div>
              <div className="lk-russian-promo__step"><b>Переход к новой теме</b> — без пробелов и потери материала</div>
            </div>
          </div>
          <div className="lk-russian-promo__footer">
            <div className="lk-russian-promo__summary">Каждый урок = понимание + закрепление + уверенность</div>
            <div className="lk-russian-promo__prices">
              <div className="lk-russian-promo__price-row">
                <span>Только математика</span><b>17&thinsp;600&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row">
                <span>Только русский</span><b>12&thinsp;000&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row lk-russian-promo__price-row--accent">
                <span>Математика + русский</span><b>29&thinsp;600&thinsp;₽</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  august: {
    color: 'orange',
    label: 'УМНЫЙ АВГУСТ',
    content: (
      <div className="lk-detail__body">
        <p className="lk-detail__intro">Чтобы в сентябре ребёнок не растерялся на первых уроках, важно заранее восстановить базу и учебный ритм. Этот курс помогает мягко вернуться в обучение, закрыть пробелы и почувствовать уверенность перед школой.</p>

        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">Восстановление базы</span>
          <span className="lk-detail__stage-date">Август</span>
        </div>

        <div className="lk-s1__counts" style={{marginTop:'14px'}}>
          <div className="lk-s1__count-card lk-s1__count-card--orange" style={{flex:'0 0 auto'}}>
            <b>8</b><span>онлайн-уроков · 60&nbsp;мин</span>
          </div>
          <div className="lk-s1__count-card lk-s1__count-card--orange" style={{flex:'0 0 auto'}}>
            <b>12</b><span>уроков-тренажёров</span>
          </div>
        </div>

        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#ea580c" strokeWidth="2"/><path d="M16.5 16.5l4 4" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Подбор тем <b>по результатам тестирования</b> — работаем точечно</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16l-7-4-7 4V4z" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Повторение <b>ключевых тем</b> перед учебным годом</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Теория + сразу практика — <b>быстрое восстановление</b> навыков</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Восстанавливаем <b>учебный ритм</b> — ребёнок готов к сентябрю</span></div>
        </div>

        <div className="lk-detail__result-label" style={{marginTop:'16px'}}>Результат</div>
        <div className="lk-s1__benefits" style={{background:'#fff7ed'}}>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Закрыты <b>конкретные пробелы</b> в знаниях</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Ребёнок <b>не растеряется</b> на первых уроках в сентябре</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#ea580c" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Уверенность и <b>готовность к учебному году</b></span></div>
        </div>

        <div className="lk-russian-promo">
          <div className="lk-russian-promo__header">
            <div className="lk-russian-promo__label">Также доступно</div>
            <div className="lk-russian-promo__title">Летний русский язык</div>
            <div className="lk-russian-promo__meta">1–10 класс · 20 уроков по 30–40 мин · с 15 июня</div>
          </div>
          <div className="lk-russian-promo__body">
            <div className="lk-russian-promo__flow">
              <div className="lk-russian-promo__step"><b>Краткая теория (3–4 мин)</b> — только суть, без перегрузки</div>
              <div className="lk-russian-promo__step"><b>Практика сразу после объяснения</b> — правило закрепляется, а не забывается</div>
              <div className="lk-russian-promo__step"><b>Разбор ошибок</b> — ребёнок понимает, а не заучивает</div>
              <div className="lk-russian-promo__step"><b>Переход к новой теме</b> — без пробелов и потери материала</div>
            </div>
          </div>
          <div className="lk-russian-promo__footer">
            <div className="lk-russian-promo__summary">Каждый урок = понимание + закрепление + уверенность</div>
            <div className="lk-russian-promo__prices">
              <div className="lk-russian-promo__price-row">
                <span>Только математика</span><b>10&thinsp;800&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row">
                <span>Только русский</span><b>12&thinsp;000&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row lk-russian-promo__price-row--accent">
                <span>Математика + русский</span><b>22&thinsp;800&thinsp;₽</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  zapis: {
    color: 'blue',
    label: 'ЗАНЯТИЯ В ЗАПИСИ',
    content: (
      <div className="lk-detail__body">
        <p className="lk-detail__intro">Доступ к урокам в любое время — без расписания и привязки к датам. Ребёнок занимается в удобном темпе, возвращается к сложным темам сколько нужно и двигается вперёд без спешки.</p>

        <div className="lk-detail__stage-header">
          <span className="lk-detail__stage-num">В удобном темпе</span>
          <span className="lk-detail__stage-date">В любое время</span>
        </div>

        <div className="lk-s1__counts" style={{marginTop:'14px'}}>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>40</b><span>уроков-тренажёров</span>
          </div>
          <div className="lk-s1__count-card" style={{flex:'0 0 auto'}}>
            <b>∞</b><span>повторных просмотров</span>
          </div>
        </div>

        <div className="lk-s1__benefits">
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg></span><span>Смотрим <b>в любое удобное время</b> — нет привязки к расписанию</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16l-7-4-7 4V4z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Доступ к урокам сохраняется — можно <b>вернуться к любой теме</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Авторские уроки-тренажёры — <b>понимание, а не заучивание</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Подходит для <b>самостоятельного изучения</b> в своём ритме</span></div>
        </div>

        <div className="lk-detail__result-label" style={{marginTop:'16px'}}>Результат</div>
        <div className="lk-s1__benefits" style={{background:'#eff6ff'}}>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Закрыты <b>пробелы в ключевых темах</b></span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Ребёнок занимается <b>без стресса</b> — в удобном темпе</span></div>
          <div className="lk-s1__benefit"><span className="lk-s1__benefit-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span>Уверенность и <b>готовность к учебному году</b></span></div>
        </div>

        <div className="lk-russian-promo">
          <div className="lk-russian-promo__header">
            <div className="lk-russian-promo__label">Также доступно</div>
            <div className="lk-russian-promo__title">Летний русский язык</div>
            <div className="lk-russian-promo__meta">1–10 класс · 20 уроков по 30–40 мин · с 15 июня</div>
          </div>
          <div className="lk-russian-promo__body">
            <div className="lk-russian-promo__flow">
              <div className="lk-russian-promo__step"><b>Краткая теория (3–4 мин)</b> — только суть, без перегрузки</div>
              <div className="lk-russian-promo__step"><b>Практика сразу после объяснения</b> — правило закрепляется, а не забывается</div>
              <div className="lk-russian-promo__step"><b>Разбор ошибок</b> — ребёнок понимает, а не заучивает</div>
              <div className="lk-russian-promo__step"><b>Переход к новой теме</b> — без пробелов и потери материала</div>
            </div>
          </div>
          <div className="lk-russian-promo__footer">
            <div className="lk-russian-promo__summary">Каждый урок = понимание + закрепление + уверенность</div>
            <div className="lk-russian-promo__prices">
              <div className="lk-russian-promo__price-row">
                <span>Только математика</span><b>15&thinsp;000&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row">
                <span>Только русский</span><b>12&thinsp;000&thinsp;₽</b>
              </div>
              <div className="lk-russian-promo__price-row lk-russian-promo__price-row--accent">
                <span>Математика + русский</span><b>27&thinsp;000&thinsp;₽</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
}

const COMPARISON = [
  { param: 'Старт',                  stelat: '1 июня',    main: '22 июня',  august: 'Август',    zapis: 'В любое время' },
  { param: 'Онлайн-уроки',           stelat: '18',        main: '18',       august: '8',         zapis: false           },
  { param: 'Тренажёры',              stelat: '22',        main: '10',       august: '12',        zapis: '10'            },
  { param: 'Занятия в записи',       stelat: true,        main: true,       august: true,        zapis: true            },
  { param: 'Плавная адаптация',      stelat: true,        main: false,      august: false,       zapis: false           },
  { param: 'Количество уроков',      stelat: '40',        main: '28',       august: '20',        zapis: '40'            },
  { param: 'Стоимость',              stelat: '21 600 ₽', main: '17 600 ₽', august: '10 800 ₽', zapis: '15 000 ₽', highlight: true },
]

function CmpCell({ value, color }) {
  if (value === true) return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if (value === false) return <span style={{color:'#d1d5db',fontSize:'16px',fontWeight:400}}>—</span>
  return value
}


const WHO_FOR = [
  'Ребёнок быстро забывает материал летом',
  'Есть пробелы в базовых темах',
  'Сложности с текстовыми задачами',
  'Нужна спокойная системная практика',
  'Хотите уверенно начать новый учебный год',
]

const FAQ = [
  { q: 'Сколько длится урок?',     a: 'Урок длится 30–40 минут — оптимальный формат для концентрации и усвоения.' },
  { q: 'Можно ли смотреть записи?', a: 'Да, записи всех уроков сохраняются и доступны в любое время.' },
  { q: 'Как проходят тренажёры?',  a: 'Тренажёры — самостоятельные задания по инструкции, которые ребёнок выполняет в удобное время.' },
  { q: 'Чем отличаются форматы?',  a: 'Форматы отличаются объёмом уроков, темпом и датой старта. Полный курс — самый постепенный, Умный август — самый сжатый.' },
  { q: 'Есть ли домашние задания?', a: 'Нет, домашние задания не задаются. Тренажёры встроены в учебный план и заменяют ДЗ.' },
]

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconRocket() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#ede9fe"/>
      <path d="M28 13C23 13 19 19 19 27v9h18v-9c0-8-4-14-9-14z" fill="#7c3aed"/>
      <circle cx="28" cy="25" r="3.5" fill="#ede9fe"/>
      <path d="M19 32 L13 38 L19 36Z" fill="#7c3aed"/>
      <path d="M37 32 L43 38 L37 36Z" fill="#7c3aed"/>
      <ellipse cx="28" cy="37" rx="5" ry="3" fill="#7c3aed"/>
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#dcfce7"/>
      <rect x="14" y="19" width="28" height="22" rx="3" fill="#16a34a"/>
      <rect x="14" y="19" width="28" height="8" rx="3" fill="#16a34a"/>
      <path d="M21 15v7M35 15v7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M21 32l4 4 10-8" stroke="#dcfce7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#fff7ed"/>
      <circle cx="28" cy="28" r="16" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="28" cy="28" r="10" stroke="#f97316" strokeWidth="2.5"/>
      <circle cx="28" cy="28" r="4.5" fill="#f97316"/>
      <path d="M28 12v5M28 39v5M12 28h5M39 28h5" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function IconPlay() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="28" fill="#dbeafe"/>
      <rect x="13" y="17" width="30" height="22" rx="4" fill="#2563eb"/>
      <polygon points="24,22 24,35 37,28.5" fill="#dbeafe"/>
    </svg>
  )
}

export default function Page() {
  const [openFormat, setOpenFormat] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [showModal, setShowModal] = useState(false)

  function toggleFormat(id) {
    setOpenFormat(prev => prev === id ? null : id)
  }

  const openDetail = openFormat ? FORMAT_DETAILS[openFormat] : null

  return (
    <div className="lk-page">

      {/* Contact bar */}
      <div className="lk-topbar">
        <div className="lk-topbar__inner">
          <div className="lk-topbar__brand">
            <img src="https://znarnia.ru/logo.png" alt="Школа Сотниковой Ольги" className="lk-topbar__logo" />
            <span className="lk-topbar__name">Школа Сотниковой Ольги</span>
          </div>
          <div className="lk-topbar__contacts">
            <a href="mailto:info@znarnia.ru" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://max.ru/sotnikova_oa_school" className="lk-topbar__item">
              <span className="lk-topbar__max-icon">M</span>
              <span>написать в Max</span>
            </a>
            <a href="https://wa.me/79955775318" className="lk-topbar__item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="lk-hero">
        <div className="lk-hero__inner">
          <div className="lk-hero__content">
            <h1 className="lk-hero__title">
              Летняя программа<br/>по математике<br/>
              <span className="lk-hero__accent">для 1–10 классов</span>
            </h1>
            <ul className="lk-hero__points">
              <li>Сохраняем уровень знаний летом</li>
              <li>Устраняем пробелы в программе</li>
              <li>Готовим к новому учебному году</li>
            </ul>
            <div className="lk-hero__actions">
              <button className="lk-hero__cta" onClick={() => setShowModal(true)}>
                Выбрать формат
              </button>
              <div className="lk-hero__badges">
                <div className="lk-hero__badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6d28d9" strokeWidth="2"/>
                    <path d="M8 21h8M12 17v4" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Онлайн-уроки
                </div>
                <div className="lk-hero__badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6d28d9" strokeWidth="2"/>
                    <path d="M7 8h10M7 12h6M7 16h8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Тренажёры
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="lk-formats" id="formats">
        <div className="lk-wrap">
          <h2 className="lk-heading">Выберите формат обучения</h2>
          <div className="lk-formats__grid">
            {FORMATS.map(f => (
              <article key={f.id} className={`lk-card lk-card--${f.color}${openFormat === f.id ? ' lk-card--active' : ''}`}>
                <span className="lk-card__badge">{f.badge}</span>
                <div className="lk-card__top">
                  <h3 className="lk-card__title">{f.title}</h3>
                  <div className="lk-card__icon" aria-hidden="true">
                    {f.id === 'stelat' && <IconRocket />}
                    {f.id === 'main'   && <IconCalendar />}
                    {f.id === 'august' && <IconTarget />}
                    {f.id === 'zapis'  && <IconPlay />}
                  </div>
                </div>
                <ul className="lk-card__feats">
                  {f.features.map((feat, i) => (
                    <li key={i}>
                      <span className="lk-card__feat-icon">
                        {feat.icon === 'clock' ? <IconClock /> : <IconCheck />}
                      </span>
                      {feat.text}
                    </li>
                  ))}
                </ul>
                <p className="lk-card__desc">{f.desc}</p>
                <div className="lk-card__price">{f.price}&thinsp;₽</div>
                <button className="lk-card__more" onClick={() => toggleFormat(f.id)}>
                  Подробнее&nbsp;{openFormat === f.id ? '▲' : '▼'}
                </button>
              </article>
            ))}
          </div>

          {openDetail && (
            <div className={`lk-detail lk-detail--${openDetail.color}`}>
              <div className="lk-detail__label">
                {openDetail.label}
                {openDetail.labelCount && <span className="lk-detail__label-count">{openDetail.labelCount}</span>}
                <span className="lk-detail__price">{FORMATS.find(f => f.id === openFormat)?.price}&thinsp;₽</span>
              </div>
              {openDetail.content}
              <div className="lk-detail__btns">
                <button className={`lk-detail__btn lk-detail__btn--${openDetail.color}`} onClick={() => setShowModal(true)}>Забронировать место</button>
                <button className={`lk-detail__btn lk-detail__btn--outline lk-detail__btn--outline-${openDetail.color}`} onClick={() => setShowModal(true)}>Купить курс</button>
              </div>
            </div>
          )}

          <div className="lk-indiv__card">
            <div className="lk-indiv__label">Индивидуальные<br/>занятия</div>
            <div className="lk-indiv__info">
              <span className="lk-indiv__price-line">До 1 июня — <b>14 400 ₽</b> за 8 уроков <span className="lk-indiv__note">(цена фиксируется на учебный год)</span></span>
              <span className="lk-indiv__price-line">После 1 июня — <b>15 200 ₽</b></span>
            </div>
            <div className="lk-indiv__count">
              <span className="lk-indiv__count-num">8</span>
              <span className="lk-indiv__count-label">уроков</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson block */}
      <section className="lk-lesson-section">
        <div className="lk-wrap">
          <div className="lk-lesson-banner">
            <span className="lk-lesson-banner__accent">Авторские уроки-тренажёры Ольги Сотниковой</span> построены на принципе активного обучения: объяснение, практика, анализ и следующий шаг. Такой подход помогает ребёнку не теряться в теме, а постепенно разбирать её до уверенного понимания и самостоятельного решения задач.
          </div>

          <div className="lk-lesson-card">
            <div className="lk-lesson-card__head">
              <div>
                <div className="lk-lesson-card__title">Интерактивный урок-тренажёр</div>
                <div className="lk-lesson-card__sub">Системное освоение темы через цикл «теория → практика → закрепление»</div>
              </div>
            </div>
            <div className="lk-lesson-card__body">
              <div className="lk-lesson-card__left">
                <div className="lk-lesson-meta">
                  <div className="lk-lesson-meta__item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/></svg>
                    Длительность: 30–40 минут
                  </div>
                  <div className="lk-lesson-meta__item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/></svg>
                    Урок можно проходить в удобное время
                  </div>
                </div>
                <div>
                  <div className="lk-lesson-how-title">Как устроен урок:</div>
                  <ul className="lk-lesson-checklist">
                    {[
                      'Короткое объяснение ключевой темы',
                      'Сразу — применение на практике',
                      'Мгновенная обратная связь по каждому заданию',
                      'При необходимости — разбор решений',
                      'Переход к следующему элементу темы',
                    ].map((item, i) => (
                      <li key={i}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#6d28d9" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lk-lesson-card__right">
                <div className="lk-lesson-preview">
                  <img src="/znarnia/images/lesson-screen.png" alt="Пример урока-тренажёра" className="lk-lesson-preview__img" width="440" height="330" loading="lazy" />
                  <div className="lk-lesson-preview__badge">⭐ Отлично!<br />+10 баллов</div>
                </div>
              </div>
            </div>
            <div className="lk-lesson-callout">
              Каждый урок выстроен как последовательность повторяющихся циклов:<br />
              объяснение → практика → анализ → следующий шаг.<br />
              Ребёнок не просто знакомится с темой, а последовательно прорабатывает каждый её элемент до понимания.
            </div>
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="lk-platform">
        <div className="lk-wrap">
          <div className="lk-platform__header">
            <div className="lk-platform__tag">Платформа</div>
            <h2 className="lk-platform__title">«Знарния» — образовательная онлайн-среда для комфортного обучения детей</h2>
          </div>
          <p className="lk-platform__desc">Все занятия, домашние задания, аналитика и обратная связь собраны в одном месте — без переключений между сервисами и потери внимания.</p>
          <ul className="lk-platform__features">
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10.5z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Собственная платформа',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 20h9" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Интерактивная онлайн-доска',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Задания и проверка в реальном времени',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Игровая система мотивации',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Аналитика для родителей',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="#6d28d9" strokeWidth="2"/><path d="M10 9l5 3-5 3V9z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: 'Возможность пересматривать уроки в записи',
                },
              ].map((f, i) => (
                <li key={i} className="lk-platform__feature">
                  <span className="lk-platform__feature-icon">{f.icon}</span>
                  <span className="lk-platform__feature-text">{f.text}</span>
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* Comparison table — own section */}
      <section className="lk-comparison-section">
        <div className="lk-wrap">
          <h2 className="lk-heading lk-heading--left">Сравнение форматов</h2>
          <div className="lk-table-wrap">
            <table className="lk-table">
              <thead>
                <tr>
                  <th className="lk-table__h--param"></th>
                  <th className="lk-table__h--purple">ПОЛНЫЙ<br/>КУРС</th>
                  <th className="lk-table__h--green">ОСНОВНОЙ<br/>ПОТОК</th>
                  <th className="lk-table__h--orange">УМНЫЙ<br/>АВГУСТ</th>
                  <th className="lk-table__h--blue">ЗАНЯТИЯ<br/>В ЗАПИСИ</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'lk-table__row--hl' : ''}>
                    <td className="lk-table__param">{row.param}</td>
                    <td className="lk-table__v--purple"><CmpCell value={row.stelat} color="#6d28d9"/></td>
                    <td className="lk-table__v--green"><CmpCell value={row.main} color="#15803d"/></td>
                    <td className="lk-table__v--orange"><CmpCell value={row.august} color="#c2410c"/></td>
                    <td className="lk-table__v--blue"><CmpCell value={row.zapis} color="#2563eb"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lk-comparison-btns">
            <button className="lk-detail__btn lk-detail__btn--orange" onClick={() => setShowModal(true)}>Забронировать место</button>
            <button className="lk-detail__btn lk-detail__btn--outline lk-detail__btn--outline-orange" onClick={() => setShowModal(true)}>Купить курс</button>
          </div>
        </div>
      </section>

      {/* Who + FAQ */}
      <section className="lk-mid">
        <div className="lk-wrap">
          <div className="lk-mid__grid">

            <div className="lk-who">
              <h2 className="lk-heading lk-heading--left">Кому подойдёт программа</h2>
              <div className="lk-who__card">
                <ul className="lk-who__list">
                  {WHO_FOR.map((item, i) => (
                    <li key={i}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="#6d28d9" strokeWidth="2"/>
                        <path d="M8 12l3 3 5-5" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lk-faq">
              <h2 className="lk-heading lk-heading--left">Частые вопросы</h2>
              <div className="lk-faq__list">
                {FAQ.map((item, i) => (
                  <div key={i} className={`lk-faq__item${openFaq === i ? ' lk-faq__item--open' : ''}`}>
                    <button className="lk-faq__q" onClick={() => setOpenFaq(prev => prev === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className="lk-faq__icon">{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && <div className="lk-faq__a">{item.a}</div>}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="lk-cta">
        <div className="lk-cta__inner">
          <div className="lk-cta__content">
            <h2 className="lk-cta__title">Выберите подходящий формат летнего обучения</h2>
            <p className="lk-cta__desc">Поможем ребёнку учиться с удовольствием и результатом</p>
            <div className="lk-cta__btns">
              <button className="lk-cta__btn lk-cta__btn--primary" onClick={() => setShowModal(true)}>Записаться</button>
              <button className="lk-cta__btn lk-cta__btn--outline" onClick={() => setShowModal(true)}>Получить консультацию</button>
            </div>
          </div>
        </div>
      </section>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  )
}
