import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import BackToTop from './components/common/BackToTop'
import FooterCard from './components/common/FooterCard'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      <FooterCard />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
