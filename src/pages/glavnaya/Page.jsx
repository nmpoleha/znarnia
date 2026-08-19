const IconPeople = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="11" cy="9" r="4" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M3 25c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <circle cx="22" cy="9" r="3" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M19.5 17.3c2.8.7 4.5 3.4 4.5 6.7" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
)

const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M6 5h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M22 9h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M9 11h8M9 15h8M9 19h5" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const IconMonitor = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="26" height="18" rx="2.5" stroke="#6d28d9" strokeWidth="1.9"/>
    <path d="M13 22v4M19 22v4M10 26h12" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M12 12l4 3-4 3V12z" fill="#6d28d9"/>
    <circle cx="22" cy="23.5" r="1.5" fill="#6d28d9"/>
  </svg>
)

const IconBulb = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4a7 7 0 0 1 4 12.7V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3.3A7 7 0 0 1 16 4z" stroke="#6d28d9" strokeWidth="1.9" strokeLinejoin="round"/>
    <path d="M13 24h6M14 27h4" stroke="#6d28d9" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M16 9v4M13.5 11.5l2.5 2.5" stroke="#6d28d9" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const FEATURES = [
  { icon: <IconPeople />, text: 'Маленькие\nгруппы 4–8 детей' },
  { icon: <IconBook />,   text: 'Авторская методика\nОльги Сотниковой' },
  { icon: <IconMonitor />, text: 'Живые занятия\n+ записи уроков' },
  { icon: <IconBulb />,  text: 'Ребёнок начинает\nпонимать математику' },
]

import { useState } from 'react'
import resultsPhotoImg from '../predszapis-osen-stariye-5-8/results-photo.png'

/* ── Программы по математике (как на samostoyatelnaya-oplata-osen) ── */
const PROGRAMS = [
  { img: 'prog-abacus',    title: '1–4 классы',            desc: 'Математика + развитие математического мышления', href: '#' },
  { img: 'prog-backpack',  title: '5–8 классы',            desc: 'Сильная школьная база и работа с проблемами',    href: '#' },
  { img: 'prog-pie',       title: '9 класс',               desc: 'Математика + подготовка к ОГЭ',                  href: '#' },
  { img: 'prog-cap',       title: '10 класс',              desc: 'Математика и систематизация знаний',             href: '#' },
  { img: 'prog-target',    title: '11 класс — ЕГЭ база',   desc: 'Подготовка к базовому ЕГЭ',                      href: '#' },
  { img: 'prog-clipboard', title: '11 класс — ЕГЭ профиль', desc: 'Подготовка к профильному ЕГЭ',                  href: '#' },
]

/* ── Дополнительные предметы — подготовка к ОГЭ ── */
const SUBJECTS = [
  { img: 'subj-book',   title: 'Русский язык' },
  { img: 'subj-atom',   title: 'Физика' },
  { img: 'subj-laptop', title: 'Информатика' },
  { img: 'subj-bank',   title: 'Обществознание' },
]
import whyIllustrationImg from '../predszapis-osen-stariye-5-8/why-illustration.png'

const LkCheck = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
    <circle cx="10" cy="10" r="10" fill="#ede9fe"/>
    <polyline points="5.5 10.5 8.5 13.5 14.5 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Принципы построения занятий (как на intellektualnyy-klub) ── */
const PRINCIPLES = [
  {
    img: '/znarnia/images/lesson-shield.png',
    title: 'Полная концентрация и безопасная среда',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    img: '/znarnia/images/lesson-chart.png',
    title: 'Педагог видит прогресс каждого, а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    img: '/znarnia/images/lesson-search.png',
    title: 'Для вас — полная прозрачность прогресса',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
    img: '/znarnia/images/lesson-headset.png',
    title: 'Домашняя работа с интеллектуальной поддержкой',
    text: 'Если у ребёнка не получается решить задачу, он может запросить у системы умную подсказку, которая направляет, но не даёт готового ответа. При необходимости доступен пошаговый разбор. Затем ИИ подберёт похожее задание для закрепления темы. Это гарантирует, что пробелы в знаниях будут устранены сразу.',
  },
]

