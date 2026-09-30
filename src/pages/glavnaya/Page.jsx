const IconPeople = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="9.5" r="3.8" stroke="currentColor" strokeWidth="1.9"/>
    <circle cx="7.5" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.9"/>
    <circle cx="24.5" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.9"/>
    <path d="M9.5 25c0-3.9 2.9-7 6.5-7s6.5 3.1 6.5 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M3 24c0-3 2-5.2 4.5-5.2 1 0 1.9.3 2.6.9M29 24c0-3-2-5.2-4.5-5.2-1 0-1.9.3-2.6.9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>
)

const IconDocPen = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M22 13V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M10 11h8M10 15.5h8M10 20h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M25.6 15.4l2 2-7.8 7.8-3 .9.9-3 7.9-7.7z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
  </svg>
)

const IconLaptopPlay = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="5" y="6" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.9"/>
    <path d="M2.5 25.5h27" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
    <path d="M14 10.8l5 2.7-5 2.7v-5.4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

const IconStarCheck = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 3.5l3.7 7.4 8.1 1.2-5.9 5.7 1.4 8.1L16 22.1l-7.3 3.8 1.4-8.1-5.9-5.7 8.1-1.2L16 3.5z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round"/>
    <path d="M12.3 15.3l2.6 2.6 4.8-4.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4l10 4-10 4L2 8l10-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M6 10.5V15c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 8v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const IconBookMini = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4V5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6V5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
)

const FEATURES = [
  { icon: <IconPeople />,     tone: 'lilac',  title: 'Маленькие группы',        sub: '4–8 детей' },
  { icon: <IconDocPen />,     tone: 'peach',  title: 'Авторская методика',      sub: 'Ольги Сотниковой' },
  { icon: <IconLaptopPlay />, tone: 'violet', title: 'Живые занятия',           sub: '+ записи уроков' },
  { icon: <IconStarCheck />,  tone: 'mint',   title: 'От школьной базы до ЕГЭ', sub: '1–11 классы' },
]

const HERO_PILLS = [
  { icon: <IconCap />,      label: '1–11 классы', variant: 'purple' },
  { icon: <IconBookMini />, label: 'ОГЭ',         variant: 'green' },
  { icon: <IconBookMini />, label: 'ЕГЭ',         variant: 'orange' },
]

import { useState } from 'react'
import { nb } from '../../shared/utils/nb'
import resultsPhotoImg from '../predszapis-osen-stariye-5-8/results-photo.png'

/* ── «Математика в мини-группах»: 4 программы сеткой 2×2 ── */
const FORMAT_PROGRAMS = [
  { grade: '1–4 класс',   name: 'Начальная школа', tone: 'lilac',  placeholder: 'стопка книг', img: 'fmt-card-1-4', imgAlt: 'Стопка учебников, тетрадь с примерами и карандаши',
    text: 'Формируем прочную математическую базу, учим рассуждать, понимать задачи и уверенно применять знания.',
    extra: { title: 'Индивидуальные занятия',
      subjects: ['Математика', 'Русский язык', 'Английский язык', 'Олимпиадная математика', 'Поступление в математическую школу'],
      note: 'Программа составляется под уровень ребёнка и конкретную образовательную цель.' } },
  { grade: '5–8 класс',   name: 'Средняя школа',   tone: 'peach',  placeholder: 'калькулятор + угольник', img: 'fmt-card-5-8', imgAlt: 'Учебники, калькулятор, тетрадь с графиком и угольник',
    text: 'Выстраиваем уверенную математическую базу, закрываем пробелы и помогаем разобраться в сложных школьных темах.',
    extra: { title: 'Индивидуальные занятия',
      subjects: ['Математика', 'Русский язык', 'Английский язык', 'Физика', 'Информатика', 'Обществознание', 'Биология', 'Химия'],
      note: 'Программа подбирается с учётом уровня ребёнка, школьной программы и ваших целей.' } },
  { grade: '9 класс',     name: 'Подготовка к ОГЭ', tone: 'mint',  placeholder: 'бланк ОГЭ с галочкой', img: 'fmt-card-9', imgAlt: 'Бланк ОГЭ, планшет с тестом, учебники и тетрадь',
    text: 'Систематизируем знания, закрываем пробелы и последовательно отрабатываем задания ОГЭ — от базовых до сложных.',
    extra: { title: 'Другие предметы ОГЭ в мини\u2011группах',
      subjects: ['Русский язык', 'Физика', 'Информатика', 'Обществознание'],
      meta: '1 раз в неделю · 90 минут · 1\u00a0050\u00a0₽\u00a0/\u00a0занятие',
      note: 'Также доступны индивидуальные занятия по школьным предметам и выбранным предметам ОГЭ.' } },
  { grade: '10–11 класс', name: 'Подготовка к ЕГЭ', tone: 'lilac', placeholder: 'академическая шапочка', img: 'fmt-card-10-11', imgAlt: 'Бланк ЕГЭ с графиком, мишень, калькулятор и формулы',
    text: 'Повторяем необходимую базу, разбираем типы заданий и выстраиваем последовательную стратегию подготовки к экзамену.',
    extra: { title: 'Индивидуальные занятия',
      subjects: ['Физика', 'Информатика', 'Обществознание', 'Русский язык', 'Химия', 'Биология'],
      note: 'Программа составляется с учётом текущего уровня ученика, цели и выбранного экзамена.' } },
]

