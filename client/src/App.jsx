import { Navbar } from './components/navbar/Navbar'
import Home from './components/home/Home'
import MyPosts from './components/myPosts/MyPosts'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import PostCreate from './components/post-create/PostCreate'
import Logout from './components/logout/logout'
import { AuthProvider } from './contexts/authContext'
import PostDetails from './components/post-details/PostDetails'
import PostEdit from './components/post-edit/PostEdit'
import AuthGuard from './components/guards/AuthGuard'
import NotFound from './components/notFound/NotFound'


function App() {

  return (
    <>
      <AuthProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/posts/:postId' element={<PostDetails />} />

            <Route element={<AuthGuard />}>
            <Route path='/my-posts' element={<MyPosts />} />
              <Route path='/post-create' element={<PostCreate />} />
              <Route path='/posts/:postId/edit' element={<PostEdit />} />
              <Route path='/logout' element={<Logout />} />
            </Route>
            
            <Route path='*' element={<NotFound />} />

          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
