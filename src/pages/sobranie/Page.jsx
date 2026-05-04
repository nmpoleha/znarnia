import SchoolHeader from '../../shared/components/SchoolHeader'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

const topics = [
  { icon: '🌞', text: 'Как выстроить летние занятия, чтобы ребёнок не выгорал и не терял интерес' },
  { icon: '🎯', text: 'На чём действительно важно сделать фокус летом' },
  { icon: '📖', text: 'Как устроена система обучения: этапы, логика и результат' },
  { icon: '🧩', text: 'Какие механики помогают удерживать внимание и вовлекать' },
  { icon: '🖥️', text: 'Как современная платформа усиливает эффективность занятий' },
  { icon: '👥', text: 'Как родителю делегировать процесс и при этом видеть реальный прогресс ребёнка' },
]

const webinarItems = [
  { icon: '💬', text: 'Разберём частые ошибки родителей' },
  { icon: '❕', text: 'Поговорим, почему дети теряют уровень и как этого избежать' },
  { icon: '❔', text: 'Отвечу на ваши вопросы' },
]

export default function Page() {
  return (
    <div className="rs-page">
      <div className="rs-page__bg-glow rs-page__bg-glow--1" />
      <div className="rs-page__bg-glow rs-page__bg-glow--2" />

      <div className="rs-wrap">
        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="rs-hero">
          <div className="rs-hero__left">
            <h1 className="rs-hero__title">
              🌿 Лето: пауза<br />
              или <span className="rs-hero__title-accent">точка роста?</span>
            </h1>
            <p className="rs-hero__desc">
              {nb('Каждое лето дети либо теряют до 30% знаний, либо делают рывок, который определяет весь следующий год.')}
            </p>
            <div className="rs-hero__callout">
              👉 {nb('Как сделать так, чтобы ваш ребёнок оказался во второй категории?')}
            </div>
            <div className="rs-hero__event-card">
              <div className="rs-hero__event-icon">📅</div>
              <div className="rs-hero__event-info">
                <div className="rs-hero__event-label">Бесплатное родительское собрание</div>
                <div className="rs-hero__event-date">16 мая в 12:30 (онлайн)</div>
              </div>
            </div>
            <p className="rs-hero__note">
              {nb('Для родителей, которые хотят, чтобы лето прошло с пользой — без давления и «надо»')}
            </p>
            <a href="#" className="rs-hero__btn">Записаться <span className="rs-btn-arrow">→</span></a>
          </div>
          <div className="rs-hero__right">
            <div className="rs-hero__img-wrap">
              <span className="rs-hero__deco rs-hero__deco--sun">☀️</span>
              <span className="rs-hero__deco rs-hero__deco--plus1">+</span>
              <span className="rs-hero__deco rs-hero__deco--circle">◯</span>
              <img className="rs-hero__img" src="/znarnia/boy-desk.png" alt="" />
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="rs-topics">
          <div className="rs-section-head">
            <span className="rs-section-head__line" />
            <div className="rs-section-title">💡 О чём поговорим</div>
            <span className="rs-section-head__line" />
          </div>
          <div className="rs-topics__grid">
            {topics.map((t, i) => (
              <div key={i} className="rs-topic-card">
                <div className="rs-topic-card__icon">{t.icon}</div>
                <div className="rs-topic-card__text">{nb(t.text)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WEBINAR */}
        <section className="rs-webinar">
          <div className="rs-webinar__left">
            <div className="rs-webinar__mic">🎙️</div>
          </div>
          <div className="rs-webinar__right">
            <div className="rs-webinar__title">🎤 На вебинаре</div>
            <div className="rs-webinar__items">
              {webinarItems.map((item, i) => (
                <div key={i} className="rs-webinar__item">
                  <div className="rs-webinar__item-icon">{item.icon}</div>
                  <div className="rs-webinar__item-text">{nb(item.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BONUS */}
        <div className="rs-bonus">
          <div className="rs-bonus__img">🎁</div>
          <div className="rs-bonus__content">
            <div className="rs-bonus__title">🎁 Бонус</div>
            <div className="rs-bonus__text">{nb('Для участников — полезный сюрприз 🎁')}</div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <section className="rs-cta">
          <div className="rs-cta__left">
            <div className="rs-cta__icon">📅</div>
            <div className="rs-cta__info">
              <div className="rs-cta__label">👉 Присоединиться</div>
              <div className="rs-cta__date">16 мая в 12:30 (онлайн)</div>
            </div>
          </div>
          <a href="#" className="rs-cta__btn">Записаться <span className="rs-btn-arrow">→</span></a>
        </section>

        <footer className="rs-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>
      </div>
    </div>
  )
}
