import { lazy } from 'react';

import './App.css'
import { Header } from './components/Header';
import { FooterPage } from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import { CartProvider } from './context/cart';
const CategoriesList = lazy(() => import('./pages/CategoriesList'));
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {

  return (
    <CartProvider>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/products/:id" element={<CategoriesList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <FooterPage />
    </CartProvider>
  )
}

export default App
