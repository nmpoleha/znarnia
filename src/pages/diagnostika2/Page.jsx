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

        {/* WHO IS IT FOR */}
        <div className="dg-who">
          <div className="dg-who__heading">
            <span className="dg-who__line" />
            <div className="dg-who__title">Кому подойдёт диагностика</div>
            <span className="dg-who__line" />
          </div>
          <p className="dg-who__desc">{nb('Если вы замечаете у ребёнка сложности в обучении, диагностика поможет понять, где именно причина и что делать дальше.')}</p>
          <div className="dg-who__grid">
            {[
              { icon: '?',  text: 'не понимает математику',          sub: 'темы проходят мимо, нет понимания и уверенности' },
              { icon: '!',  text: 'боится контрольных',              sub: 'тревожится, волнует, теряет уверенность' },
              { icon: '×',  text: 'делает ошибки в знакомых темах',  sub: 'кажется, что всё знает, но ошибки повторяются' },
              { icon: '→',  text: 'занимается, но результата нет',   sub: 'старается, но оценки не улучшаются' },
              { icon: '↗',  text: 'переходит в новый класс',         sub: 'есть пробелы, которые помешают дальше' },
              { icon: '✓',  text: 'готовится к ВПР, ОГЭ или ЕГЭ',   sub: 'нужно понять уровень и на что сделать упор' },
            ].map((item, i) => (
              <div key={i} className={`dg-who__card${i === 0 ? ' dg-who__card--active' : ''}`}>
                <div className="dg-who__card-head">
                  <div className="dg-who__icon">{item.icon}</div>
                  <div className="dg-who__text">{nb(item.text)}</div>
                </div>
                <div className="dg-who__sub">{nb(item.sub)}</div>
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
            <div className="dg-callout__text">
              {nb('Мы смотрим не только на правильные и неправильные ответы.')}<br />
              {nb('Нам важно понять, как ребёнок рассуждает, где теряет уверенность и почему ошибки повторяются.')}
            </div>
          </div>
        </section>

        {/* PART 2 */}
        <section className="dg-part--2">
          <div className="dg-part2__top">
            <div className="dg-part2__header">
              <div className="dg-part2__pre">После диагностики вы получите</div>
              <div className="dg-part2__heading">{nb('понятную картину обучения')}</div>
            </div>
          </div>
          <div className="dg-plan-cards">
            {[
              {
                Icon: () => (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V17H9v-2.8C7.2 13.1 6 11.2 6 9a6 6 0 0 1 6-6z"/>
                  </svg>
                ),
                title: 'что ребёнок уже умеет',
                sub: 'увидим сильные стороны и опору для роста',
              },
              {
                Icon: () => (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
                  </svg>
                ),
                title: 'где именно пробелы',
                sub: 'точно определим, какие темы «проседают»',
              },
              {
                Icon: () => (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                ),
                title: 'почему появляются ошибки',
                sub: 'разберём причины, а не только симптомы',
              },
              {
                Icon: () => (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                    <polyline points="9 12 11 14 15 10"/><line x1="9" y1="17" x2="13" y2="17"/>
                  </svg>
                ),
                title: 'как выстроить обучение дальше',
                sub: 'даём понятный план действий для результата',
              },
            ].map(({ Icon, title, sub }, i) => (
              <div key={i} className="dg-plan-card">
                <div className="dg-plan-card__icon"><Icon /></div>
                <div className="dg-plan-card__title">{nb(title)}</div>
                <div className="dg-plan-card__sub">{nb(sub)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RESULT */}
        <section className="dg-result">
          <div className="dg-result__title">{nb('Вы уходите не с вопросами, а с готовым планом действий')}</div>
          <p className="dg-result__text">{nb('Один урок поможет понять больше, чем месяцы догадок и тревоги: что мешает ребёнку, с чего начать и как улучшить результат.')}</p>
          <a href="#" className="dg-result__btn">Записаться на диагностический урок <span className="dg-result__btn-arrow">›</span></a>
          <div className="dg-result__img-area">
            <span className="dg-result__deco dg-result__deco--plus1">+</span>
            <span className="dg-result__deco dg-result__deco--plus2">+</span>
            <span className="dg-result__deco dg-result__deco--diamond">◇</span>
            <img className="dg-result__image" src="/znarnia/lampochka.png" alt="" />
          </div>
        </section>

        <footer className="dg-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
