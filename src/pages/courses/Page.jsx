import SchoolHeader from '../../shared/components/SchoolHeader'

const courses = [
  {
    title: 'Математика 1–4 класс',
    subtitle: 'Начальная школа · 2 этапа · старт 1 июня',
    href: 'https://articles.znarnia.ru/oplata-leto-nach-2026',
  },
  {
    title: 'Математика 5–10 класс',
    subtitle: 'Средняя школа · 2 этапа · старт 1 июня',
    href: 'https://articles.znarnia.ru/oplata-leto-sredn-2026',
  },
  {
    title: 'Русский язык 1–10 класс',
    subtitle: '20 уроков · старт 1 июня',
    href: 'https://articles.znarnia.ru/russian-leto-2026',
  },
]

export default function Page() {
  return (
    <div className="cr-page">
      <div className="cr-page__bg-glow cr-page__bg-glow--1" />
      <div className="cr-page__bg-glow cr-page__bg-glow--2" />

      <div className="cr-wrap">

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        <section className="cr-hero">
          <div className="cr-hero__tag">Лето 2026</div>
          <h1 className="cr-hero__title"><span>Все летние курсы</span></h1>
          <p className="cr-hero__sub">Выберите программу для вашего ребёнка</p>
        </section>

        <div className="cr-list">
          {courses.map((c, i) => (
            <a key={i} href={c.href} className="cr-item">
              <div className="cr-item__body">
                <div className="cr-item__title">{c.title}</div>
                <div className="cr-item__subtitle">{c.subtitle}</div>
              </div>
              <div className="cr-item__arrow">›</div>
            </a>
          ))}
        </div>

        <footer className="cr-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
