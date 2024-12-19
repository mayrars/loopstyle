import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters.jsx'
import { CartProvider } from './context/cart.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FiltersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FiltersProvider>
  </CartProvider>
)
