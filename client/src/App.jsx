import { Navbar } from './components/navbar/Navbar'
import Home from './components/home/Home'
import MyPosts from './components/myPosts/MyPosts'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Login from './components/login/login'
import Register from './components/register/Register'
import PostCreate from './components/post-create/PostCreate'



function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-posts' element={<MyPosts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post-create' element={<PostCreate />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
