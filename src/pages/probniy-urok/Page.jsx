import SchoolHeader from '../../shared/components/SchoolHeader'

function nb(str) {
  const NBSP = String.fromCharCode(160)
  return str.replace(/ ([а-яёА-ЯЁ]{1,2}) /g, (_, w) => ` ${w}${NBSP}`)
}

const Check = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
    <circle cx="10" cy="10" r="10" fill="#ede9fe"/>
    <polyline points="5.5 10.5 8.5 13.5 14.5 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Shield = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

function Num({ n }) {
  return <div className="pu-num">{n}</div>
}

function CheckList({ items }) {
  return (
    <ul className="pu-checklist">
      {items.map((t, i) => (
        <li key={i}><Check /><span>{nb(t)}</span></li>
      ))}
    </ul>
  )
}

export default function Page() {
  return (
    <div className="pu-page">
      <div className="pu-wrap">
        <SchoolHeader logoUrl="https://znarnia.ru/logo.png" name="Школа Сотниковой Ольги" />

        {/* ── HERO ── */}
        <section className="pu-hero">
          <div className="pu-hero__left">
            <div className="pu-hero__tag">Пробный урок</div>
            <h1 className="pu-hero__title">Пробная неделя<br />обучения</h1>
            <div className="pu-hero__sub">{nb('Покажите ребёнку, что учёба может быть интересной и эффективной')}</div>
            <p className="pu-hero__desc">{nb('Ваш ребёнок привык к скучным урокам и непонятным темам? Мы покажем другой формат — где обучение вовлекает, объясняет и даёт результат.')}</p>
            <div className="pu-hero__actions">
              <a href="#" className="pu-btn-orange">Попробуйте за 450 ₽</a>
              <div className="pu-hero__badge"><Shield /><span>Без риска<br />и обязательств</span></div>
            </div>
          </div>
          <div className="pu-hero__right">
            <img src="/znarnia/boy-desk.png" alt="" className="pu-hero__img" />
          </div>
        </section>

        {/* ── SECTION 1 ── */}
        <section className="pu-card">
          <div className="pu-card__head">
            <Num n="1" />
            <div>
              <div className="pu-card__title">Интерактивный урок-тренажёр</div>
              <div className="pu-card__sub">{nb('Системное освоение темы через цикл «теория → практика → закрепление»')}</div>
            </div>
          </div>
          <div className="pu-card__body">
            <div className="pu-card__body-left">
              <div className="pu-meta">
                <div className="pu-meta__item">⏱ Длительность: 30–40 минут</div>
                <div className="pu-meta__item">⏰ Урок можно проходить в удобное время</div>
              </div>
              <div className="pu-card__how">
                <div className="pu-card__how-title">Как устроен урок:</div>
                <CheckList items={[
                  'Короткое объяснение ключевой темы',
                  'Сразу — применение на практике',
                  'Мгновенная обратная связь по каждому заданию',
                  'При необходимости — разбор решений',
                  'Переход к следующему элементу темы',
                ]} />
              </div>
            </div>
          </div>
          <div className="pu-callout">
            {nb('Каждый урок выстроен как последовательность повторяющихся циклов: объяснение → практика → анализ → следующий шаг.')}<br />
            {nb('Ребёнок не просто знакомится с темой, а последовательно прорабатывает каждый её элемент до понимания.')}
          </div>
        </section>

        {/* ── SECTION 2 ── */}
        <section className="pu-card">
          <div className="pu-card__head">
            <Num n="2" />
            <div>
              <div className="pu-card__title">Урок с сюжетной линией</div>
              <div className="pu-card__sub">Тема урока построена на реальной жизненной ситуации.</div>
            </div>
          </div>
          <div className="pu-card__body pu-card__body--row">
            <p className="pu-card__text">{nb('Ребёнок не просто изучает тему — он сразу видит, где и как она используется в реальной жизни.')}</p>
            <CheckList items={[
              'Делает материал понятнее',
              'Повышает интерес к обучению',
              'Убирает вопрос: «А зачем мне это нужно?»',
            ]} />
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section className="pu-card">
          <div className="pu-card__head">
            <Num n="3" />
            <div>
              <div className="pu-card__title">Интерактивный онлайн-урок<br />с учителем</div>
              <div className="pu-card__sub">Живое участие вместо пассивного просмотра</div>
            </div>
          </div>
          <div className="pu-card__body">
            <CheckList items={[
              'ребёнок отвечает на вопросы в процессе урока',
              'сразу видит, правильно или нет',
              'получает баллы за выполнение заданий',
            ]} />
            <div className="pu-note">
              🔒 {nb('Важно: ответы видны только самому ребёнку — никакого стресса и страха ошибиться.')}
            </div>
          </div>
        </section>

        {/* ── SECTIONS 4 & 5 ── */}
        <div className="pu-cards-row">
          <section className="pu-card">
            <div className="pu-card__head">
              <Num n="4" />
              <div className="pu-card__title">{nb('Не получилось присутствовать онлайн? Не проблема')}</div>
            </div>
            <div className="pu-card__body">
              <p className="pu-card__text">Если ребёнок пропустил онлайн-урок:</p>
              <CheckList items={[
                'он смотрит его в записи',
                'сохраняется вся интерактивность',
                'получает мгновенную обратную связь',
                'статистика также доступна родителям',
              ]} />
              <div className="pu-note">▶ {nb('По эффективности это тот же полноценный урок.')}</div>
            </div>
          </section>

          <section className="pu-card">
            <div className="pu-card__head">
              <Num n="5" />
              <div className="pu-card__title">Полная прозрачность<br />для родителей</div>
            </div>
            <div className="pu-card__body">
              <p className="pu-card__text">После каждого урока вы получаете подробную статистику:</p>
              <CheckList items={[
                'сколько заданий решено',
                'где были ошибки',
                'сколько попыток понадобилось',
                'какие темы вызвали сложности',
              ]} />
              <div className="pu-note">👥 {nb('Вы не гадаете — вы точно понимаете уровень ребёнка.')}</div>
            </div>
          </section>
        </div>

        {/* ── BOTTOM CTA ── */}
        <section className="pu-cta">
          <div className="pu-cta__left">
            <div className="pu-cta__title">Попробуйте пробную неделю за 450 ₽</div>
            <div className="pu-cta__text">{nb('и оцените формат, который действительно вовлекает в обучение.')}</div>
          </div>
          <div className="pu-cta__right">
            <a href="#" className="pu-btn-orange">Попробовать неделю обучения</a>
            <div className="pu-cta__badge"><Shield /><span>Без риска и обязательств</span></div>
          </div>
        </section>

        <footer className="pu-footer">© 2026 Школа Сотниковой Ольги</footer>
      </div>
    </div>
  )
}
