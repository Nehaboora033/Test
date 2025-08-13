import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
