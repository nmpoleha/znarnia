import { useState } from 'react'
import SchoolHeader from '../../shared/components/SchoolHeader'
import FeatureCards from '../../shared/components/FeatureCards'
import RegistrationForm from '../../shared/components/RegistrationForm'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#7028e8" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="5" stroke="#7028e8" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="1.6" fill="#7028e8"/>
      </svg>
    ),
    title: 'Точечно по тесту',
    desc: 'Подбираем темы по результатам тестирования — работаем именно с пробелами ребёнка',
    color: '#ea580c',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5c2.6 2.1 4 5.1 4 8.5 0 1.7-.4 3.2-1 4.5H9c-.6-1.3-1-2.8-1-4.5 0-3.4 1.4-6.4 4-8.5z" stroke="#7028e8" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="12" cy="9.5" r="1.7" stroke="#7028e8" strokeWidth="1.7"/>
        <path d="M8 13.5l-3 2.2 1.3 1.8L9 16" stroke="#7028e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13.5l3 2.2-1.3 1.8L15 16" stroke="#7028e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 16.8c0 1.9 1.5 3.7 1.5 3.7s1.5-1.8 1.5-3.7" stroke="#7028e8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Готовность к сентябрю',
    desc: 'Восстанавливаем базу и учебный ритм, чтобы новый год начался уверенно',
    color: '#f97316',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" stroke="#7028e8" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M3 7.5h18V11H3V7.5zM12 7.5V21" stroke="#7028e8" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M12 7.5S9.5 3 7.5 4s.5 3.5 4.5 3.5zM12 7.5S14.5 3 16.5 4s-.5 3.5-4.5 3.5z" stroke="#7028e8" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Скидка 3000 ₽',
    desc: 'Специальная цена только для тех, кто оставит заявку на предзапись',
    color: '#7c3aed',
  },
]

const HIGHLIGHTS = [
  'Подбор тем по результатам тестирования — работаем точно',
  'Повторение ключевых тем перед учебным годом',
  'Теория + сразу практика — быстрое восстановление навыков',
  'Восстанавливаем учебный ритм — ребёнок готов к сентябрю',
]

const NACHALKA = [
  'Выходим за рамки школьной программы — даём глубокое понимание',
  'Развиваем логическое мышление и навык рассуждения',
  'Работаем с нестандартными задачами, а не шаблонами',
  'Формируем умение анализировать и искать разные решения',
  'Даём уверенность: ребёнок понимает, а не заучивает',
]

const SREDNYAYA = [
  'Разбираем основополагающие темы за текущий класс',
  'Акцент на сложных разделах: текстовые задачи, геометрия, нестандартные задания',
  'Учим рассуждать и логически мыслить',
  'Не бросать задачу, а строить математическую модель через рассуждения',
]

const RESULT = [
  'Закрыты конкретные пробелы в знаниях',
  'Ребёнок не растеряется на первых уроках в сентябре',
  'Уверенность и готовность к учебному году',
]

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      <div className="page__inner page__inner--head">
        <SchoolHeader
          logoUrl="/znarnia/images/logo.png"
          name="Школа Сотниковой Ольги"
        />
      </div>

      <section className="av-hero">
        <div className="av-hero__pill">Предзапись · Август</div>
        <h1 className="av-hero__title">Умный август</h1>
        <p className="av-hero__sub">
          Чтобы в сентябре ребёнок не растерялся на первых уроках, важно заранее восстановить
          базу и учебный ритм. Курс помогает мягко вернуться в обучение, закрыть пробелы
          и почувствовать уверенность перед школой.
        </p>

        <div className="av-hero__offer">
          <span className="av-hero__price-old">13&thinsp;800&nbsp;₽</span>
          <span className="av-hero__price">10&thinsp;800&nbsp;₽</span>
          <a href="#registration" className="av-hero__cta">Оставить заявку</a>
        </div>

        <div className="av-hero__divider" aria-hidden="true" />

        <div className="av-hero__label">Оставьте заявку сейчас, чтобы получить скидку 3000&nbsp;₽</div>
      </section>

      <div className="page__inner">

        <FeatureCards features={features} />

        {/* ── ЧТО ВХОДИТ ── */}
        <section className="av-included">
          <div className="av-banner">
            <span className="av-banner__title">Восстановление базы</span>
            <span className="av-banner__tag">Август</span>
          </div>

          <div className="av-stats">
            <div className="av-stat"><span className="av-stat__num">20</span> уроков всего</div>
            <div className="av-stat"><span className="av-stat__num">12</span> уроков-тренажёров</div>
            <div className="av-stat"><span className="av-stat__num">8</span> онлайн-уроков · 60&nbsp;мин</div>
          </div>

          <h2 className="av-h2">Что входит в «Умный август»</h2>
          <div className="av-included__grid">
            <div className="av-inc-card">
              <div className="av-inc-card__num">12</div>
              <div>
                <div className="av-inc-card__title">Онлайн-тренажёры</div>
                <p className="av-inc-card__desc">По ключевым базовым темам, которые ребёнок обязательно должен знать.</p>
              </div>
            </div>
            <div className="av-inc-card">
              <div className="av-inc-card__num">8</div>
              <div>
                <div className="av-inc-card__title">Онлайн-уроки · 60 мин</div>
                <p className="av-inc-card__desc">Восполняем пробелы и готовимся к началу учебного года, чтобы он прошёл успешно.</p>
              </div>
            </div>
          </div>

          <ul className="av-list">
            {HIGHLIGHTS.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </section>

        {/* ── УЗНАТЬ ПОДРОБНЕЕ ── */}
        <div className="av-more">
          <button
            type="button"
            className={`av-more__btn${open ? ' av-more__btn--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
          >
            {open ? 'Свернуть программу' : 'Узнать подробнее о программе'}
          </button>

          {open && (
            <div className="av-details">
              <div className="av-col">
                <h3 className="av-col__title">Начальная школа</h3>
                <ul className="av-list">{NACHALKA.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
              <div className="av-col">
                <h3 className="av-col__title">Средняя школа</h3>
                <ul className="av-list">{SREDNYAYA.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
              <div className="av-col">
                <h3 className="av-col__title">Результат</h3>
                <ul className="av-list av-list--check">{RESULT.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
            </div>
          )}
        </div>

        <RegistrationForm
          subtitle="Мы перезвоним, расскажем о программе и ответим на все ваши вопросы"
          nameLabel="Фамилия и имя *"
          namePlaceholder="Иванов Иван"
          successText="Мы свяжемся с вами, расскажем о курсе «Умный август» и зафиксируем вашу скидку."
        />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
