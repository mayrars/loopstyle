import './App.css'
import { Header } from './components/Header';
import { FooterPage } from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/*" element={<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Ruta no valida</h1>}></Route>
        </Routes>
      </div>
      <FooterPage />
    </>
  )
}

export default App
