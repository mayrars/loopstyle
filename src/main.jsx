import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FiltersProvider>
)
