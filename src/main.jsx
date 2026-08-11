import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Restore deep-link redirects from GitHub Pages 404.html fallback
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== window.location.href) {
  history.replaceState(null, '', redirect.replace(window.location.origin, ''))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/realestate-mock3.io">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
