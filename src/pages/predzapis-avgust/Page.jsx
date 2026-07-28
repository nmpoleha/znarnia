import { useState } from 'react'
import SchoolHeader from '../../shared/components/SchoolHeader'
import FeatureCards from '../../shared/components/FeatureCards'
import RegistrationForm from '../../shared/components/RegistrationForm'

const features = [
  {
    icon: '🎯',
    title: 'Точечно по тесту',
    desc: 'Подбираем темы по результатам тестирования — работаем именно с пробелами ребёнка',
    color: '#ea580c',
  },
  {
    icon: '🚀',
    title: 'Готовность к сентябрю',
    desc: 'Восстанавливаем базу и учебный ритм, чтобы новый год начался уверенно',
    color: '#f97316',
  },
  {
    icon: '🎁',
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
      <div className="page__bg-glow page__bg-glow--1" />
      <div className="page__bg-glow page__bg-glow--2" />

      <div className="page__inner">

        <SchoolHeader
          logoUrl="/znarnia/images/logo.png"
          name="Школа Сотниковой Ольги"
        />

        <section className="hero">
          <div className="hero__tag">Предзапись · Август</div>
          <h1 className="hero__title">Умный <span>август</span></h1>
          <p className="hero__sub">
            Чтобы в сентябре ребёнок не растерялся на первых уроках, важно заранее восстановить
            базу и учебный ритм. Курс помогает мягко вернуться в обучение, закрыть пробелы
            и почувствовать уверенность перед школой.
          </p>

          <div className="av-price">
            <span className="av-price__old">10&thinsp;800&nbsp;₽</span>
            <span className="av-price__badge">−3000&nbsp;₽ по предзаписи</span>
          </div>

          <a href="#registration" className="hero__cta">Оставить заявку — скидка 3000&nbsp;₽</a>
          <p className="hero__quote">
            Оставьте заявку, чтобы получить скидку 3000&nbsp;₽. А если узнаете подробнее
            о программе — дополнительная скидка ещё 3000&nbsp;₽.
          </p>
        </section>

        <div className="offer-label">Оставьте заявку сейчас, чтобы получить скидку 3000&nbsp;₽</div>

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
            <span className="av-more__bonus">+3000&nbsp;₽ к скидке</span>
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

        <RegistrationForm successText="Мы свяжемся с вами, расскажем о курсе «Умный август» и зафиксируем вашу скидку." />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
