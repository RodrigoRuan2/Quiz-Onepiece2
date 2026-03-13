import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/gallery.css";
import "./styles/quiz.css";
import "./styles/audio.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
