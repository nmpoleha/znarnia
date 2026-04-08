import './Footer.css'

const links = [
  { label: 'Основные сведения', href: '#' },
  { label: 'Структура управления', href: '#' },
  { label: 'Педагогический состав', href: '#' },
  { label: 'Политика конфиденциальности', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">СТК</div>
            <p className="footer__desc">Образовательный центр. Лето 2026 — маленькая жизнь.</p>
          </div>
          <nav className="footer__nav">
            {links.map((l, i) => (
              <a key={i} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2026 СТК Центр. Все права защищены.</span>
          <span className="footer__note">Запись не является обязательством</span>
        </div>
      </div>
    </footer>
  )
}
