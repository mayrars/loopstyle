import './App.css'
import { Header } from './components/Header';
import { FooterPage } from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import PageNotFound from './pages/PageNotFound';
import CategoriesList from './pages/CategoriesList';
import Product from './pages/Product';

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/categories/:id" element={<CategoriesList />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
      <FooterPage />
    </>
  )
}

export default App
