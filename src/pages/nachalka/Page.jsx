import SchoolHeader from '../../shared/components/SchoolHeader'
import RegistrationForm from '../../shared/components/RegistrationForm'

const features = [
  {
    icon: '🧠',
    title: 'Логика и мышление',
    desc: 'Нестандартные задачи, осмысленное чтение, умение рассуждать\u00A0— то, чему школа уделяет мало времени',
  },
  {
    icon: '📐',
    title: 'Математика без скуки',
    desc: '2 онлайн-урока в\u00A0неделю со\u00A0сказочными героями: текстовые задачи и\u00A0счёт через живой сюжет',
  },
  {
    icon: '🌍',
    title: 'Сюжетные приключения',
    desc: 'Урок в\u00A0записи: то\u00A0в\u00A0Египте, то\u00A0среди динозавров, то\u00A0в\u00A0космосе\u00A0— задания вплетены в\u00A0историю',
  },
  {
    icon: '✍️',
    title: 'Русский язык',
    desc: '2 записанных урока в\u00A0своём темпе\u00A0— повышаем грамотность, учим читать, понимать и\u00A0выражать мысли',
  },
  {
    icon: '📊',
    title: 'Аналитика для родителей',
    desc: 'Полная прозрачность: процент правильных ответов, работа на\u00A0каждом уроке, сложные темы',
  },
  {
    icon: '🤖',
    title: 'ИИ-помощник',
    desc: 'Встроенный ИИ-ассистент на\u00A0платформе подсказывает и\u00A0объясняет\u00A0— ребёнок не\u00A0застрянет',
  },
]

