import SchoolHeader from '../../shared/components/SchoolHeader'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

export default function Page() {
  return (
    <div className="st-page">
      <div className="st-wrap">
        <SchoolHeader logoUrl="https://znarnia.ru/logo.png" name="Школа Сотниковой Ольги" />

        {/* HERO */}
        <section className="st-hero">
          <div className="st-hero__check">✓</div>
          <h1 className="st-hero__title">Вы зарегистрированы</h1>
          <p className="st-hero__event">{nb('Спасибо за регистрацию на родительское собрание 🌿')}</p>
          <p className="st-hero__event-name">«Лето: пауза или точка роста?»</p>
          <div className="st-hero__date">📅 16 мая в 12:30 (онлайн)</div>
        </section>

        {/* WHAT NEXT */}
        <section className="st-card">
          <div className="st-card__title">💡 Что дальше</div>
          <p className="st-card__text">
            {nb('Мы уже забронировали для вас место и отправим напоминание перед началом.')}
          </p>
        </section>

        {/* CHANNEL */}
        <section className="st-card st-card--purple">
          <div className="st-card__title">👉 Чтобы ничего не пропустить</div>
          <p className="st-card__text">{nb('Подпишитесь на канал — там будет:')}</p>
          <ul className="st-list">
            <li>ссылка на трансляцию</li>
            <li>напоминание перед началом</li>
            <li>дополнительные материалы</li>
          </ul>
          <div className="st-links">
            <a href="https://t.me/+YQgZEhiyoSY3ZGMy" className="st-link st-link--tg" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://max.ru/join/DrqRI_v3N9TL1j9sSqWZrrU7TS9b87W64Y6oQHLLN5Y" className="st-link st-link--vk" target="_blank" rel="noreferrer">Max</a>
          </div>
        </section>

        {/* IMPORTANT */}
        <section className="st-card st-card--yellow">
          <div className="st-card__title">🔔 Важно</div>
          <p className="st-card__text">Сохраните дату и время:</p>
          <div className="st-important-date">16 мая в 12:30</div>
        </section>

        <div className="st-farewell">До встречи на собрании 🌿</div>

        <footer className="st-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>
      </div>
    </div>
  )
}