/* ── Полоса доверия (как на intellektualnyy-klub) ── */
const TRUST_ITEMS = [
  {
    text: 'Качественное образование и забота о каждом ребёнке',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2.8l7.6 2.9v6.1c0 5.4-3.4 8.7-7.6 9.9-4.2-1.2-7.6-4.5-7.6-9.9V5.7L12 2.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8.8 11.9l2.3 2.3 4-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Тысячи учеников доверяют Знарнии',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21.4c4-4.2 6-7.3 6-10a6 6 0 1 0-12 0c0 2.7 2 5.8 6 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="12" cy="11.2" r="2.4" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    text: 'Опытные преподаватели и проверенная методика',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3.4l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.8l6.1-.8L12 3.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    text: 'Безопасная образовательная среда',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="10.5" rx="2.4" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M7.8 10V7.4a4.2 4.2 0 0 1 8.4 0V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="12" cy="15.2" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    text: 'Видимый результат уже за 1–2 месяца',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 20v-6M12 20V6M18 20v-9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: 'Поддержка и обратная связь для родителей',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 20.6S3.8 15.7 3.8 10.2a4.7 4.7 0 0 1 8.2-3.1 4.7 4.7 0 0 1 8.2 3.1c0 5.5-8.2 10.4-8.2 10.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function GlavnayaPage() {
  const [contactsOpen, setContactsOpen] = useState(false)
  const [openCards, setOpenCards] = useState(() => new Set())

  const toggleCard = (i) => setOpenCards((prev) => {
    const next = new Set(prev)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })

  return (
    <div className="gv-page">

      {/* ── TOPBAR ── */}
      <header className="gv-topbar">
        <div className="gv-topbar__inner">
          <div className="gv-topbar__brand">
            <img
              src="https://znarnia.ru/logo.png"
              alt="Школа Сотниковой Ольги"
              className="gv-topbar__logo"
            />
            <span className="gv-topbar__brand-name">Школа Сотниковой Ольги</span>
          </div>
          <nav className="gv-topbar__nav">
            {['О нас','Отзывы','Сообщество','Курсы','Как проходят занятия'].map(link => (
              <a key={link} href="#" className="gv-topbar__link">{link}</a>
            ))}
            <button
              className={`gv-topbar__link gv-topbar__link--contacts${contactsOpen ? ' gv-topbar__link--active' : ''}`}
              onClick={() => setContactsOpen(v => !v)}
            >
              Контакты
            </button>
          </nav>
        </div>
        {contactsOpen && (
          <div className="gv-topbar__contacts-dropdown">
            <a href="mailto:info@znarnia.ru" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>info@znarnia.ru</span>
            </a>
            <a href="https://t.me/sotnikova_oa_school" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.2L2.4 10.9c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.7.4.9 1 .9.4 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.8L23.9 4.5c.3-1.3-.5-1.8-2.1-1.3z" fill="currentColor"/>
              </svg>
              <span>@sotnikova_oa_school</span>
            </a>
            <a href="https://wa.me/79955775318" className="gv-topbar__contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="currentColor"/>
              </svg>
              <span>+7 995 577-53-18</span>
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="gv-hero">
        <div className="gv-hero__inner">

          {/* LEFT: text content */}
          <div className="gv-hero__content">
            <h1 className="gv-hero__title">
              Онлайн-школа математики,<br/>
              где дети{' '}
              <span className="gv-hero__accent">учатся думать,</span>
              <br/>
              а не зубрить
            </h1>

            <p className="gv-hero__sub">
              Авторские курсы для школьников 1–10 классов:<br/>
              логика, школьная математика, развитие мышления и уверенность в решении задач.
            </p>

            <div className="gv-hero__features-panel">
              <div className="gv-hero__features">
                {FEATURES.map((f, i) => (
                  <div key={i} className="gv-hero__feature">
                    <div className="gv-hero__feature-icon">{f.icon}</div>
                    <p className="gv-hero__feature-text">
                      {f.text.split('\n').map((line, j) => (
                        <span key={j}>{line}{j === 0 && <br/>}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gv-hero__actions">
              <a href="#" className="gv-btn gv-btn--primary">Подобрать курс</a>
            </div>

          </div>

          {/* RIGHT: hero image */}
          <div className="gv-hero__media">
            <img
              src="/znarnia/images/hero-math.png"
              alt="Ноутбук с формулами, геометрические фигуры и математические символы"
              className="gv-hero__img"
              width="1536"
              height="1024"
            />
          </div>
        </div>
      </section>

      {/* ── КАК ПОСТРОЕНЫ ЗАНЯТИЯ (как на intellektualnyy-klub) ── */}
      <section className="sh-reveal">
        <div className="sh-wrap sh-reveal__body">
          <div className="sh-lessons__head">
            <div className="sh-lessons__head-text">
              <h2 className="sh-lessons__title">
                Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка
              </h2>
              <p className="sh-lessons__intro">
                Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы, на которых строится обучение.
              </p>
            </div>
          </div>

          <div className="sh-lessons__grid">
            {PRINCIPLES.map((p, i) => {
              const isOpen = openCards.has(i)
              return (
                <div key={i} className={`sh-principle gv-principle${isOpen ? ' gv-principle--open' : ''}`}>
                  <div className="sh-principle__media">
                    <div className="sh-principle__icon">
                      <img src={p.img} alt="" aria-hidden="true" className="sh-principle__icon-img" width="320" height="320" loading="lazy" decoding="async" />
                    </div>
                    <span className="sh-principle__num">{i + 1}</span>
                  </div>
                  <h3 className="sh-principle__title">{p.title}</h3>
                  <button
                    type="button"
                    className="gv-principle__toggle"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Свернуть описание' : 'Показать описание'}
                    onClick={() => toggleCard(i)}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {isOpen && <p className="sh-principle__text">{p.text}</p>}
                </div>
              )
            })}
          </div>

          {/* ── Результаты, которые замечают родители (как на predszapis-osen-stariye-5-8) ── */}
          <div className="p2-results gv-results">
            <h2 className="p2-section-title">Результаты, которые замечают родители</h2>
            <div className="p2-results__card">
              <div className="p2-results__content">
                <p className="p2-results__lead">Уже через несколько месяцев занятий ребёнок:</p>
                <ul className="p2-results__list">
                  {[
                    'начинает получать более высокие оценки по математике',
                    'увереннее чувствует себя на уроках',
                    'меньше переживает из-за контрольных и самостоятельных работ',
                    'перестаёт бояться ошибок',
                    'лучше понимает новые темы',
                    'легче справляется с домашними заданиями',
                  ].map((t, i) => (
                    <li key={i}><span className="p2-results__star" aria-hidden="true">⭐</span><span>{t}</span></li>
                  ))}
                </ul>
                <div className="p2-results__highlight">
                  <div className="p2-results__highlight-num">90%</div>
                  <div className="p2-results__highlight-text">
                    <div className="p2-results__highlight-main">учеников улучшают результаты по математике минимум на 1 балл</div>
                    <div className="p2-results__highlight-label">Уже через 2 месяца занятий</div>
                  </div>
                </div>
              </div>
              <div className="p2-results__photo-slot p2-results__photo-slot--filled">
                <img src={resultsPhotoImg} alt="Улыбающийся школьник показывает работу с оценкой 5" width="1280" height="853" loading="lazy" />
              </div>
            </div>
          </div>

          {/* ── Почему Знарния — это больше, чем репетитор (как на predszapis-osen-stariye-5-8) ── */}
          <div className="p2-more gv-more">
            <h2 className="p2-section-title">Почему Знарния — это больше, чем репетитор</h2>
            <div className="p2-more__card">
              <div className="p2-more__content">
                <p className="p2-more__lead">Большинство репетиторов помогают решить конкретную задачу или выполнить домашнее задание.</p>
                <p className="p2-more__accent">Мы работаем иначе.</p>
                <ul className="lk-pu-checklist p2-more__list">
                  {[
                    'Выявляем и устраняем пробелы в знаниях',
                    'Выстраиваем прочную математическую базу',
                    'Помогаем разобраться со сложными темами школьной программы',
                    'Развиваем умение рассуждать и находить решения',
                    'Учим ребёнка самостоятельно справляться с учебными задачами',
                  ].map((t, i) => (
                    <li key={i}><LkCheck /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="p2-more__media">
                <img src={whyIllustrationImg} alt="Дети занимаются онлайн на видеоуроке" width="1536" height="1024" loading="lazy" />
              </div>
              <p className="p2-more__goal">Наша цель — не временно улучшить результат, а <span className="p2-more__goal-accent">создать фундамент для дальнейшего успешного обучения</span>.</p>
            </div>
          </div>

          <div className="sh-guarantee">
            <div className="sh-guarantee__head">
              <div className="sh-guarantee__icon" aria-hidden="true">
                <svg width="30" height="32" viewBox="0 0 34 36" fill="none">
                  <path d="M17 3l12 4.5v9C29 26 22 32 17 34 12 32 5 26 5 16.5v-9L17 3z" fill="#fff" fillOpacity="0.18" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M11.5 17.5l4 4 7-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="sh-guarantee__title">Безопасность решения</div>
            </div>
            <p className="sh-guarantee__text">
              Мы уверены в результате, поэтому даём гарантию возврата средств: если в течение 7 дней после начала занятий вам что-то не понравится — вернём деньги в полном объёме.
            </p>
          </div>

          <div className="sh-result">
            <span className="sh-result__dots" aria-hidden="true" />
            <span className="sh-result__ring" aria-hidden="true" />

            <div className="sh-result__icon">
              <svg className="sh-result__hex" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                <path d="M100 8l73 42v100l-73 42-73-42V50z" stroke="#fff" strokeOpacity="0.16" strokeWidth="2"/>
                <path d="M100 26l58 33v82l-58 33-58-33V59z" stroke="#fff" strokeOpacity="0.10" strokeWidth="2"/>
              </svg>
              <img src="/znarnia/images/lesson-target.png" alt="" aria-hidden="true" className="sh-result__icon-img" width="440" height="440" loading="lazy" decoding="async" />
            </div>

            <h2 className="sh-result__title">Главный результат:<br className="sh-br-desktop" /> персонализированное обучение</h2>
            <p className="sh-result__text">
              Вся аналитика — по каждому ученику и классу в целом — позволяет нам точно видеть слабые места и понимать, какие темы требуют больше внимания. Мы не идём строго по программе, а постоянно адаптируем и улучшаем уроки, основываясь на реальных данных. Мы учим осознанно, делая процесс эффективным для вашего ребёнка.
            </p>
          </div>
        </div>
      </section>

      {/* ── ПОЛОСА ДОВЕРИЯ (как на intellektualnyy-klub) ── */}
      <section className="sh-trust">
        <div className="sh-wrap">
          <ul className="sh-trust__grid">
            {TRUST_ITEMS.map((item, i) => (
              <li key={i} className="sh-trust__item">
                <span className="sh-trust__icon" aria-hidden="true">{item.icon}</span>
                <span className="sh-trust__text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ВЫБОР ПРОГРАММЫ ПО МАТЕМАТИКЕ (как на samostoyatelnaya-oplata-osen) ── */}
      <section className="so-programs">
        <div className="sh-wrap">
          <h2 className="so-section__title">Выберите программу по математике</h2>
          <div className="so-cards">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="so-card">
                <div className="so-card__head">
                  <img className="so-card__icon" src={`/znarnia/images/${p.img}.png`} alt="" width="408" height="412" loading="lazy" decoding="async" />
                  <div className="so-card__heading">
                    <h3 className="so-card__title">{p.title}</h3>
                    <p className="so-card__desc">{p.desc}</p>
                  </div>
                </div>
                <p className="so-card__price">Сентябрь: 10 уроков / 4 500 ₽</p>
                <div className="so-card__actions">
                  <a href={p.href} className="so-btn so-btn--link">Подробнее о программе →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ДОПОЛНИТЕЛЬНЫЕ ПРЕДМЕТЫ — ПОДГОТОВКА К ОГЭ (как на samostoyatelnaya-oplata-osen) ── */}
      <section className="so-extra">
        <div className="sh-wrap">
          <h2 className="so-section__title">Дополнительные предметы — подготовка к ОГЭ</h2>
          <div className="so-subjects">
            {SUBJECTS.map((s) => (
              <article key={s.title} className="so-subject">
                <img className="so-subject__icon" src={`/znarnia/images/${s.img}.png`} alt="" width="200" height="200" loading="lazy" decoding="async" />
                <h3 className="so-subject__title">{s.title}</h3>
                <p className="so-subject__meta">1 раз в неделю • 50 минут</p>
                <p className="so-subject__meta">Расписание: [день / время]</p>
                <p className="so-subject__price">Сентябрь: 2 100 ₽</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
