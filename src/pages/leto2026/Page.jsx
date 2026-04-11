import SchoolHeader from '../../shared/components/SchoolHeader'
import FeatureCards from '../../shared/components/FeatureCards'
import RegistrationForm from '../../shared/components/RegistrationForm'

const features = [
  {
    icon: '⚡',
    title: 'Приоритетный доступ',
    desc: 'Первыми узнать программу и первыми выбрать своё идеальное расписание',
    color: '#7c3aed',
  },
  {
    icon: '🧮',
    title: 'Математический интенсив',
    desc: 'Повысить математическую грамотность и развить логическое мышление',
    color: '#a855f7',
  },
  {
    icon: '🎁',
    title: 'Максимальные скидки',
    desc: 'Максимальные скидки только для учеников из анкеты предзаписи',
    color: '#ec4899',
  },
]

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

        <section className="hero">
          <div className="hero__tag">Особые условия · Предзапись открыта</div>
          <h1 className="hero__title">Лето <span>2026</span></h1>
          <p className="hero__sub">
            Занятия для тех, кто хочет учиться с высокими оценками,<br className="hero__br" />
            интересом и чувством <em>«Я МОГУ!»</em>
          </p>
          <p className="hero__quote">
            Лето — это маленькая жизнь, которая может стать мощным трамплином для уверенного старта в сентябре.
          </p>
          <a href="#registration" className="hero__cta">Оставить заявку</a>
        </section>

        <div className="offer-label">Оставьте заявку сейчас, чтобы получить:</div>

        <FeatureCards features={features} />

        <section className="textblock">
          <h2 className="textblock__title">Летние занятия — самый мудрый вклад в ребёнка</h2>
          <div className="textblock__body">
            <div className="textblock__col">
              <div className="textblock__icon">☀️</div>
              <p className="textblock__p">
                Лето — шанс показать, что учёба бывает интересной. Без оценок и давления. Без скучных пособий. Только живой интерес и реальный результат к сентябрю.
              </p>
            </div>
            <div className="textblock__divider" />
            <div className="textblock__col">
              <div className="textblock__icon">🎯</div>
              <p className="textblock__p">
                Оставьте заявку — это ни к чему не обязывает. Мы проведём личную консультацию, подберём формат под вашего ребёнка и возьмём на себя всё остальное.
              </p>
            </div>
          </div>
        </section>

        <RegistrationForm />

        <footer className="footer">
          <span>© 2026 Школа Сотниковой Ольги</span>
          <a href="#">Политика конфиденциальности</a>
        </footer>

      </div>
    </div>
  )
}
