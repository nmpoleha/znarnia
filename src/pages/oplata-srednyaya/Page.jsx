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
          <div className="op-hero__tag">С 6 по 10 класс</div>
          <h1 className="op-hero__title">Летние <span>занятия</span></h1>
        </section>

        {/* WHY SUMMER */}
        <section className="op-why">
          <div className="op-why__tag">Зачем заниматься летом?</div>
          <div className="op-why__card">
            <p className="op-why__body-text">Школа не&nbsp;успевает восполнить пробелы каждого: темп диктует программа, а&nbsp;не&nbsp;уровень ребёнка. Летние занятия&nbsp;— единственный момент в&nbsp;году, когда можно спокойно разобраться в&nbsp;том, что не&nbsp;дошло, и&nbsp;выстроить прочную базу. Ребёнок, который вернётся в&nbsp;сентябре с&nbsp;пониманием материала, будет учиться совсем иначе.</p>
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

          <div className="op-stage__desc">
<div className="op-why__result">
              <div className="op-why__result-title">За 3 недели ребёнок:</div>
              <div className="op-why__result-cols">
                <ul className="op-why__result-list">
                  <li>подтягивает ключевые темы</li>
                  <li>начинает понимать материал</li>
                  <li>чувствует уверенность в&nbsp;учёбе</li>
                </ul>
                <p className="op-why__footer">Основа, без которой дальше двигаться сложно&nbsp;—<br />здесь она становится понятной и&nbsp;устойчивой.</p>
              </div>
            </div>
          </div>

          <div className="op-stage__body">

            <p className="op-stage__format">Формат&nbsp;— уроки-тренажёры: короткое объяснение → практика → результат.</p>

            <div className="op-stage__row">
              <div className="op-stage__info">
                <div className="op-stage__lesson-count">
                  <span className="op-stage__count-num">12</span>
                  <span className="op-stage__count-label">уроков-тренажёров<br />по 30 минут</span>
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

        <footer className="op-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
