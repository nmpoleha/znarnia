import './SchoolHeader.css'

export default function SchoolHeader({ logoUrl, name }) {
  return (
    <header className="school-header">
      <img src={logoUrl} alt={name} className="school-header__logo" />
      <div className="school-header__name">{name}</div>
    </header>
  )
}
