import SchoolHeader from '../../shared/components/SchoolHeader'
import RegistrationForm from '../../shared/components/RegistrationForm'


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
          <div className="hero__start">Начало занятий — 1 июня</div>
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

        {/* SCHOOL GAP BLOCK */}
        <section className="gap-block">
          <div className="gap-block__header">
            <div className="gap-block__tag">Что не даёт школа</div>
            <h2 className="gap-block__title">Школьная программа — это только база</h2>
            <p className="gap-block__lead">
              Программа, по которой работает большинство школ,&nbsp;— базовая. Счёт, таблица умножения, простейшие задачи. Но&nbsp;развитие мышления в&nbsp;ней попросту не&nbsp;предусмотрено.
            </p>
          </div>
          <div className="gap-block__cols">
            <div className="gap-block__col gap-block__col--red">
              <div className="gap-block__col-title">❌ Школа не&nbsp;развивает</div>
              <ul className="gap-block__list">
                <li>Умение рассуждать, когда ответ не&nbsp;очевиден</li>
                <li>Осмысленное чтение и&nbsp;анализ задачи</li>
                <li>Интеллектуальную выносливость</li>
                <li>Настойчивость при решении сложных задач</li>
                <li>Математический азарт и&nbsp;интерес к&nbsp;предмету</li>
              </ul>
            </div>
            <div className="gap-block__col gap-block__col--green">
              <div className="gap-block__col-title">✓ Летние курсы дают</div>
              <ul className="gap-block__list">
                <li>Логическое мышление через нестандартные задачи</li>
                <li>Осмысленное чтение условий и&nbsp;анализ</li>
                <li>Умение не&nbsp;сдаваться и&nbsp;пробовать разные пути</li>
                <li>Математическую грамотность сверх программы</li>
                <li>Уверенный старт в&nbsp;средней школе</li>
              </ul>
            </div>
          </div>
          <p className="gap-block__note">
            Именно эти качества — а&nbsp;не&nbsp;только быстрый счёт — позволяют ребёнку учиться успешно, без стресса и&nbsp;страха перед сложными задачами.
          </p>
        </section>

        {/* FEATURES */}
        <div className="offer-label">Что входит в программу:</div>
        <div className="features">
          <div className="fcard fcard--wide">
            <div className="fcard__split">
              <div className="fcard__split-left">
                <span className="fcard__icon">📐</span>
                <div className="fcard__title">Математика без скуки</div>
                <div className="fcard__desc">2 онлайн-урока в&nbsp;неделю со&nbsp;сказочными героями: текстовые задачи и&nbsp;счёт через живой сюжет</div>
                <a href="#registration" className="fcard__btn">Смотреть запись урока →</a>
              </div>
              <div className="fcard__split-divider" />
              <div className="fcard__split-right">
                <span className="fcard__icon">🗺️</span>
                <div className="fcard__title">МатКвест</div>
                <div className="fcard__desc">Тренажёр в&nbsp;формате приключения: решай задачи, открывай уровни, видь результат сразу</div>
                <a href="#registration" className="fcard__btn fcard__btn--accent">Попробовать тренажёр →</a>
              </div>
            </div>
          </div>
          <div className="fcard">
            <span className="fcard__icon">✍️</span>
            <div className="fcard__title">Русский язык</div>
            <div className="fcard__desc">2 записанных урока в&nbsp;своём темпе&nbsp;— повышаем грамотность, учим читать, понимать и&nbsp;выражать мысли</div>
            <a href="#registration" className="fcard__btn fcard__btn--accent">Попробовать тренажёр →</a>
          </div>
        </div>
        <div className="features-cta">
          <a href="#registration" className="features-cta__btn">Записаться на летние занятия</a>
        </div>

        {/* FORMATS BLOCK */}
        <section className="formats">
          <div className="formats__tag">Формат занятий</div>
          <div className="formats__main-card">
            <div className="formats__main-left">
              <div className="formats__main-icon">🧒👧🧒</div>
              <div className="formats__main-title">Мини-группы по классам</div>
              <p className="formats__main-desc">Занятия по&nbsp;классам: школьная математика и&nbsp;решение задач в&nbsp;небольших группах. Учим ребёнка думать, а&nbsp;не&nbsp;механически считать.</p>
            </div>
            <ul className="formats__main-list">
              <li>Составлять алгоритм решений</li>
              <li>Осмысленно читать условие задачи</li>
              <li>Составлять уравнения и&nbsp;решать их</li>
              <li>Развивать логическое мышление</li>
            </ul>
          </div>
          <div className="formats__note">
            Также доступны <strong>индивидуальные занятия</strong>&nbsp;— программа выстраивается под&nbsp;конкретного ребёнка, его уровень и&nbsp;запросы. Уточните при&nbsp;записи.
          </div>
        </section>

        {/* INTERACTIVE BLOCK */}
        <section className="interactive">
          <div className="interactive__badge">Онлайн-платформа</div>
          <div className="interactive__cards">
            <div className="icard">
              <div className="icard__icon">⚡</div>
              <div className="icard__title">Супер-интерактивность в&nbsp;реальном времени</div>
              <div className="icard__desc">Учитель видит, что пишет ученик, в&nbsp;реальном времени. Может подсказать, исправить или похвалить&nbsp;— как если бы сидел рядом.</div>
            </div>
            <div className="icard">
              <div className="icard__icon">🤖</div>
              <div className="icard__title">Домашнее задание с&nbsp;ИИ-помощником</div>
              <div className="icard__desc">Искусственный интеллект помогает разобраться в&nbsp;домашнем задании: объясняет ошибки, даёт подсказки, адаптируется под уровень.</div>
            </div>
            <div className="icard">
              <div className="icard__icon">📊</div>
              <div className="icard__title">Аналитика для родителя&nbsp;— полная прозрачность</div>
              <div className="icard__desc">Родители в&nbsp;любой момент видят прогресс ребёнка: оценки, посещаемость, динамику. Больше не&nbsp;нужно спрашивать «как дела в&nbsp;школе».</div>
            </div>
            <div className="icard">
              <div className="icard__icon">🙋</div>
              <div className="icard__title">Ребёнок&nbsp;— участник, а&nbsp;не&nbsp;зритель</div>
              <div className="icard__desc">Даже в&nbsp;записи ребёнок отвечает на&nbsp;вопросы, решает задачи прямо в&nbsp;видео и&nbsp;получает мгновенную обратную связь. Сюжет не&nbsp;даёт отвлечься.</div>
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
