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
          <div className="gap-block__tag">Что не даёт школа</div>
          <p className="gap-block__text">
            Школьная программа — это только база, мы же не&nbsp;ограничиваемся базовым школьным курсом. Наши летние занятия развивают логическое мышление через нестандартные задачи, осмысленное чтение условий и&nbsp;анализ, умение не&nbsp;сдаваться и&nbsp;пробовать разные пути, уверенное понимание математики и&nbsp;ощущение, что задачи решаемы — всё то, что даёт ребёнку спокойный и&nbsp;уверенный старт в&nbsp;средней школе.
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
              <li>✅ Начинает думать, а&nbsp;не&nbsp;угадывать</li>
              <li>✅ Читает и&nbsp;понимает условие</li>
              <li>✅ Умеет решать задачи самостоятельно</li>
              <li>✅ Развивает гибкое мышление</li>
              <li className="formats__main-list-divider" />
              <li>👉 Ребёнку становится легче учиться по&nbsp;всем предметам</li>
              <li>👉 Появляется уверенность и&nbsp;интерес</li>
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
              <div className="icard__title">Онлайн-уроки с&nbsp;интерактивными возможностями</div>
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