export default function Page() {
  return (
    <div className="page">
      <div className="page__bg-glow page__bg-glow--1" />
      <div className="page__bg-glow page__bg-glow--2" />

      <div className="page__inner">

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="hero">
          <div className="hero__tag">Начальная школа · 1–4 класс</div>
          <h1 className="hero__title">Летние <span>занятия</span></h1>
          <p className="hero__sub">
            Развиваем мышление, укрепляем знания&nbsp;— без стресса и&nbsp;жёсткого графика
          </p>
          <p className="hero__quote">
            Лето&nbsp;— шанс не&nbsp;просто повторить пройденное, а&nbsp;научить ребёнка думать, читать осмысленно и&nbsp;решать нестандартные задачи с&nbsp;удовольствием.
          </p>
          <a href="#registration" className="hero__cta">Записаться на лето</a>
        </section>

        {/* WHY BLOCK */}
        <section className="why">
          <div className="why__item">
            <img className="why__img" src="/znarnia/images/boy-thinking.png" alt="Нужны ли занятия летом?" />
            <div className="why__body">
              <div className="why__icon">💡</div>
              <div className="why__title">Нужны ли занятия летом?</div>
              <p className="why__text">
                Однозначно да. К&nbsp;сентябрю дети теряют до&nbsp;30% знаний.<br />
                Но&nbsp;главное&nbsp;— лето даёт уникальный шанс развить то, на&nbsp;что у&nbsp;школы нет времени: логику, упорство и&nbsp;осмысленное чтение.
              </p>
            </div>
          </div>
          <div className="why__item">
            <img className="why__img" src="/znarnia/images/boy-learning.png" alt="Почему это работает" />
            <div className="why__body">
              <div className="why__icon">🎯</div>
              <div className="why__title">Почему это работает</div>
              <p className="why__text">
                Мы создали уроки со&nbsp;сказочными сюжетными линиями&nbsp;— ребёнок решает задачи внутри приключения и&nbsp;втягивается в&nbsp;мир математики сам, незаметно для&nbsp;себя.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <div className="offer-label">Что входит в программу:</div>
        <div className="features">
          {features.map((f, i) => (
            <div key={i} className="fcard">
              <span className="fcard__icon">{f.icon}</span>
              <div className="fcard__title">{f.title}</div>
              <div className="fcard__desc">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* FORMATS BLOCK */}
        <section className="formats">
          <div className="formats__header">
            <div className="formats__tag">Форматы занятий</div>
            <h2 className="formats__title">Выберите подходящий формат</h2>
          </div>
          <div className="formats__grid">
            <div className="formats__card">
              <div className="formats__card-icon">🧒👧🧒</div>
              <div className="formats__card-title">Мини-группы</div>
              <p className="formats__card-desc">Занятия по&nbsp;классам: школьная математика и&nbsp;решение задач в&nbsp;небольших группах. Учим ребёнка думать, а&nbsp;не&nbsp;механически считать.</p>
              <ul className="formats__list">
                <li>Составлять алгоритм решений</li>
                <li>Осмысленно читать условие задачи</li>
                <li>Составлять уравнения и&nbsp;решать их</li>
                <li>Развивать логическое мышление</li>
              </ul>
            </div>
            <div className="formats__card">
              <div className="formats__card-icon">🧒</div>
              <div className="formats__card-title">Индивидуальные занятия</div>
              <p className="formats__card-desc">Программа выстраивается под&nbsp;конкретного ребёнка&nbsp;— его уровень, запросы и&nbsp;цели. Математика и&nbsp;русский язык.</p>
              <ul className="formats__list">
                <li>Программа под&nbsp;запрос ученика и&nbsp;родителя</li>
                <li>Математика и&nbsp;русский язык</li>
                <li>Эффективное решение конкретной задачи</li>
                <li>Максимальный результат за&nbsp;лето</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTERACTIVE BLOCK */}
        <section className="interactive">
          <div className="interactive__badge">Онлайн-платформа</div>
          <h2 className="interactive__title">Ребёнок&nbsp;— участник, а&nbsp;не&nbsp;зритель</h2>
          <p className="interactive__text">
            Даже просматривая урок в&nbsp;записи, ребёнок остаётся полноценным участником: отвечает на&nbsp;вопросы в&nbsp;интерактиве, решает задачи прямо в&nbsp;видео, получает мгновенную обратную связь. Сюжет не&nbsp;даёт отвлечься.
          </p>
          <div className="interactive__points">
            <div className="interactive__point">✦ Интерактивные задачи внутри урока</div>
            <div className="interactive__point">✦ Ответы и&nbsp;подсказки в&nbsp;реальном времени</div>
            <div className="interactive__point">✦ ИИ-помощник объяснит, если что-то непонятно</div>
            <div className="interactive__point">✦ Родитель видит всё в&nbsp;личном кабинете</div>
          </div>
        </section>

        {/* TRAINER BLOCK */}
        <section className="trainer">
          <div className="trainer__left">
            <div className="trainer__badge">Тренажёр</div>
            <h2 className="trainer__title">МатКвест</h2>
            <p className="trainer__sub">Математические приключения</p>
            <p className="trainer__text">
              Набор задач в&nbsp;формате квеста: ребёнок выбирает приключение, решает задачи и&nbsp;открывает следующий уровень. Видит результат сразу&nbsp;— сколько решил верно, где ошибся и&nbsp;как улучшить.
            </p>
            <a href="#registration" className="trainer__btn">Попробовать тренажёр →</a>
          </div>
          <div className="trainer__right">
            <div className="trainer__preview">
              <div className="trainer__preview-icon">🗺️</div>
              <div className="trainer__preview-title">Выбери приключение</div>
              <div className="trainer__preview-items">
                <div className="trainer__preview-item">🦕 Мир динозавров</div>
                <div className="trainer__preview-item">🚀 Космическая миссия</div>
                <div className="trainer__preview-item">🏺 Тайны Египта</div>
              </div>
            </div>
          </div>
        </section>

        <RegistrationForm
          successText="Мы свяжемся с&nbsp;вами для уточнения деталей программы. До&nbsp;встречи этим летом!"
        />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
