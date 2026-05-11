import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../diagnostika-finalnaya/Page'
import '../../shared/styles/base.css'
import '../diagnostika-finalnaya/page.css'

const heroTitle = (
  <>
    Это не просто урок –<br/>
    это настоящее исследование<br/>
    <span className="dg-hero__title-accent">способностей вашего ребёнка</span>
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page heroTitle={heroTitle} heroVariant="v2" heroV2Image="/znarnia/images/hero-boy.png" />
  </React.StrictMode>
)
