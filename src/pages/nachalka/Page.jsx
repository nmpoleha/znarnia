import SchoolHeader from '../../shared/components/SchoolHeader'
import RegistrationForm from '../../shared/components/RegistrationForm'

const features = [
  {
    icon: '🧠',
    title: 'Логика и мышление',
    desc: 'Нестандартные задачи, осмысленное чтение, умение рассуждать — то, чему школа уделяет мало времени',
  },
  {
    icon: '📐',
    title: 'Математика без скуки',
    desc: '2 онлайн-урока в неделю со сказочными героями: текстовые задачи и счёт через живой сюжет',
  },
  {
    icon: '🌍',
    title: 'Сюжетные приключения',
    desc: 'Урок в записи: то в Египте, то среди динозавров, то в космосе — задания вплетены в историю',
  },
  {
    icon: '✍️',
    title: 'Русский язык',
    desc: '2 записанных урока в своём темпе — повышаем грамотность, учим читать, понимать и выражать мысли',
  },
  {
    icon: '📊',
    title: 'Аналитика для родителей',
    desc: 'Полная прозрачность: процент правильных ответов, работа на каждом уроке, сложные темы',
  },
  {
    icon: '🤖',
    title: 'ИИ-помощник',
    desc: 'Встроенный ИИ-ассистент на платформе подсказывает и объясняет — ребёнок не застрянет',
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
          <h1 className="hero__title">Летние<br /><span>занятия</span></h1>
          <p className="hero__sub">
            Развиваем мышление, укрепляем знания —<br className="hero__br" />
            без стресса и жёсткого графика
          </p>
          <p className="hero__quote">
            Лето — шанс не просто повторить пройденное, а научить ребёнка думать, читать осмысленно и решать нестандартные задачи с удовольствием.
          </p>
          <a href="#registration" className="hero__cta">Записаться на лето</a>
        </section>

        {/* WHY BLOCK */}
        <section className="why">
          <div className="why__col">
            <div className="why__icon">💡</div>
            <div>
              <div className="why__title">Нужны ли занятия летом?</div>
              <p className="why__text">
                Однозначно да. К сентябрю дети теряют до 30% знаний. Но главное — лето даёт уникальный шанс развить то, на что у школы нет времени: логику, упорство и осмысленное чтение.
              </p>
            </div>
          </div>
          <div className="why__divider" />
          <div className="why__col">
            <div className="why__icon">🎯</div>
            <div>
              <div className="why__title">Почему это работает</div>
              <p className="why__text">
                Мы создали уроки со сказочными сюжетными линиями — ребёнок решает задачи внутри приключения и втягивается в мир математики сам, незаметно для себя.
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

        {/* INTERACTIVE BLOCK */}
        <section className="interactive">
          <div className="interactive__badge">Онлайн-платформа</div>
          <h2 className="interactive__title">Ребёнок — участник, а не зритель</h2>
          <p className="interactive__text">
            Даже просматривая урок в записи, ребёнок остаётся полноценным участником: отвечает на интерактивные вопросы, решает задачи прямо в видео, получает мгновенную обратную связь. Сюжет не даёт отвлечься.
          </p>
          <div className="interactive__points">
            <div className="interactive__point">✦ Интерактивные задачи внутри урока</div>
            <div className="interactive__point">✦ Ответы и подсказки в реальном времени</div>
            <div className="interactive__point">✦ ИИ-помощник объяснит, если что-то непонятно</div>
            <div className="interactive__point">✦ Родитель видит всё в личном кабинете</div>
          </div>
        </section>

        {/* TRAINER BLOCK */}
        <section className="trainer">
          <div className="trainer__left">
            <div className="trainer__badge">Тренажёр</div>
            <h2 className="trainer__title">МатКвест</h2>
            <p className="trainer__sub">Математические приключения</p>
            <p className="trainer__text">
              Набор задач в формате квеста: ребёнок выбирает приключение, решает задачи и открывает следующий уровень. Видит результат сразу — сколько решил верно, где ошибся и как улучшить.
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
          successText="Мы свяжемся с вами для уточнения деталей программы. До встречи этим летом!"
        />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
