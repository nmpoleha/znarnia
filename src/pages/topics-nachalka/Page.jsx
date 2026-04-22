import SchoolHeader from '../../shared/components/SchoolHeader'

const grades = [
  {
    grade: '1 класс',
    topics: [
      'Состав числа в пределах 20',
      'Решение примеров в 1–2 действия в пределах 20',
      'Решение задач в 1–2 действия в пределах 20',
      'Построение отрезка заданной длины',
      'Определение длины отрезка',
      'Определение геометрических фигур: треугольник, четырёхугольник, пятиугольник, шестиугольник, многоугольник',
      'Задачи на логику',
    ],
  },
  {
    grade: '2 класс',
    topics: [
      'Числа от 1 до 100. Счёт в пределах 100',
      'Табличное умножение и деление',
      'Решение уравнений',
      'Порядок выполнения действий в выражениях, содержащих 2–3 действия',
      'Работа с текстовыми задачами',
      'Углы прямые и непрямые (острые, тупые). Прямоугольник (квадрат)',
      'Свойство противоположных сторон прямоугольника. Периметр прямоугольника (квадрата)',
    ],
  },
  {
    grade: '3 класс',
    topics: [
      'Устные вычисления, сводимые к действиям в пределах 100. Письменное сложение, вычитание чисел в пределах 1000',
      'Таблица умножения',
      'Решение уравнений',
      'Деление с остатком',
      'Нахождение доли от числа и числа по его доле',
      'Текстовые задачи',
      'Величины: масса, время, длина, площадь',
      'Наглядная геометрия',
    ],
  },
  {
    grade: '4 класс',
    topics: [
      'Таблица умножения',
      'Математический диктант',
      'Выполнение арифметических действий',
      'Уравнения',
      'Единицы величин (длина, масса, площадь, время) и соотношения между ними, обозначение единиц',
      'Текстовые задачи',
    ],
  },
]

export default function Page() {
  return (
    <div className="tn-page">
      <div className="tn-page__glow tn-page__glow--1" />
      <div className="tn-page__glow tn-page__glow--2" />

      <div className="tn-wrap">

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        <section className="tn-hero">
          <div className="tn-hero__tag">Начальная школа · 1–4 класс</div>
          <h1 className="tn-hero__title">Список тем</h1>
          <p className="tn-hero__sub">Темы этапа 1 — уроки-тренажёры. Базовый и продвинутый уровни.</p>
        </section>

        <div className="tn-grid">
          {grades.map(({ grade, topics }) => (
            <div key={grade} className="tn-card">
              <div className="tn-card__head">{grade}</div>
              <ul className="tn-card__list">
                {topics.map((topic, i) => (
                  <li key={i} className="tn-card__item">
                    <span className="tn-card__dot" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tn-back">
          <a href="/znarnia/oplata-nachalka/" className="tn-back__btn">← Назад к программе</a>
        </div>

        <footer className="tn-footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
