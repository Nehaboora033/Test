import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import BackToTop from './components/common/BackToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
