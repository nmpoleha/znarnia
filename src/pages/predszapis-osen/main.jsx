import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page'
import '../../shared/styles/base.css'
import '../letnie-kursy/page.css'
import '../diagnostika-finalnaya/page.css'
import './page.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)
