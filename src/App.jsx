import './App.css'
import { Header } from './components/Header';
import { FooterPage } from './components/Footer'
import { Products } from './components/Products';

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <Products />
      </div>
      <FooterPage />
    </>
  )
}

export default App
