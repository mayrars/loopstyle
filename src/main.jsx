import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/loopstyle/' future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }}>
    <FiltersProvider>
        <App />
    </FiltersProvider>
  </BrowserRouter>
)
