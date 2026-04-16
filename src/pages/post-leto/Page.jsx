import SchoolHeader from '../../shared/components/SchoolHeader'

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

        <article className="post">
          <div className="post__tag">Блог</div>

          <h1 className="post__title">Нужны ли занятия летом?</h1>

          <p className="post__lead">Мой ответ — однозначно да.</p>

          <div className="post__body">
            <p>
              И дело даже не только в том, что за лето дети теряют часть знаний.
            </p>

            <div className="post__highlight">
              <div className="post__highlight-icon">☀️</div>
              <p>
                У лета есть огромный плюс. Это, пожалуй, единственное время в году,
                когда ребёнок может учиться и развиваться <strong>без давления</strong>:
                без оценок, без гонки, без постоянного «быстрее». В таких условиях
                он легче всего учится понимать, рассуждать, разбираться. Формируется
                та самая база, благодаря которой потом «вдруг» становится легче в школе.
              </p>
            </div>

            <div className="post__divider" />

            <p className="post__intro-nuance">Но есть один важный нюанс.</p>

            <p>
              Если летом просто посадить ребёнка за обычные задания или пособия,
              это почти не работает. Такие материалы чаще всего однообразны —
              в итоге ребёнку становится скучно, он быстро теряет интерес,
              и всё сводится к «надо сделать», а не к реальному развитию.
            </p>

            <p>
              Именно поэтому, создавая летние занятия, мы изначально ставили другую
              задачу — сделать их не просто полезными, а такими, чтобы ребёнок
              <strong> сам хотел в них включаться</strong>.
            </p>

            <div className="post__divider" />

            <p>В итоге появился формат, где обучение встроено в сюжет.</p>

            <p>
              Два раза в неделю проходят онлайн-уроки со сказочными героями.
              Ребёнок не просто решает задачи — он движется по истории, помогает
              персонажам, и за счёт этого незаметно погружается в математику.
            </p>
          </div>

          <div className="post__preview">
            <div className="post__preview-img">
              <span className="post__preview-img-label">Фрагмент урока</span>
            </div>

            <div className="post__preview-content">
              <div className="post__preview-heading">
                Онлайн-уроки с интерактивными возможностями
              </div>

              <ul className="post__preview-list">
                <li>ребёнок отвечает на задания у себя на экране</li>
                <li>не видит ответы других</li>
                <li>получает мгновенную обратную связь</li>
              </ul>

              <p className="post__preview-result">
                <strong>Что это даёт:</strong> полное вовлечение.
                Ребёнок не «присутствует» — он работает.
              </p>

              <a href="#" className="post__preview-cta">▶ Просмотр онлайн-урока</a>
            </div>
          </div>

        </article>

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>
      </div>
    </div>
  )
}
