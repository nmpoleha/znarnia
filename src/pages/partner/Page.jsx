const imgHeroPlatform = "/znarnia/images/partner-hero.png"

export default function Page() {
  return (
    <div className="pp">
      <div className="pp__glow pp__glow--1" />
      <div className="pp__glow pp__glow--2" />

      <div className="pp__wrap">

        {/* ── HEADER ── */}
        <header className="pp-header">
          <img className="pp-header__logo" src="https://znarnia.ru/logo.png" alt="Znarnia" />
          <nav className="pp-header__nav">
            <a href="#product" className="pp-header__link">О продукте</a>
            <a href="#contact" className="pp-header__cta">Стать партнёром</a>
          </nav>
        </header>

        {/* ── HERO ── */}
        <section className="pp-hero">
          <div className="pp-hero__left">
            <div className="pp-hero__badge">Партнёрское предложение</div>
            <h1 className="pp-hero__title">
              Образовательная<br />
              платформа<br />
              нового<br />
              <span>поколения</span>
            </h1>
            <p className="pp-hero__desc">
              Это не просто платформа. Это экосистема обучения, в&nbsp;которой
              видеосвязь, интерактивная доска, аналитика, геймификация,
              ИИ-помощник работают в&nbsp;единой среде и&nbsp;дают измеримый результат.
            </p>
            <div className="pp-hero__btns">
              <a href="#product" className="pp-hero__btn pp-hero__btn--purple">О продукте</a>
              <a href="#partnership" className="pp-hero__btn pp-hero__btn--lime">Экономика партнёрства</a>
            </div>

            <div className="pp-stats">
              <div className="pp-stat">
                <div className="pp-stat__num">20+</div>
                <div className="pp-stat__label">лет опыта</div>
              </div>
              <div className="pp-stat">
                <div className="pp-stat__num">10&nbsp;000+</div>
                <div className="pp-stat__label">учеников</div>
              </div>
              <div className="pp-stat">
                <div className="pp-stat__num">9+</div>
                <div className="pp-stat__label">месяцев LTV</div>
              </div>
            </div>
          </div>

          <div className="pp-hero__right">
            <div className="pp-aside">
              <div className="pp-aside__tag">Единая визуальная экосистема</div>
              <div className="pp-aside__screen">
                <img src={imgHeroPlatform} alt="Интерфейс платформы" className="pp-aside__img" />
              </div>
              <div className="pp-aside__headline">
                Не просто уроки.<br />Понятный результат.
              </div>
              <ul className="pp-aside__list">
                <li>высокая удерживаемость продукта</li>
                <li>ежемесячный рекуррентный доход</li>
                <li>прозрачная статистика по&nbsp;ученикам</li>
                <li>сильная образовательная база</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 01 О ПРОДУКТЕ ── */}
        <section className="pp-section" id="product">
          <div className="pp-section__num">01</div>
          <h2 className="pp-section__title">О продукте</h2>
          <p className="pp-section__lead">
            Мы создаём полноценную образовательную среду, где всё собрано в&nbsp;одном месте:
            собственная видеосвязь, интерактивная онлайн-доска, система заданий в&nbsp;реальном
            времени, игровая механика с&nbsp;настоящими наградами, аналитика для учителя
            и&nbsp;родителя, ИИ-помощник для домашней работы.
          </p>

          <div className="pp-pills">
            <span className="pp-pill">🎥 собственная видеосвязь</span>
            <span className="pp-pill">🖊️ онлайн-доска</span>
            <span className="pp-pill">⚡ задания в реальном времени</span>
            <span className="pp-pill">🏆 геймификация</span>
            <span className="pp-pill">📊 аналитика</span>
            <span className="pp-pill">🤖 ИИ-помощник</span>
          </div>

          <div className="pp-focus">
            <div className="pp-focus__main">Без переключений, сторонних сервисов и&nbsp;потери фокуса</div>
            <div className="pp-focus__sub">Полный контроль над процессом обучения</div>
          </div>

          <h3 className="pp-feats__heading">Ключевые возможности платформы</h3>
          <div className="pp-feats">
            <div className="pp-feat">
              <div className="pp-feat__num">1</div>
              <div className="pp-feat__title">Единая среда обучения</div>
              <p className="pp-feat__desc">Собственная видеосвязь и&nbsp;онлайн-доска внутри платформы.</p>
              <p className="pp-feat__result"><b>Что это даёт:</b> обучение становится непрерывным и&nbsp;стабильным — без технических сбоев, вкладок и&nbsp;потери времени.</p>
            </div>
            <div className="pp-feat">
              <div className="pp-feat__num">2</div>
              <div className="pp-feat__title">Интерактив в&nbsp;реальном времени</div>
              <ul className="pp-feat__list">
                <li>отвечает на задания у&nbsp;себя на&nbsp;экране</li>
                <li>не видит ответы других</li>
                <li>получает мгновенную обратную связь</li>
              </ul>
              <p className="pp-feat__result">Ребёнок не «присутствует» — он работает.</p>
            </div>
            <div className="pp-feat">
              <div className="pp-feat__num">3</div>
              <div className="pp-feat__title">Геймификация с&nbsp;реальной ценностью</div>
              <ul className="pp-feat__list">
                <li>тратить баллы на&nbsp;развитие аватара</li>
                <li>обменивать баллы на&nbsp;реальные подарки</li>
              </ul>
              <p className="pp-feat__result">Мотивация к&nbsp;учёбе, которой управляет сам ребёнок.</p>
            </div>
            <div className="pp-feat">
              <div className="pp-feat__num">4</div>
              <div className="pp-feat__title">Аналитика для учителя</div>
              <ul className="pp-feat__list">
                <li>кто понял тему</li>
                <li>кто ошибается</li>
                <li>кто не вовлечён</li>
              </ul>
              <p className="pp-feat__result">Обучение становится точечным и&nbsp;управляемым, а&nbsp;не «средним по классу».</p>
            </div>
            <div className="pp-feat">
              <div className="pp-feat__num">5</div>
              <div className="pp-feat__title">Аналитика для родителей</div>
              <ul className="pp-feat__list">
                <li>результаты каждого урока</li>
                <li>процент правильных ответов</li>
                <li>проблемные темы</li>
              </ul>
              <p className="pp-feat__result">Понимание реального прогресса ребёнка.</p>
            </div>
            <div className="pp-feat">
              <div className="pp-feat__num">6</div>
              <div className="pp-feat__title">Домашняя работа с&nbsp;ИИ-помощником</div>
              <ul className="pp-feat__list">
                <li>задаёт наводящие вопросы</li>
                <li>помогает дойти до решения</li>
                <li>закрепляет материал дополнительными задачами</li>
              </ul>
              <p className="pp-feat__result">Ученик учится думать, а&nbsp;не&nbsp;списывать. Пробелы не накапливаются.</p>
            </div>
          </div>

          <div className="pp-result">
            <div className="pp-result__left">
              <div className="pp-result__tag">Итог для клиента</div>
              <div className="pp-result__title">
                Мы не просто обучаем.{'\u00A0'}<br />
                Мы управляем результатом.
              </div>
            </div>
            <ul className="pp-result__list">
              <li>системное устранение пробелов</li>
              <li>рост уверенности ребёнка</li>
              <li>стабильный результат</li>
              <li>прозрачность для родителей</li>
            </ul>
          </div>
        </section>

        {/* ── 02 ЭКСПЕРТИЗА ── */}
        <section className="pp-section" id="expertise">
          <div className="pp-section__num">02</div>
          <h2 className="pp-section__title">Экспертиза и&nbsp;доверие</h2>
          <p className="pp-section__lead">Это не стартап. Это масштабирование уже работающей системы.</p>
          <div className="pp-creds">
            <div className="pp-cred">
              <div className="pp-cred__big">10&nbsp;000+</div>
              <div className="pp-cred__label">учеников</div>
            </div>
            <div className="pp-cred">
              <div className="pp-cred__icon">🏫</div>
              <div className="pp-cred__title">Школы</div>
              <div className="pp-cred__label">партнёрство со&nbsp;школами Москвы</div>
            </div>
            <div className="pp-cred">
              <div className="pp-cred__icon">🎓</div>
              <div className="pp-cred__title">Одобрение</div>
              <div className="pp-cred__label">профессионального педагогического сообщества</div>
            </div>
            <div className="pp-cred">
              <div className="pp-cred__big">20+</div>
              <div className="pp-cred__label">лет опыта в образовании</div>
            </div>
            <div className="pp-cred">
              <div className="pp-cred__icon">🏆</div>
              <div className="pp-cred__title">Грант</div>
              <div className="pp-cred__label">Правительства Москвы</div>
            </div>
            <div className="pp-cred">
              <div className="pp-cred__icon">📚</div>
              <div className="pp-cred__title">Авторская</div>
              <div className="pp-cred__label">методика с&nbsp;доказанной эффективностью</div>
            </div>
          </div>
        </section>

        {/* ── 03 О ПАРТНЁРСТВЕ ── */}
        <section className="pp-section" id="about-partner">
          <div className="pp-section__num">03</div>
          <h2 className="pp-section__title">О партнёрстве</h2>
          <div className="pp-about-grid">
            <div className="pp-about-item">
              <img src="/znarnia/images/desktop-dashboard.png" alt="Почему это востребовано" className="pp-about-img" />
              <h3 className="pp-partner-card__title">Почему это востребовано</h3>
              <p className="pp-about-text">Рынок дополнительного образования стабильно растёт. Более 70% родителей ищут помощь уже в&nbsp;начальной школе, миллион детей занимаются вне школы, а&nbsp;основной запрос&nbsp;— результат, не&nbsp;просто занятия.</p>
              <p className="pp-about-accent">Мы превращаем этот запрос в результат с помощью технологий</p>
            </div>
            <div className="pp-about-item">
              <img src="/znarnia/images/boy-fives.png" alt="Что вы предлагаете своей аудитории" className="pp-about-img" />
              <h3 className="pp-partner-card__title">Что вы предлагаете своей аудитории</h3>
              <p className="pp-partner-card__intro">Не уроки, а:</p>
              <ul className="pp-partner-card__list">
                <li>понятный результат</li>
                <li>прозрачность</li>
                <li>вовлечённость ребёнка</li>
                <li>современный формат обучения</li>
              </ul>
              <p className="pp-partner-card__note">
                Это усиливает ваш личный бренд и&nbsp;доверие аудитории.
              </p>
            </div>
          </div>
        </section>

        {/* ── 04 МЕХАНИКА ── */}
        <section className="pp-section" id="partnership">
          <div className="pp-section__num">04</div>
          <h2 className="pp-section__title">Механика партнёрства</h2>
          <div className="pp-mech">
            <div className="pp-mech__item">
              <div className="pp-mech__num">01</div>
              <div className="pp-mech__title">Личный кабинет партнёра</div>
              <p className="pp-mech__desc">Вам предоставляется персональный доступ ко&nbsp;всем данным по&nbsp;вашему потоку клиентов.</p>
            </div>
            <div className="pp-mech__item">
              <div className="pp-mech__num">02</div>
              <div className="pp-mech__title">Учёт учеников</div>
              <p className="pp-mech__desc">Все привлечённые ученики фиксируются автоматически и&nbsp;прозрачно.</p>
            </div>
            <div className="pp-mech__item">
              <div className="pp-mech__num">03</div>
              <div className="pp-mech__title">Полная статистика</div>
              <p className="pp-mech__desc">Оплаты, занятия, прогресс учеников и&nbsp;ваше вознаграждение — всё в&nbsp;одном интерфейсе.</p>
            </div>
            <div className="pp-mech__item">
              <div className="pp-mech__num">04</div>
              <div className="pp-mech__title">Ежемесячные выплаты</div>
              <p className="pp-mech__desc">Понятная модель дохода без разовых начислений и&nbsp;ручного учёта.</p>
            </div>
          </div>
        </section>

        {/* ── 05 ВОЗНАГРАЖДЕНИЕ ── */}
        <section className="pp-section" id="income">
          <div className="pp-section__num">05</div>
          <h2 className="pp-section__title">Вознаграждение</h2>
          <p className="pp-recurring"><strong>Рекуррентная модель:</strong> вы получаете доход каждый месяц, пока ученик обучается.</p>
          <div className="pp-ltv-bar">
            <span>Средний срок обучения:&nbsp;<strong>9+ месяцев</strong></span>
            <span className="pp-ltv-bar__label">СТАБИЛЬНЫЙ LTV</span>
          </div>
          <div className="pp-pricing">
            <div className="pp-pricing__now">
              <div className="pp-pricing__now-label">Текущие условия (2025/26)</div>
              <div className="pp-pricing__now-subject">Математика</div>
              <div className="pp-pricing__now-price">7&nbsp;000 <span>руб./мес.</span></div>
              <div className="pp-pricing__now-note">Стоимость для клиента</div>
              <div className="pp-pricing__now-income">Ваш доход: <strong>1&nbsp;000 руб./мес. за ученика</strong></div>
            </div>
            <div className="pp-pricing__future">
              <div className="pp-pricing__future-badge">С сентября 2026</div>
              <div className="pp-pricing__future-title">Расширение линейки</div>
              <ul className="pp-pricing__future-subjects">
                <li>русский</li>
                <li>английский</li>
              </ul>
              <div className="pp-pricing__tiers">
                <div className="pp-tier"><span>1 предмет</span><strong>1&nbsp;000 руб.</strong></div>
                <div className="pp-tier"><span>2 предмета</span><strong>1&nbsp;300 руб.</strong></div>
                <div className="pp-tier"><span>3 предмета</span><strong>1&nbsp;600 руб.</strong></div>
              </div>
              <div className="pp-pricing__future-avg">Средний доход: <strong>~ 1&nbsp;300 руб./ученик</strong></div>
            </div>
          </div>
        </section>

        {/* ── 06 ПОТЕНЦИАЛЬНЫЙ ДОХОД ── */}
        <section className="pp-section" id="potential">
          <div className="pp-section__num">06</div>
          <h2 className="pp-section__title">Потенциальный доход</h2>
          <div className="pp-calc-new">
            <div className="pp-calc-new__top">
              <div className="pp-calc-new__col">
                <div className="pp-calc-new__label">Аудитория</div>
                <div className="pp-calc-new__val">50&nbsp;000</div>
              </div>
              <div className="pp-calc-new__arrow">→</div>
              <div className="pp-calc-new__col">
                <div className="pp-calc-new__label">Конверсия</div>
                <div className="pp-calc-new__val">5%</div>
              </div>
              <div className="pp-calc-new__arrow">→</div>
              <div className="pp-calc-new__col">
                <div className="pp-calc-new__label">Ученики</div>
                <div className="pp-calc-new__val">2&nbsp;500</div>
              </div>
            </div>
            <div className="pp-calc-new__results">
              <div className="pp-calc-new__result pp-calc-new__result--month">
                <div className="pp-calc-new__result-num">3&nbsp;250&nbsp;000 руб</div>
                <div className="pp-calc-new__result-sub">в месяц</div>
              </div>
              <div className="pp-calc-new__result pp-calc-new__result--cycle">
                <div className="pp-calc-new__result-num">29&nbsp;250&nbsp;000 руб.</div>
                <div className="pp-calc-new__result-sub">за цикл обучения</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 ИТОГ ── */}
        <section className="pp-section pp-section--outro">
          <div className="pp-section__num">07</div>
          <h2 className="pp-outro__title">Итог</h2>
          <p className="pp-outro__text">
            Партнёрство с&nbsp;нами — это продукт с&nbsp;высокой удерживаемостью, понятная прозрачная
            модель дохода, масштабируемая система и&nbsp;сильная образовательная база
          </p>
          <p className="pp-outro__accent">
            Вы становитесь не&nbsp;просто партнёром, а&nbsp;проводником новой модели обучения.
          </p>
        </section>

        {/* ── CTA / ФОРМА ── */}
        <section className="pp-contact" id="contact">
          <div className="pp-contact__badge">Стать партнёром</div>
          <h2 className="pp-contact__title">Готовы обсудить условия?</h2>
          <p className="pp-contact__sub">Оставьте заявку — мы свяжемся и&nbsp;расскажем об&nbsp;индивидуальных условиях партнёрства.</p>
          <form className="pp-contact__form" onSubmit={e => e.preventDefault()}>
            <input className="pp-contact__input" type="text" placeholder="Ваше имя" required />
            <input className="pp-contact__input" type="tel" placeholder="Телефон или Telegram" required />
            <input className="pp-contact__input" type="text" placeholder="Размер аудитории / канал" />
            <button className="pp-contact__btn" type="submit">Отправить заявку</button>
          </form>
        </section>

        <footer className="pp-footer">
          <span>© 2026 Znarnia</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
