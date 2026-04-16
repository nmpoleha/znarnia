import { useState, useEffect } from 'react'

const slides = [
  { label: 'фото 1' },
  { label: 'фото 2' },
  { label: 'фото 3' },
  { label: 'фото 4' },
]

function Slideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="slideshow">
      <div className="slideshow__track">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slideshow__slide ${i === current ? 'slideshow__slide--active' : ''}`}
          >
            <span className="slideshow__label">{s.label}</span>
          </div>
        ))}
      </div>
      <button className="slideshow__btn slideshow__btn--prev" onClick={prev}>‹</button>
      <button className="slideshow__btn slideshow__btn--next" onClick={next}>›</button>
      <div className="slideshow__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot ${i === current ? 'slideshow__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="page">
      <div className="page__bg-glow page__bg-glow--1" />
      <div className="page__bg-glow page__bg-glow--2" />

      <div className="page__inner">
        <article className="post">

          <h1 className="post__title">Нужны ли занятия летом?</h1>
          <p className="post__lead">Мой ответ — однозначно да.</p>

          <div className="post__body">
            <p>
              И дело даже не только в том, что за лето дети теряют часть знаний.
            </p>
            <p>
              У лета есть огромный плюс. Это, пожалуй, единственное время в году,
              когда ребёнок может учиться и развиваться <strong>без давления</strong>:
              без оценок, без гонки, без постоянного «быстрее». В таких условиях он легче
              всего учится понимать, рассуждать, разбираться. Формируется та самая база,
              благодаря которой потом «вдруг» становится легче в школе.
            </p>

            <div className="post__divider" />

            <p className="post__intro-nuance">Но есть один важный нюанс.</p>
            <p>
              Если летом просто посадить ребёнка за обычные задания или пособия, это почти
              не работает. Такие материалы чаще всего однообразны — в итоге ребёнку
              становится скучно, он быстро теряет интерес, и всё сводится
              к «надо сделать», а не к реальному развитию.
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
              персонажам и за счёт этого незаметно погружается в математику.
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

          <div className="post__divider post__divider--gap" />

          <div className="post__body">
            <p>
              Плюс есть ещё один урок, который он проходит самостоятельно в удобное время.
              Каждый раз это новое приключение: сегодня Египет и пирамиды, завтра динозавры,
              потом космос. Ребёнок читает задания, разбирается, решает — и параллельно
              узнаёт что-то новое.
            </p>
          </div>

          <div className="post__preview">
            <div className="post__preview-img">
              <span className="post__preview-img-label">Интерактивный задачник</span>
            </div>
            <div className="post__preview-content">
              <div className="post__preview-heading">Возможности платформы</div>
              <ul className="post__preview-list">
                <li>домашнее задание с ИИ-помощником — ребёнок не застрянет</li>
                <li>сюжетный урок, помогающий быть сконцентрированным и вовлечённым</li>
                <li>супер-интерактивность в реальном времени</li>
              </ul>
              <a href="#" className="post__preview-cta">▶ Попробовать тренажер</a>
            </div>
          </div>

          <div className="post__divider post__divider--gap" />

          <div className="post__body post__body--with-float">
            <Slideshow />

            <p>
              И в этот момент происходит самое ценное: он не «делает уроки» — он начинает думать.
            </p>
            <p>
              В итоге получается простой, но очень важный эффект: даёшь ребёнку гаджет — а он
              не просто проводит время, а действительно тренирует мозг.
            </p>
            <p>
              Мы специально сделали формат из трёх занятий в неделю — этого достаточно,
              чтобы был результат, но без перегрузки.
            </p>
            <p>
              В этом году добавили ещё и короткие уроки по русскому языку, которые можно
              проходить в удобное время. Они помогают закрепить базовые правила и,
              что особенно важно, развивают осмысленное чтение. А это напрямую влияет
              на все предметы.
            </p>

            <p className="post__intro-nuance">Что в итоге меняется?</p>
            <ul className="post__result-list">
              <li>Ребёнок перестаёт угадывать и начинает понимать.</li>
              <li>Лучше читает и улавливает смысл.</li>
              <li>Может сам решить задачу, а не ждать подсказку.</li>
              <li>Становится увереннее — и это всегда заметно.</li>
            </ul>
            <div className="post__float-clear" />
          </div>

          <div className="post__divider post__divider--gap" />

          <div className="post__body">
            <p>
              И, пожалуй, самое важное для родителей — вам не нужно ломать голову,
              как всё это организовать. Не нужно искать задания, заставлять, контролировать.
              Ребёнок втягивается сам, а вы просто видите результат.
            </p>
          </div>

          <div className="post__stats">
            <div className="post__stats-slides">
              <Slideshow />
            </div>
            <div className="post__stats-content">
              <div className="post__preview-heading">Аналитика для родителей</div>
              <ul className="post__preview-list">
                <li>результаты каждого урока</li>
                <li>процент правильных ответов</li>
                <li>проблемные темы</li>
              </ul>
              <p className="post__preview-result">
                <strong>Что это даёт:</strong> полная прозрачность и понимание
                реального прогресса ребёнка.
              </p>
            </div>
          </div>

          <div className="post__divider post__divider--gap" />

          <div className="post__body">
            <p>
              Лето можно просто «переждать» до сентября. А можно использовать его как точку
              роста — момент, когда ребёнку действительно становится легче учиться дальше.
            </p>
            <p>И этот выбор всегда остаётся за родителями.</p>
          </div>

        </article>

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>
      </div>
    </div>
  )
}
