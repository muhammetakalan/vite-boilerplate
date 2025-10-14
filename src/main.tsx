import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'
import { i18n } from './shared/lib'

import './styles/index.css'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = createRoot(rootEl)

  i18n.init()

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
