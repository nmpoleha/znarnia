import SchoolHeader from '../../shared/components/SchoolHeader'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

function Section({ icon, title, items, result }) {
  return (
    <div className="dg-section">
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
            <h1 className="dg-hero__title">{nb('Понять ребёнка — значит помочь ему учиться лучше')}</h1>
            <div className="dg-hero__intro">
              <p className="dg-hero__intro-lead">{nb('Перестаньте гадать и тревожиться.')}</p>
              <p className="dg-hero__intro-nowrap">{nb('Превратите неясные сомнения в чёткий план действий уже за один урок.')}</p>
              <p><span className="dg-hero__intro-accent">Онлайн-диагностика</span>{nb(' — это не просто занятие, а глубокое исследование способностей вашего ребёнка: как он думает, учится и что мешает ему показывать лучший результат.')}</p>
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

        {/* BEFORE/AFTER */}
        <div className="dg-ba">
          <div className="dg-ba__head">
            <div className="dg-ba__col-label dg-ba__col-label--before">😟 Было</div>
            <div className="dg-ba__arrow">→</div>
            <div className="dg-ba__col-label dg-ba__col-label--after">😎 Стало</div>
          </div>
          <div className="dg-ba__rows">
            {[
              ['не понимает математику', 'понимает и уверен в себе'],
              ['боится контрольных', 'пишет спокойно и без стресса'],
              ['ошибки в знакомых темах', 'решает точно и без сомнений'],
              ['занимается без результата', 'видит прогресс и рост'],
              ['новый класс вызывает тревогу', 'уверенно идёт дальше'],
              ['стресс перед экзаменами', 'готов и спокоен за результат'],
            ].map(([before, after], i) => (
              <div key={i} className="dg-ba__row">
                <div className="dg-ba__cell dg-ba__cell--before">{nb(before)}</div>
                <div className="dg-ba__row-arrow">→</div>
                <div className="dg-ba__cell dg-ba__cell--after">{nb(after)}</div>
              </div>
            ))}
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
            />
          </div>

          <div className="dg-callout">
            <div className="dg-callout__title">
              <span className="dg-callout__line">{nb('Это не пробный урок,')}</span>
              <span className="dg-callout__line">это глубокая диагностика</span>
            </div>
            <div className="dg-callout__text">{nb('Мы смотрим не только на правильные и неправильные ответы. Нам важно понять, как ребёнок рассуждает, где теряет уверенность и почему ошибки повторяются.')}</div>
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
            <ul className="dg-plan-list">
              <li>{nb('почему у ребёнка снижается мотивация')}</li>
              <li>{nb('в чём реальные причины сложностей в учёбе')}</li>
              <li>{nb('где пробелы и как они влияют на текущие результаты')}</li>
              <li>{nb('что делать уже сейчас, чтобы улучшить успеваемость')}</li>
            </ul>
          </div>
        </section>

        {/* RESULT */}
        <section className="dg-result">
          <div className="dg-result__title">{nb('Вы уходите не с вопросами, а с готовым планом действий')}</div>
          <p className="dg-result__text">{nb('Один урок поможет понять больше, чем месяцы догадок и тревоги: что мешает ребёнку, с чего начать и как улучшить результат.')}</p>
          <a href="#" className="dg-result__btn">Записаться на диагностический урок</a>
        </section>

        <footer className="dg-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
