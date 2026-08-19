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

const IconStar = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M16 4l3.5 7.1 7.8 1.1-5.65 5.5 1.34 7.8L16 28.8l-7-3.67 1.34-7.8L4.7 12.2l7.8-1.1L16 4z" stroke="#6d28d9" strokeWidth="1.9" strokeLinejoin="round"/>
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
  { icon: <IconPeople />,  title: 'Маленькие группы',       sub: '4–8 детей' },
  { icon: <IconBook />,    title: 'Авторская методика',     sub: 'Ольги Сотниковой' },
  { icon: <IconMonitor />, title: 'Живые занятия',          sub: '+ записи уроков' },
  { icon: <IconStar />,    title: 'От школьной базы до ЕГЭ', sub: '1–11 классы' },
]

const HERO_PILLS = [
  { icon: <IconCap />,      label: '1–11 классы', variant: 'purple' },
  { icon: <IconBookMini />, label: 'ОГЭ',         variant: 'green' },
  { icon: <IconBookMini />, label: 'ЕГЭ',         variant: 'orange' },
]

import { useState } from 'react'
import resultsPhotoImg from '../predszapis-osen-stariye-5-8/results-photo.png'

/* ── Программы (3 возрастных направления + 2 варианта для 9 класса) ── */
const PROGRAMS = [
  { img: 'prog-abacus',   title: 'Начальная школа',           tag: '1–4 классы',  desc: 'Математика и развитие математического мышления', href: '#' },
  { img: 'prog-backpack', title: 'Средняя школа',             tag: '5–8 классы',  desc: 'Сильная школьная база и работа с пробелами',      href: '#' },
  { img: 'prog-cap',      title: 'Старшая школа',             tag: '10–11 классы', desc: 'Математика, систематизация знаний и подготовка к ЕГЭ', href: '#' },
  { img: 'prog-pie',      title: '9 класс — математика',      tag: '9 класс',     desc: 'Математика + подготовка к ОГЭ',                   badge: 'Подготовка к ОГЭ', href: '#' },
  { img: 'subj-book',     title: '9 класс — дополнительные предметы', tag: '9 класс', desc: 'Русский язык, физика, информатика, обществознание — подготовка к ОГЭ', badge: 'Подготовка к ОГЭ', href: '#' },
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
    title: 'Персональная помощь с домашними заданиями',
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
const SitIconCap = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4l10 4-10 4L2 8l10-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M6 10.5V15c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 8v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const SitIconCalendar = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const SitIconPuzzle = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M10 4.5c0-1 .9-1.5 1.8-1.2.7.2 1.1.9 1 1.6-.1.6.3 1.1.9 1.1h2.1c.6 0 1.1.5 1.1 1.1v2.1c0 .6.5 1 1.1.9.7-.1 1.4.3 1.6 1 .3.9-.2 1.8-1.2 1.8-.7 0-1.5.4-1.5 1.2v2.9c0 .6-.5 1.1-1.1 1.1h-2.9c-.8 0-1.2-.8-1.2-1.5 0-1-.9-1.5-1.8-1.2-.7.2-1.1.9-1 1.6.1.7-.4 1.4-1.1 1.4H5.6c-.6 0-1.1-.5-1.1-1.1v-3c0-.6-.5-1-1.1-.9-.7.1-1.4-.3-1.6-1-.3-.9.2-1.8 1.2-1.8.7 0 1.5-.4 1.5-1.2V6.1c0-.6.5-1.1 1.1-1.1h3c.7 0 1.1-.6 1-1.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
  </svg>
)
const SitIconSad = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M8.5 15.5c1-1.2 5-1.2 7 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M9 9.5h.01M15 9.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)
const SitIconGrade = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M14 8.5h-3.2l-.4 3c.5-.4 1.1-.6 1.8-.6 1.4 0 2.5 1 2.5 2.4S13.5 15.5 12 15.5c-1.1 0-2-.5-2.4-1.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const SitIconHourglass = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 3.5h10M7 20.5h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M8 3.5c0 4 8 4.5 8 8.5s-8 4.5-8 8.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M16 3.5c0 4-8 4.5-8 8.5s8 4.5 8 8.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)

/* Иконки для трёх слотов в карточке решения (как на референсе) */
const SolIconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 20h16" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="6" y="12" width="3" height="6" rx="1" fill="#6d28d9"/>
    <rect x="11" y="8" width="3" height="10" rx="1" fill="#a78bfa"/>
    <rect x="16" y="5" width="3" height="13" rx="1" fill="#6d28d9"/>
  </svg>
)
const SolIconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="14" rx="3" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M10.5 9.5l4 2.5-4 2.5v-5z" fill="#6d28d9"/>
  </svg>
)
const SolIconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="4" width="14" height="16" rx="2.5" stroke="#6d28d9" strokeWidth="1.8"/>
    <path d="M9 3.5h6v3H9z" stroke="#6d28d9" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.5 12.5l2.2 2.2 4-4.2" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const SOLUTION_SLOT_ICONS = [<SolIconChart />, <SolIconPlay />, <SolIconCheck />]

