import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import OpenBlog from './pages/OpenBlog'
import { Provider } from 'react-redux'
import { appStore } from './utils/store/appstore'
import BlogPost from './pages/BlogPost'
import User from './pages/User'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

function App() {
  let persistor = persistStore(appStore);
  return (
    <>
      <Provider store={appStore}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/blogs' element={<Blog />} />
              <Route path='/blog/:id' element={<OpenBlog />} />
              <Route path='/blogpost' element={<BlogPost />} />
              <Route path='/user' element={<User />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
