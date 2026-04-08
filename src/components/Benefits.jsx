import './Benefits.css'

const items = [
  { label: 'Лучшее расписание', sub: 'Выбираете первыми' },
  { label: 'Математика с нуля', sub: 'Все пробелы закрыты' },
  { label: 'Онлайн-уроки', sub: 'Бесплатно включены' },
  { label: 'Отказ в любой момент', sub: 'Без обязательств' },
  { label: '1–10 классы', sub: 'Любой уровень' },
  { label: 'Старт в сентябре', sub: 'Готовы с первого дня' },
]

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__content">
          <div className="benefits__tag">Почему это важно</div>
          <h2 className="benefits__title">Лето — маленькая жизнь</h2>
          <p className="benefits__text">
            Три летних месяца могут изменить весь учебный год. Предзапись
            позволяет начать подготовку заранее и прийти в сентябрь
            готовым — без стресса и наверстывания.
          </p>
          <p className="benefits__text">
            Запись ни к чему не обязывает — вы можете отказаться в любой момент.
          </p>
        </div>

        <div className="benefits__grid">
          {items.map((item, i) => (
            <div key={i} className="benefit-item">
              <div className="benefit-item__dot" />
              <div>
                <div className="benefit-item__label">{item.label}</div>
                <div className="benefit-item__sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
