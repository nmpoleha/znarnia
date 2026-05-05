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

const DiamondIcon = () => (
  <svg viewBox="0 0 20 20" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'relative', top:'5px'}}>
    <path d="M10 17L2 7l2.5-4h11L18 7l-8 10z" stroke="#6d28d9" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M2 7h16M7 7L10 17M13 7L10 17M4.5 3L7 7M15.5 3L13 7" stroke="#6d28d9" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
)

const StatsChart = () => {
  const r = 32, cx = 50, cy = 50
  const circ = 2 * Math.PI * r
  const green = 0.60 * circ
  const blue  = 0.32 * circ
  const red   = 0.08 * circ
  return (
    <div className="pu-stats-widget">
      <svg viewBox="0 0 100 100" width="90" height="90">
        <g transform="rotate(-90 50 50)">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#22c55e" strokeWidth="13"
            strokeDasharray={`${green} ${circ}`} strokeDashoffset="0" strokeLinecap="butt"/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#818cf8" strokeWidth="13"
            strokeDasharray={`${blue} ${circ}`} strokeDashoffset={-green} strokeLinecap="butt"/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f97316" strokeWidth="13"
            strokeDasharray={`${red} ${circ}`} strokeDashoffset={-(green+blue)} strokeLinecap="butt"/>
        </g>
        <text x="50" y="47" textAnchor="middle" fontSize="11" fill="#6b7280">Всего</text>
        <text x="50" y="61" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e1b4b">25</text>
      </svg>
      <div className="pu-stats-legend">
        <div><span style={{background:'#22c55e'}}/>Онлайн</div>
        <div><span style={{background:'#818cf8'}}/>Оффлайн</div>
        <div><span style={{background:'#f97316'}}/>Пропущено</div>
      </div>
    </div>
  )
}

const PeopleIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
    <circle cx="13" cy="8" r="4.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M4 24c0-5 4-8 9-8s9 3 9 8" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="26" cy="8" r="3.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M26 16c3 0 6 2.5 6 7" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 36 28" width="36" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
    <rect x="1" y="1" width="34" height="22" rx="4" stroke="#6d28d9" strokeWidth="1.8"/>
    <polygon points="14,7 14,17 23,12" fill="#6d28d9"/>
    <line x1="10" y1="26" x2="26" y2="26" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
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
        <li key={i}><Check /><span>{typeof t === 'string' ? nb(t) : t}</span></li>
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
        <section className="pu-card pu-card--s1">
          <div className="pu-card__head">
            <Num n="1" />
            <div>
              <div className="pu-card__title">Интерактивный урок-тренажёр</div>
              <div className="pu-card__sub">{nb('Системное освоение темы через цикл «теория → практика → закрепление»')}</div>
            </div>
          </div>
          <div className="pu-card__body pu-card__body--row">
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
            <div className="pu-card__body-right">
              <div className="pu-lesson-preview">
                <img src="/znarnia/images/lesson-screen.png" alt="" className="pu-lesson-preview__img" />
                <div className="pu-lesson-preview__badge">⭐ Отлично!<br />+10 баллов</div>
              </div>
            </div>
          </div>
          <div className="pu-callout">
            Каждый урок выстроен как последовательность повторяющихся циклов:<br />
            объяснение → практика → анализ → следующий шаг.<br />
            {nb('Ребёнок не просто знакомится с темой, а последовательно прорабатывает каждый её элемент до понимания.')}
          </div>
        </section>

        {/* ── SECTION 2 ── */}
        <section className="pu-card">
          <div className="pu-card__head pu-card__head--center">
            <Num n="2" />
            <div className="pu-card__title">Урок с сюжетной линией</div>
          </div>
          <div className="pu-s2-body">
            <div className="pu-s2-left">
              <p className="pu-s2-bold">{nb('Тема урока построена на реальной жизненной ситуации.')}</p>
              <p className="pu-card__text">{nb('Ребёнок не просто изучает тему — он сразу видит, где и как она используется в реальной жизни.')}</p>
            </div>
            <div className="pu-s2-mid">
              <img src="/znarnia/images/girl-tablet.png" alt="" className="pu-s2-img" />
            </div>
            <div className="pu-s2-right">
              <CheckList items={[
                'Делает материал понятнее',
                'Повышает интерес к обучению',
                <>Убирает вопрос:<br />«А зачем мне это нужно?»</>,
              ]} />
            </div>
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section className="pu-card pu-card--s3">
          <div className="pu-card__head">
            <Num n="3" />
            <div>
              <div className="pu-card__title">Интерактивный онлайн-урок с учителем</div>
              <div className="pu-card__sub" style={{marginTop:'10px'}}>Живое участие вместо пассивного просмотра</div>
            </div>
          </div>
          <div className="pu-card__body pu-card__body--row">
            <div className="pu-card__body-left">
              <CheckList items={[
                'ребёнок отвечает на вопросы в процессе урока',
                'сразу видит, правильно или нет',
                'получает баллы за выполнение заданий',
              ]} />
              <div className="pu-callout">
                Важно: ответы видны только самому ребёнку —<br />никакого стресса и страха ошибиться.
              </div>
            </div>
            <div className="pu-card__body-right">
              <div className="pu-lesson-preview">
                <img src="/znarnia/images/online-lesson.png" alt="" className="pu-lesson-preview__img" style={{transform:'scale(1.1) translateY(-20px)'}} />
                <div className="pu-lesson-preview__badge pu-lesson-preview__badge--lg"><DiamondIcon />+15 баллов</div>
              </div>
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
              <div className="pu-note pu-note--row"><PlayIcon /><span>По эффективности это<br />тот же полноценный урок.</span></div>
            </div>
          </section>

          <section className="pu-card">
            <div className="pu-card__head">
              <Num n="5" />
              <div className="pu-card__title">Полная прозрачность<br />для родителей</div>
            </div>
            <div className="pu-card__body pu-card__body--row" style={{alignItems:'flex-start'}}>
              <div className="pu-card__body-left">
                <p className="pu-card__text">После каждого урока вы получаете подробную статистику:</p>
                <CheckList items={[
                  'сколько заданий решено',
                  'где были ошибки',
                  'сколько попыток понадобилось',
                  <span style={{whiteSpace:'nowrap'}}>какие темы вызвали сложности</span>,
                ]} />
              </div>
              <StatsChart />
            </div>
            <div className="pu-note pu-note--row" style={{marginTop:'16px'}}><PeopleIcon /><span>Вы не гадаете — вы точно понимаете уровень ребёнка.</span></div>
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
