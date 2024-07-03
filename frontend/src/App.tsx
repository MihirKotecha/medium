import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import OpenBlog from './pages/OpenBlog'
import { Provider } from 'react-redux'
import { appStore } from './utils/store/appstore'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blog/:id' element={<OpenBlog />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
