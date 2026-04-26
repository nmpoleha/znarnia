import SchoolHeader from '../../shared/components/SchoolHeader'

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
          <div className="op-hero__tag">С 1 по 4 класс</div>
          <h1 className="op-hero__title">Летние <span>занятия</span></h1>
        </section>

        {/* WHY SUMMER */}
        <section className="op-why">
          <div className="op-why__tag">Зачем заниматься летом?</div>
          <div className="op-why__card">
            <p className="op-why__body-text">К&nbsp;сентябрю дети теряют до&nbsp;30% знаний. Но главное&nbsp;— лето даёт уникальный шанс развить то, на&nbsp;что у&nbsp;школы нет времени: логику, упорство и&nbsp;осмысленное чтение.</p>
          </div>
        </section>

        {/* STAGE 1 */}
        <section className="op-stage">
          <div className="op-stage__head">
            <div className="op-stage__head-left">
              <div className="op-stage__num">1 Этап</div>
              <div className="op-stage__head-subtitle">Мягкий старт, где ребёнок закрывает пробелы и&nbsp;выстраивает базу.</div>
            </div>
            <div className="op-stage__dates">с 1 по 21 июня</div>
          </div>

          <div className="op-stage__body">

            <p className="op-stage__format">Формат&nbsp;— уроки-тренажёры: короткое объяснение → практика → результат.</p>

            <div className="op-stage__row">
              <div className="op-stage__info">
                <div className="op-stage__lesson-count op-stage__lesson-count--wide">
                  <span className="op-stage__count-num">6</span>
                  <span className="op-stage__count-label">базовых урока<br />по 30 минут</span>
                </div>
                <div className="op-stage__lesson-count op-stage__lesson-count--wide">
                  <span className="op-stage__count-num">6</span>
                  <span className="op-stage__count-label">уроков продвинутого<br />уровня</span>
                </div>
                <a href="#" className="op-stage__btn">Посмотреть урок →</a>
              </div>

              <div className="op-stage__theses">
                <div className="op-thesis">
                  <span className="op-thesis__icon">🕐</span>
                  <span className="op-thesis__text">Смотрим в удобное время</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">🧠</span>
                  <span className="op-thesis__text">Сохраняем знания</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">🔍</span>
                  <span className="op-thesis__text">Восполняем пробелы и разминка для ума</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">⚡</span>
                  <span className="op-thesis__text">Теория + сразу практика = удобный и эффективный формат</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* STAGE 2 */}
        <section className="op-stage">
          <div className="op-stage__head">
            <div className="op-stage__head-left">
              <div className="op-stage__num">2 Этап</div>
              <div className="op-stage__head-subtitle">Основной этап</div>
              <div className="op-stage__head-subtitle">Уверенность и результат</div>
            </div>
            <div className="op-stage__dates">с 22 июня</div>
          </div>

          {/* Онлайн-уроки */}
          <div className="op-stage__body">
            <div className="op-stage__row">
              <div className="op-stage__info">
                <div className="op-stage__lesson-count">
                  <span className="op-stage__count-num">2</span>
                  <span className="op-stage__count-label">онлайн-урока<br />в неделю · 60 мин</span>
                </div>
              </div>
              <div className="op-stage__theses">
                <div className="op-thesis">
                  <span className="op-thesis__icon">🚀</span>
                  <span className="op-thesis__text">Выходим за рамки школьной программы — даём глубокое понимание</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">🧠</span>
                  <span className="op-thesis__text">Развиваем логическое мышление и навык рассуждения</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">🔑</span>
                  <span className="op-thesis__text">Работаем с нестандартными задачами, а не шаблонами</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">🔍</span>
                  <span className="op-thesis__text">Формируем умение анализировать и искать разные решения</span>
                </div>
                <div className="op-thesis">
                  <span className="op-thesis__icon">💪</span>
                  <span className="op-thesis__text">Даём уверенность: ребёнок понимает, а не заучивает</span>
                </div>
              </div>
            </div>
          </div>

          {/* Урок-тренажёр */}
          <div className="op-stage__desc">
            <div className="op-s2-trainer">
              <div className="op-s2-trainer__left">
                <div className="op-stage__lesson-count">
                  <span className="op-stage__count-num">1</span>
                  <span className="op-stage__count-label">урок-тренажёр<br />в неделю</span>
                </div>
              </div>
              <div className="op-s2-trainer__content">
                <p className="op-s2-trainer__text">Тренажёр в&nbsp;формате приключения:</p>
                <div className="op-stage__theses">
                  <div className="op-thesis">
                    <span className="op-thesis__icon">🧩</span>
                    <span className="op-thesis__text">Решай задачи</span>
                  </div>
                  <div className="op-thesis">
                    <span className="op-thesis__icon">🗺️</span>
                    <span className="op-thesis__text">Открывай уровни</span>
                  </div>
                  <div className="op-thesis">
                    <span className="op-thesis__icon">⚡</span>
                    <span className="op-thesis__text">Видь результат сразу</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="op-s2-topics-wrap">
              <a href="/znarnia/topics-nachalka/" className="op-s2-topics-btn">Посмотреть список тем →</a>
            </div>
          </div>

          {/* Результат */}
          <div className="op-stage__desc op-s2-result-block">
            <div className="op-s2-result__tag">Результат</div>
            <ul className="op-why__result-list">
              <li>Находим и&nbsp;закрываем конкретные пробелы в&nbsp;знаниях</li>
              <li>С&nbsp;1&nbsp;сентября ребёнок опирается на&nbsp;прочную базу и&nbsp;включается в&nbsp;урок</li>
              <li>Уходит сопротивление учёбе&nbsp;— появляется уверенность и&nbsp;мотивация</li>
            </ul>
          </div>

        </section>

        {/* PRICING */}
        <section className="op-pricing">
          <div className="op-pricing__tag">Стоимость программы</div>
          <div className="op-pricing__card">
            <div className="op-pricing__main">
              <div className="op-pricing__total">
                <span className="op-pricing__price">24 600 ₽</span>
                <span className="op-pricing__period">за всю программу</span>
              </div>
              <div className="op-pricing__divider" />
              <div className="op-pricing__stats">
                <div className="op-pricing__stat">
                  <span className="op-pricing__stat-num">40</span>
                  <span className="op-pricing__stat-label">уроков</span>
                </div>
                <div className="op-pricing__stat">
                  <span className="op-pricing__stat-num">615 ₽</span>
                  <span className="op-pricing__stat-label">цена урока</span>
                </div>
              </div>
            </div>
            <div className="op-pricing__includes">
              <div className="op-pricing__includes-title">В стоимость входит:</div>
              <ul className="op-why__result-list">
                <li>40 уроков по двум этапам программы</li>
                <li>Проверка домашних заданий</li>
              </ul>
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