const PROBLEMS = [
  {
    icon: <SitIconCap />,
    title: ['У ребёнка есть пробелы', 'и новые темы даются всё сложнее'],
    points: [
      { title: 'Находим и закрываем пробелы', text: 'Определяем слабые места и выстраиваем понятную систему.' },
      { title: 'Объясняем простым языком',    text: 'Живые уроки + записи, чтобы всегда можно было пересмотреть.' },
      { title: 'Много практики',              text: 'Тренируем навыки на интересных и понятных заданиях.' },
    ],
    result: 'В результате ребёнок снова понимает темы, справляется с заданиями и становится увереннее в себе.',
  },
  {
    icon: <SitIconCalendar />,
    title: ['Пропускает уроки', 'и потом не может догнать класс'],
    points: [
      { title: 'Запись каждого занятия',   text: 'Пропущенную тему можно пересмотреть в удобное время.' },
      { title: 'Разбираем пропущенное',    text: 'Помогаем нагнать класс и закрыть пробел по теме.' },
      { title: 'Педагог видит отставание', text: 'Замечает, где ребёнок отстал, и даёт дополнительные задания.' },
    ],
    result: 'В результате ребёнок быстро догоняет класс и не выпадает из программы.',
  },
  {
    icon: <SitIconPuzzle />,
    title: ['Знает правило, но не может', 'самостоятельно решить задачу'],
    points: [
      { title: 'Разбираем логику решения',       text: 'Показываем, как рассуждать, а не заучивать алгоритм.' },
      { title: 'Учим применять знания',          text: 'Ребёнок понимает, где и как использовать правило.' },
      { title: 'Практика от простого к сложному', text: 'Постепенно доводим навык до уверенного уровня.' },
    ],
    result: 'В результате ребёнок сам решает задачи, а не заучивает готовые шаги.',
  },
  {
    icon: <SitIconSad />,
    title: ['Боится ошибаться', 'и не верит в свои силы'],
    points: [
      { title: 'Маленькие группы',        text: 'Спокойная и безопасная среда без страха ошибиться «на виду».' },
      { title: 'Ответы видит только педагог', text: 'Ребёнок отвечает без давления со стороны группы.' },
      { title: 'Внимание к каждому',      text: 'Преподаватель видит работу каждого ученика и поддерживает.' },
    ],
    result: 'В результате ребёнок перестаёт бояться ошибок и верит в свои силы.',
  },
  {
    icon: <SitIconGrade />,
    title: ['Нужно успешно сдать ОГЭ', 'по дополнительным предметам'],
    points: [
      { title: 'Готовим по 4 предметам', text: 'Русский язык, физика, информатика и обществознание.' },
      { title: 'Системная подготовка',  text: 'Разбираем все разделы и работаем со сложными темами.' },
      { title: 'Практика формата ОГЭ',  text: 'Тренируемся на экзаменационных заданиях.' },
    ],
    result: 'Ребёнок подходит к экзамену подготовленным и понимает, чего ожидать на ОГЭ.',
  },
  {
    icon: <SitIconHourglass />,
    title: ['Домашние задания превращаются', 'в стресс для всей семьи'],
    points: [
      { title: 'Персональный куратор',  text: 'Помогает ребёнку с домашним заданием, когда возникают сложности.' },
      { title: 'Умные подсказки',       text: 'Направляют к решению, но не дают готовый ответ.' },
      { title: 'Дополнительный разбор', text: 'При необходимости ребёнок получает пошаговое объяснение.' },
    ],
    result: 'В результате домашние задания перестают быть стрессом для всей семьи.',
  },
]

export default function GlavnayaPage() {
  const [contactsOpen, setContactsOpen] = useState(false)
  const [openCards, setOpenCards] = useState(() => new Set())
  const [activeProblem, setActiveProblem] = useState(0)

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
                    <div className="gv-hero__feature-icon">{f.icon}</div>
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
                      className={`gv-sit__problem${isActive ? ' gv-sit__problem--active' : ''}`}
                      onClick={() => setActiveProblem(i)}
                    >
                      <span className="gv-sit__problem-icon">{p.icon}</span>
                      <span className="gv-sit__problem-text">
                        {p.title[0]}<br/>{p.title[1]}
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
                      <span className="gv-sit__point-icon">{SOLUTION_SLOT_ICONS[j]}</span>
                      <div className="gv-sit__point-body">
                        <div className="gv-sit__point-title">{pt.title}</div>
                        <p className="gv-sit__point-text">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="gv-sit__result">
                  <svg className="gv-sit__result-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l1.7 4.1L18 8.4l-3.2 2.8.8 4.8L12 13.6 8.4 16l.8-4.8L6 8.4l4.3-1.3L12 3z" fill="#16a34a"/>
                  </svg>
                  <p className="gv-sit__result-text">{PROBLEMS[activeProblem].result}</p>
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

      {/* ── ВЫБОР ПРОГРАММЫ ── */}
      <section className="gv-prog">
        <div className="sh-wrap">
          <h2 className="gv-prog__title">Выберите программу</h2>
          <p className="gv-prog__subtitle">Подберём подходящий формат и поможем достичь результата</p>
          <div className="gv-prog__grid">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="gv-prog-card">
                <div className="gv-prog-card__head">
                  <span className="gv-prog-card__icon">
                    <img src={`/znarnia/images/${p.img}.png`} alt="" width="408" height="412" loading="lazy" decoding="async" />
                  </span>
                  <div className="gv-prog-card__heading">
                    <h3 className="gv-prog-card__title">{p.title}</h3>
                    <span className="gv-prog-card__tag">{p.tag}</span>
                  </div>
                </div>
                {p.badge && <span className="gv-prog-card__badge">{p.badge}</span>}
                <p className="gv-prog-card__desc">{p.desc}</p>
                <a href={p.href} className="gv-prog-card__btn">Подробнее о программе →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
