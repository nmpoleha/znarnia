import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from '../letnie-kursy/Page'
import '../../shared/styles/base.css'
import '../letnie-kursy/page.css'
import './hero-override.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)
