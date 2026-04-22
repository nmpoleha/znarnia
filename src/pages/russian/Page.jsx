import SchoolHeader from '../../shared/components/SchoolHeader'

function Block({ label, grades, problems, results }) {
  return (
    <section className="ru-stage">
      <div className="ru-stage__head">
        <div className="ru-stage__head-left">
          <div className="ru-stage__title">{label}</div>
          <div className="ru-stage__subtitle">{grades}</div>
        </div>
      </div>
      <div className="ru-stage__body">
        <div className="ru-pr-grid">
          <div className="ru-pr-col">
            <div className="ru-pr-col__head ru-pr-col__head--red">🔴 Проблемы</div>
            <ul className="ru-pr-list">
              {problems.map((p, i) => (
                <li key={i}><span className="ru-pr-icon">😔</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="ru-pr-col">
            <div className="ru-pr-col__head ru-pr-col__head--green">🟢 Результат</div>
            <ul className="ru-pr-list">
              {results.map((r, i) => (
                <li key={i}><span className="ru-pr-icon">✓</span>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function FormatBlock() {
  return (
    <section className="ru-format-block">
      <div className="ru-stage__row">
        <div className="ru-stage__info">
          <div className="op-stage__lesson-count">
            <span className="op-stage__count-num">20</span>
            <span className="op-stage__count-label">уроков<br />по 30–40 минут</span>
          </div>
          <p className="ru-stage__note">в удобное время</p>
        </div>

        <div className="op-stage__theses">
          <div className="ru-structure__title">🧠 Структура урока:</div>
          <div className="op-thesis">
            <span className="op-thesis__icon">1️⃣</span>
            <span className="op-thesis__text"><strong>Короткая теория</strong> (3–4 минуты)</span>
          </div>
          <div className="op-thesis">
            <span className="op-thesis__icon">2️⃣</span>
            <span className="op-thesis__text"><strong>Практика</strong>&nbsp;— самостоятельное выполнение, сразу применение правила</span>
          </div>
          <div className="op-thesis">
            <span className="op-thesis__icon">3️⃣</span>
            <span className="op-thesis__text"><strong>Разбор</strong>&nbsp;— проверка ошибок, объяснение при необходимости</span>
          </div>
          <div className="op-thesis">
            <span className="op-thesis__icon">4️⃣</span>
            <span className="op-thesis__text"><strong>Переход</strong> к следующей теме</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="op-page">
      <div className="op-page__bg-glow op-page__bg-glow--1" />
      <div className="op-page__bg-glow op-page__bg-glow--2" />

      <div className="op-wrap">

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="op-hero">
          <div className="op-hero__tag">1–10 класс</div>
          <h1 className="op-hero__title">Летний <span>русский язык</span></h1>
        </section>

        {/* INTRO */}
        <section className="op-why">
          <div className="op-why__tag">Зачем заниматься летом?</div>
          <div className="op-why__card">
            <p className="op-why__body-text">Лето&nbsp;— это время отдыха, но именно в&nbsp;этот период дети чаще всего теряют часть школьных навыков. По&nbsp;русскому языку это особенно заметно: снижается грамотность, забываются правила, ухудшается письмо и&nbsp;чтение. Лёгкие и&nbsp;регулярные занятия летом помогают сохранить уровень знаний и&nbsp;укрепить базу без перегрузки. В&nbsp;результате ребёнок возвращается в&nbsp;школу уверенным и&nbsp;готовым к&nbsp;новым темам.</p>
          </div>
        </section>

        {/* FORMAT */}
        <FormatBlock />

        {/* BLOCKS */}
        <Block
          label="Начальная школа"
          grades="1–4 класс"
          problems={[
            'Ошибки в каждом слове — даже в простых',
            'Правила «учил», но не понимает и не применяет',
            'Письмо медленное, неуверенное, с исправлениями',
            'Читает, но не понимает смысл',
            'Быстро устаёт и теряет интерес к урокам',
          ]}
          results={[
            'Пишет заметно грамотнее уже в процессе занятий',
            'Начинает понимать, как работает язык',
            'Пишет быстрее и увереннее без постоянных исправлений',
            'Читает с пониманием, а не «по слогам»',
            'Появляется уверенность: «я могу» вместо «я не умею»',
          ]}
        />
        <Block
          label="Средняя школа"
          grades="5–10 класс"
          problems={[
            'Ошибки, за которые постоянно снижают оценки',
            'Правила знает, но в работе «всё забывается»',
            'Не понимает разборы и сложные темы',
            'Сочинения и изложения даются с трудом',
            'Неуверенность на контрольных и страх ошибок',
          ]}
          results={[
            'Ошибок становится значительно меньше',
            'Появляется системное понимание правил',
            'Уверенно выполняет разборы и задания',
            'Пишет тексты логично и без хаоса',
            'Спокойно чувствует себя на уроках и проверочных',
          ]}
        />

        {/* PRICING */}
        <section className="op-pricing">
          <div className="op-pricing__tag">Стоимость курса</div>
          <div className="ru-pricing">
            <div className="ru-price-card ru-price-card--bundle">
              <div className="ru-price-card__badge">Выгодно</div>
              <div className="ru-price-card__title">В пакете с&nbsp;математикой</div>
              <div className="ru-price-card__price">9&nbsp;000 <span>₽</span></div>
              <div className="ru-price-card__note">за весь курс русского языка</div>
              <a href="#" className="ru-price-card__btn">Купить в пакете →</a>
            </div>
            <div className="ru-price-card">
              <div className="ru-price-card__title">Только русский язык</div>
              <div className="ru-price-card__price">12&nbsp;000 <span>₽</span></div>
              <div className="ru-price-card__note">за весь курс</div>
              <a href="#" className="ru-price-card__btn ru-price-card__btn--outline">Купить →</a>
            </div>
          </div>
        </section>

        <footer className="op-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
