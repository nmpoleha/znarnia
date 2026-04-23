import SchoolHeader from '../../shared/components/SchoolHeader'

function FaqCard({ icon, title, children, center }) {
  return (
    <div className={`info-card${center ? ' info-card--center' : ''}`}>
      <div className="info-card__head">
        <span className="info-card__icon">{icon}</span>
        <div className="info-card__title">{title}</div>
      </div>
      <div className={`info-card__body${center ? ' info-card__body--center' : ''}`}>{children}</div>
    </div>
  )
}

function ContactItem({ icon, label, value, isLink, href }) {
  return (
    <div className="info-contact">
      <span className="info-contact__icon">{icon}</span>
      <div className="info-contact__text">
        <div className="info-contact__label">{label}</div>
        {isLink
          ? <a href={href || '#'} className="info-contact__value info-contact__value--link">{value}</a>
          : <div className="info-contact__value">{value}</div>
        }
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

        <SchoolHeader
          logoUrl="https://znarnia.ru/logo.png"
          name="Школа Сотниковой Ольги"
        />

        {/* HERO */}
        <section className="hero">
          <div className="hero__tag">Часто задаваемые вопросы</div>
          <h1 className="hero__title">Информация <span>о курсе</span></h1>
          <p className="hero__sub">Всё, что нужно знать перед началом занятий</p>
        </section>

        {/* FAQ SECTIONS */}
        <div className="info-sections">

          <FaqCard icon="📅" title="Когда старт занятий?">
            <div className="info-dates">
              <div className="info-date-item">
                <div className="info-date-item__badge">1 Этап</div>
                <div className="info-date-item__date">с 1 по 21 июня</div>
                <div className="info-date-item__desc">Уроки-тренажёры: закрываем пробелы и выстраиваем базу</div>
              </div>
              <div className="info-date-item">
                <div className="info-date-item__badge">2 Этап</div>
                <div className="info-date-item__date">с 22 июня</div>
                <div className="info-date-item__desc">Онлайн-уроки + тренажёр: уверенность и результат</div>
              </div>
            </div>
          </FaqCard>

          <FaqCard icon="💻" title="Как пользоваться платформой?">
            <p className="info-card__text"><span className="info-highlight">1 июня</span> на платформе появится подробная инструкция:</p>
            <ul className="info-list">
              <li>🎥 подключение к урокам</li>
              <li>📝 выполнение домашних заданий</li>
              <li>📈 отслеживание успеваемости</li>
              <li>📊 статистика по занятиям и ДЗ</li>
              <li>💬 связь с куратором при возникновении вопросов</li>
            </ul>
          </FaqCard>

          <FaqCard icon="🎒" title="Что необходимо для обучения?">
            <div className="info-needs">
              <div className="info-need">
                <div className="info-need__icon">📱</div>
                <div className="info-need__text">
                  <div className="info-need__title">Устройство</div>
                  <div className="info-need__desc">Компьютер, планшет или телефон — платформа работает в браузере на любом устройстве</div>
                </div>
              </div>
              <div className="info-need">
                <div className="info-need__icon">✏️</div>
                <div className="info-need__text">
                  <div className="info-need__title">Канцелярия</div>
                  <div className="info-need__desc">Тетради, ручка, карандаш, ластик</div>
                </div>
              </div>
              <div className="info-need">
                <div className="info-need__icon">🌐</div>
                <div className="info-need__text">
                  <div className="info-need__title">Интернет</div>
                  <div className="info-need__desc">Стабильное соединение для просмотра видеоуроков без прерываний</div>
                </div>
              </div>
            </div>
          </FaqCard>

          <FaqCard icon="🔑" title="Куда придёт доступ?">
            <p className="info-card__text">После оплаты доступ к курсу приходит двумя способами:</p>
            <div className="info-access">
              <div className="info-access-item">
                <span className="info-access-item__icon">🖥️</span>
                <div>
                  <div className="info-access-item__title">На платформу</div>
                  <div className="info-access-item__desc">Личный кабинет автоматически активируется на сайте znarnia.ru</div>
                </div>
              </div>
              <div className="info-access-item">
                <span className="info-access-item__icon">📧</span>
                <div>
                  <div className="info-access-item__title">На email</div>
                  <div className="info-access-item__desc">Письмо с логином, паролем и инструкцией придёт на почту, указанную при оплате</div>
                </div>
              </div>
            </div>
            <p className="info-card__note">✅ Вы точно не пропустите старт занятий.</p>
          </FaqCard>

          <FaqCard icon="💬" title="Как с нами связаться?">
            <div className="info-contacts">
              <ContactItem icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#29B6F6"/>
                  <path d="M17.5 7L10 13.5 7 11l-3 1.5 5 3.5 9-7.5L17.5 7z" fill="white"/>
                  <path d="M10 13.5l.7 3.5 1.8-1.8" fill="white"/>
                </svg>
              } label="Telegram" value="Написать в Telegram" isLink href="#" />
              <ContactItem icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#25D366"/>
                  <path d="M17.4 6.6A7.1 7.1 0 0 0 12 4.5a7.15 7.15 0 0 0-6.2 10.7L4.5 19.5l4.4-1.15A7.15 7.15 0 0 0 19.5 12a7.1 7.1 0 0 0-2.1-5.4zm-5.4 11a5.95 5.95 0 0 1-3.03-.83l-.22-.13-2.26.59.6-2.2-.14-.23A5.95 5.95 0 1 1 12 17.6zm3.26-4.45c-.18-.09-1.06-.52-1.22-.58-.16-.06-.28-.09-.4.09s-.46.58-.56.7c-.1.12-.2.13-.38.04a4.8 4.8 0 0 1-1.42-.88 5.3 5.3 0 0 1-.98-1.22c-.1-.18-.01-.27.08-.36.08-.08.18-.2.27-.3.09-.1.12-.18.18-.3.06-.12.03-.22-.02-.31-.05-.09-.4-.96-.54-1.32-.14-.34-.29-.3-.4-.3h-.34c-.12 0-.31.04-.47.22s-.62.6-.62 1.47.63 1.7.72 1.82c.09.12 1.24 1.9 3.01 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.04-.43 1.19-.84.14-.41.14-.76.1-.83-.05-.08-.17-.12-.35-.2z" fill="white"/>
                </svg>
              } label="WhatsApp" value="Написать в WhatsApp" isLink href="#" />
              <ContactItem icon="🖥️" label="Платформа" value="Написать через чат на сайте" isLink href="#" />
              <ContactItem icon="📧" label="Email" value="info@znarnia.ru" isLink href="mailto:info@znarnia.ru" />
            </div>
          </FaqCard>

        </div>

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
        </footer>

      </div>
    </div>
  )
}
