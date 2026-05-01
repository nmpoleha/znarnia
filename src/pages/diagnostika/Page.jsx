import SchoolHeader from '../../shared/components/SchoolHeader'

function Section({ icon, title, items, result }) {
  return (
    <div className="dg-section">
      <div className="dg-section__head">
        <span className="dg-section__icon">{icon}</span>
        <div className="dg-section__title">{title}</div>
      </div>
      <ul className="dg-section__list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="dg-section__result">{result}</div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="dg-page">
      <div className="dg-page__bg-glow dg-page__bg-glow--1" />
      <div className="dg-page__bg-glow dg-page__bg-glow--2" />

      <div className="dg-wrap">

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="dg-hero">
          <div className="dg-hero__left">
            <h1 className="dg-hero__title">Понять ребёнка — значит помочь ему учиться лучше</h1>
            <div className="dg-hero__intro">
              <p className="dg-hero__intro-lead">Перестаньте гадать и тревожиться.</p>
              <p className="dg-hero__intro-nowrap">Превратите неясные сомнения в чёткий план действий уже за один урок.</p>
              <p><span className="dg-hero__intro-accent">Онлайн-диагностика</span> — это не просто занятие, а глубокое исследование способностей вашего ребёнка: как он думает, учится и что мешает ему показывать лучший результат.</p>
            </div>
            <a href="#" className="dg-hero__btn">Записаться на диагностику</a>
          </div>
          <div className="dg-hero__right">
            <div className="dg-hero__card">
              <div className="dg-hero__card-badges">
                <span className="dg-hero__badge dg-hero__badge--white">45 минут</span>
                <span className="dg-hero__badge dg-hero__badge--purple">онлайн</span>
              </div>
              <div className="dg-hero__avatar">👧</div>
              <div className="dg-hero__card-items">
                <div className="dg-hero__card-item">🧠 Мышление</div>
                <div className="dg-hero__card-item">📚 Знания</div>
                <div className="dg-hero__card-item">🗺️ План действий</div>
              </div>
            </div>
          </div>
        </section>

        {/* PART 1 */}
        <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 1</div>
            <div className="dg-part__title">Работа с ребёнком</div>
          </div>

          <div className="dg-sections">
            <Section
              icon="✦"
              title="Как он думает?"
              items={[
                'анализируем уровень логического мышления',
                'смотрим, как он выстраивает рассуждение',
                'оцениваем самостоятельность в принятии решений',
              ]}
              result="Вы поймёте, как устроено его мышление: умеет ли он рассуждать или действует наугад"
            />
            <Section
              icon="✦"
              title="Что он на самом деле знает?"
              items={[
                'выявляем пробелы в ключевых темах',
                'проверяем базу не только за текущий, но и за предыдущие классы',
                'оцениваем глубину понимания',
              ]}
              result='Станет ясно, где именно "проседает фундамент" и что мешает двигаться дальше'
            />
            <Section
              icon="✦"
              title="Как он учится?"
              items={[
                'смотрим, как он воспринимает объяснения',
                'проверяем, может ли сразу применять новые знания',
                'оцениваем включённость и скорость',
              ]}
              result="Вы увидите, какой формат обучения ему подходит и почему текущий может не работать"
            />
          </div>
        </section>

        {/* PART 2 */}
        <section className="dg-part">
          <div className="dg-part__head">
            <div className="dg-part__label">Часть 2</div>
            <div className="dg-part__title">💡 Разбор с родителями — превращаем диагностику в план</div>
          </div>
          <div className="dg-part--2">
            <p className="dg-part__desc">Сразу после урока вы получаете не общее мнение, а чёткое понимание ситуации и конкретные шаги:</p>
            <ul className="dg-plan-list">
              <li>почему у ребёнка снижается мотивация</li>
              <li>в чём реальные причины сложностей в учёбе</li>
              <li>где пробелы и как они влияют на текущие результаты</li>
              <li>что делать уже сейчас, чтобы улучшить успеваемость</li>
            </ul>
          </div>
        </section>

        {/* RESULT */}
        <section className="dg-result">
          <div className="dg-result__icon">🎯</div>
          <div className="dg-result__title">Главное — результат, который вы заберёте</div>
          <p className="dg-result__lead">Вы уходите с готовым планом действий, а не с вопросами</p>
          <p className="dg-result__text">За один урок вы получите чёткое понимание того, как на самом деле учится ваш ребёнок, что с ним происходит и какие шаги нужно предпринять дальше, чтобы улучшить результаты в учёбе.</p>
        </section>

        <footer className="dg-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