const FmtIconPerson = () => (
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="9" r="4.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 24c0-4.7 4-8 9-8s9 3.3 9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const FmtIconVideo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="7" width="15" height="14" rx="3" stroke="currentColor" strokeWidth="2.2"/>
    <path d="M18 12.5l6-3.5v10l-6-3.5" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
  </svg>
)

const FmtIconLaptop = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="5" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2.2"/>
    <path d="M2.5 22h23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

const KS_GRADES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']


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
    theme: 'violet',
    pre: 'Полная концентрация и ', accent: 'безопасная среда', post: '',
    text: 'Каждый ученик работает в своём личном пространстве на платформе. Ответы ребёнка видны только ему и педагогу — так мы снимаем ненужный стресс и страх ошибиться «на виду у всех». Интерактивные задания (ввести ответ, переместить объект, построить график) и мгновенное поощрение баллами держат внимание и интерес на протяжении всего урока.',
  },
  {
    img: '/znarnia/images/lesson-chart.png',
    theme: 'green',
    pre: 'Педагог видит ', accent: 'прогресс каждого', post: ', а не только группы',
    text: 'Наш инструментарий для педагога — это «цифровая панель управления» классом в реальном времени. Учитель видит, кто и как выполняет задание, с какой попытки даёт ответ, кому нужна помощь. Это позволяет точечно поддерживать каждого ученика здесь и сейчас, а после урока анализировать статистику для совершенствования материалов.',
  },
  {
    img: '/znarnia/images/lesson-search.png',
    theme: 'orange',
    pre: 'Для вас — полная ', accent: 'прозрачность прогресса', post: '',
    text: 'Вы в любой момент можете зайти в личный кабинет и увидеть детальную аналитику по занятиям вашего ребёнка: активность на уроке, процент правильных ответов, темы, которые вызвали вопросы. Вы всегда в курсе его успехов и областей роста, чтобы поддержать его своевременно.',
  },
  {
    img: '/znarnia/images/lesson-headset.png',
    theme: 'violet',
    pre: '', accent: 'Персональная помощь', post: ' с домашними заданиями',
    text: 'За ребёнком закреплён персональный куратор, к которому можно обратиться, если возникли сложности с домашним заданием. Он поможет найти ошибку, обратит внимание на оформление решения, подскажет, в каком направлении двигаться, и разберёт непонятный момент. Если у ребёнка не получается решить задачу, он может запросить у системы умную подсказку, которая направляет, но не даёт готового ответа. При необходимости доступен пошаговый разбор. Затем ИИ подберёт похожее задание для закрепления темы. Это гарантирует, что пробелы в знаниях будут устранены сразу.',
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

/* ── «Узнаёте свою ситуацию?» — проблема → решение ── */
const PROBLEMS = [
  {
    icon: 'sit-gaps',
    title: ['У ребёнка есть пробелы', 'и новые темы даются всё сложнее'],
    points: [
      { title: 'Находим и закрываем пробелы', text: 'Определяем слабые места и выстраиваем понятную систему.' },
      { title: 'Объясняем простым языком',    text: 'Живые уроки + записи, чтобы всегда можно было пересмотреть.' },
      { title: 'Много практики',              text: 'Тренируем навыки на интересных и понятных заданиях.' },
    ],
    result: 'В результате ребёнок снова понимает темы, справляется с заданиями и становится увереннее в себе.',
    pointImgs: ['sol-search', 'sol-support-orange', 'sol-idea-green'],
  },
  {
    icon: 'sit-missed-orange',
    title: ['Пропускает уроки', 'и потом не может догнать класс'],
    points: [
      { title: 'Запись каждого занятия',   text: 'Пропущенную тему можно пересмотреть в удобное время.' },
      { title: 'Разбираем пропущенное',    text: 'Помогаем нагнать класс и закрыть пробел по теме.' },
      { title: 'Педагог видит отставание', text: 'Замечает, где ребёнок отстал, и даёт дополнительные задания.' },
    ],
    result: 'В результате ребёнок быстро догоняет класс и не выпадает из программы.',
    pointImgs: ['sol-video', 'sol-calendar-orange', 'sol-watch-green'],
  },
  {
    icon: 'sit-rule-blue',
    title: ['Знает правило, но не может', 'самостоятельно решить задачу'],
    points: [
      { title: 'Разбираем логику решения',       text: 'Показываем, как рассуждать, а не заучивать алгоритм.' },
      { title: 'Учим применять знания',          text: 'Ребёнок понимает, где и как использовать правило.' },
      { title: 'Практика от простого к сложному', text: 'Постепенно доводим навык до уверенного уровня.' },
    ],
    result: 'В результате ребёнок сам решает задачи, а не заучивает готовые шаги.',
    pointImgs: ['sol-brain', 'sol-book-idea-orange', 'sol-steps-green'],
  },
  {
    icon: 'sit-fear-green',
    title: ['Боится ошибаться', 'и не верит в свои силы'],
    points: [
      { title: 'Маленькие группы',        text: 'Спокойная и безопасная среда без страха ошибиться «на виду».' },
      { title: 'Ответы видит только педагог', text: 'Ребёнок отвечает без давления со стороны группы.' },
      { title: 'Внимание к каждому',      text: 'Преподаватель видит работу каждого ученика и поддерживает.' },
    ],
    result: 'В результате ребёнок перестаёт бояться ошибок и верит в свои силы.',
    pointImgs: ['sol-group', 'sol-teacher-chat-orange', 'sol-care-green'],
  },
  {
    icon: 'sit-oge',
    title: ['Нужно успешно сдать ОГЭ', 'по дополнительным предметам'],
    points: [
      { title: 'Готовим по 4 предметам', text: 'Русский язык, физика, информатика и обществознание.' },
      { title: 'Системная подготовка',  text: 'Разбираем все разделы и работаем со сложными темами.' },
      { title: 'Практика формата ОГЭ',  text: 'Тренируемся на экзаменационных заданиях.' },
    ],
    result: 'Ребёнок подходит к экзамену подготовленным и понимает, чего ожидать на ОГЭ.',
    pointImgs: ['sol-subjects', 'sol-system-orange', 'sol-oge-practice-green'],
  },
  {
    icon: 'sit-homework-pink',
    title: ['Домашние задания превращаются', 'в стресс для всей семьи'],
    points: [
      { title: 'Персональный куратор',  text: 'Помогает ребёнку с домашним заданием, когда возникают сложности.' },
      { title: 'Умные подсказки',       text: 'Направляют к решению, но не дают готовый ответ.' },
      { title: 'Дополнительный разбор', text: 'При необходимости ребёнок получает пошаговое объяснение.' },
    ],
    result: 'В результате домашние задания перестают быть стрессом для всей семьи.',
    pointImgs: ['sol-support', 'sol-idea-orange', 'sol-search-green'],
  },
]

export default function GlavnayaPage() {
  const [contactsOpen, setContactsOpen] = useState(false)
  const [openCards, setOpenCards] = useState(() => new Set())
  const [activeProblem, setActiveProblem] = useState(0)

  /* форма записи на консультацию (копия со страницы konsultatsiya) */
  const [form, setForm] = useState({ name: '', phone: '', email: '', telegram: '', grade: '', agree: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    if (!form.email.trim()) e.email = 'Введите email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email'
    if (!form.agree) e.agree = 'Необходимо согласие'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

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
              Авторские курсы по математике для 1–11 классов: школьная программа,
              развитие математического мышления, подготовка к ОГЭ и ЕГЭ.
            </p>

            <div className="gv-hero__pills">
              {HERO_PILLS.map((p, i) => (
                <span key={i} className={`gv-hero__pill gv-hero__pill--${p.variant}`}>
                  {p.icon}
                  {p.label}
                </span>
              ))}
            </div>

            <div className="gv-hero__features-panel">
              <div className="gv-hero__features">
                {FEATURES.map((f, i) => (
                  <div key={i} className="gv-hero__feature">
                    <div className={`gv-hero__feature-icon gv-hero__feature-icon--${f.tone}`}>{f.icon}</div>
                    <p className="gv-hero__feature-text">
                      <span className="gv-hero__feature-title">{f.title}</span>
                      <span className="gv-hero__feature-sub">{f.sub}</span>
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

      {/* ── УЗНАЁТЕ СВОЮ СИТУАЦИЮ? (проблема → решение) ── */}
      <section className="gv-sit">
        <div className="sh-wrap">
          <div className="gv-sit__panel">
            <div className="gv-sit__head">
              <div className="gv-sit__heading">
                <h2 className="gv-sit__title">
                  Узнаёте <span className="gv-sit__accent">свою</span> ситуацию?
                </h2>
                <p className="gv-sit__subtitle">Скорее всего, мы уже знаем, как помочь.</p>
              </div>
              <p className="gv-sit__note">
                Наши методики и формат занятий созданы
                для реальных задач современных школьников.
              </p>
            </div>

            <div className="gv-sit__body">
              {/* 1 — Проблемы */}
              <div className="gv-sit__problems" role="tablist" aria-label="Ситуации">
                {PROBLEMS.map((p, i) => {
                  const isActive = activeProblem === i
                  return (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`gv-sit__problem gv-sit__problem--${['violet', 'orange', 'blue', 'green', 'violet', 'pink'][i]}${isActive ? ' gv-sit__problem--active' : ''}`}
                      onClick={() => setActiveProblem(i)}
                    >
                      <img className="gv-sit__problem-icon" src={`/znarnia/images/${p.icon}.png`} alt="" width="192" height="192" loading="lazy" decoding="async" />
                      <span className="gv-sit__problem-text">
                        {p.title[0]}{' '}<br className="gv-sit__br" />{p.title[1]}
                      </span>
                      <svg className="gv-sit__problem-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )
                })}
              </div>

              {/* Связка проблема → решение */}
              <div className="gv-sit__connector" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h14M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* 2 — Решение Знарнии */}
              <div className="gv-sit__solution">
                <span className="gv-sit__badge">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l1.9 4.6L18.5 9l-3.5 3.1.9 5.4L12 15l-3.9 2.5.9-5.4L5.5 9l4.6-1.4L12 3z" fill="currentColor"/>
                  </svg>
                  Решение Знарнии
                </span>

                <div className="gv-sit__points">
                  {PROBLEMS[activeProblem].points.map((pt, j) => (
                    <div key={j} className="gv-sit__point">
                      <img className="gv-sit__point-img" src={`/znarnia/images/${PROBLEMS[activeProblem].pointImgs[j]}.png`} alt="" width="144" height="144" decoding="async" />
                      <div className="gv-sit__point-body">
                        <div className="gv-sit__point-title">{pt.title}</div>
                        <p className="gv-sit__point-text">{nb(pt.text)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="gv-sit__result">
                  <svg className="gv-sit__result-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l1.7 4.1L18 8.4l-3.2 2.8.8 4.8L12 13.6 8.4 16l.8-4.8L6 8.4l4.3-1.3L12 3z" fill="#16a34a"/>
                  </svg>
                  <p className="gv-sit__result-text">{nb(PROBLEMS[activeProblem].result)}</p>
                </div>
              </div>

              {/* 3 — Иллюстрация */}
              <div className="gv-sit__media">
                <img
                  src="/znarnia/images/situation-lesson.png"
                  alt="Онлайн-занятие: преподаватель на экране ноутбука, ученики, тетрадь и книги"
                  className="gv-sit__img"
                  width="1392"
                  height="1130"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="gv-sit__cta">
              <a href="#" className="gv-sit__cta-btn">
                Посмотреть программы по предметам
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАК ПОСТРОЕНЫ ЗАНЯТИЯ (как на intellektualnyy-klub) ── */}
      <section className="sh-reveal">
        <div className="sh-wrap sh-reveal__body">
          <div className="gv-lessons">
          <div className="sh-lessons__head">
            <div className="sh-lessons__head-text">
              <h2 className="sh-lessons__title">
                {nb('Как построены наши занятия: безопасность, вовлечение и результат для вашего ребёнка')}
              </h2>
              <p className="sh-lessons__intro">
                {nb('Наша платформа создана для того, чтобы каждый ребёнок чувствовал себя комфортно, был максимально вовлечён в процесс и достигал реальных результатов. Вот ключевые принципы, на которых строится обучение.')}
              </p>
            </div>
          </div>

          <div className="sh-lessons__grid">
            {PRINCIPLES.map((p, i) => {
              const isOpen = openCards.has(i)
              return (
                <div key={i} className={`sh-principle gv-principle sh-principle--${p.theme}${isOpen ? ' gv-principle--open' : ''}`}>
                  <div className="sh-principle__media">
                    <div className="sh-principle__icon">
                      <img src={p.img} alt="" aria-hidden="true" className="sh-principle__icon-img" width="320" height="320" loading="lazy" decoding="async" />
                    </div>
                    <span className="sh-principle__num">{i + 1}</span>
                  </div>
                  <h3 className="sh-principle__title">
                    {p.pre && nb(p.pre)}
                    <span className="sh-principle__title-accent">{nb(p.accent)}</span>
                    {p.post && nb(p.post)}
                  </h3>
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
                  {isOpen && <p className="sh-principle__text">{nb(p.text)}</p>}
                </div>
              )
            })}
          </div>
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
                <img src="/znarnia/images/why-znarnia-steps.png" alt="Девочка с рюкзаком поднимается по ступенькам от вопроса к цели" width="1672" height="941" loading="lazy" decoding="async" />
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

      {/* ── МАТЕМАТИКА В МИНИ-ГРУППАХ (формат обучения) ── */}
      <section className="gv-fmt">
        <div className="sh-wrap">
          <div className="gv-fmt__top">
            <div className="gv-fmt__intro">
              <span className="gv-fmt__eyebrow">Как проходят занятия</span>
              <h2 className="gv-fmt__title">Математика <span>в&nbsp;мини&#8209;группах</span></h2>
              <p className="gv-fmt__desc">
                {nb('Основной формат обучения: занятия с преподавателем в небольшой группе и самостоятельная практика на интерактивном уроке-тренажёре.')}
              </p>
              <div className="gv-fmt__week">
                <div className="gv-fmt__pill">
                  <span className="gv-fmt__pill-icon"><FmtIconVideo /></span>
                  <span><b>2 онлайн-урока в неделю</b><small>с учителем математики</small></span>
                </div>
                <span className="gv-fmt__plus" aria-hidden="true">+</span>
                <div className="gv-fmt__pill">
                  <span className="gv-fmt__pill-icon"><FmtIconLaptop /></span>
                  <span><b>1 урок-тренажёр в неделю</b><small>на платформе</small></span>
                </div>
                <div className="gv-fmt__price">от 580&nbsp;₽ / занятие</div>
              </div>
            </div>
            <img className="gv-fmt__hero-img" src="/znarnia/images/fmt-mini-groups.png" alt="Ноутбук с видеоуроком, учебники и карандаши" width="900" height="639" loading="lazy" decoding="async" />
          </div>

          <div className="gv-fmt__grid">
            {FORMAT_PROGRAMS.map((p) => (
              <article key={p.grade} className={`gv-fmt-card gv-fmt-card--${p.tone}`}>
                <div className="gv-fmt-card__main">
                  <div className="gv-fmt-card__body">
                    <h3 className="gv-fmt-card__grade">{p.grade}</h3>
                    <span className="gv-fmt-card__badge">Математика в мини&#8209;группе</span>
                    <p className="gv-fmt-card__name">{p.name}</p>
                    <p className="gv-fmt-card__text">{nb(p.text)}</p>
                  </div>
                  {p.img
                    ? <img className="gv-fmt-card__img" src={`/znarnia/images/${p.img}.png`} alt={p.imgAlt} width="480" height="480" loading="lazy" decoding="async" />
                    : <div className="gv-fmt__ph gv-fmt-card__ph" aria-hidden="true">{p.placeholder}</div>}
                  <a href="#konsultatsiya" className="gv-fmt-card__btn">Получить консультацию <span aria-hidden="true">→</span></a>
                </div>
                <div className="gv-fmt-card__ind">
                  <span className="gv-fmt-card__ind-icon"><FmtIconPerson /></span>
                  <div className="gv-fmt-card__ind-text">
                    <p className="gv-fmt-card__ind-title">{p.extra.title}<span className="gv-fmt-card__star" aria-hidden="true">*</span></p>
                    <p className="gv-fmt-card__ind-subjects">{p.extra.subjects.join(' · ')}</p>
                    {p.extra.meta && <p className="gv-fmt-card__ind-meta">{p.extra.meta}</p>}
                    <p className="gv-fmt-card__ind-note"><span aria-hidden="true">* </span>{nb(p.extra.note)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ИНТЕЛЛЕКТУАЛЬНЫЙ КЛУБ (копия со страницы znakomstvo-dlya-reklamy) ── */}
      <section className="zn-club">
        <div className="sh-wrap">
          <div className="zn-club__card">
            <div className="zn-club__content">
              <p className="zn-club__eyebrow">Хотите сначала познакомиться с нами самостоятельно?</p>
              <h2 className="zn-club__title">
                Интеллектуальный клуб «Знарнии» —{' '}
                <span className="zn-club__title-accent">бесплатно</span>
              </h2>
              <p className="zn-club__text">
                {nb('Интерактивные уроки, тренажёры и полезные материалы, которые помогают ребёнку развивать математическое и критическое мышление.')}
              </p>
              <p className="zn-club__perk">
                <span className="zn-club__gift" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="8.5" width="18" height="12.5" rx="2" fill="currentColor" opacity="0.16" />
                    <path d="M3 10.5A1.5 1.5 0 0 1 4.5 9h15A1.5 1.5 0 0 1 21 10.5v1A1.5 1.5 0 0 1 19.5 13h-15A1.5 1.5 0 0 1 3 11.5v-1z" fill="currentColor" />
                    <rect x="10.4" y="9" width="3.2" height="12" fill="currentColor" />
                    <path d="M12 9c-1.4-.2-4.2-1-4-3 .2-1.7 3-1 4 3zm0 0c1.4-.2 4.2-1 4-3-.2-1.7-3-1-4 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </span>
                Новые материалы каждую неделю.
              </p>
              <a href="https://znarnia.ru/student/club" className="zn-club__btn">
                Перейти в Интеллектуальный клуб
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="zn-club__media">
              <img
                className="zn-club__img"
                src="/znarnia/images/klub-cta-illustration.png"
                alt="Стопка книг «Идеи», «Логика», «Развитие» с лампочкой, карандашами и пазлом"
                width="1374"
                height="1145"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ЗАПИСЬ НА КОНСУЛЬТАЦИЮ (копия героя со страницы konsultatsiya) ── */}
      <div className="gv-ks" id="konsultatsiya">
        <section className="ks-hero">
          <div className="ks-hero__inner">
            <span className="ks-hero__pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4.5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M3 9h18M8 2.5v4M16 2.5v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Подберём программу под цели и уровень
            </span>

            <h2 className="ks-title">
              Запишитесь на{' '}
              <span className="ks-title__accent">консультацию</span>
            </h2>

            <p className="ks-lead">{nb('Расскажем подробнее о занятиях, подберём удобное расписание и ответим на все вопросы')}</p>

            <div className="ks-hero__price">
              <span className="ks-hero__price-tag">Доступная цена</span>
              <span className="ks-hero__price-label">{nb('Стоимость занятий от')}</span>
              <span className="ks-hero__price-value">600&nbsp;₽</span>
              <span className="ks-hero__price-unit">за урок</span>
            </div>

            <div className="ks-hero__aside">
              <img
                className="ks-hero__girl"
                src="/znarnia/images/konsultatsiya-girl.png"
                alt="Девочка с ноутбуком и книгами по математике, логике и успеху"
                width="1371"
                height="1148"
                decoding="async"
              />
              <svg className="ks-hero__doodle ks-hero__doodle--spark" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1l1.6 6.4L18 9l-6.4 1.6L10 17l-1.6-6.4L2 9l6.4-1.6L10 1z" fill="#ff9a4a" />
              </svg>
              <svg className="ks-hero__doodle ks-hero__doodle--heart" width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 20.5s-7.5-4.6-7.5-9.7A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7.5 2.8c0 5.1-7.5 9.7-7.5 9.7z" stroke="#35b978" strokeWidth="2" fill="none" />
              </svg>
              <svg className="ks-hero__doodle ks-hero__doodle--line" width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
                <path d="M1 11c3.5-5 8-5 11 0" stroke="#9b7bf5" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M17 6h7" stroke="#9b7bf5" strokeWidth="2.4" strokeLinecap="round" />
              </svg>

            </div>

            <div className="ks-card">
            <span className="ks-card__accent" aria-hidden="true" />
            {submitted ? (
              <div className="ks-success">
                <div className="ks-success__icon">✓</div>
                <div className="ks-success__title">Заявка принята!</div>
                <div className="ks-success__text">{nb('Мы перезвоним вам в ближайшее время, расскажем о программе и подберём удобное расписание.')}</div>
              </div>
            ) : (
              <>
                <div className="ks-card__head">
                  <div className="ks-card__title">Оставьте заявку</div>
                  <div className="ks-card__sub">{nb('Мы перезвоним, расскажем о программе и подберём удобное расписание')}</div>
                </div>

                <form className="ks-form" onSubmit={handleSubmit} noValidate>
                  <div className="ks-grid">
                    <div className="ks-field">
                      <label className="ks-label">Ваше имя <span className="ks-req">*</span></label>
                      <input className={`ks-input${errors.name ? ' ks-input--err' : ''}`} type="text" placeholder="Иван Иванов" value={form.name} onChange={e => set('name', e.target.value)} />
                      {errors.name && <span className="ks-err">{errors.name}</span>}
                    </div>
                    <div className="ks-field">
                      <label className="ks-label">Телефон <span className="ks-req">*</span></label>
                      <input className={`ks-input${errors.phone ? ' ks-input--err' : ''}`} type="tel" inputMode="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={e => set('phone', e.target.value)} />
                      {errors.phone && <span className="ks-err">{errors.phone}</span>}
                    </div>
                    <div className="ks-field">
                      <label className="ks-label">Email <span className="ks-req">*</span></label>
                      <input className={`ks-input${errors.email ? ' ks-input--err' : ''}`} type="email" placeholder="ivan@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      {errors.email && <span className="ks-err">{errors.email}</span>}
                    </div>
                    <div className="ks-field">
                      <label className="ks-label">Ник в Telegram</label>
                      <input className="ks-input" type="text" placeholder="@username" value={form.telegram} onChange={e => set('telegram', e.target.value)} />
                    </div>
                  </div>

                  <div className="ks-field ks-field--half">
                    <label className="ks-label">Класс ребёнка</label>
                    <select className="ks-input ks-select" value={form.grade} onChange={e => set('grade', e.target.value)}>
                      <option value="">Выберите класс</option>
                      {KS_GRADES.map(g => <option key={g} value={g}>{g} класс</option>)}
                    </select>
                  </div>

                  <label className={`ks-check${errors.agree ? ' ks-check--err' : ''}`}>
                    <input type="checkbox" className="ks-check__input" checked={form.agree} onChange={e => set('agree', e.target.checked)} />
                    <span className="ks-check__box" aria-hidden="true" />
                    <span className="ks-check__text">
                      Согласен с обработкой персональных данных в соответствии с{' '}
                      <a href="#" className="ks-link" onClick={e => e.preventDefault()}>политикой конфиденциальности</a> <span className="ks-req">*</span>
                    </span>
                  </label>
                  {errors.agree && <span className="ks-err ks-err--check">{errors.agree}</span>}

                  <button type="submit" className="ks-submit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Записаться на консультацию
                  </button>
                </form>
              </>
            )}
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
