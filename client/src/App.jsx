import { Navbar } from './components/navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
