import { Navbar } from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Login from './components/login/login'
import Register from './components/register/Register'


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
