import React from 'react'
import ReactDOM from 'react-dom/client'
import '../shared/styles/base.css'
import './catalog.css'

const pages = [
  {
    slug: 'leto2026',
    title: 'Лето 2026 — Предзапись',
    client: 'Школа Сотниковой Ольги',
    description: 'Посадочная страница для летней предзаписи 2026',
    date: 'Апрель 2026',
  },
  {
    slug: 'nachalka',
    title: 'Летние занятия для начальной школы',
    client: 'Школа Сотниковой Ольги',
    description: 'Лендинг для родителей учеников 1–4 классов',
    date: 'Апрель 2026',
  },
  {
    slug: 'partner',
    title: 'Партнёрская программа',
    client: 'Znarnia',
    description: 'B2B лендинг для партнёров образовательной платформы',
    date: 'Апрель 2026',
  },
  {
    slug: 'post-leto',
    title: 'Нужны ли занятия летом?',
    client: 'Школа Сотниковой Ольги',
    description: 'Пост-статья о пользе летних занятий',
    date: 'Апрель 2026',
  },
  {
    slug: 'post-kanikuly',
    title: 'Летние каникулы: почему ребёнок теряет мотивацию',
    client: 'Школа Сотниковой Ольги',
    description: 'Статья о пробелах в знаниях и как их восполнить',
    date: 'Апрель 2026',
  },
  {
    slug: 'srednyaya',
    title: 'Летние занятия для средней школы',
    client: 'Школа Сотниковой Ольги',
    description: 'Лендинг для родителей учеников 6–9 классов',
    date: 'Апрель 2026',
  },
  {
    slug: 'teens',
    title: 'Летние занятия — тёмная тема',
    client: 'Школа Сотниковой Ольги',
    description: 'Версия для подростков: тёмный фон, неон, cyan + pink',
    date: 'Апрель 2026',
  },
  {
    slug: 'oplata-srednyaya',
    title: 'Оплата летних занятий',
    client: 'Школа Сотниковой Ольги',
    description: 'Страница с этапами и описанием уроков-тренажёров',
    date: 'Апрель 2026',
  },
  {
    slug: 'oplata',
    title: 'Форма оплаты',
    client: 'Школа Сотниковой Ольги',
    description: 'Страница оплаты с выбором класса и формой',
    date: 'Апрель 2026',
  },
  {
    slug: 'oplata-nachalka',
    title: 'Летние занятия для начальной школы — оплата',
    client: 'Школа Сотниковой Ольги',
    description: 'Страница с этапами и описанием программы для 1–4 классов',
    date: 'Апрель 2026',
  },
  {
    slug: 'russian',
    title: 'Летний русский язык',
    client: 'Школа Сотниковой Ольги',
    description: 'Курс русского языка для 1–9 классов, формат и стоимость',
    date: 'Апрель 2026',
  },
  {
    slug: 'diagnostika',
    title: 'Диагностика с родителями',
    client: 'Школа Сотниковой Ольги',
    description: 'Онлайн-диагностика способностей ребёнка и разбор с родителями',
    date: 'Май 2026',
  },
  {
    slug: 'sobranie',
    title: 'Родительское собрание',
    client: 'Школа Сотниковой Ольги',
    description: 'Бесплатный вебинар: Лето — пауза или точка роста?',
    date: 'Май 2026',
  },
  {
    slug: 'diagnostika2',
    title: 'Диагностика 2',
    client: 'Школа Сотниковой Ольги',
    description: 'Улучшенная версия диагностики',
    date: 'Май 2026',
  },
  {
    slug: 'probniy-urok',
    title: 'Пробный урок',
    client: 'Школа Сотниковой Ольги',
    description: 'Пробная неделя обучения за 450 ₽ — интерактивные уроки-тренажёры',
    date: 'Май 2026',
  },
  {
    slug: 'probniy-urok-2',
    title: 'Пробный урок 2',
    client: 'Школа Сотниковой Ольги',
    description: 'Пробная неделя обучения — обновлённая версия страницы',
    date: 'Июнь 2026',
  },
  {
    slug: 'diagnostika-finalnaya',
    title: 'Диагностика финальная',
    client: 'Школа Сотниковой Ольги',
    description: 'Онлайн-диагностика способностей ребёнка и разбор с родителями',
    date: 'Май 2026',
  },
  {
    slug: 'diagnostika-finalnaya-2',
    title: 'Финальная диагностика 2',
    client: 'Школа Сотниковой Ольги',
    description: 'Копия финальной диагностики',
    date: 'Май 2026',
  },
  {
    slug: 'letnie-kursy',
    title: 'Все варианты летних курсов',
    client: 'Школа Сотниковой Ольги',
    description: 'Форматы летних программ: Мягкий старт, Основной поток, Август-интенсив',
    date: 'Май 2026',
  },
  {
    slug: 'glavnaya',
    title: 'Главная страница',
    client: 'Знарния',
    description: 'Главная страница сайта — онлайн-школа математики для школьников 1–8 классов',
    date: 'Май 2026',
  },
  {
    slug: 'predszapis-osen',
    title: 'Предзапись на осень',
    client: 'Школа Сотниковой Ольги',
    description: 'Предзапись на осень для действующих учеников — специальная цена 3 500 ₽',
    date: 'Май 2026',
  },
  {
    slug: 'predszapis-osen-2',
    title: 'Запись для действующих учеников 2',
    client: 'Школа Сотниковой Ольги',
    description: 'Математика для 1–4 классов — осенний набор, интерактивный формат, 4 500 ₽',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-novye-2',
    title: 'Предзапись новые ученики 2',
    client: 'Школа Сотниковой Ольги',
    description: 'Альтернативный герой без фото — анкета, подарки и цена в одном блоке',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-3-podarka',
    title: 'Предзапись осень — 3 подарка',
    client: 'Школа Сотниковой Ольги',
    description: 'Копия страницы предзаписи для новых учеников — анкета, подарки и цена в одном блоке',
    date: 'Июль 2026',
  },
  {
    slug: 'predszapis-osen-novye',
    title: 'Предзапись на осень — новые ученики',
    client: 'Школа Сотниковой Ольги',
    description: 'Предзапись на осень для новых учеников — специальная цена при ранней записи 4 500 ₽',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-srednyaya',
    title: 'Запись на осень — средняя школа',
    client: 'Школа Сотниковой Ольги',
    description: 'Математика для учеников 5–8 классов — осенний набор, прочные знания и развитие мышления',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-stariye-5-8',
    title: 'Предзапись на осень — 5–8 класс',
    client: 'Школа Сотниковой Ольги',
    description: 'Математика для действующих учеников 5–8 классов — осенний набор, спеццена 4 500 ₽',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-ege-10',
    title: 'Предзапись на осень — 10 класс (ЕГЭ)',
    client: 'Школа Сотниковой Ольги',
    description: 'Подготовка к ЕГЭ по математике для учеников 10 класса — осенний набор, спеццена 4 500 ₽',
    date: 'Июнь 2026',
  },
  {
    slug: 'predszapis-osen-ege-profilnoe',
    title: 'Предзапись на осень — ЕГЭ профильное',
    client: 'Школа Сотниковой Ольги',
    description: 'Подготовка к ЕГЭ по профильной математике на 80+ баллов — осенний набор, спеццена 4 500 ₽',
    date: 'Июль 2026',
  },
  {
    slug: 'predszapis-osen-ege-bazovoe',
    title: 'Предзапись на осень — ЕГЭ базовое',
    client: 'Школа Сотниковой Ольги',
    description: 'Подготовка к ЕГЭ по базовой математике для 11 класса — осенний набор, спеццена 4 500 ₽',
    date: 'Июль 2026',
  },
  {
    slug: 'predszapis-osen-stariye-9',
    title: 'Предзапись на осень — 9 класс (ОГЭ)',
    client: 'Школа Сотниковой Ольги',
    description: 'Подготовка к ОГЭ по математике 2027 — осенний набор для учеников 9 класса, спеццена 4 500 ₽',
    date: 'Июнь 2026',
  },
  {
    slug: 'shablon',
    title: 'Шаблон рекламного предложения',
    client: 'Школа Сотниковой Ольги',
    description: 'Универсальный шаблон: название продукта, тезисы, форма регистрации и раскрывающиеся блоки про обучение и занятия',
    date: 'Июль 2026',
  },
  {
    slug: 'shablon-bez-geymifikatsii',
    title: 'Шаблон без геймификации',
    client: 'Школа Сотниковой Ольги',
    description: 'Копия шаблона рекламного предложения без блоков про игровой формат и мотивацию баллами',
    date: 'Июль 2026',
  },
  {
    slug: 'dop-predmety-oge',
    title: 'Доп. предметы ОГЭ',
    client: 'Образовательный центр СТК',
    description: 'Подготовка к ОГЭ 2026 по физике, информатике, русскому языку и обществознанию — расписание, цены, запись',
    date: 'Июль 2026',
  },
  {
    slug: 'predzapis-avgust',
    title: 'Предзапись Август — «Умный август»',
    client: 'Школа Сотниковой Ольги',
    description: 'Курс восстановления базы: 20 уроков (12 тренажёров + 8 онлайн-уроков), форма предзаписи и скидка 3000 ₽',
    date: 'Июль 2026',
  },
  {
    slug: 'letnie-kursy-2',
    title: 'Все варианты летних курсов копия',
    client: 'Школа Сотниковой Ольги',
    description: 'Копия страницы летних курсов с другой картинкой в герое',
    date: 'Май 2026',
  },
  {
    slug: 'courses',
    title: 'Все летние курсы',
    client: 'Школа Сотниковой Ольги',
    description: 'Список всех летних программ с переходом на страницы курсов',
    date: 'Апрель 2026',
  },
  {
    slug: 'banner',
    title: 'Баннер — Летние занятия',
    client: 'Школа Сотниковой Ольги',
    description: 'Адаптивный баннер для размещения на платформе',
    date: 'Апрель 2026',
  },
  {
    slug: 'info',
    title: 'Информация о летнем курсе',
    client: 'Школа Сотниковой Ольги',
    description: 'Старт занятий, платформа, что нужно, доступ и контакты',
    date: 'Апрель 2026',
  },
]

function Catalog() {
  const base = '/znarnia'

  return (
    <div className="catalog">
      <div className="catalog__inner">
        <div className="catalog__header">
          <div className="catalog__badge">Демо-страницы</div>
          <h1 className="catalog__title">Znarnia Studio</h1>
          <p className="catalog__sub">Клиентские лендинги для демонстрации</p>
        </div>

        <div className="catalog__grid">
          {pages.map((p) => (
            <a key={p.slug} href={`${base}/${p.slug}/`} className="catalog__card">
              <div className="catalog__card-top">
                <span className="catalog__card-date">{p.date}</span>
              </div>
              <div className="catalog__card-title">{p.title}</div>
              <div className="catalog__card-client">{p.client}</div>
              <div className="catalog__card-desc">{p.description}</div>
              <div className="catalog__card-link">Открыть →</div>
            </a>
          ))}

          <div className="catalog__card catalog__card--empty">
            <div className="catalog__card-plus">+</div>
            <div className="catalog__card-title">Новая страница</div>
            <div className="catalog__card-desc">Следующий клиент появится здесь</div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>
)
